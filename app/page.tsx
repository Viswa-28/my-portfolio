import { faq, services } from '@/content/home'
import { site } from '@/content/site'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Problem from '@/components/sections/Problem'
import Services from '@/components/sections/Services'
import Work from '@/components/sections/Work'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
import OurPromise from '@/components/sections/OurPromise'
import Testimonials from '@/components/sections/Testimonials'
import Faq from '@/components/sections/Faq'
import FinalCta from '@/components/sections/FinalCta'

/** LocalBusiness/ProfessionalService + FAQPage, built from /content. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': `${site.url}/#business`,
      name: site.name,
      url: site.url,
      description: site.seo.description,
      telephone: site.phone,
      email: site.email,
      image: `${site.url}/og.png`,
      logo: `${site.url}/apple-touch-icon.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: site.country,
      },
      areaServed: { '@type': 'State', name: site.region },
      sameAs: [site.instagram],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: services.items.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.name, description: s.title },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${site.url}/#faq`,
      mainEntity: faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
}

/** Single landing page; section order follows the conversion brief. */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Static build-time content only; no user input reaches this.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Marquee />
      <Problem />
      <Services />
      <Work />
      <HowItWorks />
      <Pricing />
      <OurPromise />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  )
}
