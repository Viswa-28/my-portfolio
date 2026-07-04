import { Fragment } from 'react'
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
//
// In word mode a real space text node is rendered *between* the inline-block
// spans (rather than tucked inside each span) — that gives the browser proper
// word spacing and line-break opportunities. char mode keeps whitespace-pre so
// an actual space character (if any) isn't collapsed.
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

  const spanClass = (token: string) =>
    [
      'inline-block',
      by === 'char' ? 'whitespace-pre' : '',
      highlight && token === highlight ? 'text-accent' : '',
    ]
      .filter(Boolean)
      .join(' ')

  const gap = (i: number) => (by === 'word' && i < tokens.length - 1 ? ' ' : null)

  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} aria-label={text}>
        {tokens.map((token, i) => (
          <Fragment key={`${token}-${i}`}>
            <span aria-hidden="true" className={spanClass(token)}>
              {token}
            </span>
            {gap(i)}
          </Fragment>
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
        <Fragment key={`${token}-${i}`}>
          <motion.span
            aria-hidden="true"
            variants={splitItem}
            className={spanClass(token)}
          >
            {token}
          </motion.span>
          {gap(i)}
        </Fragment>
      ))}
    </MotionTag>
  )
}

export default SplitText
