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
  const [value, setValue] = useState(reduce ? end : 0)

  useEffect(() => {
    if (reduce || !inView) return
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
