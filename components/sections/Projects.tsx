import StaticBackdrop from '@/components/StaticBackdrop'
import Reveal from '@/components/Reveal'
import { projects } from '@/content/site'

/**
 * No `projects` clip was supplied, so this takes the documented fallback
 * path rather than a scrubbed sequence.
 *
 * The spec wanted this section's background to match the final frame of the
 * projects clip (a solid violet) sampled by the extract script. With no clip
 * to sample, it uses the brand violet mixed into the night canvas. When a
 * clip arrives, swap this for a ScrollSequence and read `endColor` from its
 * manifest — the extract script already writes it.
 */
const PROJECTS_BG = '#2A1F52'

export default function Projects() {
  return (
    <StaticBackdrop id="projects" color={PROJECTS_BG} className="px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <h2 className="max-w-xl font-heading text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] font-bold tracking-[-0.03em] text-light">
            Selected work
          </h2>
          <p className="mt-4 max-w-lg text-base text-light/70">
            Every project below is live. Each link goes straight to the
            running site.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <li key={project.title}>
              <Reveal delay={i * 90}>
                <article className="group h-full overflow-hidden rounded-2xl border border-light/12 bg-night/50 transition-colors hover:border-violet/60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={1200}
                    height={750}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-light">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-light/70">{project.result}</p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-light/15 px-2 py-1 text-[11px] font-semibold tracking-[0.08em] text-light/60 uppercase"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    {project.href !== '#' && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-violet-ink transition-colors hover:text-light"
                      >
                        Visit site
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only">
                          {` — ${project.title} (opens in a new tab)`}
                        </span>
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </StaticBackdrop>
  )
}
