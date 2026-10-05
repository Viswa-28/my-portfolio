import Reveal from './Reveal'
import ContactForm from './ContactForm'
import { SITE, whatsappLink, telLink, phoneDisplay } from '../lib/site'

const EMAIL = SITE.email
const WA = whatsappLink("Hi LunoLab, I'd like to talk about a project.")
const TEL = telLink()
const PHONE = phoneDisplay()

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 py-16 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="relative isolate overflow-hidden rounded-panel border border-line bg-card p-6 lg:p-16">
          <div
            aria-hidden="true"
            className="ambient-glow pointer-events-none absolute -top-32 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full"
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                    Let's connect
                  </span>
                </div>

                <h2 className="mt-6 font-heading text-lede font-bold tracking-[-0.03em] text-ink">
                  Have an idea or a business that needs a better digital
                  presence?
                </h2>
                <p className="mt-3 text-sm font-semibold tracking-[0.12em] text-muted uppercase">
                  Madurai, Tamil Nadu · Working with clients across India
                </p>
                <p className="mt-4 max-w-md text-base text-body lg:text-lg">
                  Tell us what you're trying to achieve and we'll work out what
                  actually makes sense.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-muted">
                  <span className="text-accent">✉</span>
                  <span>Direct reply within 24 hours</span>
                </div>

                {/* WhatsApp leads: most visitors arrive on a phone from an
                    Instagram ad, and a message is a far smaller ask than a
                    form at that moment. The form stays for longer briefs. */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {WA && (
                    <a
                      href={WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-base font-semibold text-on-accent transition-colors hover:bg-accent-hover"
                    >
                      Message on WhatsApp
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  )}
                  {TEL && PHONE && (
                    <a
                      href={TEL}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 text-base font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      <span aria-hidden="true" className="text-accent">
                        ☎
                      </span>
                      {PHONE}
                    </a>
                  )}
                </div>

                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-4 block text-sm font-semibold break-all text-accent transition-colors hover:text-accent-hover"
                >
                  {EMAIL}
                </a>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
