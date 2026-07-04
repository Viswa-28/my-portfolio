import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-accent-soft py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading>About</SectionHeading>
          <p className="mt-5 max-w-2xl leading-relaxed text-body">
            With a background in PHP development, I bring a practical,
            systems-level understanding of data to business and data analysis.
            I'm building my analytical toolkit — SQL and Power BI — through
            hands-on projects, and I use AI-assisted development to prototype
            and ship ideas quickly.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default About
