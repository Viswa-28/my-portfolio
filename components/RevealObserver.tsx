'use client'

import { useEffect } from 'react'

/**
 * Fade/pop-in on scroll. Watches every `[data-reveal]` element once and adds
 * `.is-visible` when it enters the viewport. The CSS lives in globals.css.
 */
export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    // Only hide elements now that we know the observer is running.
    document.documentElement.classList.add('js-reveal')
    return () => io.disconnect()
  }, [])

  return null
}
