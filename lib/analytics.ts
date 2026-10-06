/**
 * GA4 helpers. `gtag` is stubbed into a queue immediately so events fired
 * before the real script loads (it loads lazily) are not lost.
 *
 * Tracked events: whatsapp_click, call_click, form_submit,
 * plan_click(plan_name), project_link_click(slug).
 */

type GtagFn = (...args: unknown[]) => void

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: GtagFn
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''

export function ensureGtag(): GtagFn {
  window.dataLayer = window.dataLayer ?? []
  if (!window.gtag) {
    window.gtag = function gtag() {
      // gtag.js expects the `arguments` object itself, not an array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
  }
  return window.gtag
}

export function track(event: string, params: Record<string, string> = {}): void {
  if (!GA_ID || typeof window === 'undefined') return
  ensureGtag()('event', event, params)
}
