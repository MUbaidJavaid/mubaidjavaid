'use client'

import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { process } from '@/data/site'
import {
  Compass,
  FlaskConical,
  HandshakeIcon,
  Layers3,
  LifeBuoy,
  PencilRuler,
  Rocket,
  Search,
  type LucideIcon
} from 'lucide-react'
import { useMemo, useState } from 'react'

const stepIcons: LucideIcon[] = [
  Search,
  Compass,
  PencilRuler,
  Layers3,
  FlaskConical,
  Rocket,
  HandshakeIcon,
  LifeBuoy
]

const stepDurations = [
  'Week 1',
  'Week 1–2',
  'Week 2–3',
  'Week 2–4',
  'Week 3–4',
  'Launch Week',
  'Week 4–5',
  'Post-launch'
]

/** Distinct but on-brand petal colors */
const stepColors = [
  '#246b96',
  '#1a7a6e',
  '#2d6a9f',
  '#1e8a7a',
  '#1e5a82',
  '#34a088',
  '#185a78',
  '#2a8f6e'
]

const SIZE = 720
const CX = SIZE / 2
const CY = SIZE / 2
const R_INNER = 128
const R_CONTENT = 188
const R_OUTER = 265
const R_PEAK = 290
const GAP = 2.5

function polar (r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) }
}

function cleanPetalPath (
  index: number,
  total: number,
  sweep: number,
  rot: number
) {
  const start = rot + index * sweep + GAP / 2
  const end = rot + (index + 1) * sweep - GAP / 2
  const mid = (start + end) / 2

  const o0 = polar(R_OUTER, start)
  const peak = polar(R_PEAK, mid)
  const o1 = polar(R_OUTER, end)
  const i1 = polar(R_INNER, end)
  const i0 = polar(R_INNER, start)
  const large = end - start > 180 ? 1 : 0

  return [
    `M ${i0.x.toFixed(2)} ${i0.y.toFixed(2)}`,
    `L ${o0.x.toFixed(2)} ${o0.y.toFixed(2)}`,
    `L ${peak.x.toFixed(2)} ${peak.y.toFixed(2)}`,
    `L ${o1.x.toFixed(2)} ${o1.y.toFixed(2)}`,
    `L ${i1.x.toFixed(2)} ${i1.y.toFixed(2)}`,
    `A ${R_INNER} ${R_INNER} 0 ${large} 0 ${i0.x.toFixed(2)} ${i0.y.toFixed(2)}`,
    'Z'
  ].join(' ')
}

export function ProcessSection () {
  const [activeStep, setActiveStep] = useState(0)
  const total = process.length
  const sweep = 360 / total
  const rot = -sweep / 2

  const active = process[activeStep] ?? process[0]
  const activeColor = stepColors[activeStep % stepColors.length]

  const petals = useMemo(
    () =>
      process.map((_, i) => cleanPetalPath(i, total, sweep, rot)),
    [total, sweep, rot]
  )

  return (
    <section className='section-anchor surface-page overflow-x-clip border-t border-border/50 py-12 md:py-16'>
      <div className='container-wide'>
        <div className='section-header mb-8 md:mb-14'>
          <SectionDisplayTag tag='Process' pattern='jsx' />
          <p className='section-lead'>
            From brief to launch — clear steps, no guesswork.
          </p>
        </div>

        {/* Same lifecycle wheel — smaller on mobile so it stays in frame */}
        <div className='relative mx-auto w-full max-w-[300px] sm:max-w-[520px] md:max-w-[640px] lg:max-w-[720px]'>
          <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className='mx-auto block h-auto w-full'
            role='img'
            aria-label='Product delivery process'
          >
            <defs>
              <filter
                id='process-petal-shadow'
                x='-15%'
                y='-15%'
                width='130%'
                height='130%'
              >
                <feDropShadow
                  dx='0'
                  dy='4'
                  stdDeviation='5'
                  floodColor='#0f172a'
                  floodOpacity='0.12'
                />
              </filter>
            </defs>

            {process.map((step, i) => {
              const color = stepColors[i % stepColors.length]
              const isActive = activeStep === i
              const start = rot + i * sweep + GAP / 2
              const end = rot + (i + 1) * sweep - GAP / 2
              const mid = (start + end) / 2
              const peak = polar(R_PEAK, mid)
              const center = polar(R_CONTENT, mid)
              const Icon = stepIcons[i % stepIcons.length]

              return (
                <g
                  key={step.step}
                  filter='url(#process-petal-shadow)'
                  className='cursor-pointer'
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveStep(i)
                    }
                  }}
                  role='button'
                  tabIndex={0}
                  aria-label={`${step.step}: ${step.description}`}
                  aria-pressed={isActive}
                >
                  <path
                    d={petals[i]}
                    fill={isActive ? '#F8FBFD' : '#ffffff'}
                    stroke={color}
                    strokeWidth={isActive ? 7 : 5.5}
                    strokeLinejoin='round'
                  />

                  <circle
                    cx={peak.x}
                    cy={peak.y}
                    r={20}
                    fill={color}
                    stroke='#ffffff'
                    strokeWidth='3'
                  />
                  <text
                    x={peak.x}
                    y={peak.y + 1}
                    textAnchor='middle'
                    dominantBaseline='middle'
                    fill='#ffffff'
                    fontSize='15'
                    fontWeight='800'
                    className='pointer-events-none select-none font-heading'
                  >
                    {i + 1}
                  </text>

                  <foreignObject
                    x={center.x - 58}
                    y={center.y - 48}
                    width={116}
                    height={96}
                  >
                    <div className='pointer-events-none flex h-full w-full flex-col items-center justify-center gap-1.5'>
                      <Icon
                        width={36}
                        height={36}
                        color={color}
                        strokeWidth={2.2}
                        absoluteStrokeWidth
                      />
                      <span
                        style={{
                          color,
                          fontSize: 13,
                          fontWeight: 700,
                          lineHeight: 1.15,
                          textAlign: 'center',
                          maxWidth: 108,
                          textTransform: 'uppercase',
                          letterSpacing: '0.03em'
                        }}
                      >
                        {step.step}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              )
            })}

            <circle cx={CX} cy={CY} r={R_INNER - 8} fill='#ffffff' />
            <text
              x={CX}
              y={CY - 22}
              textAnchor='middle'
              fill='hsl(222 47% 11%)'
              fontSize='17'
              fontWeight='800'
              className='select-none font-heading'
            >
              Product
            </text>
            <text
              x={CX}
              y={CY + 2}
              textAnchor='middle'
              fill='hsl(222 47% 11%)'
              fontSize='17'
              fontWeight='800'
              className='select-none font-heading'
            >
              Delivery
            </text>
            <text
              x={CX}
              y={CY + 26}
              textAnchor='middle'
              fill='hsl(202 61% 37%)'
              fontSize='17'
              fontWeight='800'
              className='select-none font-heading'
            >
              Process
            </text>
          </svg>
        </div>

        {/* Active step detail */}
        <div className='mx-auto mt-5 max-w-xl px-1 text-center sm:mt-8'>
          <p
            className='text-sm font-semibold uppercase tracking-[0.04em] sm:text-base'
            style={{ color: activeColor }}
          >
            Step {activeStep + 1} — {active.step}
          </p>
          <p className='section-copy mt-2 text-body/85'>
            {active.description}
          </p>
          <p className='mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary/75 sm:text-sm'>
            {stepDurations[activeStep] ?? `Phase ${activeStep + 1}`}
          </p>
        </div>
      </div>
    </section>
  )
}
