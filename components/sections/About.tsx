import ScrollSequence from '@/components/ScrollSequence'
import Reveal from '@/components/Reveal'
import { about } from '@/content/site'
import { SEQUENCES } from '@/config/sequences'
import manifests from '@/public/frames/manifests.json'
import type { Manifests } from '@/lib/types'

const all = manifests as Manifests

export default function About() {
  const cfg = SEQUENCES.about

  return (
    <ScrollSequence
      id="about"
      manifest={all.about}
      scrollVh={cfg.scrollVh}
      focalX={cfg.focalX}
      focalY={cfg.focalY}
    >
      <div className="relative z-10 flex h-full items-center px-6 lg:px-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="max-w-xl">
            <Reveal>
              <h2 className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] font-bold tracking-[-0.03em] text-light">
                {about.heading}
              </h2>
            </Reveal>

            {about.body.map((para, i) => (
              <Reveal key={i} delay={120 + i * 100}>
                <p className="mt-5 text-base text-light/75 lg:text-lg">{para}</p>
              </Reveal>
            ))}

            <Reveal delay={360}>
              <dl className="mt-12 grid grid-cols-3 gap-6">
                {about.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-heading text-3xl font-bold text-violet lg:text-4xl">
                        {stat.value}
                      </span>
                      <span className="mt-1 block text-xs font-medium tracking-[0.12em] text-light/55 uppercase">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </ScrollSequence>
  )
}
