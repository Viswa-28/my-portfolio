import { motion } from 'motion/react'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { splitContainer, splitItem } from '../lib/motion'

type Tag = 'h1' | 'p' | 'span'

type SplitTextProps = {
  text: string
  as?: Tag
  by?: 'char' | 'word'
  delay?: number
  className?: string
}

const reduce = prefersReducedMotion

// Reveals text token-by-token (chars or words), staggered, using transform +
// opacity only. The full string stays in an aria-label and the split spans are
// aria-hidden, so assistive tech reads the phrase, not the fragments.
// Reduced-motion users get the plain element, rendered immediately.
function SplitText({
  text,
  as = 'span',
  by = 'word',
  delay = 0,
  className,
}: SplitTextProps) {
  if (reduce) {
    const Tag = as
    return <Tag className={className}>{text}</Tag>
  }

  const tokens = by === 'char' ? Array.from(text) : text.split(' ')
  const MotionTag = motion[as] as typeof motion.span

  return (
    <MotionTag
      className={className}
      aria-label={text}
      variants={splitContainer(by, delay)}
      initial="hidden"
      animate="show"
    >
      {tokens.map((token, i) => (
        <motion.span
          key={`${token}-${i}`}
          aria-hidden="true"
          variants={splitItem}
          className="inline-block whitespace-pre"
        >
          {by === 'word' && i < tokens.length - 1 ? `${token} ` : token}
        </motion.span>
      ))}
    </MotionTag>
  )
}

export default SplitText
