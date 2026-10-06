import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { site } from '@/content/site'
import manifests from '@/public/frames/manifests.json'
import type { Manifests } from '@/lib/types'
import SmoothScroll from '@/components/SmoothScroll'
import Nav from '@/components/Nav'
import './globals.css'

// next/font self-hosts and inlines the @font-face with size-adjust metrics,
// so there is no network request to Google and no layout shift on swap.
const heading = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const heroManifest = (manifests as Manifests).hero
const HERO_POSTER = heroManifest.desktop.poster.webp

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.studio,
    title: site.title,
    description: site.description,
    locale: 'en_IN',
    images: [{ url: HERO_POSTER, width: 1200, height: 630, alt: `${site.studio} — ${site.name}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [HERO_POSTER],
  },
  manifest: '/site.webmanifest',
  icons: { icon: '/favicon.png', apple: '/apple-touch-icon.png' },
}

/** Person + ProfessionalService, cross-linked by @id. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${site.url}/#viswa`,
      name: site.name,
      jobTitle: 'Web Developer & Digital Growth Specialist',
      worksFor: { '@id': `${site.url}/#lunolab` },
      email: `mailto:${site.email}`,
      telephone: site.phone,
      sameAs: [site.linkedin, site.instagram],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${site.url}/#lunolab`,
      name: site.studio,
      url: site.url,
      founder: { '@id': `${site.url}/#viswa` },
      email: `mailto:${site.email}`,
      telephone: site.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'City', name: site.city },
        { '@type': 'State', name: site.region },
        { '@type': 'Country', name: site.country },
      ],
      sameAs: [site.linkedin, site.instagram],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: [
          'Website Development',
          'SEO',
          'Automation',
          'Digital Growth',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${heading.variable} ${body.variable}`}>
      <body className="grain font-body antialiased">
        {/* The hero poster is the LCP element. Next does not emit a preload
            for an <img> inside a <picture>, so these are hand-written — and
            scoped by media so a phone fetches only the portrait one. AVIF is
            preloaded because that is what <picture> prefers; browsers
            without AVIF skip it on `type` and fall back to the WebP. */}
        <link
          rel="preload"
          as="image"
          href={heroManifest.desktop.poster.avif ?? heroManifest.desktop.poster.webp}
          type={heroManifest.desktop.poster.avif ? 'image/avif' : 'image/webp'}
          media="(min-aspect-ratio: 1/1)"
          fetchPriority="high"
        />
        {heroManifest.mobile && (
          <link
            rel="preload"
            as="image"
            href={heroManifest.mobile.poster.avif ?? heroManifest.mobile.poster.webp}
            type={heroManifest.mobile.poster.avif ? 'image/avif' : 'image/webp'}
            media="(max-aspect-ratio: 1/1)"
            fetchPriority="high"
          />
        )}
        <script
          type="application/ld+json"
          // Static, build-time constant — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <Nav />
        <main id="top">{children}</main>
      </body>
    </html>
  )
}
