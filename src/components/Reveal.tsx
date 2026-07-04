import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { revealVariants } from '../lib/motion'

type RevealProps = {
  children: ReactNode
  className?: string
}

// Fades + slides content up the first time it scrolls into view.
// Reduced-motion users get the plain content, rendered immediately.
function Reveal({ children, className }: RevealProps) {
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
