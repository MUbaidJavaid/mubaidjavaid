'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import {
  BadgeCheck,
  BookOpen,
  Code2,
  LayoutTemplate,
  Search,
  Settings2,
  type LucideIcon
} from 'lucide-react'

type Step = {
  id: string
  label: string
  mobileLabel: string
  slot: 12 | 2 | 4 | 6 | 8 | 10
  color: string
  Icon: LucideIcon
}

/** Same styling as before — brand navy/steel honeycomb */
const steps: Step[] = [
  {
    id: 'discovery',
    label: 'Collection, exploration & knowledge gathering',
    mobileLabel: 'Discovery & knowledge gathering',
    slot: 12,
    color: 'hsl(215 48% 22%)',
    Icon: BookOpen
  },
  {
    id: 'planning',
    label: 'Research and planning',
    mobileLabel: 'Research & planning',
    slot: 2,
    color: 'hsl(211 48% 38%)',
    Icon: Search
  },
  {
    id: 'design',
    label: 'Interface & structure',
    mobileLabel: 'Interface & structure',
    slot: 4,
    color: 'hsl(211 42% 48%)',
    Icon: LayoutTemplate
  },
  {
    id: 'development',
    label: 'Development (front-end & back-end)',
    mobileLabel: 'Front-end & back-end development',
    slot: 6,
    color: 'hsl(215 36% 32%)',
    Icon: Code2
  },
  {
    id: 'qa',
    label: 'Quality assurance & launch',
    mobileLabel: 'QA & launch',
    slot: 8,
    color: 'hsl(214 30% 42%)',
    Icon: BadgeCheck
  },
  {
    id: 'support',
    label: 'Handover & maintenance',
    mobileLabel: 'Handover & support',
    slot: 10,
    color: 'hsl(215 44% 16%)',
    Icon: Settings2
  }
]

const HEX_CLIP = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'

/** Simple borderless brand-color hex. */
function Hex ({
  color = 'hsl(215 48% 22%)',
  Icon,
  center
}: {
  color?: string
  Icon?: LucideIcon
  center?: boolean
}) {
  return (
    <div className='relative aspect-square w-full'>
      <div
        className='absolute inset-0 flex items-center justify-center'
        style={{
          clipPath: HEX_CLIP,
          WebkitClipPath: HEX_CLIP,
          backgroundColor: center ? '#e8ebf0' : color
        }}
      >
        {center ? (
          <p className='relative z-10 max-w-[11ch] px-1 text-center font-display text-[0.42rem] font-bold uppercase leading-[1.15] tracking-[0.025em] text-heading sm:px-2 sm:text-[clamp(0.36rem,1.25vw,0.75rem)] sm:leading-[1.25] sm:tracking-[0.07em]'>
            Product design and development process
          </p>
        ) : (
          Icon && (
            <Icon
              className='relative z-10 text-white drop-shadow-[0_2px_3px_hsl(215_50%_5%/0.55)]'
              size={28}
              strokeWidth={1.55}
              aria-hidden
            />
          )
        )}
      </div>
    </div>
  )
}

/** Packed pointy-top positions (centered artboard) */
const SLOT: Record<
  Step['slot'],
  { x: string; y: string; label: string; line: string }
> = {
  12: {
    x: '50%',
    y: '27%',
    label:
      'left-[60%] top-[8%] w-[38%] text-left sm:left-[62%] sm:top-[10%] sm:w-[32%]',
    line: 'left-[50%] top-[14.6%] w-[44%] sm:top-[14.8%]'
  },
  2: {
    x: '69%',
    y: '38.5%',
    label:
      'left-[81.5%] top-[34%] w-[18.5%] text-left sm:left-[83%] sm:w-[16%]',
    line: 'left-[78%] top-[38.5%] w-[18%]'
  },
  4: {
    x: '69%',
    y: '61.5%',
    label:
      'left-[81.5%] top-[57%] w-[18.5%] text-left sm:left-[83%] sm:w-[16%]',
    line: 'left-[78%] top-[61.5%] w-[18%]'
  },
  6: {
    x: '50%',
    y: '73%',
    label:
      'left-[60%] top-[87%] w-[38%] text-left sm:left-[62%] sm:w-[32%]',
    line: 'left-[50%] top-[85.4%] w-[44%] sm:top-[85.2%]'
  },
  8: {
    x: '31%',
    y: '61.5%',
    label:
      'left-0 top-[57%] w-[18.5%] text-right sm:left-[1%] sm:w-[16%]',
    line: 'left-[4%] top-[61.5%] w-[18%]'
  },
  10: {
    x: '31%',
    y: '38.5%',
    label:
      'left-0 top-[34%] w-[18.5%] text-right sm:left-[1%] sm:w-[16%]',
    line: 'left-[4%] top-[38.5%] w-[18%]'
  }
}

/**
 * Original honeycomb styling — only change: reliably centered + always visible.
 */
export function ProcessHoneycomb ({ className }: { className?: string }) {
  const [activeStep, setActiveStep] = useState<string | null>(null)

  return (
    <div className={cn('mx-auto w-full max-w-5xl', className)}>
      {/* One proportional layout at every breakpoint */}
      <div
        className='relative mx-auto w-full max-w-[920px]'
        style={{ aspectRatio: '1100 / 980' }}
      >
        {steps.map(step => {
          const isLeft = step.slot === 8 || step.slot === 10
          const pos = SLOT[step.slot]
          return (
            <div
              key={`rail-${step.id}`}
              className={cn(
                'pointer-events-none absolute z-0 flex -translate-y-1/2 items-center',
                pos.line
              )}
              style={{
                transform: `translateY(-50%) scaleX(${
                  activeStep === step.id ? 1.14 : 1
                })`,
                transformOrigin: isLeft ? 'right center' : 'left center',
                transition:
                  'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)'
              }}
              aria-hidden
            >
              {isLeft ? (
                <>
                  <span
                    className='h-2 w-2 shrink-0 rounded-full'
                    style={{
                      background: step.color,
                      transform: `scaleX(${
                        activeStep === step.id ? 1 / 1.14 : 1
                      })`,
                      transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  />
                  <span
                    className='h-px flex-1'
                    style={{ background: step.color }}
                  />
                </>
              ) : (
                <>
                  <span
                    className='h-px flex-1'
                    style={{ background: step.color }}
                  />
                  <span
                    className='h-2 w-2 shrink-0 rounded-full'
                    style={{
                      background: step.color,
                      transform: `scaleX(${
                        activeStep === step.id ? 1 / 1.14 : 1
                      })`,
                      transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  />
                </>
              )}
            </div>
          )
        })}

        {steps.map(step => {
          const pos = SLOT[step.slot]
          return (
            <div
              key={step.id}
              className='absolute z-10 w-[24%] max-w-[200px] -translate-x-1/2 -translate-y-1/2'
              style={{ left: pos.x, top: pos.y }}
              onPointerEnter={() => setActiveStep(step.id)}
              onPointerLeave={() => setActiveStep(null)}
            >
              <Hex color={step.color} Icon={step.Icon} />
            </div>
          )
        })}

        <div className='absolute left-1/2 top-1/2 z-20 w-[24%] max-w-[200px] -translate-x-1/2 -translate-y-1/2'>
          <Hex center />
        </div>

        {steps.map(step => (
          <p
            key={`label-${step.id}`}
            className={cn(
              'absolute z-30 font-display text-[0.42rem] font-bold uppercase leading-[1.15] tracking-[0.015em] text-heading sm:text-[clamp(0.34rem,1.65vw,0.7rem)] sm:leading-snug sm:tracking-[0.045em]',
              SLOT[step.slot].label
            )}
          >
            <span className='sm:hidden'>{step.mobileLabel}</span>
            <span className='hidden sm:inline'>{step.label}</span>
          </p>
        ))}
      </div>
    </div>
  )
}

export const honeycombSteps = steps
