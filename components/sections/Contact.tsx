import ScrollSequence from '@/components/ScrollSequence'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { contact, site } from '@/content/site'
import { SEQUENCES } from '@/config/sequences'
import manifests from '@/public/frames/manifests.json'
import type { Manifests } from '@/lib/types'

const all = manifests as Manifests

const WA = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi Viswa, I'd like to talk about a project."
)}`

const channels = [
  { label: 'WhatsApp', href: WA, external: true },
  { label: site.email, href: `mailto:${site.email}`, external: false },
  { label: 'LinkedIn', href: site.linkedin, external: true },
]

export default function Contact() {
  const cfg = SEQUENCES.contact

  return (
    <ScrollSequence
      id="contact"
      manifest={all.contact}
      scrollVh={cfg.scrollVh}
      focalX={cfg.focalX}
      focalY={cfg.focalY}
    >
      <div className="relative z-10 flex h-full items-center px-6 py-20 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <h2 className="max-w-md font-heading text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] font-bold tracking-[-0.03em] text-light">
                {contact.heading}
              </h2>
              <p className="mt-5 max-w-md text-base text-light/75 lg:text-lg">
                {contact.body}
              </p>
              <p className="mt-6 text-xs font-semibold tracking-[0.14em] text-light/50 uppercase">
                {site.city}, {site.region}
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      {...(c.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="inline-flex min-h-11 items-center text-sm font-semibold text-violet-ink transition-colors hover:text-light"
                    >
                      {c.label}
                      {c.external && <span className="sr-only"> (opens in a new tab)</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="rounded-2xl border border-light/12 bg-night/60 p-6 backdrop-blur-sm lg:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </ScrollSequence>
  )
}
