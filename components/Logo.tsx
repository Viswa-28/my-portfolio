import Image from 'next/image'

/**
 * Luno Lab logo: the app icon (glossy "L" on its dark tile, same as the
 * favicon) + the LUNOLAB wordmark cut from the master logo (logo.JPG),
 * with "LUNO" recoloured to ink so it reads on the light background.
 */
export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/apple-touch-icon.png"
        alt=""
        width={180}
        height={180}
        className="size-9 rounded-xl border-2 border-ink sm:size-10"
      />
      <Image
        src="/brand/lunolab-wordmark.webp"
        alt="Luno Lab"
        width={414}
        height={60}
        className="h-4 w-auto sm:h-[1.125rem]"
      />
    </span>
  )
}
