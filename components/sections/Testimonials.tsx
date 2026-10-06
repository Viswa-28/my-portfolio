import ScrollSequence from '@/components/ScrollSequence'
import Reveal from '@/components/Reveal'
import { testimonials } from '@/content/site'
import { SEQUENCES } from '@/config/sequences'
import manifests from '@/public/frames/manifests.json'
import type { Manifests } from '@/lib/types'

const all = manifests as Manifests

export default function Testimonials() {
  const cfg = SEQUENCES.testimonials

  return (
    <ScrollSequence
      id="testimonials"
      manifest={all.testimonials}
      scrollVh={cfg.scrollVh}
      focalX={cfg.focalX}
      focalY={cfg.focalY}
    >
      <div className="relative z-10 flex h-full items-center px-6 lg:px-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <Reveal>
            <h2 className="max-w-xl font-heading text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] font-bold tracking-[-0.03em] text-light">
              What clients say
            </h2>
          </Reveal>

          <ul className="mt-10 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <li key={i}>
                <Reveal delay={i * 100}>
                  <figure className="h-full rounded-2xl border border-light/12 bg-night/55 p-6 backdrop-blur-sm">
                    <blockquote className="text-sm text-light/85 lg:text-base">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3 border-t border-light/10 pt-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.avatar}
                        alt=""
                        aria-hidden="true"
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 shrink-0 rounded-full"
                      />
                      <span className="text-sm">
                        <span className="block font-semibold text-light">{t.name}</span>
                        <span className="block text-light/60">
                          {t.role}, {t.company}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollSequence>
  )
}
