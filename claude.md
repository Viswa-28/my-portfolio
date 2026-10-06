You are a senior front-end engineer and conversion-focused web designer. I have an existing portfolio website in this repo. I want to REPLACE it completely with a new, high-converting website for my web studio "Luno Lab". Its goal is to win clients from local small businesses in Madurai & Tamil Nadu.

## Step 0: Safety first
- Create a new git branch `redesign-v2` before changing anything.
- Audit the repo and list what exists (framework, pages, components, assets, dependencies).
- KEEP: logo files, favicon, any brand assets, deployment config, env setup.
- REMOVE: the old design entirely. All scroll-scrubbed video/canvas frame-sequence code, /public/frames,
  GSAP/ScrollTrigger and Lenis (unless needed below), old sections and components, old video files,
  and unused dependencies. Show me the delete list and wait for my OK before deleting.
- If the current stack is Next.js, keep it. Otherwise migrate to: Next.js (App Router) + TypeScript +
  Tailwind CSS, statically generated.

## Who the site is for
Local small business owners (shops, clinics, restaurants, travel/visa agencies, salons, schools).
They are not technical. They care about: more customers, more calls/WhatsApp enquiries, showing up on
Google, fair price, fast delivery, and someone local they can trust. Most visit on mobile, on 4G.

## Brand and design: bold & playful, but trustworthy
- Brand: Luno Lab (studio voice: "we"). Logo = glossy violet-blue "L" + "LUNOLAB" wordmark.
- Colors: violet #7C5CFF (primary), indigo #4F46E5, lime accent #C6F432 (highlights/stickers only),
  off-white bg #FAF8F5, ink #16131F. Check that all text passes WCAG AA contrast.
- Fonts via next/font: Bricolage Grotesque (headings, chunky), Inter (body).
- Style: neo-brutalist playful. Big bold headings, rounded-3xl cards with 2px ink borders and
  hard offset shadows (4px 4px 0 #16131F), sticker-style badges slightly rotated, hand-drawn SVG
  arrows pointing at CTAs, a scrolling marquee strip, generous whitespace.
- Motion: light and fast only. Fade/pop-in on scroll (IntersectionObserver + CSS), hover wiggle on
  stickers, button press effect. No video backgrounds, no heavy libraries. Respect prefers-reduced-motion.
- Copy: simple words, short sentences, outcome-focused. No tech jargon in headings.

## Page structure (single landing page, in this order)
1. **Sticky navbar**: logo · Work · Services · Pricing · FAQ · primary button "Get Free Website Plan".
   Mobile: hamburger, accessible (focus trap, Esc closes).
2. **Floating WhatsApp button** (bottom-right, all pages) opening wa.me/<NUMBER> with the pre-filled text
   "Hi Luno Lab, I need a website for my business."
3. **Hero**
   - H1: "Websites that bring customers to your business."
   - Sub: "We build fast, mobile-friendly, Google-ready websites for local businesses in Madurai and
     across Tamil Nadu."
   - CTAs: "Get a Free Website Plan" (WhatsApp) + "See Our Work" (scroll)
   - Trust chips (honest only): "Live in 7–14 days" · "Mobile-first" · "WhatsApp built in" · "Based in Madurai"
   - Visual: playful collage of the 3 project screenshots in phone + laptop mockups with sticker badges
     ("WhatsApp enquiries", "Google-ready", "Loads fast")
4. **Industries marquee**: Travel · Visa services · Clinics · Restaurants · Retail · Salons · Schools · HR & consulting
5. **Problem section**: "Your customers search on Google first. If you're not there, they call your
   competitor." Three pain cards: Not on Google · Old or no website · Missing WhatsApp enquiries.
6. **Services** (4 cards, outcome-first, inline SVG icons):
   - Website Development: "A website that looks great on every phone"
   - SEO: "Show up when people search on Google"
   - Automation: "Auto WhatsApp replies, booking & enquiry forms"
   - Digital Growth: "Google Business Profile, ads & social to grow your reach"
7. **Our Work**: 3 case-study cards (data in /content/projects.ts):
   a) Tourglobe (tourglobe.in): premium travel consultancy, Madurai. Built: image-led premium design,
      smart enquiry form (traveller details, group size, preferences), WhatsApp chat, "no payment
      needed, reply in one working day" promise, links to sister brands.
   b) VisaHub (thevisahub.in): visa consultancy across Chennai, Coimbatore, Madurai, Trichy. Built:
      country-wise visa search & destination pages, doorstep document pickup booking, WhatsApp, FAQ,
      testimonials, Instagram feed, SEO-structured pages.
   c) TEVHR Solutions (tevhrsolutions.in): leave a clearly marked TODO for description and features.
   For each card: industry tag, city, "The challenge" (1 line), "What we built" (3–4 bullets as
   feature tags), screenshot (phone-first) and a "View live site ↗" link (rel="noopener").
   Screenshots: use placeholders at /public/work/<slug>-mobile.webp and -desktop.webp with the right
   dimensions. I'll drop in real ones.
   DO NOT invent result numbers, client counts, ratings or testimonials. Instead, add an optional
   `result` field per project (empty for now) that renders only when filled.
8. **How it works**: 4 steps: Free call → Design preview → Launch in 7–14 days → Ongoing support.
9. **Pricing**: 3 packages with "Starting from ₹____" placeholders in /content/pricing.ts:
   Starter (1-page site, WhatsApp button, Google Maps, mobile-ready),
   Business ★ Most popular (up to 5 pages, basic SEO, Google Business Profile setup, enquiry form),
   Growth (everything + automation, monthly SEO, ads/social support).
   Each with a "Get this plan" WhatsApp CTA that pre-fills the plan name.
10. **Our promise** (replaces testimonials until I have real ones): "Free design preview before you pay
    in full" · "You own your website & domain" · "Local support. Call or WhatsApp anytime" · "Clear
    pricing, no hidden charges". Also build a Testimonials component that stays hidden while
    /content/testimonials.ts is empty.
11. **FAQ** (accessible accordion, FAQPage schema): How much does a website cost? · How long does it
    take? · Do I need technical knowledge? · Can my website be in Tamil? · Who handles domain & hosting?
    · What if I need changes later? · Will my website show on Google?
12. **Final CTA + contact**: "Let's get your business online this month." WhatsApp button, click-to-call
    button, and a short form (Name, Phone, Business type, all required, honeypot field) posting to an
    env-configurable endpoint (Formspree-compatible), with success and error states.
13. **Footer**: logo, one-line pitch, address in Madurai (placeholder), phone, email, hours, Instagram
    link, quick links, © year.

All editable text, numbers, links, phone/WhatsApp, prices and email live in /content/*.ts as
clearly marked placeholders (<NUMBER>, <EMAIL>, <ADDRESS>, ₹____).

## Conversion rules
- One primary offer everywhere: "Get a Free Website Plan". A CTA at least every 2 sections.
- Above the fold on mobile (375px): H1, sub, primary CTA visible without scrolling.
- Buttons at least 48px tall; thumb-friendly spacing.
- Tracking: GA4 (env ID, loaded after interaction/idle) with events for whatsapp_click, call_click,
  form_submit, plan_click(plan_name), project_link_click(slug).

## SEO (local)
- Metadata: title "Luno Lab | Website Design & SEO for Local Businesses in Madurai", description,
  canonical, Open Graph + Twitter image (1200x630, generated from the hero).
- JSON-LD: LocalBusiness/ProfessionalService (Luno Lab, Madurai, Tamil Nadu, IN, phone, areaServed:
  Tamil Nadu, services list) + FAQPage.
- Semantic HTML: one H1, H2 per section, descriptive alt text, sitemap.xml, robots.txt.

## Performance targets (must hit)
- Lighthouse mobile: Performance ≥ 95, Accessibility ≥ 95, SEO 100, Best Practices ≥ 95.
- LCP < 2s on 4G, CLS < 0.05. Images: next/image, WebP/AVIF, explicit sizes, lazy-load below the fold,
  priority only on the hero image. Fonts self-hosted with display swap. Minimal client JS (prefer
  Server Components; client components only for nav, FAQ, form, marquee).
- Fully responsive 360px → 1920px, no horizontal scroll.

## Process
1. Step 0 (audit + delete list), then wait for my OK.
2. Build the design tokens + Navbar + Hero + WhatsApp button. Stop and show me how to preview on
   desktop and phone.
3. Build the remaining sections.
4. Run Lighthouse (mobile), fix issues, and report scores + a checklist of placeholders I must fill.

Write clean, typed, commented code. Don't add features I didn't ask for.