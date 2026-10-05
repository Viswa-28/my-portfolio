import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { tiers, hasPricing } from '../data/pricing'

const inr = new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 0,
})

const range = (min: number, max: number) => `₹${inr.format(min)} – ₹${inr.format(max)}`

// Two modes, one section. With real figures it shows price anchors, which
// filter out people with no budget before they cost you a call. Without them
// it explains how quoting works — which answers most of the same anxiety and
// is better than the nothing that was there before.
function Pricing({ index }: { index: string }) {
  return (
    <section id="pricing" className="scroll-mt-24 px-6 py-16 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionHeading index={index}>Investment</SectionHeading>
          <h2 className="mt-3 font-heading text-lede font-bold tracking-[-0.03em] text-ink">
            {hasPricing ? 'What it costs' : 'How we quote'}
          </h2>
          <p className="mt-3 max-w-xl text-base text-body">
            {hasPricing
              ? 'Three ways most projects start. Every quote is still based on your actual scope, and the first conversation is free.'
              : 'No fixed packages, and no number until we understand the job. Here is exactly how it works.'}
          </p>
        </Reveal>

        {hasPricing ? (
          <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {tiers.map((tier) => (
              <li
                key={tier.name}
                className={`relative flex flex-col rounded-panel border bg-card p-6 transition-colors ${
                  tier.featured
                    ? 'border-accent/60 bg-surface'
                    : 'border-line hover:border-accent/40'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-on-accent uppercase">
                    Most chosen
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-ink">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted">{tier.summary}</p>
                <p className="mt-5 font-heading text-2xl font-extrabold text-accent">
                  {range(tier.min, tier.max)}
                </p>
                <p className="text-xs font-medium tracking-[0.1em] text-muted uppercase">
                  {tier.unit}
                </p>
                <ul className="mt-5 flex flex-col gap-2 border-t border-line pt-5">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-body">
                      <span aria-hidden="true" className="text-accent">
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'The first conversation is free',
                detail:
                  'Tell us what you are trying to achieve. No charge, no obligation, and no pitch deck.',
              },
              {
                step: '02',
                title: 'A written scope and a fixed price',
                detail:
                  'You see the number and exactly what it covers before any work starts. If it is wrong, say so then.',
              },
              {
                step: '03',
                title: 'What moves the price',
                detail:
                  'How many pages, whether content already exists, and whether it is a one-off build or ongoing work.',
              },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-panel border border-line bg-card p-6"
              >
                <span className="font-heading text-xs font-bold text-accent/70">
                  {item.step}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-body">{item.detail}</p>
              </li>
            ))}
          </ol>
        )}

        {hasPricing && (
          <p className="mt-6 max-w-2xl text-sm text-muted">
            What moves a quote inside a range: how many pages, whether the
            copy and images already exist, and how much of the content you
            want to be able to change yourself afterwards.
          </p>
        )}
      </div>
    </section>
  )
}

export default Pricing
