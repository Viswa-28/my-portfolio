import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/reducedMotion'
import manifest from '../../public/sequence/manifest.json'

type Variant = keyof typeof manifest

// Wide viewports get a purpose-built 16:10 landscape crop; narrow ones get
// the original portrait plate. Covering a 9:16 plate into a 16:10 desktop
// shows only 35% of the frame — the crop is what stops the composition
// looking like a close-up of someone's collar.
const pickVariant = (): Variant =>
  window.innerWidth / window.innerHeight >= 1 ? 'wide' : 'narrow'

// Fixed, full-bleed frame sequence scrubbed by whole-document scroll.
// Pinned to the viewport rather than to a section, so one pass spans the
// entire page: the top of the document is frame 0, the bottom is the last.
function SkySequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let variant: Variant | null = null
    let cfg = manifest.wide
    let images: (HTMLImageElement | undefined)[] = []
    let current = -1
    let raf = 0
    let disposed = false

    const sizeCanvas = () => {
      // Capped at 2: beyond that the extra pixels cost real frame time on
      // phones and buy nothing on a background that is already interpolated.
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(window.innerWidth * dpr)
      canvas.height = Math.round(window.innerHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (index: number) => {
      const img = images[Math.floor(index / cfg.perSheet)]
      if (!img) return

      const local = index % cfg.perSheet
      const sx = (local % cfg.cols) * cfg.frameWidth
      const sy = Math.floor(local / cfg.cols) * cfg.frameHeight

      const w = window.innerWidth
      const h = window.innerHeight
      const scale = Math.max(w / cfg.frameWidth, h / cfg.frameHeight)
      const dw = cfg.frameWidth * scale
      const dh = cfg.frameHeight * scale

      ctx.clearRect(0, 0, w, h)
      ctx.drawImage(
        img,
        sx, sy, cfg.frameWidth, cfg.frameHeight,
        (w - dw) / 2, (h - dh) / 2, dw, dh
      )
    }

    const frameForScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      const clamped = Math.min(1, Math.max(0, progress))
      return Math.min(cfg.frames - 1, Math.round(clamped * (cfg.frames - 1)))
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

    const loadVariant = (next: Variant) => {
      if (next === variant) return
      variant = next
      cfg = manifest[next]
      images = []
      current = -1

      if (prefersReducedMotion) {
        const img = new Image()
        img.src = cfg.poster
        img.onload = () => {
          if (disposed || variant !== next) return
          sizeCanvas()
          const w = window.innerWidth
          const h = window.innerHeight
          const scale = Math.max(w / cfg.frameWidth, h / cfg.frameHeight)
          const dw = cfg.frameWidth * scale
          const dh = cfg.frameHeight * scale
          ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh)
          canvas.classList.add('is-ready')
        }
        return
      }

      // The first sheet gates the reveal; the rest stream in behind it, so
      // the page is usable long before the whole set has landed.
      cfg.sheets.forEach((src, i) => {
        const img = new Image()
        img.decoding = 'async'
        img.src = src
        img.onload = () => {
          if (disposed || variant !== next) return
          images[i] = img
          if (i === 0) {
            sizeCanvas()
            current = -1
            update()
            canvas.classList.add('is-ready')
          } else if (Math.floor(current / cfg.perSheet) === i) {
            draw(current)
          }
        }
      })
    }

    const onResize = () => {
      const next = pickVariant()
      if (next !== variant) {
        loadVariant(next)
      } else {
        sizeCanvas()
        current = -1
        onScroll()
      }
    }

    loadVariant(pickVariant())
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      disposed = true
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} aria-hidden="true" className="sky-canvas" />
      <div aria-hidden="true" className="sky-veil" />
    </>
  )
}

export default SkySequence
