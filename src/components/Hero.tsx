import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import SplitText from './SplitText'
import DotGrid from './DotGrid'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { EASE } from '../lib/motion'

const reduce = prefersReducedMotion
const DESKTOP_MIN_WIDTH = 768

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
  // Interactive canvas grid only on desktop + when motion is allowed; mobile
  // and reduced-motion get the static CSS grid instead.
  const [interactive, setInteractive] = useState(false)

  useEffect(() => {
    if (reduce) return
    const check = () => setInteractive(window.innerWidth >= DESKTOP_MIN_WIDTH)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden py-28 text-center sm:py-40"
    >
      {/* Interactive dot grid (desktop) or static grid (fallback) + glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {interactive ? (
          <DotGrid className="hero-mask absolute inset-0 h-full w-full" />
        ) : (
          <div className="hero-grid hero-mask absolute inset-0" />
        )}
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
          className="font-heading text-hero font-bold tracking-tight text-ink"
        />
        <SplitText
          as="p"
          by="word"
          text="Business & Data Analyst"
          delay={0.5}
          className="mt-4 font-heading text-hero-sub font-medium text-accent sm:mt-6"
        />
        <motion.p {...rise(0.9)} className="mt-3 text-base text-muted sm:mt-4">
          Developer background · SQL · Power BI
        </motion.p>

        <motion.div
          {...rise(1.05)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-14 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-card bg-accent px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-accent-hover sm:w-auto"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-card border border-muted px-5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
