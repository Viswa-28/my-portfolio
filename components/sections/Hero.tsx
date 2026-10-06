import Image from 'next/image'
import { hero } from '@/content/home'
import { site } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'
import { CheckIcon, SquiggleArrow, WhatsAppIcon } from '../icons'

/**
 * Hero. On a 375px phone the H1, sub and primary CTA sit above the fold;
 * the device collage follows below. The H1 is the LCP element, so nothing
 * here is animated in.
 */
export default function Hero() {
  const [before, after] = hero.h1.split(hero.h1Highlight)
  return (
    <section aria-labelledby="hero-title" className="relative mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 md:pt-16 lg:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* Copy */}
        <div>
          <h1 id="hero-title" className="text-[2.35rem] leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
            {before}
            <span className="relative z-0 whitespace-nowrap">
              <span className="absolute inset-x-0 bottom-1 -z-10 h-[0.4em] -rotate-1 rounded-sm bg-lime" aria-hidden="true" />
              {hero.h1Highlight}
            </span>
            {after}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-soft sm:mt-5 sm:text-xl">{hero.sub}</p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center lg:mt-12">
            <div className="relative flex flex-col">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                data-track="whatsapp_click"
                data-track-location="hero"
                className="btn btn-primary text-lg"
              >
                <WhatsAppIcon />
                {site.primaryCta}
              </a>
              {/* Hand-drawn arrow curling down onto the primary CTA (desktop only). */}
              <SquiggleArrow className="pointer-events-none absolute -top-13 -right-14 hidden w-20 -scale-x-100 text-violet-deep lg:block" />
            </div>
            <a href={hero.secondaryCta.href} className="btn btn-secondary text-lg">
              {hero.secondaryCta.label}
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8" aria-label="Why Luno Lab">
            {hero.trustChips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-3 py-1.5 text-sm font-semibold"
              >
                <CheckIcon className="size-4 text-violet-deep" />
                {chip}
              </li>
            ))}
          </ul>
        </div>

        {/* Device collage */}
        <HeroCollage />
      </div>
    </section>
  )
}

/** Laptop + two phones showing our three projects, with sticker badges. */
function HeroCollage() {
  const [s1, s2, s3] = hero.stickers
  return (
    <div className="relative mx-auto w-full max-w-[34rem] pt-6 pb-10 sm:pb-14">
      {/* Soft violet blob behind the devices */}
      <div className="absolute inset-6 -z-10 rounded-[3rem] bg-violet-soft" aria-hidden="true" />

      {/* Laptop */}
      <div className="relative mx-4 sm:mx-8">
        <div className="overflow-hidden rounded-t-2xl border-2 border-ink bg-ink p-1.5 shadow-hard-lg sm:p-2">
          <Image
            src="/work/tourglobe-desktop.webp"
            alt="Tourglobe travel consultancy website on a laptop"
            width={1440}
            height={900}
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 440px, 80vw"
            className="h-auto w-full rounded-lg"
          />
        </div>
        <div className="mx-[-6%] h-3 rounded-b-xl border-2 border-t-0 border-ink bg-[#d9d4e8] sm:h-4" aria-hidden="true" />
      </div>

      {/* Phone 1 */}
      <Phone
        src="/work/visahub-mobile.webp"
        alt="VisaHub visa consultancy website on a phone"
        className="absolute right-0 bottom-0 w-[24%] rotate-3"
      />
      {/* Phone 2 */}
      <Phone
        src="/work/tevhr-mobile.webp"
        alt="TEVHR Solutions website on a phone"
        className="absolute bottom-3 left-0 w-[20%] -rotate-6"
      />

      {/* Stickers */}
      <span className="sticker absolute top-0 right-2 [--tilt:6deg]">{s1}</span>
      <span className="sticker absolute top-[38%] left-0 bg-white [--tilt:-8deg]">{s2}</span>
      <span className="sticker absolute right-[24%] -bottom-1 [--tilt:-3deg]">{s3}</span>
    </div>
  )
}

function Phone({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <div className={`rounded-[1.4rem] border-2 border-ink bg-ink p-1 shadow-hard ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={390}
        height={844}
        sizes="(min-width: 1024px) 160px, 30vw"
        className="h-auto w-full rounded-[1.1rem]"
      />
    </div>
  )
}
