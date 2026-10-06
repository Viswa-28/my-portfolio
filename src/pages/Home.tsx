import { Head } from 'vite-react-ssg'
import markUrl from '../assets/lunolab-mark.png'

// Deliberately sparse. The sequence needs real scroll distance to play
// across, so the sections below establish the rhythm and the readable-over-
// sky treatment; the content itself gets rebuilt from here.
const sections = [
  {
    kicker: 'Ideas',
    title: 'It starts with the business, not the brief.',
    body: 'We work out what is actually holding a digital presence back before anyone opens a design tool.',
  },
  {
    kicker: 'Presence',
    title: 'The site, search and social as one system.',
    body: 'Designed and built together, so the parts point at the same outcome instead of competing.',
  },
  {
    kicker: 'Results',
    title: 'Measured against enquiries, not impressions.',
    body: 'Traffic and engagement reported in plain language, and used to decide what changes next.',
  },
]

function Home() {
  return (
    <>
      <Head>
        <title>LunoLab — Digital Growth Studio</title>
        <meta
          name="description"
          content="LunoLab is a digital growth studio in Madurai building websites, SEO and social media for Tamil Nadu businesses."
        />
        <meta name="theme-color" content="#f1f6fb" />
      </Head>

      <section className="read-scrim relative isolate flex min-h-svh flex-col justify-center px-6 py-24 lg:px-12">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="flex items-center gap-3">
            <img src={markUrl} alt="" aria-hidden="true" width={144} height={144} className="h-10 w-10" />
            <span className="font-heading text-lg font-extrabold tracking-tight text-ink">
              LUNO<span className="text-accent">LAB</span>
            </span>
          </div>

          <h1 className="mt-10 max-w-4xl font-heading text-hero font-extrabold tracking-[-0.03em] text-ink">
            We turn ideas into presence, and presence into results.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-body">
            A digital growth studio in Madurai, working with businesses across
            Tamil Nadu.
          </p>

          <p className="mt-16 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            Scroll
          </p>
        </div>
      </section>

      {sections.map((s) => (
        <section key={s.kicker} className="flex min-h-svh items-center px-6 py-24 lg:px-12">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="max-w-2xl rounded-panel border border-line bg-card/80 p-8 backdrop-blur-md lg:p-12">
              <p className="font-heading text-xs font-bold tracking-[0.2em] text-accent uppercase">
                {s.kicker}
              </p>
              <h2 className="mt-4 font-heading text-huge font-extrabold tracking-[-0.03em] text-ink">
                {s.title}
              </h2>
              <p className="mt-5 text-lg text-body">{s.body}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default Home
