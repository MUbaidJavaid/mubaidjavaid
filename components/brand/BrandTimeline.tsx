'use client'

import { BrandSection } from '@/components/brand/system/BrandSection'
import { TimelineRail } from '@/components/visual/TimelineRail'
import { experience } from '@/data/site'
import { brandType } from '@/lib/brand-system'
import { cn } from '@/lib/utils'

export function BrandTimeline () {
  const items = experience.roles.map(role => ({
    year: role.duration,
    title: role.company,
    role: role.role,
    body: role.copy,
    location: role.location,
    current: role.current,
    technologies: role.technologies.slice(0, 5)
  }))

  return (
    <BrandSection
      id='timeline'
      layout='band'
      className='relative isolate min-h-0 overflow-hidden bg-[hsl(214_28%_97%)]'
    >
      <div
        className='pointer-events-none absolute right-[-12%] top-[-20%] h-[65%] w-[52%] rounded-full border border-[hsl(211_48%_42%/0.08)]'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute right-[-6%] top-[-12%] h-[48%] w-[40%] rounded-full border border-[hsl(211_48%_42%/0.08)]'
        aria-hidden
      />
      <p
        className='pointer-events-none absolute -right-[0.04em] top-[0.08em] select-none font-display text-[clamp(6rem,20vw,16rem)] font-bold leading-none tracking-[-0.08em] text-heading/[0.025]'
        aria-hidden
      >
        24—26
      </p>

      <div className='relative z-10'>
        <div className='mx-auto grid w-full max-w-[1280px] gap-10 px-6 pb-12 pt-16 sm:px-8 md:px-10 md:pb-16 md:pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:px-12 lg:pb-20 lg:pt-24'>
          <div>
            <p className='font-mono text-xs tracking-wide text-highlight'>
              {experience.title} · Delivery path
            </p>
            <h2 className={cn('mt-5', brandType.title)}>
              Built through delivery.
              <br />
              <span className='text-highlight'>Proven in production.</span>
            </h2>
          </div>

          <div className='lg:pb-1'>
            <p className='max-w-[43ch] text-sm leading-relaxed text-body md:text-base'>
              Roles and delivery context—a continuous path of shipping
              maintainable products, not a résumé dump.
            </p>
            <div className='mt-7 flex items-center gap-3' aria-hidden>
              <span className='font-mono text-xs tracking-wide text-muted-foreground'>
                2024
              </span>
              <span className='relative h-px flex-1 bg-heading/15'>
                <span className='absolute -top-[3px] right-0 h-[7px] w-[7px] rounded-full bg-primary shadow-[0_0_0_5px_hsl(211_48%_42%/0.1)]' />
              </span>
              <span className='font-mono text-xs tracking-wide text-highlight'>
                Now
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-16 sm:px-8 md:px-10 md:pb-20 lg:px-12 lg:pb-24'>
        <TimelineRail items={items} />
      </div>
    </BrandSection>
  )
}
