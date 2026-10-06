'use client'

import { useEffect, useRef } from 'react'

/**
 * Fade + 24px rise when the element enters view.
 *
 * The element renders visible in SSR HTML; the `.js` class on <html> is what
 * arms the hidden start state, and this adds `is-in` to play it. So content
 * is never invisible to a crawler or to a no-JS visitor.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.style.transitionDelay = `${delay}ms`
        el.classList.add('is-in')
        io.disconnect()
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
