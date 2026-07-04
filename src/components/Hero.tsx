import { motion } from 'motion/react'
import SplitText from './SplitText'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { EASE } from '../lib/motion'

const reduce = prefersReducedMotion

// Block-level fade+rise, sequenced after the split-text reveals. Empty props
// for reduced-motion users so content shows immediately.
const rise = (delay: number) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay, ease: EASE },
      }

function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 text-center sm:py-32"
    >
      {/* Quiet green graph-paper grid + a soft accent glow. CSS only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="hero-grid absolute inset-0" />
        <div className="absolute top-14 left-1/2 -translate-x-1/2 sm:top-16">
          <div className="hero-glow h-56 w-56 rounded-full bg-accent/15 blur-3xl sm:h-72 sm:w-72" />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <SplitText
          as="h1"
          by="char"
          text="Viswa"
          delay={0.1}
          className="font-heading text-5xl font-bold tracking-tight text-ink sm:text-6xl"
        />
        <SplitText
          as="p"
          by="word"
          text="Business & Data Analyst"
          delay={0.5}
          className="mt-4 text-lg font-medium text-accent sm:text-xl"
        />
        <motion.p {...rise(0.9)} className="mt-2 text-base text-muted">
          Developer background · SQL · Power BI
        </motion.p>

        <motion.div
          {...rise(1.05)}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-card bg-accent px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-accent-hover sm:w-auto"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-card border border-line px-5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
