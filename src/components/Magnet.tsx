import { useRef, useState, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { prefersReducedMotion } from '../lib/reducedMotion'

type MagnetProps = {
  children: ReactNode
  strength?: number
  className?: string
}

const reduce = prefersReducedMotion

// Subtly pulls its content toward the cursor while hovered, springing back on
// leave. Touch devices never fire pointermove, so they get the static element;
// reduced-motion users are opted out explicitly.
function Magnet({ children, strength = 0.25, className }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  // Clamp so a wide title can never drift far enough to cause page overflow.
  const MAX = 24
  const clamp = (v: number) => Math.max(-MAX, Math.min(MAX, v))

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    setOffset({ x: clamp(x * strength), y: clamp(y * strength) })
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      animate={offset}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default Magnet
