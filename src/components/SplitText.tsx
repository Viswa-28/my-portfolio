import { motion } from 'motion/react'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { splitContainer, splitItem } from '../lib/motion'

type Tag = 'h1' | 'h3' | 'p' | 'span'

type SplitTextProps = {
  text: string
  as?: Tag
  by?: 'char' | 'word'
  delay?: number
  className?: string
  // 'load' animates on mount (Hero); 'scroll' animates the first time it
  // enters the viewport (headings further down the page).
  trigger?: 'load' | 'scroll'
  // Optional single token to tint with the accent (deliberate emphasis).
  highlight?: string
}

const reduce = prefersReducedMotion

// Reveals text token-by-token (chars or words), staggered, using transform +
// opacity only. The full string stays in an aria-label and the split tokens
// are aria-hidden, so assistive tech reads the phrase, not the fragments.
function SplitText({
  text,
  as = 'span',
  by = 'word',
  delay = 0,
  className,
  trigger = 'load',
  highlight,
}: SplitTextProps) {
  const tokens = by === 'char' ? Array.from(text) : text.split(' ')

  const tokenContent = (token: string, i: number) =>
    by === 'word' && i < tokens.length - 1 ? `${token} ` : token

  // Reduced motion: render the tokens statically (no animation), but keep the
  // accent highlight so the deliberate emphasis isn't lost.
  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} aria-label={text}>
        {tokens.map((token, i) => (
          <span
            key={`${token}-${i}`}
            aria-hidden="true"
            className={highlight && token === highlight ? 'text-accent' : undefined}
          >
            {tokenContent(token, i)}
          </span>
        ))}
      </Tag>
    )
  }

  const MotionTag = motion[as] as typeof motion.span
  const activation =
    trigger === 'scroll'
      ? { whileInView: 'show' as const, viewport: { once: true, amount: 0.3 } }
      : { animate: 'show' as const }

  return (
    <MotionTag
      className={className}
      aria-label={text}
      variants={splitContainer(by, delay)}
      initial="hidden"
      {...activation}
    >
      {tokens.map((token, i) => (
        <motion.span
          key={`${token}-${i}`}
          aria-hidden="true"
          variants={splitItem}
          className={`inline-block whitespace-pre${
            highlight && token === highlight ? ' text-accent' : ''
          }`}
        >
          {tokenContent(token, i)}
        </motion.span>
      ))}
    </MotionTag>
  )
}

export default SplitText
