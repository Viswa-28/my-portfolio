import { motion } from 'motion/react'
import SplitText from './SplitText'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { EASE, staggerContainer, staggerItem } from '../lib/motion'

const reduce = prefersReducedMotion

// The studio's own tagline, promoted from footer decoration to the structural
// spine of the first screen. An agency is bought on method, so the three
// stages ARE the proof — each one names what the client actually gets.
const spine: { step: string; title: string; detail: string }[] = [
  {
    step: '01',
    title: 'Ideas',
    detail:
      'We learn the business and work out what is actually holding its digital presence back.',
  },
  {
    step: '02',
    title: 'Presence',
    detail:
      'The site, the search groundwork and the social profiles, designed and built as one system.',
  },
  {
    step: '03',
    title: 'Results',
    detail:
      'Enquiries, traffic and engagement — reported in plain language, and used to decide what changes next.',
  },
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
      // Subtracting it makes the hero exactly one screen tall, so the spine
      // lands on the fold instead of just under it.
      className="relative isolate flex min-h-[calc(100svh-4.3rem)] scroll-mt-24 flex-col overflow-hidden px-6 lg:px-12"
    >
      {/* Ambient indigo wash. Decorative, sits behind everything. */}
      <div
        aria-hidden="true"
        className="ambient-glow pointer-events-none absolute -top-24 left-1/4 -z-10 h-96 w-96 rounded-full"
      />
      <div
        aria-hidden="true"
        className="ambient-glow pointer-events-none absolute top-1/2 right-0 -z-10 h-[520px] w-[520px] rounded-full"
      />

      {/* flex-1 + justify-center: the statement optically centres in whatever
          height is left between the navbar and the spine. */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center py-10 lg:py-14">
        <motion.div
          {...rise(0)}
          className="inline-flex w-fit items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span
              aria-hidden="true"
              className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"
            />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-[11px] font-semibold tracking-[0.15em] text-accent uppercase sm:text-xs">
            Digital Growth Studio
          </span>
          {/* Second segment is dropped on narrow phones — together the two
              labels wrap to two cramped lines at 390px. */}
          <span aria-hidden="true" className="hidden h-3 w-px bg-line sm:block" />
          <span className="hidden text-[11px] font-semibold tracking-[0.15em] text-muted uppercase sm:inline sm:text-xs">
            Taking on projects
          </span>
        </motion.div>

        {/* The positioning statement carries the screen on its own — no photo
            competing with it, which also keeps the warm-lit desk shot from
            fighting the indigo palette. */}
        <h1 className="mt-7 max-w-5xl font-heading text-huge font-extrabold tracking-[-0.03em]">
          <SplitText
            as="span"
            by="word"
            text="We turn ideas into presence,"
            delay={0.05}
            className="block text-ink"
          />
          <SplitText
            as="span"
            by="word"
            text="and presence into results."
            delay={0.24}
            className="block text-accent"
          />
        </h1>

        <motion.p
          {...rise(0.36)}
          className="mt-6 max-w-2xl text-base text-body lg:text-lg"
        >
          LunoLab is a digital growth studio. We design, build and measure the
          websites, search and social that turn attention into enquiries — for
          businesses that want their online presence to earn its keep.
        </motion.p>

        <motion.div
          {...rise(0.44)}
          className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-on-accent transition-colors hover:bg-accent-hover"
          >
            Start a project
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
            See the work
            <span aria-hidden="true" className="text-accent">
              ↗
            </span>
          </a>
        </motion.div>
      </div>

      {/* The spine — anchors the bottom of the viewport and hands the visitor
          to the next section already knowing how the studio works. */}
      <motion.ol
        className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-x-8 gap-y-6 border-t border-line py-7 sm:grid-cols-3"
        variants={reduce ? undefined : staggerContainer}
        initial={reduce ? undefined : 'hidden'}
        animate={reduce ? undefined : 'show'}
        transition={reduce ? undefined : { delayChildren: 0.52 }}
      >
        {spine.map((stage, i) => (
          <motion.li
            key={stage.title}
            variants={reduce ? undefined : staggerItem}
          >
            <div className="flex items-baseline gap-2.5">
              <span className="font-heading text-xs font-bold text-accent/70">
                {stage.step}
              </span>
              <h2 className="font-heading text-sm font-bold tracking-[0.12em] text-ink uppercase">
                {stage.title}
              </h2>
              {/* Echoes the tagline's own notation, attached to the stage it
                  leads out of rather than adrift in the column gutter. Always
                  rendered (just hidden on the last stage) so every column
                  shares the same baseline box. */}
              <span
                aria-hidden="true"
                className={`text-accent/50 ${i === spine.length - 1 ? 'invisible' : ''}`}
              >
                →
              </span>
            </div>
            <p className="mt-2 max-w-sm text-sm text-muted">{stage.detail}</p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}

export default Hero
