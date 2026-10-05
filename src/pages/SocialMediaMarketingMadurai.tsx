import ServicePage from '../components/ServicePage'

function SocialMediaMarketingMadurai() {
  return (
    <ServicePage
      path="/social-media-marketing-madurai"
      title="Social Media Marketing in Madurai | Strategy & Content | LunoLab"
      description="Social media marketing for Madurai and Tamil Nadu businesses — profile positioning, content direction and campaign support, tied back to enquiries rather than follower counts."
      eyebrow="Social Media"
      h1="Social media marketing in Madurai"
      serviceType="Social Media Marketing"
      intro={
        <>
          <p>
            Plenty of Madurai businesses post regularly and get nothing from
            it. The account looks active, the follower count creeps up, and
            the phone does not ring any more than it did before.
          </p>
          <p>
            LunoLab treats social as a route to an enquiry rather than an end
            in itself. That means being clear about who the account is for,
            what it is supposed to make someone do, and how we would know if
            it worked.
          </p>
        </>
      }
      includes={[
        {
          title: 'Profile positioning',
          detail:
            'Bio, highlights and links rewritten so a first-time visitor knows in five seconds what you do and where.',
        },
        {
          title: 'Content direction',
          detail:
            'The handful of post types worth making repeatedly, instead of guessing weekly.',
        },
        {
          title: 'Local audience focus',
          detail:
            'Built for reaching people in Madurai and Tamil Nadu who can actually become customers.',
        },
        {
          title: 'Campaign support',
          detail:
            'Launches, offers and seasonal pushes planned around the business calendar.',
        },
        {
          title: 'Profile-to-site path',
          detail:
            'The route from a post to the website to an enquiry, built deliberately and tested.',
        },
        {
          title: 'Reporting that means something',
          detail:
            'Reach and engagement in context, and what it did to enquiries — not a screenshot of likes.',
        },
      ]}
      body={
        <>
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-ink lg:text-3xl">
              Followers are not the goal
            </h2>
            <p className="mt-4 text-base text-body lg:text-lg">
              A local service business does not need fifty thousand followers.
              It needs a few hundred of the right people and a clear path from
              a post to a conversation. An account with two thousand engaged
              local followers will out-earn one with twenty thousand scattered
              across the country, every time.
            </p>
            <p className="mt-4 text-base text-body lg:text-lg">
              So the metrics we care about are saves, shares, profile visits,
              link taps and enquiries — the ones that indicate intent — rather
              than the ones that only indicate scroll.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-ink lg:text-3xl">
              Social and the website are one system
            </h2>
            <p className="mt-4 text-base text-body lg:text-lg">
              Social media sends people somewhere. If that somewhere is a slow
              page that does not match what the post promised, the work is
              wasted at the last step. This is the advantage of a studio that
              builds the site as well: the post, the landing page and the
              enquiry form get designed as one path instead of three
              disconnected pieces.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-ink lg:text-3xl">
              Being honest about what this requires
            </h2>
            <p className="mt-4 text-base text-body lg:text-lg">
              Social needs raw material — photos of the work, the team, the
              place, the product. The businesses that get the most out of it
              are the ones willing to supply that regularly. If nobody inside
              the business can commit to that, we would rather point the budget
              at search, where the work compounds without a constant content
              feed.
            </p>
          </div>
        </>
      }
      faqs={[
        {
          q: 'Which platforms should my business be on?',
          a: 'Usually fewer than you think. For most Madurai service businesses that means Instagram, sometimes alongside a Google Business Profile that is treated as a social surface in its own right. Being good on one platform beats being thin on four.',
        },
        {
          q: 'Do you create the content as well as the strategy?',
          a: 'We handle direction, positioning and campaign planning, and work with whatever raw material the business can supply — photos of the work, the team, the premises. Businesses that can feed that pipeline consistently get far more out of social.',
        },
        {
          q: 'How do you measure whether social media is working?',
          a: 'By intent signals rather than vanity ones: profile visits, link taps, saves, shares and ultimately enquiries. Follower count on its own tells you very little about whether the account is earning anything.',
        },
        {
          q: 'Should I pay for ads or grow organically?',
          a: 'It depends on the timeline and the margin. Ads buy immediate reach and stop the moment you stop paying; organic compounds but takes longer. We will give you a straight recommendation for your situation rather than defaulting to whichever is easier to bill.',
        },
        {
          q: 'Can you manage social media without building my website?',
          a: 'Yes, though the results are usually better when the site and the social presence are planned together, since social traffic has to land somewhere that converts.',
        },
      ]}
    />
  )
}

export default SocialMediaMarketingMadurai
