import { services } from '@/content/home'
import { Icon } from '../icons'
import { Section, SectionHeading } from '../ui'

// Alternating card accents so the grid feels playful but stays readable.
const ACCENTS = ['bg-violet-soft', 'bg-lime', 'bg-[#FFE7C2]', 'bg-[#D8F3FF]']

/** Four outcome-first service cards. */
export default function Services() {
  return (
    <Section id="services" labelledBy="services-title" className="bg-white/60">
      <SectionHeading id="services-title" eyebrow={services.eyebrow} title={services.h2} />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.items.map((s, i) => (
          <li key={s.name} className="card flex flex-col p-6 sm:p-8" data-reveal style={{ transitionDelay: `${(i % 2) * 80}ms` }}>
            <span className={`grid size-14 place-items-center rounded-2xl border-2 border-ink shadow-hard-sm ${ACCENTS[i % ACCENTS.length]}`}>
              <Icon name={s.icon} className="size-7" />
            </span>
            <p className="mt-6 text-sm font-bold tracking-wide text-violet-deep uppercase">{s.name}</p>
            <h3 className="mt-1 text-2xl leading-snug font-extrabold">{s.title}</h3>
            <p className="mt-3 text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
