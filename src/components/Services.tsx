import { motion } from 'motion/react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { staggerContainer, staggerItem } from '../lib/motion'

const reduce = prefersReducedMotion

type Service = {
  id: string
  badge: string
  title: string
  detail: string
  footnote?: string
  meta: string
}

const services: Service[] = [
  {
    id: '01',
    badge: 'Dev & UX',
    title: 'Websites',
    detail:
      'Modern, responsive websites designed to make your business look credible, communicate clearly, and generate enquiries.',
    meta: 'Design through deployment',
  },
  {
    id: '02',
    badge: 'Visibility',
    title: 'SEO',
    detail:
      'Search-focused optimisation to improve visibility and help you reach people actively looking for your services.',
    footnote:
      'Includes early groundwork for AI answer engines as that space settles.',
    meta: 'Organic acquisition',
  },
  {
    id: '03',
    badge: 'Distribution',
    title: 'Social Media',
    detail:
      'Content direction, profile optimisation, and campaign support built around how your business actually sells.',
    meta: 'Audience engagement',
  },
  {
    id: '04',
    badge: 'Systems',
    title: 'Digital Growth',
    detail:
      'A practical combination of website, SEO, social, and marketing work aimed at one stronger online presence.',
    meta: 'Full-funnel',
  },
  {
    id: '05',
    badge: 'Intelligence',
    title: 'Analytics & Reports',
    detail:
      'Plain-language reporting on traffic, enquiries, and engagement so you can see what the work is doing.',
    meta: 'SQL · Power BI',
  },
]

function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-surface px-6 py-16 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionHeading index="02">Core Expertise</SectionHeading>
              <p className="mt-3 font-heading text-lede font-bold tracking-[-0.03em] text-ink">
                What We Do
              </p>
            </div>
            <p className="max-w-sm text-base text-body">
              Careful engineering paired with marketing you can actually measure.
            </p>
          </div>
        </Reveal>

        <motion.ul
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.li
              key={service.id}
              variants={reduce ? undefined : staggerItem}
              className="group flex flex-col justify-between rounded-panel border border-line bg-card p-6 transition-colors hover:border-accent/40 hover:bg-background"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-muted">
                    {service.id}
                  </span>
                  <span className="rounded border border-line bg-surface px-2 py-0.5 text-[10px] font-semibold tracking-[0.1em] text-accent uppercase">
                    {service.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold text-ink transition-colors group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-body">{service.detail}</p>
                {service.footnote && (
                  <p className="mt-2 text-xs text-muted">{service.footnote}</p>
                )}
              </div>
              <p className="mt-8 text-xs font-medium tracking-[0.1em] text-muted uppercase transition-colors group-hover:text-accent">
                {service.meta}
              </p>
            </motion.li>
          ))}

          {/* Fills the sixth cell rather than padding the grid with a service
              that isn't offered yet. */}
          <motion.li
            variants={reduce ? undefined : staggerItem}
            className="flex flex-col justify-between rounded-panel border border-dashed border-line bg-card/50 p-6"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-ink">
                Not sure which you need?
              </h3>
              <p className="mt-3 text-sm text-body">
                Describe the problem and we'll tell you what would actually
                move the needle — even if that turns out to be less work than
                you expected.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Start a conversation
              <span aria-hidden="true">→</span>
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  )
}

export default Services
