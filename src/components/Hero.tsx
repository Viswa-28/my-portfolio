import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from './SplitText'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { EASE } from '../lib/motion'

gsap.registerPlugin(ScrollTrigger)

const reduce = prefersReducedMotion
const DESKTOP_MIN_WIDTH = 768

// Block-level fade+rise, sequenced after the split-text reveals. Empty props
// for reduced-motion users so content is shown immediately.
const rise = (delay: number) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay, ease: EASE },
      }

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reduced-motion users get no scroll-tied movement whatsoever.
    if (reduce) return

    const bg = bgRef.current
    const section = sectionRef.current
    if (!bg || !section) return

    let parallax: gsap.core.Tween | null = null

    const enable = () => {
      if (parallax) return
      parallax = gsap.to(bg, {
        // Animates transform (translateY) only — never top or
        // background-position, which are the layout/paint-heavy ones.
        yPercent: 22,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          // Promote to its own layer only while actively scrubbing, then
          // release the hint once the hero leaves view.
          onToggle: (self) => {
            bg.style.willChange = self.isActive ? 'transform' : 'auto'
          },
        },
      })
    }

    const disable = () => {
      if (!parallax) return
      parallax.scrollTrigger?.kill()
      parallax.kill()
      parallax = null
      gsap.set(bg, { clearProps: 'transform' })
      bg.style.willChange = 'auto'
    }

    // Explicit width check: below 768px the ScrollTrigger is never created —
    // removed entirely, not just weakened — so mobile scrolls natively.
    const sync = () => {
      if (window.innerWidth >= DESKTOP_MIN_WIDTH) enable()
      else disable()
    }

    sync()
    window.addEventListener('resize', sync)

    return () => {
      window.removeEventListener('resize', sync)
      disable()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative scroll-mt-24 overflow-hidden py-24 text-center sm:py-32"
    >
      {/* Mobile-first: background fills the section statically. Only from md up
          does it become the oversized layer the desktop parallax shifts. */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 bottom-0 -z-10 md:top-[-20%] md:bottom-auto md:h-[140%]"
      >
        <div className="hero-dots absolute inset-0" />
        <div className="absolute top-16 left-1/2 -translate-x-1/2 sm:top-20">
          <div className="hero-glow h-56 w-56 rounded-full bg-accent/20 blur-3xl sm:h-72 sm:w-72" />
        </div>
      </div>

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
        Developer background · SQL · Excel · Power BI
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
    </section>
  )
}

export default Hero
