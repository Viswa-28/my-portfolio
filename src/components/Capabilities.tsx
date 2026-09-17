import { motion } from 'motion/react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import SplitText from './SplitText'
import CountUp from './CountUp'
import LogoLoop, { type LogoItem } from './LogoLoop'
import { techLogos } from '../data/techLogos'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { staggerContainer, staggerItem } from '../lib/motion'

const reduce = prefersReducedMotion

// Verifiable only — 4 shipped sites, the 11 tools in the marquee below, and a
// response window that is a commitment rather than a measurement.
const metrics: { end: number; suffix: string; label: string }[] = [
  { end: 4, suffix: '', label: 'Live projects' },
  { end: 10, suffix: '+', label: 'Tools & tech' },
  { end: 24, suffix: 'h', label: 'Reply window' },
]

const capabilities: { title: string; detail: string }[] = [
  {
    title: 'Web Development',
    detail: 'Responsive sites and web apps, built and shipped end to end.',
  },
  {
    title: 'SEO & Local Visibility',
    detail: 'On-page structure, metadata, and local search fundamentals.',
  },
  {
    title: 'Social Media Strategy',
    detail: 'Profile positioning, content direction, and campaign support.',
  },
  {
    title: 'Digital Marketing',
    detail: 'Enquiry funnels that turn visits into real conversations.',
  },
  {
    title: 'Analytics & Reporting',
    detail: 'Traffic, enquiries, and engagement reported in plain language.',
  },
  {
    title: 'Business Growth',
    detail: 'Joining the pieces so the site actually earns its keep.',
  },
]

// Typography-led marquee item: the tool name itself, set large, not an icon
// chip. logoloop__node/link keep the hover-scale + focus styling working.
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

function Capabilities() {
  return (
    <section
      id="about"
      className="scroll-mt-24 overflow-hidden px-6 py-16 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionHeading index="01">Philosophy &amp; Capability</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SplitText
              as="p"
              by="word"
              trigger="scroll"
              highlight="works."
              text="I combine web development, design, SEO, and digital marketing to help businesses turn their online presence into something that actually works."
              className="max-w-2xl font-heading text-lede font-bold tracking-[-0.03em] text-ink"
            />
            <Reveal>
              <p className="mt-6 max-w-xl text-base text-body lg:text-lg">
                My approach is simple: understand the business, identify what is
                holding its digital presence back, build the right solution, and
                measure what happens next. I focus on practical solutions instead
                of unnecessary complexity.
              </p>

              <ul className="mt-10 grid grid-cols-3 gap-3">
                {metrics.map((metric) => (
                  <li
                    key={metric.label}
                    className="rounded-card border border-line bg-card p-4"
                  >
                    <span className="block font-heading text-2xl font-bold text-accent lg:text-3xl">
                      <CountUp end={metric.end} suffix={metric.suffix} />
                    </span>
                    <span className="mt-1 block text-xs font-medium tracking-[0.1em] text-muted uppercase">
                      {metric.label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Capability matrix */}
          <motion.ul
            className="grid auto-rows-min content-start grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-5"
            variants={reduce ? undefined : staggerContainer}
            initial={reduce ? undefined : 'hidden'}
            whileInView={reduce ? undefined : 'show'}
            viewport={{ once: true, amount: 0.15 }}
          >
            {capabilities.map((item) => (
              <motion.li
                key={item.title}
                variants={reduce ? undefined : staggerItem}
                className="rounded-card border border-line bg-card p-4 transition-colors hover:border-accent/40 hover:bg-surface"
              >
                <h3 className="text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Toolset marquee — reduced-motion users get a static wrapped list. */}
        <Reveal>
          <p className="mt-16 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            Tools I work with
          </p>
          {reduce ? (
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              {techLogos.map((item, i) => (
                <li key={i}>
                  <span className="font-heading text-role font-bold text-ink">
                    {'title' in item ? item.title : ''}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-6">
              <LogoLoop
                logos={techLogos}
                speed={40}
                direction="left"
                gap={64}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#0b0c0f"
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

export default Capabilities
