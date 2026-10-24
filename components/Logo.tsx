import Image from 'next/image'

/**
 * Luno Lab logo: the glossy "L" mark + LUNOLAB wordmark, cut from the
 * master logo (logo.JPG). "LUNO" is recoloured to ink and the mark gets an
 * ink outline so both read on the light background.
 */
export default function Logo({ className = 'h-9 w-auto sm:h-10' }: { className?: string }) {
  return (
    <Image
      src="/brand/lunolab-logo.webp"
      alt="Luno Lab"
      width={509}
      height={120}
      className={className}
    />
  )
}
