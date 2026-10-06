'use client'

import { useId, useRef, useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type Errors = Partial<Record<'name' | 'email' | 'message', string>>

/** Formspree-compatible. Set NEXT_PUBLIC_CONTACT_ENDPOINT to your form URL. */
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? ''

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function ContactForm() {
  const id = useId()
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const formRef = useRef<HTMLFormElement>(null)

  const validate = (data: FormData): Errors => {
    const next: Errors = {}
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    if (!name) next.name = 'Please enter your name.'
    if (!email) next.email = 'Please enter your email.'
    else if (!EMAIL_RE.test(email)) next.email = 'That email address does not look right.'
    if (!message) next.message = 'Please tell me a bit about the project.'
    return next
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot. Real people never see this field, so anything in it is a bot.
    // Reported as success so the bot has nothing to learn from.
    if (String(data.get('company') ?? '')) {
      setStatus('success')
      return
    }

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = form.querySelector<HTMLElement>('[aria-invalid="true"]')
      first?.focus()
      return
    }

    if (!ENDPOINT) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const field =
    'mt-1.5 w-full rounded-2xl border bg-night/50 px-4 py-3 text-base text-light placeholder-light/35 outline-none transition-colors focus:border-violet'

  if (status === 'success') {
    return (
      <p
        role="status"
        className="rounded-2xl border border-violet/40 bg-night/60 p-6 text-light"
      >
        Thanks — that came through. I reply within 24 hours.
      </p>
    )
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot: off-screen rather than display:none, which some bots skip. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-company`}>Company (leave blank)</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor={`${id}-name`} className="text-sm font-medium text-light/80">
          Name
        </label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errors.name ? `${id}-name-err` : undefined}
          className={`${field} ${errors.name ? 'border-red-400' : 'border-light/15'}`}
        />
        {errors.name && (
          <p id={`${id}-name-err`} className="mt-1.5 text-sm text-red-300">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${id}-email`} className="text-sm font-medium text-light/80">
          Email
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errors.email ? `${id}-email-err` : undefined}
          className={`${field} ${errors.email ? 'border-red-400' : 'border-light/15'}`}
        />
        {errors.email && (
          <p id={`${id}-email-err`} className="mt-1.5 text-sm text-red-300">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${id}-message`} className="text-sm font-medium text-light/80">
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? `${id}-message-err` : undefined}
          className={`${field} resize-y ${errors.message ? 'border-red-400' : 'border-light/15'}`}
        />
        {errors.message && (
          <p id={`${id}-message-err`} className="mt-1.5 text-sm text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-indigo px-7 text-base font-semibold text-white transition-colors hover:bg-indigo-hover disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-300">
          {ENDPOINT
            ? 'That did not send. Try again, or email me directly.'
            : 'The form endpoint is not configured yet — set NEXT_PUBLIC_CONTACT_ENDPOINT. In the meantime, email me directly.'}
        </p>
      )}
    </form>
  )
}
