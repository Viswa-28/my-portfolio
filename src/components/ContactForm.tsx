import { useState, type FormEvent } from 'react'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY
const ENDPOINT = 'https://api.web3forms.com/submit'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'submitting' | 'success' | 'error'
type Errors = { name?: string; email?: string; message?: string }

// Text-base (16px) inputs avoid iOS zoom-on-focus and meet the readability
// floor; min-h-11 keeps the tap target at 44px. Focus ring is the global rule.
const fieldClass =
  'w-full rounded-card border border-line bg-white px-3.5 py-2.5 text-base text-ink placeholder:text-muted transition-colors focus:border-accent'

function validate(data: FormData): Errors {
  const errors: Errors = {}
  const name = String(data.get('name') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const message = String(data.get('message') ?? '').trim()
  if (!name) errors.name = 'Name is required.'
  if (!email) errors.email = 'Email is required.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address.'
  if (!message) errors.message = 'Message is required.'
  return errors
}

function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})

  const clearError = (field: keyof Errors) =>
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus('idle')
      const first = Object.keys(found)[0]
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }

    data.append('access_key', ACCESS_KEY)
    data.append('subject', 'New message from your portfolio')

    setStatus('submitting')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await response.json()
      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const submitting = status === 'submitting'

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 max-w-lg space-y-4">
      {/* Honeypot: hidden from people, catches bots (Web3Forms rejects it). */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          onInput={() => clearError('name')}
          className={`${fieldClass} min-h-11`}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm font-medium text-ink">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          onInput={() => clearError('email')}
          className={`${fieldClass} min-h-11`}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm font-medium text-ink">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          onInput={() => clearError('message')}
          className={`${fieldClass} resize-y`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm font-medium text-ink">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-card bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? 'Sending…' : 'Send message'}
      </button>

      {/* Announced to assistive tech. Neutral wording, no colour-only meaning. */}
      <p role="status" aria-live="polite" className="min-h-5 text-sm">
        {status === 'success' && (
          <span className="text-accent">
            Message sent. Thanks for reaching out.
          </span>
        )}
        {status === 'error' && (
          <span className="font-medium text-ink">
            Something went wrong. Please try again, or use a link below.
          </span>
        )}
      </p>
    </form>
  )
}

export default ContactForm
