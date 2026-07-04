import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ContactForm from './ContactForm'

const directLinks = [
  {
    label: 'Email',
    value: 'viswaa288@gmail.com',
    href: 'mailto:viswaa288@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/viswaa28',
    href: 'https://www.linkedin.com/in/viswaa28/',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/Viswa-28',
    href: 'https://github.com/Viswa-28/',
    external: true,
  },
]

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading>Contact</SectionHeading>
          <p className="mt-6 max-w-lg text-lg text-body sm:text-xl">
            Have a role or project in mind? Send a message below, or connect
            directly.
          </p>

          <ContactForm />

          <h3 className="mt-10 font-heading text-xs font-semibold tracking-[0.15em] text-muted uppercase">
            Or reach me directly
          </h3>
          <ul className="mt-3 text-base text-body">
            {directLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="inline-flex min-h-11 items-center gap-2 break-all transition-colors hover:text-accent"
                >
                  <span className="font-medium text-ink">{link.label}:</span>
                  <span className="text-accent">{link.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
