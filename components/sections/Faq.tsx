import { faq } from '@/content/home'
import { Section, SectionHeading } from '../ui'

/**
 * FAQ accordion built on native <details>/<summary>: keyboard and
 * screen-reader accessible with zero JavaScript. The matching FAQPage
 * JSON-LD is emitted in app/page.tsx from the same content.
 */
export default function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title" className="bg-white/60">
      <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.h2} align="center" />

      <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
        {faq.items.map((item) => (
          <details key={item.q} className="faq card group overflow-hidden" data-reveal>
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-lg font-bold sm:px-6">
              <h3>{item.q}</h3>
              <span
                className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-ink bg-lime text-xl leading-none transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-ink-soft sm:px-6">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
