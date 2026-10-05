import type { ReactNode } from 'react'
import Seo from './Seo'
import { DOMAIN, SITE } from '../lib/site'

export type Faq = { q: string; a: string }

type ServicePageProps = {
  path: string
  title: string
  description: string
  /** Visible H1 — carries the page's primary keyword. */
  h1: string
  eyebrow: string
  intro: ReactNode
  /** schema.org Service name, e.g. 'Web Design and Development'. */
  serviceType: string
  includes: { title: string; detail: string }[]
  /** Unique long-form body. Each page writes its own — no shared boilerplate. */
  body: ReactNode
  faqs: Faq[]
}

// Shared shell for the service landing pages. The *layout* is shared; every
// word of content is per-page, because near-duplicate service pages are
// treated as thin content and can drag the whole domain down.
function ServicePage({
  path,
  title,
  description,
  h1,
  eyebrow,
  intro,
  serviceType,
  includes,
  body,
  faqs,
}: ServicePageProps) {
  return (
    <>
      <Seo
        path={path}
        title={title}
        description={description}
        schema={[
          {
            '@type': 'Service',
            '@id': `${DOMAIN}${path}#service`,
            name: serviceType,
            serviceType,
            provider: { '@id': `${DOMAIN}/#lunolab` },
            areaServed: [
              { '@type': 'City', name: SITE.city },
              { '@type': 'State', name: SITE.region },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: `${serviceType} — what's included`,
              itemListElement: includes.map((item) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: item.title },
              })),
            },
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${DOMAIN}${path}#breadcrumbs`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
              { '@type': 'ListItem', position: 2, name: h1, item: `${DOMAIN}${path}` },
            ],
          },
          {
            '@type': 'FAQPage',
            '@id': `${DOMAIN}${path}#faq`,
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />

      <section className="relative isolate scroll-mt-24 overflow-hidden px-6 pt-16 pb-12 lg:px-12 lg:pt-24">
        <div
          aria-hidden="true"
          className="ambient-glow pointer-events-none absolute -top-24 left-1/4 -z-10 h-96 w-96 rounded-full"
        />
        <div className="mx-auto max-w-[1440px]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-muted uppercase">
              <li>
                <a href="/" className="transition-colors hover:text-accent">
                  Home
                </a>
              </li>
              <li aria-hidden="true" className="text-accent/50">
                /
              </li>
              <li className="text-accent">{eyebrow}</li>
            </ol>
          </nav>

          <h1 className="max-w-4xl font-heading text-huge font-extrabold tracking-[-0.03em] text-ink">
            {h1}
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-base text-body lg:text-lg">
            {intro}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              Start a project
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="/#work"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-card px-7 text-base font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              See the work
              <span aria-hidden="true" className="text-accent">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-heading text-lede font-bold tracking-[-0.03em] text-ink">
            What's included
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {includes.map((item) => (
              <li
                key={item.title}
                className="rounded-card border border-line bg-card p-5 transition-colors hover:border-accent/40 hover:bg-surface"
              >
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl space-y-10">{body}</div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-heading text-lede font-bold tracking-[-0.03em] text-ink">
            Common questions
          </h2>
          <dl className="mt-8 max-w-3xl divide-y divide-line border-t border-line">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="font-heading text-base font-bold text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm text-body lg:text-base">{f.a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-panel border border-line bg-card p-6 lg:flex-row lg:items-center lg:p-10">
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-ink lg:text-3xl">
                Based in {SITE.city}. Working across {SITE.region}.
              </h2>
              <p className="mt-2 max-w-xl text-base text-body">
                Tell us what you're trying to achieve and we'll tell you what
                would actually move the needle. Direct reply within 24 hours.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              Start a project
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicePage
