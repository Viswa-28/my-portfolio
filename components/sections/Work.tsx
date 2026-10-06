import Image from 'next/image'
import { work } from '@/content/home'
import { projects, type Project } from '@/content/projects'
import { Icon } from '../icons'
import { PrimaryCta, Section, SectionHeading } from '../ui'

/** Three case-study cards. Data lives in /content/projects.ts. */
export default function Work() {
  return (
    <Section id="work" labelledBy="work-title">
      <SectionHeading id="work-title" eyebrow={work.eyebrow} title={work.h2} />

      <div className="mt-12 flex flex-col gap-10">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} flip={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center" data-reveal>
        <PrimaryCta location="work" />
        <p className="font-semibold text-ink-soft">Want a site like these? Let&apos;s talk.</p>
      </div>
    </Section>
  )
}

function ProjectCard({ project: p, flip }: { project: Project; flip: boolean }) {
  return (
    <article className="card grid overflow-hidden md:grid-cols-2" data-reveal aria-labelledby={`work-${p.slug}`}>
      {/* Screenshots: phone first; the desktop shot joins it from 640px up. */}
      <div className={`relative flex items-end justify-center gap-4 bg-violet-soft px-6 pt-8 sm:px-8 ${flip ? 'md:order-2' : ''}`}>
        <div className="relative hidden w-[68%] self-center sm:block">
          <Image
            src={`/work/${p.slug}-desktop.webp`}
            alt={`${p.name} website on desktop`}
            width={1440}
            height={900}
            sizes="(min-width: 768px) 320px, 60vw"
            className="h-auto w-full rounded-xl border-2 border-ink shadow-hard"
          />
        </div>
        <div className="w-[42%] max-w-[13rem] rounded-t-[1.6rem] border-2 border-b-0 border-ink bg-ink p-1.5 pb-0 sm:-ml-14 sm:w-[30%]">
          <Image
            src={`/work/${p.slug}-mobile.webp`}
            alt={`${p.name} website on a phone`}
            width={390}
            height={844}
            sizes="(min-width: 768px) 160px, 50vw"
            className="h-auto w-full rounded-t-[1.25rem]"
          />
        </div>
      </div>

      {/* Story */}
      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
          <span className="rounded-full border-2 border-ink bg-lime px-3 py-1">{p.industry}</span>
          <span className="inline-flex items-center gap-1 text-ink-soft">
            <Icon name="pin" className="size-4" />
            {p.city}
          </span>
        </div>

        <h3 id={`work-${p.slug}`} className="mt-4 text-3xl font-extrabold">
          {p.name}
        </h3>

        <p className="mt-4 text-sm font-bold tracking-wide text-violet-deep uppercase">The challenge</p>
        <p className="mt-1 text-ink-soft">{p.challenge}</p>

        <p className="mt-5 text-sm font-bold tracking-wide text-violet-deep uppercase">What we built</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {p.built.map((f) => (
            <li key={f} className="rounded-full border-2 border-ink bg-paper px-3 py-1 text-sm font-medium">
              {f}
            </li>
          ))}
        </ul>

        {/* Only shown once a real, measured result is filled in. */}
        {p.result && (
          <p className="mt-5 rounded-2xl border-2 border-ink bg-lime px-4 py-3 font-bold">{p.result}</p>
        )}

        <a
          href={p.url}
          target="_blank"
          rel="noopener"
          data-track="project_link_click"
          data-track-slug={p.slug}
          className="mt-6 inline-flex min-h-12 items-center gap-1.5 self-start font-bold text-violet-deep underline decoration-2 underline-offset-4 md:mt-auto md:pt-6"
        >
          View live site
          <Icon name="external" className="size-5" />
          <span className="sr-only">(opens {p.name} in a new tab)</span>
        </a>
      </div>
    </article>
  )
}
