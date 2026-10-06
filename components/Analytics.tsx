'use client'

import { useEffect } from 'react'
import { GA_ID, ensureGtag, track } from '@/lib/analytics'

/**
 * Loads GA4 after the first user interaction or when the browser is idle,
 * so it never competes with the page's first paint.
 *
 * Click tracking is declarative: any element with `data-track="event_name"`
 * sends that event; extra `data-track-*` attributes become params
 * (data-track-plan-name="Business" → { plan_name: "Business" }).
 */
export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return

    const gtag = ensureGtag()
    gtag('js', new Date())
    gtag('config', GA_ID)

    let loaded = false
    const load = () => {
      if (loaded) return
      loaded = true
      const s = document.createElement('script')
      s.async = true
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      document.head.appendChild(s)
      events.forEach((e) => window.removeEventListener(e, load))
    }
    const events = ['pointerdown', 'keydown', 'scroll', 'touchstart'] as const
    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }))
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(load, { timeout: 5000 })
      : window.setTimeout(load, 3500)

    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>('[data-track]')
      if (!el) return
      const params: Record<string, string> = {}
      for (const [key, value] of Object.entries(el.dataset)) {
        if (key === 'track' || !key.startsWith('track') || value === undefined) continue
        // trackPlanName → plan_name
        const name = key.slice(5).replace(/[A-Z]/g, (c, i) => (i ? '_' : '') + c.toLowerCase())
        params[name] = value
      }
      track(el.dataset.track!, params)
    }
    document.addEventListener('click', onClick, { capture: true })

    return () => {
      events.forEach((e) => window.removeEventListener(e, load))
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle)
      else window.clearTimeout(idle)
      document.removeEventListener('click', onClick, { capture: true })
    }
  }, [])

  return null
}
