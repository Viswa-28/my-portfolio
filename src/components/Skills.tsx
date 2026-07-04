import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import LogoLoop from './LogoLoop'
import { techLogos } from '../data/techLogos'
import { prefersReducedMotion } from '../lib/reducedMotion'

const reduce = prefersReducedMotion

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-line py-16 sm:py-20"
    >
      <Reveal>
        <SectionHeading>Skills</SectionHeading>
        <p className="mt-4 max-w-lg text-base text-body">
          Tools and technologies I work with day to day.
        </p>

        {/* Reduced-motion users get a static row instead of the marquee. */}
        {reduce ? (
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted">
            {techLogos.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">
                  {'node' in item ? item.node : null}
                </span>
                <span className="text-sm text-body">{item.title}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8">
            <LogoLoop
              logos={techLogos}
              speed={40}
              direction="left"
              logoHeight={30}
              gap={48}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Tools and technologies I work with"
              className="text-muted"
            />
          </div>
        )}
      </Reveal>
    </section>
  )
}

export default Skills
