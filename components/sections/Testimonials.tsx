import { testimonials } from '@/content/testimonials'
import { Section, SectionHeading } from '../ui'

/**
 * Client testimonials. Renders nothing while /content/testimonials.ts is
 * empty, so no placeholder quotes can ever reach the live site.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <Section labelledBy="testimonials-title">
      <SectionHeading id="testimonials-title" eyebrow="Kind words" title="What our clients say" />
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.name} className="card flex flex-col p-6" data-reveal>
            <blockquote className="text-lg">“{t.quote}”</blockquote>
            <p className="mt-auto pt-5 font-bold">
              {t.name}
              <span className="block text-sm font-medium text-ink-soft">
                {t.business}, {t.city}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
