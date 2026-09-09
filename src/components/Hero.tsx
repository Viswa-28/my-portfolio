import { motion } from 'motion/react'
import SplitText from './SplitText'
import heroPhoto from '../assets/hero-desk.png'
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
      className="relative isolate flex min-h-[100svh] scroll-mt-24 items-end overflow-hidden text-center"
    >
      {/* Full-bleed desk scene, darkened so the overlaid text stays readable. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#04070a]"
      >
        <img
          src={heroPhoto}
          alt=""
          className="h-full w-full object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
      </div>

      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 sm:pb-28">
        <SplitText
          as="h1"
          by="char"
          text="Viswa"
          delay={0.1}
          className="font-heading text-hero font-bold tracking-tight text-white"
        />
        <SplitText
          as="p"
          by="word"
          text="Full Stack Developer"
          delay={0.5}
          className="mt-4 font-heading text-hero-sub font-medium text-accent sm:mt-6"
        />
        <motion.p
          {...rise(0.9)}
          className="mt-3 text-base text-white/70 sm:mt-4"
        >
          PHP · JavaScript · Next.js · MySQL
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
            className="inline-flex min-h-11 w-full items-center justify-center rounded-card border border-white/50 px-5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll cue. */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        {...rise(1.3)}
        animate={
          reduce
            ? undefined
            : { opacity: 1, y: [0, 8, 0] }
        }
        transition={
          reduce
            ? undefined
            : { opacity: { duration: 0.5, delay: 1.3 }, y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1.3 } }
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.a>
    </section>
  )
}

export default Hero
