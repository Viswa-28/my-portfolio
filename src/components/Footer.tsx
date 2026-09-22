import Logo from './Logo'

const services = [
  'Websites',
  'SEO',
  'Social Media',
  'Digital Growth',
  'Analytics & Reports',
]

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Selected Work' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/viswaa28/' },
  { label: 'GitHub', href: 'https://github.com/Viswa-28/' },
]

function Footer() {
  return (
    <footer className="border-t border-line px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8 shrink-0" />
              <span className="font-heading text-xl font-extrabold tracking-tight text-ink">
                LUNO<span className="text-accent">LAB</span>
              </span>
            </div>
            <p className="text-xs font-semibold tracking-[0.15em] text-muted uppercase">
              Digital Growth Studio
            </p>
            <p className="max-w-sm text-sm text-body">
              LunoLab builds websites for businesses that need their online presence
              to do real work — then measures whether it did.
            </p>
            <div className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-card px-3 py-1.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span className="text-xs font-medium text-accent">
                Available for select projects
              </span>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold tracking-[0.15em] text-muted uppercase">
              Services
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-body">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.15em] text-muted uppercase">
              Navigation
            </h2>
            <ul className="mt-4 flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-9 items-center text-sm text-body transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex items-center gap-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-xs font-semibold tracking-[0.1em] text-muted uppercase transition-colors hover:text-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-line pt-8 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} LunoLab. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, and Vite.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
