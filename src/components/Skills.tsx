import SectionHeading from './SectionHeading'

type SkillGroup = {
  label: string
  items: string[]
}

// Grouped pills, not skill bars — no invented percentages implying false
// precision at this experience level.
const skillGroups: SkillGroup[] = [
  { label: 'Tools', items: ['VS Code', 'PHP', 'SQL', 'Excel', 'Power BI'] },
  { label: 'Soft', items: ['Problem-solving', 'Pattern recognition'] },
]

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-line py-16 sm:py-20"
    >
      <SectionHeading>Skills</SectionHeading>
      <div className="mt-6 space-y-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="font-heading text-xs font-semibold tracking-[0.15em] text-muted uppercase">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line bg-accent-soft px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent/40"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
