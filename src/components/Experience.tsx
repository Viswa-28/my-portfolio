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
    summary:
      'Built and maintained PHP web applications for business clients',
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-gray-200 py-16"
    >
      <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
      <div className="mt-6 space-y-6">
        {experiences.map((item) => (
          <article key={`${item.role}-${item.company}`}>
            <h3 className="text-lg font-semibold text-gray-900">
              {item.role} · {item.company}
            </h3>
            <p className="text-sm text-gray-500">{item.dates}</p>
            <p className="mt-2 text-gray-700">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
