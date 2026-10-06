import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { prefersReducedMotion } from '../lib/reducedMotion'

type CountUpProps = {
  end: number
  suffix?: string
  duration?: number
}

const reduce = prefersReducedMotion

// Counts from 0 to `end` the first time it scrolls into view. Reduced-motion
// users see the final value immediately.
function CountUp({ end, suffix = '', duration = 1.5 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  // Always starts at 0, including for reduced-motion users. Seeding it with
  // `end` instead made the first client render disagree with the prerendered
  // HTML (which has no matchMedia and so always takes the non-reduced path),
  // and React threw a hydration mismatch. The effect below jumps straight to
  // the final value after mount, so nobody sees a 0 they shouldn't.
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (reduce) {
      setValue(end)
      return
    }
    if (!inView) return
    let raf = 0
    let startTime = 0
    const step = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min(1, (time - startTime) / (duration * 1000))
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export default CountUp
