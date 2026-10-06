import { footer } from '@/content/home'
import { nav, site } from '@/content/site'
import Logo from '../Logo'
import { Icon } from '../icons'

/** Footer: brand, contact details, quick links. */
export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-white pb-24 sm:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 sm:px-6 md:grid-cols-[1.3fr_1fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-ink-soft">{footer.pitch}</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex min-h-12 items-center gap-2 font-semibold underline-offset-4 hover:underline"
          >
            <Icon name="instagram" className="size-5" />
            Follow us on Instagram
          </a>
        </div>

        <div>
        <h2 className="font-heading text-lg font-extrabold">Contact</h2>
        <address className="mt-3 flex flex-col gap-3 not-italic">
          <p className="flex gap-2">
            <Icon name="pin" className="mt-0.5 size-5 shrink-0" />
            {site.address}
          </p>
          <a href={`tel:${site.phone}`} data-track="call_click" data-track-location="footer" className="flex min-h-8 items-center gap-2 hover:underline">
            <Icon name="phone" className="size-5 shrink-0" />
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="flex min-h-8 items-center gap-2 break-all hover:underline">
            <Icon name="mail" className="size-5 shrink-0" />
            {site.email}
          </a>
          <p className="flex gap-2">
            <Icon name="clock" className="mt-0.5 size-5 shrink-0" />
            {site.hours}
          </p>
        </address>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-heading text-lg font-extrabold">Quick links</h2>
          <ul className="mt-3 flex flex-col">
            {[...nav, { label: 'Contact', href: '#contact' }].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-10 items-center hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="mx-auto mt-10 max-w-6xl px-4 text-sm text-ink-soft sm:px-6">
        © {new Date().getFullYear()} {site.name}, {site.city}. All rights reserved.
      </p>
    </footer>
  )
}
