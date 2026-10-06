import ScrollSequence from '@/components/ScrollSequence'
import { hero } from '@/content/site'
import { SEQUENCES } from '@/config/sequences'
import manifests from '@/public/frames/manifests.json'
import type { Manifests } from '@/lib/types'

const all = manifests as Manifests

export default function Hero() {
  const cfg = SEQUENCES.hero
  const manifest = all.hero

  return (
    <ScrollSequence
      id="hero"
      priority
      manifest={manifest}
      scrollVh={cfg.scrollVh}
      focalX={cfg.focalX}
      focalY={cfg.focalY}
    >
      {/* Copy sits on the left: the clips keep that side calm, and the
          scrim inside ScrollSequence guarantees contrast there. */}
      <div className="relative z-10 flex h-full items-center px-6 lg:px-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="max-w-2xl">
            {/* Not <Reveal>: this block is above the fold, so a scroll-
                triggered fade would only delay the LCP text. rise-in moves
                transform alone and never hides it. */}
            <h1 className="rise-in font-heading text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] font-bold tracking-[-0.03em] text-light">
              {hero.h1}
            </h1>

            <p className="rise-in rise-in-2 mt-6 max-w-xl text-lg text-light/80 lg:text-xl">
              {hero.subline}
            </p>

            <div className="rise-in rise-in-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={hero.primaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-indigo px-7 text-base font-semibold text-white transition-colors hover:bg-indigo-hover"
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-light/25 px-7 text-base font-semibold text-light transition-colors hover:border-violet-ink hover:text-violet-ink"
                >
                  {hero.secondaryCta.label}
                </a>
            </div>
          </div>
        </div>
      </div>
    </ScrollSequence>
  )
}
