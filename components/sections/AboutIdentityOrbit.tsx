'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Briefcase,
  Code2,
  Handshake,
  User,
  type LucideIcon
} from 'lucide-react'
import { useEffect, useId, useState } from 'react'

type Facet = {
  id: string
  label: string
  title: string
  body: string
  points: string[]
  Icon: LucideIcon
}

const PRIMARY = '#246b96'

const FACETS: Facet[] = [
  {
    id: 'who',
    label: 'Who',
    title: 'Who I am',
    body: 'Full-stack developer in Multan — React, Next.js, and MERN for products that need to ship and stay maintainable.',
    points: [
      'MERN + Next.js focus',
      'Multan · available globally',
      'Freelance · contract · full-time'
    ],
    Icon: User
  },
  {
    id: 'build',
    label: 'Build',
    title: 'What I build',
    body: 'Business sites, SaaS apps, dashboards, and APIs scoped for real users — not demos that break in production.',
    points: [
      'Next.js sites & SEO-ready apps',
      'Full-stack products & admin tools',
      'APIs, auth, and integrations'
    ],
    Icon: Code2
  },
  {
    id: 'work',
    label: 'Work',
    title: 'How I work',
    body: 'Clear scope, honest trade-offs, and architecture that survives the next feature. Progress stays visible.',
    points: [
      'Documented technical decisions',
      'Maintainable patterns first',
      'Transparent delivery updates'
    ],
    Icon: Briefcase
  },
  {
    id: 'start',
    label: 'Start',
    title: 'How we start',
    body: 'A short discovery call, then a practical plan. Reply within 24 hours — verify via case studies or GitHub.',
    points: [
      'Discovery → scoped plan',
      '24h first reply',
      'Work samples available'
    ],
    Icon: Handshake
  }
]

/** Along-axis half-segment length / outward amplitude */
const R_ALONG = 30
const R_OUT = 24
/** Mobile vertical: wider left/right half-cuts */
const R_OUT_MOBILE = 34
const R_NODE = 14
const PAD = 36
const LABEL_ROOM = 22
const N = FACETS.length

const EASE = [0.22, 1, 0.36, 1] as const
const MOVE_MS = 0.55
const FADE_MS = 0.32
const AUTO_MS = 4000

type NodePoint = {
  x: number
  y: number
  /** Horizontal: peak up. Vertical: lobe on the left. */
  primary: boolean
}

function layout (vertical: boolean) {
  if (!vertical) {
    const w = PAD * 2 + N * 2 * R_ALONG
    const h = 2 * (R_OUT + R_NODE + LABEL_ROOM)
    const cy = h / 2
    const nest = R_OUT - R_NODE * 0.85

    const nodeAt = (index: number): NodePoint => {
      const up = index % 2 === 0
      return {
        x: PAD + R_ALONG + index * 2 * R_ALONG,
        y: cy + (up ? -nest : nest),
        primary: up
      }
    }

    let x = PAD
    let wave = `M ${x} ${cy}`
    for (let i = 0; i < N; i++) {
      x += 2 * R_ALONG
      const sweep = i % 2 === 0 ? 0 : 1
      wave += ` A ${R_ALONG} ${R_OUT} 0 0 ${sweep} ${x} ${cy}`
    }

    return {
      w,
      h,
      axis: {
        x1: PAD - 8,
        y1: cy,
        x2: PAD + N * 2 * R_ALONG + 8,
        y2: cy
      },
      wave,
      nodeAt,
      labelAt: (p: NodePoint) => ({
        x: p.x,
        y: p.primary ? p.y - R_NODE - 12 : p.y + R_NODE + 16,
        anchor: 'middle' as const
      }),
      calloutTransform: (p: NodePoint) =>
        p.primary
          ? 'translate(-50%, calc(-100% - 10px))'
          : 'translate(-50%, 10px)',
      calloutSide: (p: NodePoint): 'above' | 'below' | 'left' | 'right' =>
        p.primary ? 'above' : 'below'
    }
  }

  // Vertical: left / right half-cuts — height same as desktop, width a bit wider
  const along = R_ALONG
  const out = R_OUT_MOBILE + 6
  const w = 2 * (out + R_NODE + LABEL_ROOM)
  const h = PAD * 2 + N * 2 * along
  const cx = w / 2
  // More space between node circle and half-cut arc
  const ARC_GAP = 16
  const nest = out - R_NODE - ARC_GAP

  const nodeAt = (index: number): NodePoint => {
    const left = index % 2 === 0
    return {
      x: cx + (left ? -nest : nest),
      y: PAD + along + index * 2 * along,
      primary: left
    }
  }

  let y = PAD
  let wave = `M ${cx} ${y}`
  for (let i = 0; i < N; i++) {
    y += 2 * along
    // T→B: sweep 0 = left lobe, sweep 1 = right lobe
    const sweep = i % 2 === 0 ? 0 : 1
    wave += ` A ${out} ${along} 0 0 ${sweep} ${cx} ${y}`
  }

  return {
    w,
    h,
    axis: {
      x1: cx,
      y1: PAD - 8,
      x2: cx,
      y2: PAD + N * 2 * along + 8
    },
    wave,
    nodeAt,
    labelAt: (p: NodePoint) => ({
      // Opposite side of the lobe — left nodes label right, right nodes label left
      x: p.primary ? p.x + R_NODE + 10 : p.x - R_NODE - 10,
      y: p.y + 4,
      anchor: (p.primary ? 'start' : 'end') as 'start' | 'middle' | 'end'
    }),
    // Callout toward center so it stays on-screen
    calloutTransform: (p: NodePoint) =>
      p.primary
        ? 'translate(12px, -50%)'
        : 'translate(calc(-100% - 12px), -50%)',
    calloutSide: (p: NodePoint): 'above' | 'below' | 'left' | 'right' =>
      p.primary ? 'right' : 'left'
  }
}

function activeDash (index: number, total: number) {
  const steps = Math.max(total, 1)
  const seg = 100 / steps
  const hl = Math.min(seg * 0.42, 14)
  const start = (index + 0.5) * seg - hl / 2
  return { array: `${hl} 100`, offset: -start }
}

function CalloutArrow ({ side }: { side: 'above' | 'below' | 'left' | 'right' }) {
  if (side === 'above') {
    return (
      <>
        <span
          aria-hidden
          className='absolute bottom-0 left-1/2 z-[1] h-0 w-0 -translate-x-1/2 translate-y-[calc(100%-1px)] border-x-[8px] border-t-[8px] border-x-transparent border-t-white dark:border-t-card'
        />
        <span
          aria-hidden
          className='absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 translate-y-full border-x-[9px] border-t-[9px] border-x-transparent border-t-[hsl(var(--border)/0.8)]'
        />
      </>
    )
  }
  if (side === 'below') {
    return (
      <>
        <span
          aria-hidden
          className='absolute left-1/2 top-0 z-[1] h-0 w-0 -translate-x-1/2 -translate-y-[calc(100%-1px)] border-x-[8px] border-b-[8px] border-x-transparent border-b-white dark:border-b-card'
        />
        <span
          aria-hidden
          className='absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 -translate-y-full border-x-[9px] border-b-[9px] border-x-transparent border-b-[hsl(var(--border)/0.8)]'
        />
      </>
    )
  }
  if (side === 'right') {
    return (
      <>
        <span
          aria-hidden
          className='absolute left-0 top-1/2 z-[1] h-0 w-0 -translate-x-[calc(100%-1px)] -translate-y-1/2 border-y-[8px] border-r-[8px] border-y-transparent border-r-white dark:border-r-card'
        />
        <span
          aria-hidden
          className='absolute left-0 top-1/2 h-0 w-0 -translate-x-full -translate-y-1/2 border-y-[9px] border-r-[9px] border-y-transparent border-r-[hsl(var(--border)/0.8)]'
        />
      </>
    )
  }
  return (
    <>
      <span
        aria-hidden
        className='absolute right-0 top-1/2 z-[1] h-0 w-0 -translate-y-1/2 translate-x-[calc(100%-1px)] border-y-[8px] border-l-[8px] border-y-transparent border-l-white dark:border-l-card'
      />
      <span
        aria-hidden
        className='absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 translate-x-full border-y-[9px] border-l-[9px] border-y-transparent border-l-[hsl(var(--border)/0.8)]'
      />
    </>
  )
}

/**
 * Desktop: horizontal up/down half-cuts.
 * Mobile: vertical left/right half-cuts. Same hover callout animation.
 */
export function AboutIdentityOrbit ({
  detailed = true
}: {
  detailed?: boolean
}) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [vertical, setVertical] = useState(false)
  const current = FACETS[active]
  const filterId = useId().replace(/:/g, '')
  const reduceMotion = useReducedMotion()
  const move = {
    duration: reduceMotion ? 0 : MOVE_MS,
    ease: EASE
  }
  const fade = {
    duration: reduceMotion ? 0 : FADE_MS,
    ease: EASE
  }

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    const sync = () => setVertical(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (paused || reduceMotion) return
    const id = window.setInterval(() => {
      setActive(prev => (prev + 1) % FACETS.length)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, reduceMotion])

  const select = (i: number) => {
    setActive(i)
    setPaused(true)
  }

  const geo = layout(vertical)
  const calloutPos = geo.nodeAt(active)
  const dash = activeDash(active, FACETS.length)
  const calloutSide = geo.calloutSide(calloutPos)

  return (
    <div
      className='mx-auto w-full max-w-3xl sm:max-w-4xl'
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`relative mx-auto w-full overflow-visible ${
          vertical ? 'max-w-[340px]' : ''
        }`}
        onMouseEnter={() => setPaused(true)}
      >
        <svg
          viewBox={`0 0 ${geo.w} ${geo.h}`}
          className='mx-auto block h-auto w-full overflow-visible'
          role='img'
          aria-label='About identity timeline'
        >
          <defs>
            <filter id={filterId} x='-25%' y='-25%' width='150%' height='150%'>
              <feDropShadow
                dx='0'
                dy='2'
                stdDeviation='3'
                floodColor='#0f172a'
                floodOpacity='0.1'
              />
            </filter>
          </defs>

          <line
            x1={geo.axis.x1}
            y1={geo.axis.y1}
            x2={geo.axis.x2}
            y2={geo.axis.y2}
            className='stroke-border'
            strokeWidth='1.25'
            strokeDasharray='4 6'
            opacity={0.55}
          />

          <path
            d={geo.wave}
            fill='none'
            className='stroke-border'
            strokeWidth='1.75'
          />

          <motion.path
            key={vertical ? 'v' : 'h'}
            d={geo.wave}
            fill='none'
            stroke={PRIMARY}
            strokeWidth='3.5'
            strokeLinecap='round'
            pathLength={100}
            initial={false}
            animate={{
              strokeDasharray: dash.array,
              strokeDashoffset: dash.offset
            }}
            transition={move}
          />

          {FACETS.map((facet, i) => {
            const p = geo.nodeAt(i)
            const isActive = active === i
            const Icon = facet.Icon
            const label = geo.labelAt(p)

            return (
              <g
                key={facet.id}
                className='cursor-pointer outline-none focus:outline-none'
                style={{ outline: 'none' }}
                filter={`url(#${filterId})`}
                onMouseEnter={() => select(i)}
                onClick={() => select(i)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    select(i)
                  }
                }}
                role='button'
                tabIndex={0}
                aria-label={facet.title}
                aria-pressed={isActive}
              >
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r={R_NODE + 4}
                  fill='none'
                  stroke={PRIMARY}
                  strokeWidth={1.75}
                  initial={false}
                  animate={{ opacity: isActive ? 0.45 : 0 }}
                  transition={fade}
                />
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r={R_NODE}
                  className='fill-white dark:fill-card'
                  stroke={PRIMARY}
                  initial={false}
                  animate={{ strokeWidth: isActive ? 2.5 : 1.75 }}
                  transition={fade}
                />
                <foreignObject
                  x={p.x - 8}
                  y={p.y - 8}
                  width={16}
                  height={16}
                >
                  <div className='pointer-events-none flex h-full w-full items-center justify-center'>
                    <Icon
                      width={12}
                      height={12}
                      color={PRIMARY}
                      strokeWidth={isActive ? 2.4 : 2.2}
                    />
                  </div>
                </foreignObject>
                <motion.text
                  x={label.x}
                  y={label.y}
                  textAnchor={label.anchor}
                  className='pointer-events-none select-none font-heading uppercase'
                  fontSize='11'
                  fontWeight='700'
                  letterSpacing='0.1em'
                  initial={false}
                  animate={{
                    fill: isActive ? PRIMARY : 'hsl(var(--body))',
                    opacity: isActive ? 1 : 0.72
                  }}
                  transition={fade}
                >
                  {facet.label}
                </motion.text>
              </g>
            )
          })}
        </svg>

        {detailed && (
          <motion.div
            className={`pointer-events-none absolute z-20 ${
              vertical ? 'w-[min(200px,70%)]' : 'w-[min(280px,42%)]'
            }`}
            initial={false}
            animate={{
              left: `${(calloutPos.x / geo.w) * 100}%`,
              top: `${(calloutPos.y / geo.h) * 100}%`
            }}
            transition={move}
            style={{ transform: geo.calloutTransform(calloutPos) }}
          >
            <div className='relative border border-border/80 bg-white px-3.5 py-3 text-left shadow-[0_8px_24px_-10px_rgba(15,23,42,0.25)] dark:border-border/50 dark:bg-card sm:px-4 sm:py-3.5'>
              <CalloutArrow side={calloutSide} />

              <AnimatePresence mode='wait' initial={false}>
                <motion.div
                  key={current.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={fade}
                >
                  <p
                    className='font-heading text-[14px] font-semibold uppercase tracking-[0.08em] sm:text-[15px]'
                    style={{ color: PRIMARY }}
                  >
                    {current.title}
                  </p>
                  <p className='mt-1.5 text-[13px] leading-relaxed text-body/85 sm:mt-2 sm:text-[15px]'>
                    {current.body}
                  </p>
                  <ul className='mt-2 space-y-1.5 border-t border-border/50 pt-2 sm:mt-2.5 sm:pt-2.5'>
                    {current.points.map(point => (
                      <li
                        key={point}
                        className='flex items-start gap-2 text-[12px] leading-snug text-body/80 sm:text-[14px]'
                      >
                        <span
                          className='mt-1.5 h-1.5 w-1.5 shrink-0'
                          style={{ backgroundColor: PRIMARY }}
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
