'use client'

import { motion } from 'framer-motion'

const PRIMARY = '#246b96'

const labels = [
  { text: 'Maintainable', angle: -90 },
  { text: 'Reusable', angle: 0 },
  { text: 'Reliable', angle: 90 },
  { text: 'Practical', angle: 180 }
]

const RING_R = 134
const CX = 150

export function QualityCircle () {
  return (
    <div className='mx-auto flex items-center justify-center py-2'>
      <motion.div
        className='relative h-[300px] w-[300px]'
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <svg
          className='absolute inset-0 h-full w-full'
          viewBox='0 0 300 300'
          fill='none'
          aria-hidden
        >
          <defs>
            <path id='qc-orbit-1' d='M150,16 a134,134 0 1,1 -.1,0 z' />
            <path id='qc-orbit-2' d='M150,40 a110,110 0 1,1 -.1,0 z' />
            <radialGradient id='qc-glow' cx='50%' cy='50%' r='50%'>
              <stop offset='0%' stopColor={PRIMARY} stopOpacity='0.14' />
              <stop offset='100%' stopColor={PRIMARY} stopOpacity='0' />
            </radialGradient>
          </defs>

          <circle cx='150' cy='150' r='140' fill='url(#qc-glow)' />

          <circle
            cx='150'
            cy='150'
            r='144'
            stroke={PRIMARY}
            strokeOpacity='0.18'
            strokeWidth='1'
            strokeDasharray='3 9'
          />

          <motion.circle
            cx='150'
            cy='150'
            r='134'
            stroke={PRIMARY}
            strokeOpacity='0.45'
            strokeWidth='1.25'
            strokeDasharray='52 22'
            style={{ originX: '150px', originY: '150px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          />

          <motion.path
            d='M150,16 a134,134 0 0,1 94.75,39.25'
            stroke={PRIMARY}
            strokeOpacity='0.55'
            strokeWidth='2'
            strokeLinecap='round'
            fill='none'
            style={{ originX: '150px', originY: '150px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          />

          <motion.circle
            cx='150'
            cy='150'
            r='110'
            stroke={PRIMARY}
            strokeOpacity='0.28'
            strokeWidth='1'
            strokeDasharray='16 10'
            style={{ originX: '150px', originY: '150px' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          />

          <motion.path
            d='M150,40 a110,110 0 0,0 -77.78,32.22'
            stroke='#1a7a6e'
            strokeOpacity='0.4'
            strokeWidth='1.5'
            strokeLinecap='round'
            fill='none'
            style={{ originX: '150px', originY: '150px' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          />

          {[0, 90, 180, 270].map(a => (
            <line
              key={a}
              x1='150'
              y1='8'
              x2='150'
              y2='16'
              stroke={PRIMARY}
              strokeOpacity='0.25'
              strokeLinecap='round'
              transform={`rotate(${a} 150 150)`}
            />
          ))}

          <circle r='3' fill={PRIMARY} opacity='0.85'>
            <animateMotion dur='22s' repeatCount='indefinite'>
              <mpath href='#qc-orbit-1' />
            </animateMotion>
          </circle>
          <circle r='2.25' fill='#1a7a6e' opacity='0.7'>
            <animateMotion dur='16s' repeatCount='indefinite' begin='-5s'>
              <mpath href='#qc-orbit-2' />
            </animateMotion>
          </circle>
        </svg>

        <motion.div
          className='absolute left-1/2 top-1/2 z-20 flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 bg-white text-center shadow-[0_8px_28px_-10px_rgba(36,107,150,0.35)] dark:bg-card'
          style={{ borderColor: PRIMARY }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span
            className='font-heading text-[11px] font-bold uppercase leading-snug tracking-[0.12em]'
            style={{ color: PRIMARY }}
          >
            Production
            <br />
            Ready
          </span>
          <span
            className='mx-auto mt-1.5 h-px w-7'
            style={{ backgroundColor: `${PRIMARY}40` }}
            aria-hidden
          />
          <span className='mt-1 text-[9px] font-medium uppercase tracking-[0.14em] text-body/55'>
            Code Quality
          </span>
        </motion.div>

        {labels.map(({ text, angle }, i) => {
          const rad = (angle * Math.PI) / 180
          const x = CX + RING_R * Math.cos(rad)
          const y = CX + RING_R * Math.sin(rad)

          return (
            <motion.div
              key={text}
              className='absolute z-10 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 border border-border/70 bg-white px-2.5 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.12em] text-heading shadow-sm dark:border-border/50 dark:bg-card'
              style={{ left: x, top: y }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.12 + i * 0.1,
                duration: 0.35,
                ease: 'easeOut'
              }}
            >
              <span
                className='h-1.5 w-1.5 shrink-0'
                style={{ backgroundColor: PRIMARY }}
                aria-hidden
              />
              {text}
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default QualityCircle
