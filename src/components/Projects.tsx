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
    problem:
      'Job seekers and companies needed a single platform to connect — candidates struggle to find genuinely matching roles, while companies need an efficient way to post openings and reach qualified candidates.',
    whatIDid:
      'Led development of the core platform as part of the team building Workdu — candidate and employer profiles, job postings, and the application workflow — for a product that also includes AI-assisted job matching and resume tools.',
    result:
      'A live platform currently listing active roles from verified employers, including established companies like TCS, Infosys, and Wipro.',
    link: 'https://workdu.com',
    tags: ['PHP', 'MySQL', 'JavaScript'],
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
