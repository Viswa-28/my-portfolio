import { Head } from 'vite-react-ssg'
import { DOMAIN, SITE, url } from '../lib/site'

type SeoProps = {
  title: string
  description: string
  /** Route path, e.g. '/seo-services-madurai'. Drives canonical + og:url. */
  path: string
  /** Extra JSON-LD for this page, merged into the shared @graph. */
  schema?: Record<string, unknown>[]
}

// Per-page head. Rendered through vite-react-ssg's <Head>, so these tags are
// baked into the static HTML at build time rather than injected by React on
// the client — which matters because social crawlers (LinkedIn, WhatsApp,
// Facebook) never run JavaScript and would otherwise see the shell's tags on
// every URL.
function Seo({ title, description, path, schema = [] }: SeoProps) {
  const canonical = url(path)

  const graph = [
    {
      '@type': 'ProfessionalService',
      '@id': `${DOMAIN}/#lunolab`,
      name: SITE.name,
      alternateName: SITE.legalName,
      slogan: SITE.slogan,
      url: DOMAIN,
      email: `mailto:${SITE.email}`,
      ...(SITE.phone ? { telephone: `+${SITE.phone}` } : {}),
      ...(SITE.phone
        ? {
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: `+${SITE.phone}`,
              contactType: 'sales',
              areaServed: SITE.countryCode,
              availableLanguage: ['en', 'ta'],
            },
          }
        : {}),
      founder: { '@id': `${DOMAIN}/#viswa` },
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.city,
        addressRegion: SITE.region,
        addressCountry: SITE.countryCode,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: SITE.geo.lat,
        longitude: SITE.geo.lng,
      },
      areaServed: [
        { '@type': 'City', name: SITE.city },
        { '@type': 'State', name: SITE.region },
        { '@type': 'Country', name: SITE.country },
      ],
      sameAs: [...SITE.social],
    },
    {
      '@type': 'Person',
      '@id': `${DOMAIN}/#viswa`,
      name: SITE.founder,
      jobTitle: 'Web Developer & Digital Growth Specialist',
      worksFor: { '@id': `${DOMAIN}/#lunolab` },
      email: `mailto:${SITE.email}`,
      sameAs: [...SITE.social],
    },
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      isPartOf: { '@id': `${DOMAIN}/#website` },
      about: { '@id': `${DOMAIN}/#lunolab` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'WebSite',
      '@id': `${DOMAIN}/#website`,
      url: DOMAIN,
      name: SITE.name,
      publisher: { '@id': `${DOMAIN}/#lunolab` },
      inLanguage: 'en-IN',
    },
    ...schema,
  ]

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={url('/og-image.jpg')} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={url('/og-image.jpg')} />

      <meta name="geo.region" content={SITE.regionCode} />
      <meta name="geo.placename" content={SITE.city} />

      <script type="application/ld+json">
        {JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}
      </script>
    </Head>
  )
}

export default Seo
