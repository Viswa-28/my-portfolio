import { finalCta } from '@/content/home'
import { site } from '@/content/site'
import ContactForm from '../ContactForm'
import { Icon, SquiggleArrow } from '../icons'
import { PrimaryCta } from '../ui'

/** Closing CTA: WhatsApp, click-to-call, and a short call-back form. */
export default function FinalCta() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="card grid gap-10 bg-violet-deep p-6 text-white sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="contact-title" className="text-4xl leading-tight font-extrabold sm:text-5xl">
              {finalCta.h2}
            </h2>
            <p className="mt-4 text-lg text-white/90">{finalCta.sub}</p>

            <div className="mt-8 flex flex-col gap-3 sm:items-start">
              <PrimaryCta location="final_cta" className="bg-lime text-ink" />
              <a href={`tel:${site.phone}`} data-track="call_click" className="btn btn-secondary text-lg">
                <Icon name="phone" className="size-5" />
                Call {site.phoneDisplay}
              </a>
            </div>
            <SquiggleArrow className="mt-6 hidden w-24 rotate-[-20deg] text-lime lg:block" />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
