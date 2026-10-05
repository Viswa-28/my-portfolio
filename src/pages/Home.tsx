import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Capabilities from '../components/Capabilities'
import Services from '../components/Services'
import Work from '../components/Work'
import Process from '../components/Process'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import BehindTheWork from '../components/BehindTheWork'
import Contact from '../components/Contact'
import { testimonials } from '../data/testimonials'
import { DOMAIN } from '../lib/site'

// Section numbering lives here rather than in each component, so reordering
// (or Testimonials rendering nothing) can't leave a gap in the sequence.
const order = [
  'work',
  'about',
  'services',
  'process',
  'pricing',
  ...(testimonials.length > 0 ? ['testimonials'] : []),
  'story',
] as const

const n = (id: (typeof order)[number]) =>
  String(order.indexOf(id) + 1).padStart(2, '0')

function Home() {
  return (
    <>
      <Seo
        path="/"
        title="Digital Growth Studio in Madurai | Web Design & SEO | LunoLab"
        description="LunoLab is a digital growth studio in Madurai building websites, SEO and social media for Tamil Nadu businesses. Ideas → presence → results. Reply within 24 hours."
        schema={[
          {
            '@type': 'FAQPage',
            '@id': `${DOMAIN}/#faq`,
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Where is LunoLab based?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'LunoLab is a digital growth studio based in Madurai, Tamil Nadu, working with businesses across Tamil Nadu and the rest of India.',
                },
              },
              {
                '@type': 'Question',
                name: 'What services does LunoLab offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Web design and development, SEO and local search visibility, social media strategy, digital marketing, and analytics and reporting.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly does LunoLab reply to an enquiry?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Within 24 hours, directly from the founder.',
                },
              },
            ],
          },
        ]}
      />
      <Hero />
      {/* Work sits directly under the hero on purpose. Instagram ad traffic
          is cold and mobile: the portfolio used to be 5.2 screens down, past
          two card grids, which is well past where that visitor leaves. Proof
          first, explanation after. */}
      <Work index={n('work')} />
      <Capabilities index={n('about')} />
      <Services index={n('services')} />
      <Process index={n('process')} />
      <Pricing index={n('pricing')} />
      <Testimonials index={testimonials.length > 0 ? n('testimonials') : '00'} />
      <BehindTheWork index={n('story')} />
      <Contact />
    </>
  )
}

export default Home
