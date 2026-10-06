/**
 * Luno Lab logo: glossy violet-blue "L" mark + LUNOLAB wordmark.
 * Inline SVG so it costs no request and scales crisply.
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="26" height="30" viewBox="0 0 26 30" aria-hidden="true">
        <defs>
          <linearGradient id="logo-gloss" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F3F0FF" />
            <stop offset="0.55" stopColor="#7C5CFF" />
            <stop offset="1" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
        <path
          fill="url(#logo-gloss)"
          stroke="#16131F"
          strokeWidth="1.5"
          d="M2 5a4 4 0 0 1 8 0v12c0 3.6 2.3 5.7 6.2 5.7H25c-1.5 4.2-5.8 6.8-11 6.8C6.2 29.5 2 25.4 2 18.8Z"
        />
      </svg>
      <span className="font-heading text-xl font-extrabold tracking-wide">
        LUNO<span className="text-violet-deep">LAB</span>
      </span>
    </span>
  )
}
