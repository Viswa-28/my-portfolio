import { problem } from '@/content/home'
import { Icon } from '../icons'
import { PrimaryCta, Section, SectionHeading } from '../ui'

/** "Your customers search on Google first…" with three pain cards. */
export default function Problem() {
  return (
    <Section labelledBy="problem-title">
      <SectionHeading id="problem-title" eyebrow={problem.eyebrow} title={problem.h2} />

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {problem.pains.map((pain, i) => (
          <li key={pain.title} className="card p-6 sm:p-7" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="grid size-12 place-items-center rounded-2xl border-2 border-ink bg-[#FFE4E1]">
              <Icon name={pain.icon} />
            </span>
            <h3 className="mt-5 text-xl font-extrabold">{pain.title}</h3>
            <p className="mt-2 text-ink-soft">{pain.body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center" data-reveal>
        <PrimaryCta location="problem" />
        <p className="font-semibold text-ink-soft">Free. No obligation.</p>
      </div>
    </Section>
  )
}
