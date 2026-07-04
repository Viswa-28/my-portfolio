import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

type Experience = {
  role: string
  company: string
  dates: string
  summary: string
}

const experiences: Experience[] = [
  {
    role: 'PHP Developer',
    company: 'Laabam One Business Solution',
    dates: 'Nov 2025 – Present',
    summary: 'Built and maintained PHP web applications for business clients',
  },
  {
    role: 'Freelancer',
    company: 'Freelance',
    dates: 'Jan 2025 – Oct 2025',
    summary: 'Built the Tev HR Solutions website as a freelance project.',
  },
]

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading>Experience</SectionHeading>
          <div className="mt-10 space-y-12">
            {experiences.map((item) => (
              <article key={`${item.role}-${item.company}`}>
                <p className="font-heading text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                  {item.dates}
                </p>
                <h3 className="mt-2 font-heading text-role font-bold text-ink">
                  {item.role} <span className="text-accent">·</span>{' '}
                  {item.company}
                </h3>
                <p className="mt-3 max-w-xl text-body">{item.summary}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Experience
