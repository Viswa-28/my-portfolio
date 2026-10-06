'use client'

import { useCallback, useState } from 'react'
import ScrollSequence from '@/components/ScrollSequence'
import { services } from '@/content/site'
import { SEQUENCES, SERVICE_CARD_STOPS } from '@/config/sequences'
import manifests from '@/public/frames/manifests.json'
import type { Manifests } from '@/lib/types'

const all = manifests as Manifests

export default function Services() {
  const cfg = SEQUENCES.services

  // How many cards are revealed. Derived from scrub progress, but state is
  // only written when the count actually changes — five times across the
  // whole section, not once per scroll event.
  const [revealed, setRevealed] = useState(0)

  const onProgress = useCallback((p: number) => {
    const next = SERVICE_CARD_STOPS.filter((stop) => p >= stop).length
    setRevealed((prev) => (prev === next ? prev : next))
  }, [])

  return (
    <ScrollSequence
      id="services"
      manifest={all.services}
      scrollVh={cfg.scrollVh}
      focalX={cfg.focalX}
      focalY={cfg.focalY}
      onProgress={onProgress}
    >
      <div className="relative z-10 flex h-full items-center px-6 lg:px-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <h2 className="max-w-xl font-heading text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] font-bold tracking-[-0.03em] text-light">
            What I do
          </h2>

          {/* Cards are in the DOM from the start and only animate in, so the
              list is complete for a crawler and for anyone without JS. */}
          <ul className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((service, i) => (
              <li
                key={service.title}
                className={`rounded-2xl border border-light/12 bg-night/55 p-5 backdrop-blur-sm transition-all duration-500 ease-out ${
                  revealed > i
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
                }`}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="text-violet"
                >
                  <path d={service.icon} />
                </svg>
                <h3 className="mt-3 font-heading text-lg font-bold text-light">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm text-light/70">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollSequence>
  )
}
