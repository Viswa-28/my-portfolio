import { motion } from 'motion/react'
import SplitText from './SplitText'
import CountUp from './CountUp'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { EASE } from '../lib/motion'

const reduce = prefersReducedMotion

// Verifiable proof only — shipped sites, the tools in the Capabilities
// marquee, and a response window that is a commitment, not a measurement.
// These live here (not in Capabilities) so the first screen carries the proof.
const proof: { end: number; suffix: string; label: string }[] = [
  { end: 4, suffix: '', label: 'Live projects' },
  { end: 10, suffix: '+', label: 'Tools & tech' },
  { end: 24, suffix: 'h', label: 'Reply window' },
]

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
      // 4.3rem is the sticky navbar (py-3 + a 2.75rem control + 1px border).
      // Subtracting it makes the hero exactly one screen tall, so the proof
      // bar lands on the fold instead of just under it.
      className="relative isolate flex min-h-[calc(100svh-4.3rem)] scroll-mt-24 flex-col overflow-hidden px-6 lg:px-12"
    >
      {/* Ambient indigo wash. Decorative, sits behind everything. */}
      <div
        aria-hidden="true"
        className="ambient-glow pointer-events-none absolute -top-24 left-1/4 -z-10 h-96 w-96 rounded-full"
      />
      <div
        aria-hidden="true"
        className="ambient-glow pointer-events-none absolute top-1/2 right-10 -z-10 h-[500px] w-[500px] rounded-full"
      />

      {/* flex-1 + items-center: the copy/visual block optically centres in
          whatever height is left between the navbar and the proof bar, so the
          hero fills the viewport instead of floating with dead space below. */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 items-center py-10 lg:py-14">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy + actions */}
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            <motion.div
              {...rise(0)}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span
                  aria-hidden="true"
                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                Available for select projects
              </span>
            </motion.div>

            <h1 className="font-heading text-hero-sub font-extrabold tracking-[-0.03em]">
              <SplitText
                as="span"
                by="word"
                text="I Build Digital Experiences That"
                delay={0.05}
                className="block text-ink"
              />
              {/* Solid accent, not a gradient — the payoff line should read as
                  the brightest thing on the screen, not fade out mid-phrase. */}
              <SplitText
                as="span"
                by="word"
                text="Help Businesses Grow."
                delay={0.22}
                className="block text-accent"
              />
            </h1>

            <motion.p {...rise(0.34)} className="max-w-xl text-base text-body lg:text-lg">
              I'm Viswa, the developer behind LunoLab — a one-person digital
              growth studio helping businesses turn their online presence into
              real enquiries through websites, SEO, social media and analytics.
            </motion.p>

            <motion.div
              {...rise(0.42)}
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-on-accent transition-colors hover:bg-accent-hover"
              >
                Let's Work Together
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-card px-7 text-base font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent"
              >
                View My Work
                <span aria-hidden="true" className="text-accent">
                  ↗
                </span>
              </a>
            </motion.div>
          </div>

          {/* Editorial visual. 3/2 matches the source crop (1200×549 is wide,
              so a 4/3 frame threw away the sides); one soft bottom vignette
              seats it on the canvas without muddying the subject. */}
          <motion.div
            {...rise(0.28)}
            className="w-full lg:col-span-5 lg:justify-self-end"
          >
            <div className="relative mx-auto aspect-[3/2] w-full max-w-xl overflow-hidden rounded-panel border border-line bg-card ring-1 ring-white/5 ring-inset">
              <img
                src="/hero-desk.jpg"
                alt="Viswa working at his desk"
                fetchPriority="high"
                width={1200}
                height={549}
                className="h-full w-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/70 to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Proof bar — anchors the bottom of the viewport and hands off to the
          next section, so the first screen ends on evidence rather than air. */}
      <motion.div
        {...rise(0.5)}
        className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 border-t border-line py-6"
      >
        <dl className="grid flex-1 grid-cols-3 gap-4 sm:max-w-xl">
          {proof.map((item) => (
            <div key={item.label}>
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block font-heading text-2xl font-bold text-accent lg:text-3xl">
                  <CountUp end={item.end} suffix={item.suffix} />
                </span>
                <span className="mt-1 block text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
                  {item.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <a
          href="#about"
          className="group hidden shrink-0 items-center gap-2 text-xs font-semibold tracking-[0.15em] text-muted uppercase transition-colors hover:text-accent sm:inline-flex"
        >
          Scroll
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          >
            ↓
          </span>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
