'use client'

import { useState } from 'react'
import { finalCta } from '@/content/home'
import { track } from '@/lib/analytics'

/** Formspree-compatible endpoint (JSON POST). Set in .env.local / Vercel. */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? ''

type Status = 'idle' | 'sending' | 'success' | 'error'

/**
 * Short call-back form: Name, Phone, Business type (all required).
 * `_gotcha` is a honeypot: humans never see it, bots fill it in, and
 * Formspree drops submissions where it has a value.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const copy = finalCta.form

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    // A filled honeypot means a bot: pretend it worked, send nothing.
    if (data._gotcha) return setStatus('success')
    if (!ENDPOINT) return setStatus('error')

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(String(res.status))
      track('form_submit', { business_type: String(data.businessType ?? '') })
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="card bg-lime p-8 text-center">
        <p className="font-heading text-2xl font-extrabold">{copy.success}</p>
      </div>
    )
  }

  const input =
    'mt-1.5 block min-h-12 w-full rounded-xl border-2 border-ink bg-white px-4 text-base text-ink placeholder:text-ink-soft/70'

  return (
    <form onSubmit={onSubmit} className="card p-6 text-ink sm:p-8" aria-labelledby="form-title">
      <h3 id="form-title" className="text-2xl font-extrabold">
        {copy.title}
      </h3>

      <div className="mt-5 flex flex-col gap-4">
        <label className="font-semibold">
          Your name
          <input name="name" required autoComplete="name" className={input} placeholder="e.g. Priya" />
        </label>

        <label className="font-semibold">
          Phone number
          <input
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+\s\-]{10,15}"
            title="Please enter a valid phone number"
            className={input}
            placeholder="e.g. 98765 43210"
          />
        </label>

        <label className="font-semibold">
          Business type
          <select name="businessType" required defaultValue="" className={input}>
            <option value="" disabled>
              Choose one
            </option>
            {copy.businessTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>

        {/* Honeypot: hidden from people and assistive tech. */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label>
            Leave this empty
            <input name="_gotcha" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn btn-primary mt-6 w-full text-lg disabled:opacity-70">
        {status === 'sending' ? 'Sending…' : 'Call me back'}
      </button>

      <p role="alert" className="mt-4 font-semibold text-[#B42318] empty:hidden">
        {status === 'error' ? copy.error : ''}
      </p>
    </form>
  )
}
