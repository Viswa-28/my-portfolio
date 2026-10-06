import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Fully static. Every page is prerendered at build time, which is what
  // keeps the copy and JSON-LD crawlable without a server.
  output: 'export',
  images: { unoptimized: true },
  // NOTE: headers() is a no-op under `output: 'export'` — Next warns about
  // it at build time. Long-lived caching for /frames is set at the host
  // instead; see vercel.json and public/_headers (Netlify).
}

export default nextConfig
