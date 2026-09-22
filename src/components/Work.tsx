import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import CountUp from './CountUp'
import { ALL, categories, projects, workStats } from '../data/projects'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { EASE } from '../lib/motion'

const reduce = prefersReducedMotion

function Work() {
  const [filter, setFilter] = useState(ALL)
  const shown =
    filter === ALL
      ? projects
      : projects.filter((p) => p.categories.includes(filter))

  return (
    <section
      id="work"
      className="scroll-mt-24 overflow-hidden px-6 py-16 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionHeading index="03">Selected Work</SectionHeading>
              <p className="mt-3 font-heading text-lede font-bold tracking-[-0.03em] text-ink">
                Work We've Shipped
              </p>
              <p className="mt-3 max-w-lg text-base text-body">
                Every project below is live. The link on each card goes straight
                to the running site.
              </p>
            </div>

            <ul className="flex flex-wrap items-center gap-2">
              {categories.map((category) => {
                const isActive = filter === category
                return (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => setFilter(category)}
                      aria-pressed={isActive}
                      className={`inline-flex min-h-11 items-center rounded-full border px-4 text-xs font-semibold tracking-[0.1em] uppercase transition-colors ${
                        isActive
                          ? 'border-accent bg-accent text-on-accent'
                          : 'border-line bg-card text-muted hover:text-ink'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>

        <ul className="mt-12 flex flex-col gap-6">
          <AnimatePresence initial={false} mode="popLayout">
            {shown.map((project) => {
              return (
                <motion.li
                  key={project.title}
                  layout={!reduce}
                  initial={reduce ? undefined : { opacity: 0, y: 24 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="group overflow-hidden rounded-panel border border-line bg-card transition-colors hover:border-accent/40"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Live screenshot, presented in browser chrome so it reads
                        as a shipped site rather than a background image. */}
                    <div className="flex items-center bg-surface p-5 lg:col-span-7 lg:p-10">
                      <div className="w-full overflow-hidden rounded-lg border border-line shadow-2xl">
                        <div className="flex items-center gap-2 border-b border-line bg-card px-3 py-2">
                          <span className="flex gap-1.5" aria-hidden="true">
                            <span className="h-2.5 w-2.5 rounded-full bg-line" />
                            <span className="h-2.5 w-2.5 rounded-full bg-line" />
                            <span className="h-2.5 w-2.5 rounded-full bg-line" />
                          </span>
                          <span className="mx-auto max-w-[60%] truncate rounded bg-surface px-2 py-0.5 text-[10px] text-muted">
                            {project.linkLabel}
                          </span>
                        </div>
                        <div className="aspect-[16/10] overflow-hidden bg-background">
                          <img
                            src={project.image}
                            alt={`The ${project.title} homepage`}
                            loading="lazy"
                            width={1440}
                            height={900}
                            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center gap-6 p-6 lg:col-span-5 lg:p-10">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                          <span className="text-[10px] font-semibold tracking-[0.15em] text-accent uppercase">
                            {project.tagline}
                          </span>
                        </div>

                        <h3 className="mt-3 font-heading text-3xl font-bold tracking-[-0.03em] text-ink transition-colors group-hover:text-accent lg:text-4xl">
                          {project.title}
                        </h3>

                        <dl className="mt-5 space-y-2 text-sm text-body">
                          <div>
                            <dt className="inline font-semibold text-ink">
                              Problem —{' '}
                            </dt>
                            <dd className="inline">{project.problem}</dd>
                          </div>
                          <div>
                            <dt className="inline font-semibold text-ink">
                              What we did —{' '}
                            </dt>
                            <dd className="inline">{project.whatIDid}</dd>
                          </div>
                          <div>
                            <dt className="inline font-semibold text-ink">
                              Result —{' '}
                            </dt>
                            <dd className="inline">{project.result}</dd>
                          </div>
                        </dl>

                        <ul className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded border border-line bg-surface px-2 py-0.5 text-[10px] font-semibold tracking-[0.1em] text-accent uppercase"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                      >
                        {project.linkLabel}
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </ul>

        {/* Counted from the project list, so they stay true as it grows. */}
        <Reveal>
          <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {workStats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-panel border border-line bg-card p-6"
              >
                <span className="block font-heading text-3xl font-bold text-accent lg:text-4xl">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-1 block text-xs font-medium tracking-[0.1em] text-muted uppercase">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-panel border border-line bg-card p-6 lg:flex-row lg:items-center lg:p-10">
            <div>
              <h3 className="font-heading text-2xl font-bold tracking-[-0.03em] text-ink lg:text-3xl">
                Ready to build a site that actually earns its keep?
              </h3>
              <p className="mt-2 max-w-xl text-base text-body">
                Tell us where your current site falls short and we'll tell you
                what would fix it.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
              >
                Start a project
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#process"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-surface px-6 text-sm font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent"
              >
                See how we work
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Work
