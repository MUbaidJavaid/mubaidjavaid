'use client'

import { motion, useReducedMotion } from 'framer-motion'

type Glyph = {
  text: string
  top: string
  left?: string
  right?: string
  size: string
  rotate: number
  delay: number
  opacity: number
}

const PATTERNS: Glyph[] = [
  { text: '</>', top: '8%', left: '4%', size: '1.85rem', rotate: -12, delay: 0, opacity: 0.14 },
  { text: '{ }', top: '18%', left: '14%', size: '1.35rem', rotate: 8, delay: 1.2, opacity: 0.11 },
  { text: '[ ]', top: '6%', right: '5%', size: '1.7rem', rotate: 14, delay: 0.6, opacity: 0.13 },
  { text: '#', top: '28%', right: '8%', size: '2.1rem', rotate: -6, delay: 1.8, opacity: 0.12 },
  { text: 'NPM', top: '55%', left: '3%', size: '1.15rem', rotate: 18, delay: 0.9, opacity: 0.1 },
  { text: 'GIT', top: '62%', right: '6%', size: '1.2rem', rotate: -10, delay: 2.4, opacity: 0.11 },
  { text: '>_', top: '14%', left: '42%', size: '1.45rem', rotate: -4, delay: 1.5, opacity: 0.09 },
  { text: '<3', top: '48%', right: '18%', size: '1.55rem', rotate: 22, delay: 2.1, opacity: 0.1 },
  { text: '</>', top: '72%', left: '16%', size: '1.25rem', rotate: -18, delay: 2.8, opacity: 0.1 },
  { text: '{ }', top: '38%', left: '68%', size: '1.5rem', rotate: 11, delay: 1.1, opacity: 0.11 },
  { text: '[ ]', top: '78%', right: '22%', size: '1.1rem', rotate: -8, delay: 3.2, opacity: 0.09 },
  { text: '#', top: '42%', left: '8%', size: '1.6rem', rotate: 6, delay: 0.4, opacity: 0.1 },
  { text: '>_', top: '70%', right: '4%', size: '1.3rem', rotate: 15, delay: 2.6, opacity: 0.1 },
  { text: 'NPM', top: '22%', right: '28%', size: '1.05rem', rotate: -14, delay: 1.9, opacity: 0.08 },
  { text: 'GIT', top: '12%', left: '28%', size: '1.1rem', rotate: 9, delay: 0.7, opacity: 0.09 },
  { text: '<3', top: '58%', left: '38%', size: '1.2rem', rotate: -20, delay: 3, opacity: 0.08 }
]

function CodeGlyph ({
  text,
  size,
  style,
  rotate,
  delay = 0,
  opacity = 0.12
}: {
  text: string
  size: string
  style?: React.CSSProperties
  rotate: number
  delay?: number
  opacity?: number
}) {
  return (
    <motion.span
      className='pointer-events-none absolute select-none font-mono font-semibold tracking-tight text-primary'
      style={{
        fontSize: size,
        rotate: `${rotate}deg`,
        opacity,
        ...style
      }}
      animate={{
        y: [0, -12, 0],
        rotate: [`${rotate}deg`, `${rotate + 6}deg`, `${rotate}deg`]
      }}
      transition={{
        duration: 14 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
      aria-hidden
    >
      {text}
    </motion.span>
  )
}

/** Low-opacity floating code glyphs for hero backgrounds */
export function HeroCodeDecor () {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <div className='pointer-events-none absolute inset-0 overflow-hidden' aria-hidden>
        {PATTERNS.map((item, i) => (
          <span
            key={`${item.text}-${i}`}
            className='absolute select-none font-mono font-semibold text-primary'
            style={{
              fontSize: item.size,
              top: item.top,
              left: item.left,
              right: item.right,
              rotate: `${item.rotate}deg`,
              opacity: item.opacity * 0.85
            }}
          >
            {item.text}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden' aria-hidden>
      {PATTERNS.map((item, i) => (
        <CodeGlyph
          key={`${item.text}-${i}`}
          text={item.text}
          size={item.size}
          rotate={item.rotate}
          delay={item.delay}
          opacity={item.opacity}
          style={{
            top: item.top,
            left: item.left,
            right: item.right
          }}
        />
      ))}
    </div>
  )
}
