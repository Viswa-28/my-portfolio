import ServicePage from '../components/ServicePage'

function WebDesignMadurai() {
  return (
    <ServicePage
      path="/web-design-madurai"
      title="Web Design Company in Madurai | Websites That Convert | LunoLab"
      description="Web design and development in Madurai. Custom Next.js and React websites built for Tamil Nadu businesses — fast, mobile-first, and built around enquiries. Reply within 24 hours."
      eyebrow="Web Design"
      h1="Web design and development in Madurai"
      serviceType="Web Design and Development"
      intro={
        <>
          <p>
            Most small-business websites in Madurai are built once and then
            left alone. They load slowly on a mid-range phone, they bury the
            phone number, and nobody can say how many enquiries they produced
            last month.
          </p>
          <p>
            LunoLab builds the other kind. Custom sites in Next.js and React,
            designed around the one thing the business actually needs from the
            page — a call, a WhatsApp message, a form — and measured after
            launch so you know whether it worked.
          </p>
        </>
      }
      includes={[
        {
          title: 'Custom design',
          detail:
            'On a custom build the layout is drawn around your services and your customers, not adapted from a theme demo.',
        },
        {
          title: 'Next.js & React build',
          detail:
            'Built from scratch in the same stack used for Tourglobe and VisaHub — fast to load, easy to extend.',
        },
        {
          title: 'Mobile first',
          detail:
            'Most Tamil Nadu traffic is a mid-range Android on patchy data. That is the device we design for first.',
        },
        {
          title: 'Enquiry workflow',
          detail:
            'Form, WhatsApp or call — whichever your customers actually use — wired up and tested.',
        },
        {
          title: 'Technical SEO baked in',
          detail:
            'Clean heading structure, metadata, schema and sitemap from day one, not bolted on later.',
        },
        {
          title: 'Analytics on launch day',
          detail:
            'Traffic and enquiry tracking configured before go-live, so month one is measurable.',
        },
      ]}
      body={
        <>
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-ink lg:text-3xl">
              Built for how your customers actually browse
            </h2>
            <p className="mt-4 text-base text-body lg:text-lg">
              A tourism consultancy in Madurai and a visa service covering Tamil
              Nadu have almost nothing in common as businesses, but their
              visitors behave the same way: they arrive on a phone, they skim,
              and they leave if the page takes too long or they cannot find how
              to get in touch. That is the constraint every build starts from.
            </p>
            <p className="mt-4 text-base text-body lg:text-lg">
              In practice that means keeping JavaScript lean, sizing images
              properly, putting the contact route where a thumb can reach it,
              and writing the page so the first screen answers what the
              business does and who it is for.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-ink lg:text-3xl">
              What a build looks like
            </h2>
            <p className="mt-4 text-base text-body lg:text-lg">
              We start by learning the business — what it sells, who buys, and
              what is going wrong with the current site if there is one. That
              becomes a written plan before any design happens, so you can
              disagree with it cheaply.
            </p>
            <p className="mt-4 text-base text-body lg:text-lg">
              Then design and development run together: the site, the content
              structure and the search groundwork as one piece of work rather
              than three handoffs. Everything is tested on real devices before
              it goes public, and after launch we track what visitors actually
              do and use that to decide the next change.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-ink lg:text-3xl">
              Redesign or build from scratch
            </h2>
            <p className="mt-4 text-base text-body lg:text-lg">
              If you already have a site, a rebuild is not always the answer.
              Sometimes the structure is fine and the problem is that nothing
              tells the visitor what to do next, or that the pages targeting
              your services do not exist. We will say so rather than quote for
              a rebuild you do not need.
            </p>
          </div>
        </>
      }
      faqs={[
        {
          q: 'How much does a website cost in Madurai?',
          a: 'A one-page starter site runs ₹6,000–₹10,000. A custom build with motion, a portfolio section and SEO fundamentals is ₹15,000–₹25,000. Multi-page work with advanced animation or an admin panel is ₹30,000–₹50,000. Every project is still quoted on its actual scope, and the first conversation is free.',
        },
        {
          q: 'How long does a website take to build?',
          a: 'A straightforward business site is typically a few weeks from first conversation to launch. Larger builds with many content sections take longer. You get a written plan with the timeline in it before work starts.',
        },
        {
          q: 'Do you work with businesses outside Madurai?',
          a: 'Yes. LunoLab is based in Madurai and works with clients across Tamil Nadu and the rest of India. Past work includes businesses operating across Tamil Nadu and internationally.',
        },
        {
          q: 'What technology do you build with?',
          a: 'Next.js and React, with Tailwind CSS. The sites built for Tourglobe and VisaHub both use this stack. It produces fast sites that are straightforward to extend later.',
        },
        {
          q: 'Will I be able to update the site myself?',
          a: 'That depends on what you need to change and how often. If you plan to publish regularly we will discuss a content setup that suits you rather than assuming one.',
        },
      ]}
    />
  )
}

export default WebDesignMadurai
