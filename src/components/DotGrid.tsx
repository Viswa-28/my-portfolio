import { useEffect, useRef } from 'react'

// Interactive dot grid: a faint data-grid texture where dots near the cursor
// grow and tint toward the accent. Canvas-based; the caller only mounts this
// on desktop + when motion is allowed, so it needs no internal gating.
// Colours are read from the locked palette CSS variables (no hardcoded hex).
function DotGrid({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const styles = getComputedStyle(document.documentElement)
    const accent = styles.getPropertyValue('--color-accent').trim() || '#1f6f54'
    const muted = styles.getPropertyValue('--color-muted').trim() || '#6b7772'

    const SPACING = 30
    const RADIUS = 130 // cursor influence radius
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }
    let width = 0
    let height = 0
    let raf = 0

    const resize = () => {
      const rect = parent.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (let x = SPACING / 2; x < width; x += SPACING) {
        for (let y = SPACING / 2; y < height; y += SPACING) {
          const dist = Math.hypot(x - mouse.x, y - mouse.y)
          const t = Math.max(0, 1 - dist / RADIUS) // 0 far → 1 at cursor
          ctx.beginPath()
          ctx.arc(x, y, 1 + t * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = t > 0.01 ? accent : muted
          ctx.globalAlpha = 0.18 + t * 0.55
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(parent)
    window.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}

export default DotGrid
