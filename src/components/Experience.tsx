import SectionHeading from './SectionHeading'

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
    dates: '[ start–end ]',
    summary: 'Built and maintained PHP web applications for business clients',
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-line py-16 sm:py-20"
    >
      <SectionHeading>Experience</SectionHeading>
      <div className="mt-6 space-y-6">
        {experiences.map((item) => (
          <article
            key={`${item.role}-${item.company}`}
            className="border-l-2 border-line pl-4"
          >
            <h3 className="font-heading text-lg font-bold text-ink">
              {item.role} · {item.company}
            </h3>
            <p className="mt-0.5 text-sm text-muted">{item.dates}</p>
            <p className="mt-2 text-body">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
