import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import SkillsChart from './SkillsChart'

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-line py-16 sm:py-20"
    >
      <Reveal>
        <SectionHeading>Skills</SectionHeading>
        <p className="mt-4 max-w-lg text-base text-body">
          Tools I work with, grouped by focus area — not ranked by proficiency.
        </p>
        <div className="mt-6">
          <SkillsChart />
        </div>
      </Reveal>
    </section>
  )
}

export default Skills
