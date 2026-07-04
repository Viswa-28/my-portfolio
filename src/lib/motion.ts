// Shared Motion variants — plain data, no framework logic. Every entrance
// animates only `opacity` and `y` (transform), never layout properties.
import type { Variants } from 'motion/react'

// Gentle ease-out cubic-bezier used across entrances.
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Section-level reveal: fade + slight rise the first time it enters view.
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

// Container that reveals its children one after another (snappy on mobile).
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
}

// Hero text reveal: split a heading into tokens that rise + fade in sequence.
export const splitContainer = (by: 'char' | 'word', delay: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: by === 'char' ? 0.04 : 0.08,
      delayChildren: delay,
    },
  },
})

export const splitItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}
