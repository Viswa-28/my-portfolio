import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import LogoLoop, { type LogoItem } from './LogoLoop'
import { techLogos } from '../data/techLogos'
import { prefersReducedMotion } from '../lib/reducedMotion'

const reduce = prefersReducedMotion

// Typography-led item: the tool name itself, set large, not an icon chip.
// logoloop__node/link keep the existing hover-scale + focus styling working.
function renderSkill(item: LogoItem) {
  const label = 'title' in item ? item.title : undefined
  const href = 'href' in item ? item.href : undefined
  const text = (
    <span className="logoloop__node font-heading text-role font-bold text-ink transition-colors hover:text-accent">
      {label}
    </span>
  )
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="logoloop__link"
    >
      {text}
    </a>
  ) : (
    text
  )
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading>Skills</SectionHeading>
          <p className="mt-4 max-w-lg text-base text-body">
            Tools and technologies I work with day to day.
          </p>

          {/* Reduced-motion users get a static, wrapped large-type list. */}
          {reduce ? (
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {techLogos.map((item, i) => (
                <li key={i}>
                  <span className="font-heading text-role font-bold text-ink">
                    {'title' in item ? item.title : ''}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-10">
              <LogoLoop
                logos={techLogos}
                speed={40}
                direction="left"
                gap={64}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Tools and technologies I work with"
                renderItem={renderSkill}
              />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export default Skills
