import { motion } from 'motion/react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { staggerContainer, staggerItem } from '../lib/motion'

const reduce = prefersReducedMotion

const steps: { id: string; title: string; detail: string }[] = [
  {
    id: '01',
    title: 'Understand',
    detail: 'Learn the business, the audience, the goals, and what is going wrong today.',
  },
  {
    id: '02',
    title: 'Strategy',
    detail: 'Work out what actually needs to change, and write it down as a plan.',
  },
  {
    id: '03',
    title: 'Build',
    detail: 'Design and develop the site, the content, and the search groundwork.',
  },
  {
    id: '04',
    title: 'Launch',
    detail: 'Test, deploy, and make sure every part works before it goes public.',
  },
  {
    id: '05',
    title: 'Measure',
    detail: 'Track what happens after launch and use it to decide the next change.',
  },
]

function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-surface px-6 py-16 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionHeading index="04">Methodology</SectionHeading>
          <p className="mt-3 font-heading text-lede font-bold tracking-[-0.03em] text-ink">
            How We Work
          </p>
          <p className="mt-3 max-w-xl text-base text-body">
            The same five steps every time, so you always know where a project
            stands.
          </p>
        </Reveal>

        <motion.ol
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5"
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, amount: 0.15 }}
        >
          {steps.map((step) => (
            <motion.li
              key={step.id}
              variants={reduce ? undefined : staggerItem}
              className="rounded-panel border border-line bg-card p-6 transition-colors hover:border-accent/40 hover:bg-background"
            >
              <span className="font-heading text-3xl font-bold text-accent">
                {step.id}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-body">{step.detail}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

export default Process
