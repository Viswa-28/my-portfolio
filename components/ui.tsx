import { site } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'
import { WhatsAppIcon } from './icons'

/** Sticker eyebrow + H2 (+ optional intro) used at the top of each section. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  sub,
  align = 'left',
}: {
  id: string
  eyebrow: string
  title: string
  sub?: string
  align?: 'left' | 'center'
}) {
  const center = align === 'center'
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} data-reveal>
      <span className="sticker [--tilt:-3deg]">{eyebrow}</span>
      <h2 id={id} className="mt-5 text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg text-ink-soft">{sub}</p>}
    </div>
  )
}

/**
 * The one primary offer: "Get a Free Website Plan" → WhatsApp.
 * `location` is sent with the whatsapp_click event so we know which CTA converts.
 */
export function PrimaryCta({
  location,
  message,
  label = site.primaryCta,
  className = '',
}: {
  location: string
  message?: string
  label?: string
  className?: string
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener"
      data-track="whatsapp_click"
      data-track-location={location}
      className={`btn btn-primary text-lg ${className}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  )
}

/** Shared section wrapper: consistent width, padding and an anchor id. */
export function Section({
  id,
  labelledBy,
  className = '',
  children,
}: {
  id?: string
  labelledBy: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  )
}
