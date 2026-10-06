import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/reducedMotion'

const MANIFEST = {
  frames: 90,
  frameWidth: 360,
  frameHeight: 576,
  cols: 6,
  perSheet: 30,
  sheets: ['/sequence/turn-0.webp', '/sequence/turn-1.webp', '/sequence/turn-2.webp'],
}

type Props = {
  /** Element the scrub is measured against — usually the hero. */
  targetId: string
}

// Scroll-scrubbed frame sequence drawn to a canvas. The frames are packed
// into three WebP sprite sheets (0.41 MB, 3 requests) rather than 90 separate
// files, because on mobile it is the request count that hurts, not the bytes.
//
// The source footage is a dark portrait on near-black, so it composites onto
// the canvas colour without any cut-out: no alpha channel needed, which is
// most of why this stays so small.
function ScrollSequence({ targetId }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const target = document.getElementById(targetId)
    if (!canvas || !target) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const { frames, frameWidth, frameHeight, cols, perSheet, sheets } = MANIFEST
    const images: (HTMLImageElement | undefined)[] = []
    let current = -1
    let raf = 0
    let disposed = false

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { clientWidth: w, clientHeight: h } = canvas
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (index: number) => {
      const sheetIndex = Math.floor(index / perSheet)
      const img = images[sheetIndex]
      if (!img) return

      const local = index % perSheet
      const sx = (local % cols) * frameWidth
      const sy = Math.floor(local / cols) * frameHeight

      const w = canvas.clientWidth
      const h = canvas.clientHeight
      ctx.clearRect(0, 0, w, h)

      // The source is portrait and the viewport usually is not. Contain
      // (rather than cover) keeps the figure whole, and because the plate is
      // already near-black the letterboxing is invisible against the canvas.
      const scale = Math.min(w / frameWidth, h / frameHeight)
      const dw = frameWidth * scale
      const dh = frameHeight * scale
      // Anchored right on wide screens so the headline column stays clear;
      // centred once the layout stacks.
      const dx = w >= 1024 ? w - dw * 0.92 : (w - dw) / 2
      const dy = h - dh

      ctx.drawImage(img, sx, sy, frameWidth, frameHeight, dx, dy, dw, dh)
    }

    // The hero is roughly one viewport tall, so it is gone by the time you
    // have scrolled its full height. Completing the turn over 55% of that
    // means the figure finishes facing the viewer while still well in frame,
    // rather than delivering the payoff off-screen.
    const SCRUB_FRACTION = 0.55

    const frameForScroll = () => {
      const rect = target.getBoundingClientRect()
      const distance = Math.max(1, rect.height * SCRUB_FRACTION)
      const progress = -rect.top / distance
      const clamped = Math.min(1, Math.max(0, progress))
      return Math.min(frames - 1, Math.round(clamped * (frames - 1)))
    }

    const update = () => {
      raf = 0
      const next = frameForScroll()
      if (next !== current) {
        current = next
        draw(next)
      }
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    const onResize = () => {
      sizeCanvas()
      current = -1
      onScroll()
    }

    // First sheet gates the first paint; the rest stream in behind it.
    sheets.forEach((src, i) => {
      const img = new Image()
      img.decoding = 'async'
      img.src = src
      img.onload = () => {
        if (disposed) return
        images[i] = img
        if (i === 0) {
          sizeCanvas()
          current = -1
          update()
          canvas.classList.add('is-ready')
        }
      }
    })

    if (prefersReducedMotion) {
      // One still frame, no scroll binding at all.
      const img = new Image()
      img.src = '/sequence/turn-poster.webp'
      img.onload = () => {
        if (disposed) return
        images[Math.floor((frames - 1) / perSheet)] = undefined
        sizeCanvas()
        const w = canvas.clientWidth
        const h = canvas.clientHeight
        const scale = Math.min(w / frameWidth, h / frameHeight)
        const dw = frameWidth * scale
        const dh = frameHeight * scale
        ctx.drawImage(img, w >= 1024 ? w - dw * 0.92 : (w - dw) / 2, h - dh, dw, dh)
        canvas.classList.add('is-ready')
      }
      return () => {
        disposed = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      disposed = true
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [targetId])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="scroll-sequence pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-0 transition-opacity duration-700"
    />
  )
}

export default ScrollSequence
