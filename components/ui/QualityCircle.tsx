'use client'

import { motion } from 'framer-motion'

const labels = [
  { text: 'Maintainable', angle: -90, dot: '#0035f6' },
  { text: 'Reusable', angle: 0, dot: '#45ee11' },
  { text: 'Reliable', angle: 90, dot: '#ff0000' },
  { text: 'Practical', angle: 180, dot: '#fbff00' }
]

const RING_R = 134
const CX = 150

export function QualityCircle () {
  return (
    <div className='flex items-center justify-center mx-auto py-4'>
      <motion.div
        className='relative h-[300px] w-[300px]'
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* ── SVG Rings ── */}
        <svg
          className='absolute inset-0 top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 h-full w-full'
          viewBox='0 0 300 300'
          fill='none'
        >
          <defs>
            <path id='p1' d='M150,16 a134,134 0 1,1 -.1,0 z' />
            <path id='p2' d='M150,40 a110,110 0 1,1 -.1,0 z' />
            <radialGradient id='bg-glow' cx='50%' cy='50%' r='50%'>
              <stop offset='0%' stopColor='#02006e' stopOpacity='.7' />
              <stop offset='100%' stopColor='#a09f9f' stopOpacity='0' />
            </radialGradient>
          </defs>

          {/* Soft bg haze */}
          <circle cx='150' cy='150' r='140' fill='url(#bg-glow)' />

          {/* Ghost outer ring */}
          <circle
            cx='150'
            cy='150'
            r='144'
            stroke='#020845'
            strokeOpacity='.24'
            strokeWidth='1'
            strokeDasharray='2 10'
          />

          {/* Ring 1 - slow CW */}
          <motion.circle
            cx='150'
            cy='150'
            r='134'
            stroke='#00ce0a'
            strokeOpacity='.49'
            strokeWidth='1'
            strokeDasharray='60 20'
            style={{ originX: '150px', originY: '150px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />

          {/* Ring 1 accent arc */}
          <motion.path
            d='M150,16 a134,134 0 0,1 94.75,39.25'
            stroke='#c5f540'
            strokeOpacity='.3'
            strokeWidth='1'
            strokeLinecap='round'
            fill='none'
            style={{ originX: '150px', originY: '150px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />

          {/* Ring 2 - medium CCW */}
          <motion.circle
            cx='150'
            cy='150'
            r='110'
            stroke='#e23e7d'
            strokeOpacity='.3'
            strokeWidth='1'
            strokeDasharray='20 8'
            style={{ originX: '150px', originY: '150px' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />

          {/* Ring 2 accent arc */}
          <motion.path
            d='M150,40 a110,110 0 0,0 -77.78,32.22'
            stroke='#20d9fa'
            strokeOpacity='.3'
            strokeWidth='1'
            strokeLinecap='round'
            fill='none'
            style={{ originX: '150px', originY: '150px' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />

          {/* Cardinal tick marks */}
          {[0, 90, 180, 270].map(a => (
            <line
              key={a}
              x1='150'
              y1='6'
              x2='150'
              y2='14'
              stroke='#06ceb3'
              strokeOpacity='.15'
              strokeLinecap='round'
              transform={`rotate(${a} 150 150)`}
            />
          ))}
          {[45, 135, 225, 315].map(a => (
            <line
              key={a}
              x1='150'
              y1='8'
              x2='150'
              y2='13'
              stroke='#85b612'
              strokeOpacity='.08'
              strokeLinecap='round'
              transform={`rotate(${a} 150 150)`}
            />
          ))}

          {/* Subtle spoke lines */}
          {[0, 90, 180, 270].map(a => {
            const rad = (a * Math.PI) / 180
            const x2 = 150 + 40 * Math.cos(rad - Math.PI / 2)
            const y2 = 150 + 40 * Math.sin(rad - Math.PI / 2)
            const x1 = 150 + 68 * Math.cos(rad - Math.PI / 2)
            const y1 = 150 + 68 * Math.sin(rad - Math.PI / 2)
            return (
              <line
                key={a}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke='#0951fc'
                strokeOpacity='.3'
                strokeWidth='1'
              />
            )
          })}

          {/* Orbiting dots - native SVG animateMotion (no JS) */}
          <circle r='3.5' fill='#034005' opacity='.8'>
            <animateMotion dur='18s' repeatCount='indefinite'>
              <mpath href='#p1' />
            </animateMotion>
          </circle>
          <circle r='2' fill='#750510' opacity='.35'>
            <animateMotion dur='18s' repeatCount='indefinite' begin='-9s'>
              <mpath href='#p1' />
            </animateMotion>
          </circle>
          <circle r='3' fill='#636003' opacity='.45'>
            <animateMotion dur='14s' repeatCount='indefinite' begin='-4s'>
              <mpath href='#p2' />
            </animateMotion>
          </circle>
        </svg>

        {/* ── Center Badge ── */}
        <motion.div
          className='absolute left-1/2 top-1/3 z-20
                     flex h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2
                     flex-col items-center justify-center rounded-full
                     bg-[#142b61] text-center
                     shadow-[0_4px_24px_rgba(15,23,42,.18),0_0_0_6px_rgba(15,23,42,.06),0_0_0_12px_rgba(15,23,42,.03)]'
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span
            className='text-[10.5px] font-bold uppercase tracking-widest
                           leading-snug text-white'
          >
            Production
            <br />
            Ready
          </span>
          <span className='mx-auto mt-1 mb-1 h-px w-6 bg-white/20' />
          <span
            className='text-[8.5px] font-normal tracking-wider
                           text-white/45'
          >
            Code Quality
          </span>
        </motion.div>

        {/* ── Orbit Labels ── */}
        {labels.map(({ text, angle, dot }, i) => {
          const rad = (angle * Math.PI) / 180
          const x = CX + RING_R * Math.cos(rad)
          const y = CX + RING_R * Math.sin(rad)

          return (
            <motion.div
              key={text}
              className='absolute z-10 -translate-x-1/2 -translate-y-1/2
                         inline-flex cursor-default items-center gap-[5px]
                         rounded-full border border-[#0f172a]/10
                         bg-white px-3 py-[5px]
                         text-[10px] font-bold uppercase tracking-[.12em] text-[#0F172A]
                         shadow-[0_2px_8px_rgba(15,23,42,.08)]
                         transition-all duration-200
                         hover:scale-105 hover:border-[#0f172a]/25
                         hover:shadow-[0_6px_20px_rgba(15,23,42,.14)]'
              style={{ left: x, top: y }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15 + i * 0.12,
                duration: 0.4,
                ease: 'backOut'
              }}
            >
              <span
                className='h-[7px] w-[7px] shrink-0 rounded-full'
                style={{ background: dot }}
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
