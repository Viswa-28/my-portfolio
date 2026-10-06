/** Written by scripts/extract-frames.py alongside each frame set. */
export type VariantManifest = {
  frameCount: number
  width: number
  height: number
  fps: number
  /** `/frames/<name>/<variant>` — frames are `0001.webp` … zero-padded to 4. */
  dir: string
  poster: { webp: string; avif: string | null }
}

export type SequenceManifest = {
  name: string
  desktop: VariantManifest
  mobile: VariantManifest | null
  /** Average colour of the final frame, for matching the section background. */
  endColor: string
}

export type Manifests = Record<string, SequenceManifest>
