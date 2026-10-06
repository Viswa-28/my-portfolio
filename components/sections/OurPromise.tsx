import { promise } from '@/content/home'
import { CheckIcon } from '../icons'
import { PrimaryCta, Section } from '../ui'

/** Our promise: stands in for testimonials until there are real ones. */
export default function OurPromise() {
  return (
    <Section labelledBy="promise-title">
      <div className="card grid gap-10 bg-ink p-6 text-paper sm:p-12 lg:grid-cols-[1fr_1.2fr] lg:items-center" data-reveal>
        <div>
          <span className="sticker [--tilt:-3deg]">{promise.eyebrow}</span>
          <h2 id="promise-title" className="mt-5 text-3xl leading-tight font-extrabold sm:text-4xl">
            {promise.h2}
          </h2>
          <PrimaryCta location="promise" className="mt-8" />
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {promise.items.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl border-2 border-paper/30 p-5 text-lg font-semibold">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-lime text-ink">
                <CheckIcon />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
