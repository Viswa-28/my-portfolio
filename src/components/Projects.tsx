import { motion } from 'motion/react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { staggerContainer, staggerItem } from '../lib/motion'

type Project = {
  title: string
  problem: string
  whatIDid: string
  result: string
  link: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Workdu',
    problem: '[ what need did this project address ]',
    whatIDid: '[ your role / what you built ]',
    result: '[ outcome, if any ]',
    link: 'https://workdu.com',
    tags: ['[ tech stack ]'],
  },
  {
    title: 'Tev HR Solution',
    problem: '[ what need did this project address ]',
    whatIDid: '[ your role / what you built ]',
    result: '[ outcome, if any ]',
    link: 'https://tevhrsolution.in',
    tags: ['[ tech stack ]'],
  },
]

const reduce = prefersReducedMotion

// Border + shadow hover stay in CSS. The lift is transform, which Motion
// owns while animated (whileHover) so its inline transform doesn't fight the
// class; reduced-motion cards keep the CSS lift (instant via the global
// reduced-motion rule).
const cardBase =
  'group rounded-card border border-line bg-white p-6 hover:border-accent/50 hover:shadow-[0_12px_32px_-16px_rgba(31,111,84,0.35)]'

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-accent-soft py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading>Projects</SectionHeading>
        </Reveal>
        <motion.div
          className="mt-6 space-y-6"
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={reduce ? undefined : staggerItem}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={
                reduce
                  ? undefined
                  : { type: 'spring', stiffness: 300, damping: 22 }
              }
              className={
                reduce
                  ? `${cardBase} transition-all duration-300 hover:-translate-y-1`
                  : `${cardBase} transition-[border-color,box-shadow] duration-300`
              }
            >
              <h3 className="font-heading text-lg font-bold text-ink transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-ink"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <dl className="mt-3 space-y-2 text-body">
                <div>
                  <dt className="inline font-medium text-ink">Problem: </dt>
                  <dd className="inline">{project.problem}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-ink">What I did: </dt>
                  <dd className="inline">{project.whatIDid}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-ink">Result: </dt>
                  <dd className="inline">{project.result}</dd>
                </div>
              </dl>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                {project.link}
                <span aria-hidden="true">→</span>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
