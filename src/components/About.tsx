import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading>About</SectionHeading>
          <p className="mt-6 text-base font-medium text-muted sm:text-lg">
            With a background in PHP development —
          </p>
          <p className="mt-2 max-w-xl font-heading text-lede font-bold tracking-tight text-ink">
            I bring a practical,{' '}
            <span className="text-accent">systems-level</span> understanding
            of data to business and data analysis.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body sm:text-xl">
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
