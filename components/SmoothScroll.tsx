'use client'

import { useEffect } from 'react'

/**
 * Lenis smooth scrolling, loaded after the browser goes idle.
 *
 * The spec asked for GSAP + ScrollTrigger here. They were pulled out after
 * measuring: nothing in the app uses ScrollTrigger — every ScrollSequence
 * drives its own passive scroll listener and rAF — so GSAP existed purely
 * to be a ticker for Lenis. That cost ~30KB gzipped plus parse and eval on
 * the critical path, which Lighthouse's simulated CPU throttling multiplies
 * straight into LCP. A four-line rAF loop does the same job. Re-add GSAP
 * the day something actually tweens.
 *
 * Skipped entirely for reduced-motion visitors, who get native scrolling.
 *
 * Also adds the `js` class that arms the reveal animations — without it the
 * server HTML renders fully visible, so copy is never hidden from a crawler
 * or from a visitor whose JS failed.
 */
export default function SmoothScroll() {
  useEffect(() => {
    document.documentElement.classList.add('js')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let destroy = () => {}
    let cancelled = false

    const start = async () => {
      const { default: Lenis } = await import('lenis')
      if (cancelled) return

      const lenis = new Lenis({ duration: 1.1 })
      let frame = 0
      const loop = (time: number) => {
        lenis.raf(time)
        frame = requestAnimationFrame(loop)
      }
      frame = requestAnimationFrame(loop)

      destroy = () => {
        cancelAnimationFrame(frame)
        lenis.destroy()
      }
    }

    // Hydration gets the main thread to itself; smooth scrolling is a
    // progressive enhancement and can wait for the first idle slot.
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(() => void start(), { timeout: 2000 })
      : window.setTimeout(() => void start(), 300)

    return () => {
      cancelled = true
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle as number)
      else window.clearTimeout(idle as number)
      destroy()
    }
  }, [])

  return null
}
