import { pricingIntro } from '@/content/home'
import { plans } from '@/content/pricing'
import { whatsappLink } from '@/lib/whatsapp'
import { CheckIcon, WhatsAppIcon } from '../icons'
import { Section, SectionHeading } from '../ui'

/** Three packages; each CTA opens WhatsApp with the plan name pre-filled. */
export default function Pricing() {
  return (
    <Section id="pricing" labelledBy="pricing-title">
      <SectionHeading id="pricing-title" eyebrow={pricingIntro.eyebrow} title={pricingIntro.h2} sub={pricingIntro.sub} />

      <ul className="mt-14 grid items-stretch gap-8 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <li
            key={plan.name}
            data-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
            className={`card relative flex flex-col p-7 ${plan.popular ? 'bg-violet-soft shadow-hard-lg lg:-translate-y-3' : ''}`}
          >
            {plan.popular && (
              <span className="sticker absolute -top-4 right-6 [--tilt:5deg]">★ Most popular</span>
            )}
            <h3 className="text-2xl font-extrabold">{plan.name}</h3>
            <p className="mt-2 text-ink-soft">{plan.tagline}</p>

            <p className="mt-6">
              <span className="block text-sm font-semibold text-ink-soft">Starting from</span>
              <span className="font-heading text-4xl font-extrabold">{plan.price}</span>
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border-2 border-ink bg-lime">
                    <CheckIcon className="size-3.5" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(`Hi Luno Lab, I'm interested in the ${plan.name} plan for my business.`)}
              target="_blank"
              rel="noopener"
              data-track="plan_click"
              data-track-plan-name={plan.name}
              className={`btn mt-8 w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
            >
              <WhatsAppIcon />
              Get this plan
              <span className="sr-only">: {plan.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
