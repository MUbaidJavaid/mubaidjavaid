import { process } from '@/data/site'
import {
  Compass,
  FlaskConical,
  Layers3,
  LifeBuoy,
  PencilRuler,
  Rocket,
  Search
} from 'lucide-react'

const stepIcons = [
  Search,
  Compass,
  PencilRuler,
  Layers3,
  FlaskConical,
  Rocket,
  LifeBuoy
]

const stepDurations = [
  'Week 1',
  'Week 1-2',
  'Week 2-3',
  'Week 2-4',
  'Week 3-4',
  'Launch Week',
  'Week 4-5',
  'Post-launch'
]

export function ProcessSection () {
  return (
    <section className='section-anchor surface-page py-12 md:py-16'>
      <div className='container-wide space-y-10'>
        <div className='space-y-3'>
          <p className='section-label'>Process</p>
          <h2 className='section-heading text-2xl sm:text-3xl lg:text-4xl'>
            A structured approach from{' '}
            <span className='section-heading-accent'>brief to delivery</span>
          </h2>
        </div>
        <div className='grid gap-px overflow-hidden bg-border/70 sm:grid-cols-2 lg:grid-cols-4'>
          {process.map((item, index) => {
            const Icon = stepIcons[index % stepIcons.length]
            return (
              <article
                key={item.step}
                className='group relative bg-background p-6 transition-all duration-500 hover:bg-card active:scale-[0.98]'
              >
                <div className='mb-4 flex items-start justify-between'>
                  <p className='tabular-nums-pro font-heading text-[40px] font-bold leading-none text-primary/20 transition-colors duration-300 group-hover:text-primary/30'>
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  {/* <ArrowUpRight
                    className='mt-1 h-4 w-4 text-foreground/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary/70'
                    strokeWidth={1.8}
                    aria-hidden
                  /> */}
                </div>
                <div className='mb-2 flex items-center gap-2'>
                  <div className='flex h-4 w-4 items-center justify-center transition-all duration-300 '>
                    <Icon
                      className='h-4 w-4 text-primary'
                      strokeWidth={1.8}
                      aria-hidden
                    />
                  </div>
                  <h3 className='font-heading text-[15px] font-bold text-heading transition-colors duration-300 group-hover:text-primary'>
                    {item.step}
                  </h3>
                </div>
                <p className='mb-3 text-[11px] leading-relaxed text-body/45'>
                  {item.description}
                </p>
                <span className='text-[10px] font-semibold uppercase tracking-wider text-primary/60'>
                  {stepDurations[index] ?? `Phase ${index + 1}`}
                </span>
                <div className='absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100' />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
