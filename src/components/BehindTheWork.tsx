import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

function BehindTheWork() {
  return (
    <section
      id="story"
      className="scroll-mt-24 px-6 py-16 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="relative isolate overflow-hidden rounded-panel border border-line bg-card p-6 lg:p-12">
          <div
            aria-hidden="true"
            className="ambient-glow pointer-events-none absolute -right-16 -bottom-16 -z-10 h-80 w-80 rounded-full"
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading index="05">Behind the Work</SectionHeading>
                <p className="mt-4 h-1 w-16 rounded-full bg-accent" />
                <p className="mt-4 text-sm text-muted">
                  A developer's mindset, pointed at business outcomes.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal>
                <blockquote className="font-heading text-2xl font-bold tracking-[-0.03em] text-ink lg:text-3xl">
                  “I believe good digital work sits at the intersection of
                  technology, creativity, and business.”
                </blockquote>
                <p className="mt-6 max-w-2xl text-base text-body lg:text-lg">
                  My background in web development gives me the technical
                  foundation to build digital products, while my growing focus
                  on SEO, analytics, and marketing helps me think beyond just
                  the code.
                </p>

                <div className="mt-8 rounded-card border border-line bg-surface p-6">
                  <p className="text-sm font-medium text-body">
                    The goal isn't simply to create something that looks good.
                  </p>
                  <p className="mt-1 font-heading text-xl font-bold text-accent lg:text-2xl">
                    The goal is to create something useful.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BehindTheWork
