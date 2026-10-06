import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import { site } from '@/content/site'
import Navbar from '@/components/Navbar'
import WhatsAppFab from '@/components/WhatsAppFab'
import Analytics from '@/components/Analytics'
import RevealObserver from '@/components/RevealObserver'
import Footer from '@/components/sections/Footer'
import './globals.css'

// next/font self-hosts both fonts (no request to Google at runtime) and
// adds size-adjusted fallbacks so the swap causes no layout shift.
const heading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '800'],
  variable: '--font-bricolage',
})

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seo.title,
    description: site.seo.description,
  },
  manifest: '/site.webmanifest',
  icons: { icon: '/favicon.png', apple: '/apple-touch-icon.png' },
}

export const viewport: Viewport = {
  themeColor: '#7C5CFF',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${heading.variable} ${body.variable}`}>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla's
          cz-shortcut-listen) inject attributes on <body> before React loads.
          Applies to this element's attributes only, not its children. */}
      <body className="antialiased" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-ink px-4 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
        <Analytics />
        <RevealObserver />
      </body>
    </html>
  )
}
