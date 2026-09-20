import markUrl from '../assets/lunolab-mark.png'

type LogoProps = {
  className?: string
}

// The LunoLab mark, extracted straight from the brand artwork (alpha recovered
// from the original's luminance, since it was supplied on pure black). Served
// at 144px so it stays crisp at the 36px navbar size on 4x displays.
function Logo({ className }: LogoProps) {
  return (
    <img
      src={markUrl}
      alt=""
      aria-hidden="true"
      width={144}
      height={144}
      className={className}
      decoding="async"
    />
  )
}

export default Logo
