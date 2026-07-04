import { lazy, Suspense, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import SplitText from './SplitText'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { EASE } from '../lib/motion'

// ogl is heavy — load it only when the effect is actually shown (desktop,
// motion allowed), keeping it out of the initial/mobile bundle.
const Lightfall = lazy(() => import('./Lightfall'))

const reduce = prefersReducedMotion
const DESKTOP_MIN_WIDTH = 768

// Green streak palette — same hue family as the locked accent, no new hue.
const FX_COLORS = ['#1f6f54', '#3e9b76', '#7fc9a6']

// Cap DPR so the per-pixel ray-march shader stays affordable on retina screens.
const fxDpr = Math.min(
  typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
  1.5
)

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

// Static green glow shown on mobile, for reduced-motion, and as the Suspense
// fallback while ogl loads — so the hero is never a flat black.
function StaticGlow() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl sm:h-80 sm:w-80" />
    </div>
  )
}

function Hero() {
  const [showFx, setShowFx] = useState(false)

  useEffect(() => {
    // No WebGL for reduced-motion users, and none below the tablet breakpoint
    // (the shader is far heavier than the parallax we disabled on mobile).
    if (reduce) return
    const check = () => setShowFx(window.innerWidth >= DESKTOP_MIN_WIDTH)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-24 text-center sm:py-32"
    >
      {/* Animated backdrop (desktop + motion) or a static green glow. */}
      <div aria-hidden="true" className="absolute inset-0">
        {showFx ? (
          <Suspense fallback={<StaticGlow />}>
            <Lightfall
              className="h-full w-full"
              colors={FX_COLORS}
              backgroundColor="#123d2e"
              speed={0.4}
              streakCount={3}
              streakWidth={1}
              streakLength={1}
              glow={0.7}
              density={0.5}
              twinkle={0.5}
              zoom={3}
              backgroundGlow={0.6}
              opacity={0.9}
              mouseInteraction
              mouseStrength={0.4}
              mouseRadius={1}
              dpr={fxDpr}
            />
          </Suspense>
        ) : (
          <StaticGlow />
        )}
      </div>
      {/* Contrast guard so headline text stays WCAG AA over the effect. */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/40" />

      <div className="relative z-10">
        <SplitText
          as="h1"
          by="char"
          text="Viswa"
          delay={0.1}
          className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl"
        />
        <SplitText
          as="p"
          by="word"
          text="Business & Data Analyst"
          delay={0.5}
          className="mt-4 text-lg font-medium text-accent-light sm:text-xl"
        />
        <motion.p {...rise(0.9)} className="mt-2 text-base text-white/70">
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
            className="inline-flex min-h-11 w-full items-center justify-center rounded-card border border-white/30 px-5 text-sm font-medium text-white transition-colors hover:border-accent-light hover:text-accent-light sm:w-auto"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
