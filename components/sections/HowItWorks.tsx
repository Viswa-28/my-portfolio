import { steps } from '@/content/home'
import { PrimaryCta, Section, SectionHeading } from '../ui'

/** Four numbered steps: Free call → Design preview → Launch → Support. */
export default function HowItWorks() {
  return (
    <Section labelledBy="steps-title" className="bg-white/60">
      <SectionHeading id="steps-title" eyebrow={steps.eyebrow} title={steps.h2} />

      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.items.map((step, i) => (
          <li key={step.title} className="card relative p-6" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
            <span
              className="grid size-12 place-items-center rounded-full border-2 border-ink bg-violet-deep font-heading text-xl font-extrabold text-white"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <h3 className="mt-5 text-xl font-extrabold">
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </h3>
            <p className="mt-2 text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10" data-reveal>
        <PrimaryCta location="how_it_works" />
      </div>
    </Section>
  )
}
