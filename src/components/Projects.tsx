import { motion } from 'motion/react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import SplitText from './SplitText'
import Magnet from './Magnet'
import CountUp from './CountUp'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { staggerContainer, staggerItem } from '../lib/motion'

// Honest, verifiable figures — 4 project cards below, 2 of them live in
// production (Workdu, Tev HR Solutions), 11 tools in the Skills marquee.
const stats: { end: number; suffix?: string; label: string }[] = [
  { end: 4, label: 'Projects shipped' },
  { end: 2, label: 'Live in production' },
  { end: 10, suffix: '+', label: 'Tools & tech' },
]

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
    problem:
      'Job seekers and companies needed a single platform to connect — candidates struggle to find genuinely matching roles, while companies need an efficient way to post openings and reach qualified candidates.',
    whatIDid:
      'Led development of the core platform as part of the team building Workdu — candidate and employer profiles, job postings, and the application workflow — for a product that also includes AI-assisted job matching and resume tools.',
    result:
      'A live platform currently listing active roles from verified employers, including established companies like TCS, Infosys, and Wipro.',
    link: 'https://workdu.com',
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Tev HR Solutions',
    problem:
      'A local HR services company needed a professional web presence to showcase their services — talent acquisition, payroll management, employee engagement, and training — and build credibility with potential business clients.',
    whatIDid:
      "Designed and built the company's website from scratch, including a client-facing service overview, a dedicated clients/partners page, and company info pages (About, Contact, Privacy Policy).",
    result:
      "A live business website showcasing the company's services and partnerships with logistics companies including Rapido, Bluedart, Porter, and Pidge.",
    link: 'https://tevhrsolutions.in',
    tags: ['PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Employee Task Management System',
    problem:
      'Small teams needed a simple way to assign tasks and track working hours without adopting a heavyweight HR platform.',
    whatIDid:
      'Built a task management system with separate admin and employee dashboards — admins assign tasks and monitor hours, while employees check in, check out, and log attendance, backed by role-based authentication.',
    result:
      'A self-built PHP/MySQL project practicing role-based access control and attendance tracking end-to-end.',
    link: 'https://github.com/Viswa-28/employee-task',
    tags: ['PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'PHP E-Commerce',
    problem:
      'Practicing the core mechanics of an online store — product browsing, cart management, and checkout — without relying on a pre-built e-commerce platform.',
    whatIDid:
      'Built a PHP e-commerce application from scratch, including an admin panel for managing products, a shopping cart, and a checkout flow, with customer-facing login and contact forms.',
    result:
      'A functioning e-commerce demo covering the full purchase flow from product browsing to checkout.',
    link: 'https://github.com/Viswa-28/php-ecommerce',
    tags: ['PHP', 'MySQL', 'HTML/CSS'],
  },
]

const reduce = prefersReducedMotion

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 overflow-hidden py-16 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading>Projects</SectionHeading>
        </Reveal>

        {/* Animated stat counters — tick up on scroll into view. */}
        <Reveal>
          <ul className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-6 sm:mt-10">
            {stats.map((stat) => (
              <li key={stat.label}>
                <span className="block font-heading text-4xl font-bold text-ink sm:text-5xl">
                  <CountUp end={stat.end} suffix={stat.suffix ?? ''} />
                </span>
                <span className="mt-1 block text-xs font-semibold tracking-[0.15em] text-muted uppercase">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <motion.div
          className="mt-12 space-y-16 sm:mt-16 sm:space-y-24"
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project, i) => {
            const reversed = i % 2 === 1
            return (
              <motion.article
                key={project.title}
                variants={reduce ? undefined : staggerItem}
                className="group"
              >
                <Magnet className={reversed ? 'sm:text-right' : ''}>
                  <SplitText
                    as="h3"
                    by="word"
                    trigger="scroll"
                    text={project.title}
                    className="font-heading text-huge font-bold tracking-tight text-ink transition-colors group-hover:text-accent"
                  />
                </Magnet>
                <ul
                  className={`mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold tracking-[0.15em] text-muted uppercase ${
                    reversed ? 'sm:justify-end' : ''
                  }`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <dl
                  className={`mt-5 max-w-xl space-y-2 text-body ${
                    reversed ? 'sm:ml-auto' : ''
                  }`}
                >
                  <div>
                    <dt className="inline font-medium text-ink">Problem — </dt>
                    <dd className="inline">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="inline font-medium text-ink">
                      What I did —{' '}
                    </dt>
                    <dd className="inline">{project.whatIDid}</dd>
                  </div>
                  <div>
                    <dt className="inline font-medium text-ink">Result — </dt>
                    <dd className="inline">{project.result}</dd>
                  </div>
                </dl>
                <div className={`mt-4 ${reversed ? 'sm:text-right' : ''}`}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    {project.link}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
