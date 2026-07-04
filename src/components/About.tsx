import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import SplitText from './SplitText'

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading>About</SectionHeading>
        </Reveal>
        <p className="mt-6 text-base font-medium text-muted sm:text-lg">
          With a background in PHP development —
        </p>
        {/* Big statement reveals word-by-word as it scrolls into view, with
            "systems-level" tinted accent for deliberate emphasis. */}
        <SplitText
          as="p"
          by="word"
          trigger="scroll"
          highlight="systems-level"
          text="I bring a practical, systems-level understanding of data to business and data analysis."
          className="mt-2 max-w-xl font-heading text-lede font-bold tracking-tight text-ink"
        />
        <Reveal>
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
