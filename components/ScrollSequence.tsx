'use client'

import { useEffect, useRef, useState } from 'react'
import type { SequenceManifest, VariantManifest } from '@/lib/types'
import { BITMAP_CACHE_SIZE, PRELOAD_VIEWPORTS } from '@/config/sequences'

type Props = {
  /** Anchor id for in-page nav. */
  id?: string
  /**
   * True for the hero only. Every ScrollSequence shipped its poster at
   * fetchPriority="high", so all six competed for bandwidth on first load
   * and pushed LCP render-delay to 8.2s. Off-screen posters are now lazy.
   */
  priority?: boolean
  manifest: SequenceManifest
  /** Pinned scroll length in vh. */
  scrollVh: number
  /** 0–1 horizontal focal point for the cover crop. 0.7 keeps the subject,
   *  who sits right of centre, in shot when cropping to a phone. */
  focalX?: number
  focalY?: number
  /**
   * Scrub progress, 0–1. Fired from inside the rAF, only when the frame
   * index actually changes — so at most once per frame, never per scroll
   * event. Keep the handler cheap and do not setState unconditionally.
   */
  onProgress?: (progress: number) => void
  /** Section content, rendered above the canvas. Real DOM, always. */
  children: React.ReactNode
  className?: string
}

/** Frames are 0001.webp … zero-padded to four. */
const frameUrl = (v: VariantManifest, i: number) =>
  `${v.dir}/${String(i + 1).padStart(4, '0')}.webp`

/**
 * Save-Data, or a connection slow enough that 8 MB of frames would be rude.
 * Treated as a hard opt-out: poster only, no sequence fetched at all.
 */
function wantsLightweight(): boolean {
  const c = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string }
    }
  ).connection
  if (!c) return false
  if (c.saveData) return true
  return c.effectiveType === 'slow-2g' || c.effectiveType === '2g' || c.effectiveType === '3g'
}

/**
 * Scroll-scrubbed image sequence on a sticky canvas.
 *
 * Deliberately NOT a <video> with currentTime assignment: seeking stutters
 * badly on Safari and iOS because frames are only addressable at keyframes.
 * An image sequence is random-access by construction.
 *
 * Behaviour that matters:
 *  - decodes via createImageBitmap, off the main thread
 *  - LRU cache of decoded bitmaps, so memory stays bounded on phones
 *  - progressive fetch: every 4th frame, then every 2nd, then the rest, so
 *    the scrub is usable long before the full set has landed
 *  - if the exact frame is not decoded yet, the nearest one is drawn — the
 *    canvas never blanks
 *  - nothing is fetched until the section is within PRELOAD_VIEWPORTS
 *  - all layout reads happen outside the scroll handler; the handler only
 *    schedules a rAF
 */
export default function ScrollSequence({
  id,
  priority = false,
  manifest,
  scrollVh,
  focalX = 0.7,
  focalY = 0.5,
  onProgress,
  children,
  className = '',
}: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const onProgressRef = useRef(onProgress)
  onProgressRef.current = onProgress
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  // Chosen on the client so the server HTML stays identical for everyone.
  const [variant, setVariant] = useState<VariantManifest | null>(null)

  useEffect(() => {
    const pick = () => {
      const portrait = window.innerWidth / window.innerHeight < 1
      const v = portrait && manifest.mobile ? manifest.mobile : manifest.desktop
      setVariant((prev) => (prev?.dir === v.dir ? prev : v))
    }
    pick()
    window.addEventListener('resize', pick)
    return () => window.removeEventListener('resize', pick)
  }, [manifest])

  useEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current
    if (!section || !canvas || !variant) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || wantsLightweight()) {
      // Poster stays and no frames are fetched, but progress still has to
      // fire or anything keyed to it (the services cards) never appears.
      const emit = () => {
        const rect = section.getBoundingClientRect()
        const span = Math.max(1, section.offsetHeight - window.innerHeight)
        const p = Math.min(1, Math.max(0, -rect.top / span))
        onProgressRef.current?.(p)
      }
      emit()
      window.addEventListener('scroll', emit, { passive: true })
      return () => window.removeEventListener('scroll', emit)
    }

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    const { frameCount, width: fw, height: fh } = variant

    // Pinned coarse timeline — never evicted, so nearest() always resolves.
    const ANCHOR_STRIDE = Math.max(4, Math.ceil(frameCount / 12))
    const ANCHOR = new Set<number>()
    for (let i = 0; i < frameCount; i += ANCHOR_STRIDE) ANCHOR.add(i)
    ANCHOR.add(frameCount - 1)
    // Frames either side of the playhead kept at full detail.
    const WINDOW = 8

    const anchors = new Map<number, ImageBitmap>()
    const bitmaps = new Map<number, ImageBitmap>() // insertion order = LRU
    const inflight = new Set<number>()
    let drawn = -1
    let raf = 0
    let disposed = false

    // Cached layout reads. Recomputed on resize, never inside onScroll.
    let vw = 0
    let vh = 0
    let sectionTop = 0
    let scrollable = 1

    const measure = () => {
      vw = window.innerWidth
      vh = window.innerHeight
      const rect = section.getBoundingClientRect()
      sectionTop = rect.top + window.scrollY
      scrollable = Math.max(1, section.offsetHeight - vh)
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(vw * dpr)
      canvas.height = Math.round(vh * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const touch = (i: number, bmp: ImageBitmap) => {
      bitmaps.delete(i)
      bitmaps.set(i, bmp)
      while (bitmaps.size > BITMAP_CACHE_SIZE) {
        const oldest = bitmaps.keys().next().value as number
        bitmaps.get(oldest)?.close()
        bitmaps.delete(oldest)
      }
    }

    const frameAt = (i: number) => bitmaps.get(i) ?? anchors.get(i)

    /** Nearest decoded frame, so a miss degrades instead of blanking. */
    const nearest = (i: number): ImageBitmap | null => {
      const exact = frameAt(i)
      if (exact) return exact
      for (let d = 1; d < frameCount; d++) {
        const lo = frameAt(i - d)
        if (lo) return lo
        const hi = frameAt(i + d)
        if (hi) return hi
      }
      return null
    }

    const paint = (i: number) => {
      const bmp = nearest(i)
      if (!bmp) return
      // object-fit: cover, with the crop window pulled toward the subject.
      const scale = Math.max(vw / fw, vh / fh)
      const dw = fw * scale
      const dh = fh * scale
      ctx.drawImage(bmp, (vw - dw) * focalX, (vh - dh) * focalY, dw, dh)
      if (!ready) setReady(true)
    }

    const load = async (i: number) => {
      if (i < 0 || i >= frameCount || bitmaps.has(i) || inflight.has(i)) return
      inflight.add(i)
      try {
        const res = await fetch(frameUrl(variant, i))
        const bmp = await createImageBitmap(await res.blob())
        if (disposed) return bmp.close()
        if (ANCHOR.has(i)) anchors.set(i, bmp)
        else touch(i, bmp)
        if (drawn === i || nearest(drawn) === null) paint(drawn < 0 ? 0 : drawn)
      } catch {
        // A dropped frame is survivable — nearest() covers the gap.
      } finally {
        inflight.delete(i)
      }
    }

    /**
     * Two-tier loading.
     *
     * A naive sequential sweep of every frame thrashed the LRU: with 120
     * frames and a 40-slot cache, frames decoded early were evicted before
     * the sweep finished and then re-fetched by the next pass — measured at
     * 175 requests for 120 frames.
     *
     * So: a sparse set of anchors is loaded once and pinned, guaranteeing
     * nearest() always has something within a few frames anywhere on the
     * timeline; everything else is fetched in a window that follows the
     * playhead, which is the only region that needs frame-exact detail.
     * Each index is fetched at most once per mount.
     */
    const loadAnchors = async () => {
      for (const i of ANCHOR) {
        if (disposed) return
        await load(i)
      }
    }

    const fillWindow = (center: number) => {
      for (let d = 0; d <= WINDOW; d++) {
        void load(center + d)
        if (d) void load(center - d)
      }
    }

    const update = () => {
      raf = 0
      const progress = (window.scrollY - sectionTop) / scrollable
      const clamped = Math.min(1, Math.max(0, progress))
      const i = Math.min(frameCount - 1, Math.round(clamped * (frameCount - 1)))
      if (i !== drawn) {
        drawn = i
        paint(i)
        fillWindow(i)
        onProgressRef.current?.(clamped)
      }
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    let resizeTimer = 0
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        measure()
        drawn = -1
        onScroll()
      }, 150)
    }

    // Nothing is fetched until the section is near enough to matter.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        measure()
        void loadAnchors()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onResize)
        onScroll()
      },
      { rootMargin: `${PRELOAD_VIEWPORTS * 100}% 0px` }
    )
    io.observe(section)

    return () => {
      disposed = true
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
      window.clearTimeout(resizeTimer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      bitmaps.forEach((b) => b.close())
      bitmaps.clear()
      anchors.forEach((b) => b.close())
      anchors.clear()
    }
    // `ready` is intentionally not a dependency: it only ever flips false→true
    // and re-running this effect would tear down the whole cache.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant, focalX, focalY])

  // Poster sources are declared with media queries rather than chosen in
  // JS: the browser then picks the right one while parsing HTML, before any
  // script runs. Choosing it from `variant` state would make the server emit
  // the desktop poster and phones download both.
  const d = manifest.desktop
  const m = manifest.mobile

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative ${className}`}
      style={{ height: `${scrollVh}vh` }}
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        {/* Poster is the LCP candidate and holds the frame until the
            sequence is ready. Dimensions are set so it reserves space and
            contributes nothing to CLS. */}
        <picture>
          {m?.poster.avif && (
            <source media="(max-aspect-ratio: 1/1)" srcSet={m.poster.avif} type="image/avif" />
          )}
          {m && (
            <source media="(max-aspect-ratio: 1/1)" srcSet={m.poster.webp} type="image/webp" />
          )}
          {d.poster.avif && <source srcSet={d.poster.avif} type="image/avif" />}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={d.poster.webp}
            alt=""
            aria-hidden="true"
            width={d.width}
            height={d.height}
            fetchPriority={priority ? 'high' : 'low'}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              ready ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ objectPosition: `${focalX * 100}% ${focalY * 100}%` }}
          />
        </picture>

        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Left-to-right scrim. The clips keep their left side calm, so the
            reading column sits there and this guarantees AA contrast over
            whatever the frame happens to be doing. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/55 to-transparent"
        />

        {children}
      </div>
    </section>
  )
}
