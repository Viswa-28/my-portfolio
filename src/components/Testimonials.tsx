import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { testimonials } from '../data/testimonials'

// Renders nothing while src/data/testimonials.ts is empty, so the section is
// simply absent from the live site rather than showing a placeholder. Drop
// real quotes into that file and it appears.
function Testimonials({ index }: { index: string }) {
  if (testimonials.length === 0) return null

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 px-6 py-16 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionHeading index={index}>Client Feedback</SectionHeading>
          <h2 className="mt-3 font-heading text-lede font-bold tracking-[-0.03em] text-ink">
            What clients say
          </h2>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <li
              key={`${t.name}-${t.company}`}
              className="flex flex-col rounded-panel border border-line bg-card p-6 lg:p-8"
            >
              <blockquote className="font-heading text-lg font-bold tracking-[-0.02em] text-ink lg:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                <span className="block font-semibold text-ink">{t.name}</span>
                <span className="block text-muted">
                  {t.role}, {t.company}
                </span>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Testimonials
