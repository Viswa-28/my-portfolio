import ServicePage from '../components/ServicePage'

function SeoServicesMadurai() {
  return (
    <ServicePage
      path="/seo-services-madurai"
      title="SEO Services in Madurai | Local Search & Google Maps | LunoLab"
      description="SEO services in Madurai — local search visibility, Google Business Profile, on-page structure and technical SEO for Tamil Nadu businesses. Reported in plain language."
      eyebrow="SEO Services"
      h1="SEO services in Madurai"
      serviceType="Search Engine Optimization"
      intro={
        <>
          <p>
            For most businesses in Madurai, the search that matters is somebody
            nearby typing a service plus a place into their phone. Winning that
            search is a different job from ranking nationally, and it is far
            more winnable.
          </p>
          <p>
            LunoLab works on the fundamentals that decide local results: the
            Google Business Profile, consistent business details across the
            web, pages that actually target what people search for, and a site
            that loads fast enough to keep them.
          </p>
        </>
      }
      includes={[
        {
          title: 'Local search setup',
          detail:
            'Google Business Profile claimed, categorised, and filled out properly — the single biggest local ranking factor.',
        },
        {
          title: 'NAP consistency',
          detail:
            'Name, address and phone identical everywhere they appear. Mismatches quietly suppress local rankings.',
        },
        {
          title: 'Keyword research',
          detail:
            'What Madurai and Tamil Nadu customers actually type, not what the industry calls itself.',
        },
        {
          title: 'On-page structure',
          detail:
            'Titles, descriptions, heading hierarchy and internal links rebuilt around those terms.',
        },
        {
          title: 'Technical SEO',
          detail:
            'Crawlability, sitemap, canonicals, schema markup and Core Web Vitals.',
        },
        {
          title: 'Plain-language reporting',
          detail:
            'What moved, what did not, and what we are changing next. No vanity dashboards.',
        },
      ]}
      body={
        <>
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-ink lg:text-3xl">
              Local SEO is mostly unglamorous groundwork
            </h2>
            <p className="mt-4 text-base text-body lg:text-lg">
              There is no trick to it. A claimed and complete Google Business
              Profile, the same business name and number everywhere, a site
              that Google can crawl without tripping over itself, and pages
              that answer a real search. Most local businesses are missing at
              least two of those, which is why the ones that get them right
              tend to move quickly.
            </p>
            <p className="mt-4 text-base text-body lg:text-lg">
              Reviews matter too, and they are the one part we cannot do for
              you. What we can do is make asking for them part of how the
              business runs, rather than something nobody remembers.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-ink lg:text-3xl">
              One page cannot rank for everything
            </h2>
            <p className="mt-4 text-base text-body lg:text-lg">
              A common pattern: a business has a single page listing six
              services, and ranks for none of them. Search engines need a page
              per intent. If you sell web design and you sell SEO, those are
              two searches, two intents, and two pages — each with its own
              title, its own heading and its own content.
            </p>
            <p className="mt-4 text-base text-body lg:text-lg">
              Building that structure out is usually the highest-value SEO work
              available to a small business, and it is permanent in a way that
              paid traffic is not.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-ink lg:text-3xl">
              What SEO cannot do
            </h2>
            <p className="mt-4 text-base text-body lg:text-lg">
              It is slow. Meaningful movement in local search is typically
              months, not weeks, and anybody promising first position by a
              fixed date is guessing. It also cannot fix a site that does not
              convert — sending more people to a page nobody acts on just
              produces a more expensive version of the same problem. If that is
              the actual issue, we will tell you that instead of selling you a
              retainer.
            </p>
          </div>
        </>
      }
      faqs={[
        {
          q: 'How long does SEO take to show results in Madurai?',
          a: 'Local search typically moves over months rather than weeks. Google Business Profile changes can show up faster, sometimes within weeks, while on-page and content work compounds more slowly. Anyone guaranteeing a position by a specific date is guessing.',
        },
        {
          q: 'What is local SEO and how is it different?',
          a: 'Local SEO targets searches with geographic intent — someone looking for a service near them — and is decided largely by your Google Business Profile, review activity, consistent business details across the web, and pages that target the service plus the place. It is a different job from competing nationally.',
        },
        {
          q: 'Do I need a Google Business Profile?',
          a: 'If you serve customers in a specific area, yes. It is the single strongest factor in local results and in whether you appear in Google Maps at all. Claiming and completing it properly is usually the first thing we do.',
        },
        {
          q: 'Can you guarantee first position on Google?',
          a: 'No, and neither can anyone else. Rankings depend on competitors, Google algorithm changes and factors outside any agency control. What we commit to is the work and honest reporting on what it moved.',
        },
        {
          q: 'Do you do SEO without building the website?',
          a: 'Yes. SEO work on an existing site is common. If the site has technical problems serious enough to cap what SEO can achieve, we will say so before taking the work on.',
        },
      ]}
    />
  )
}

export default SeoServicesMadurai
