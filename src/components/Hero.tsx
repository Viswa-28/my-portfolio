import { motion } from 'motion/react'
import SplitText from './SplitText'
import heroPhoto from '../assets/hero-desk.jpg'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { EASE } from '../lib/motion'

const reduce = prefersReducedMotion

const disciplines = ['Websites', 'SEO', 'Social Media', 'Digital Growth']

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
      className="relative isolate scroll-mt-24 overflow-hidden px-6 py-16 lg:px-12 lg:py-28"
    >
      {/* Ambient amber blooms. Decorative, sits behind everything. */}
      <div
        aria-hidden="true"
        className="ambient-glow pointer-events-none absolute -top-24 left-1/4 -z-10 h-96 w-96 rounded-full"
      />
      <div
        aria-hidden="true"
        className="ambient-glow pointer-events-none absolute top-1/2 right-10 -z-10 h-[500px] w-[500px] rounded-full"
      />

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Copy + actions */}
        <div className="flex flex-col items-start gap-6 lg:col-span-7">
          <motion.div
            {...rise(0)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
              Available for select projects
            </span>
          </motion.div>

          <SplitText
            as="h1"
            by="word"
            text="I Build Digital Experiences That"
            delay={0.1}
            className="font-heading text-hero-sub font-extrabold tracking-[-0.03em] text-ink"
          />
          <SplitText
            as="p"
            by="word"
            text="Help Businesses Grow."
            delay={0.45}
            className="-mt-4 font-heading text-hero-sub font-extrabold tracking-[-0.03em] text-gradient-accent"
          />

          <motion.p {...rise(0.8)} className="max-w-2xl text-base text-body lg:text-lg">
            I'm Viswa — a web developer and digital growth specialist helping
            businesses build a stronger online presence through websites, SEO,
            social media, and practical digital strategies.
          </motion.p>

          <motion.div
            {...rise(0.95)}
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

          {/* Credibility micro-line */}
          <motion.ul
            {...rise(1.1)}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-full border border-line bg-card px-4 py-2"
          >
            {disciplines.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden="true" className="text-accent/60">
                    •
                  </span>
                )}
                <span
                  className={`text-xs font-medium ${
                    i === disciplines.length - 1
                      ? 'font-semibold text-accent'
                      : 'text-body'
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Editorial visual card */}
        <motion.div
          {...rise(0.6)}
          className="w-full lg:col-span-5 lg:justify-self-end"
        >
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-panel border border-line bg-card">
            <img
              src={heroPhoto}
              alt="Viswa at work"
              fetchPriority="high"
              width={1200}
              height={549}
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
            />

            <div className="absolute top-4 right-4 left-4 flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-card/90 px-3 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-[10px] font-semibold tracking-[0.15em] text-accent uppercase">
                  Viswa
                </span>
              </div>
            </div>

            <div className="absolute right-4 bottom-4 left-4 rounded-card border border-line bg-card/95 p-4 backdrop-blur-lg">
              <span className="block text-[10px] font-semibold tracking-[0.15em] text-muted uppercase">
                Role
              </span>
              <span className="mt-1 block text-sm font-semibold text-ink">
                Web Developer &amp; Digital Growth Specialist
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
