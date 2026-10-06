import Reveal from '@/components/Reveal'
import { footer, site } from '@/content/site'
import { logoVariant, inkOn } from '@/lib/color'

/** Sunrise cream from the brand palette. */
const FOOTER_BG = '#F4D9C0'

const socials = [
  { label: 'Instagram', href: site.instagram },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'Email', href: `mailto:${site.email}` },
]

export default function Footer() {
  const variant = logoVariant(FOOTER_BG)
  const ink = inkOn(FOOTER_BG)

  return (
    <footer
      data-nav-theme={variant === 'dark' ? 'light-bg' : 'dark-bg'}
      className="px-6 py-20 lg:px-10"
      style={{ backgroundColor: FOOTER_BG, color: ink }}
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/brand/luno-${variant}.svg`}
            alt={`${site.studio} logo`}
            width={132}
            height={28}
            loading="lazy"
            className="h-7 w-auto"
          />

          <p className="mt-8 max-w-md font-heading text-2xl font-bold tracking-[-0.02em] lg:text-3xl">
            {footer.line}
          </p>

          <div className="mt-12 flex flex-col justify-between gap-6 border-t pt-8 sm:flex-row sm:items-center"
               style={{ borderColor: `${ink}22` }}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...(s.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="inline-flex min-h-11 items-center text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    {s.label}
                    {s.href.startsWith('http') && (
                      <span className="sr-only"> (opens in a new tab)</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} {site.studio}
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
