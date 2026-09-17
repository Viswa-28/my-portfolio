import Reveal from './Reveal'
import ContactForm from './ContactForm'

const EMAIL = 'viswaa288@gmail.com'

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
                <p className="mt-4 max-w-md text-base text-body lg:text-lg">
                  Tell me what you're trying to achieve and we'll work out what
                  actually makes sense.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-muted">
                  <span className="text-accent">✉</span>
                  <span>Direct reply within 24 hours</span>
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
