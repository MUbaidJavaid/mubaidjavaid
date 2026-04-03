import { WhyPartnerCodeCard } from '@/components/ui/CodeStyleCard'
import { aboutPreview, whyPartnerWithMe, workPhilosophy } from '@/data/site'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function AboutPreview () {
  const preferences = [
    'Freelance / Contract',
    'Remote Work',
    'Full-time Roles',
    'Startup Friendly'
  ]
  return (
    <section className='section-anchor surface-page py-10'>
      <div className='container-wide grid gap-10 lg:grid-cols-[1.15fr_0.85fr]'>
        <div className='space-y-6'>
          <p className='section-label'>About</p>
          <h2 className='section-heading text-2xl sm:text-3xl lg:text-4xl'>
            Building practical web products with{' '}
            <span className='section-heading-accent'>clean engineering</span>{' '}
            and clear UX
          </h2>
          <p className='leading-[1.9] text-body'>{aboutPreview.bodyOne}</p>
          <p className='leading-[1.9] text-body'>{aboutPreview.bodyTwo}</p>
          <div className='grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2'>
            {preferences.map(pref => (
              <div
                key={pref}
                className='group flex items-center gap-2.5  px-3.5 py-2.5 transition-all hover:-translate-y-px hover:border-primary/25  '
              >
                <CheckCircle className='h-4 w-4 text-primary' />
                <span className='text-sm font-medium text-body/75 dark:text-slate-300'>
                  {pref}
                </span>
              </div>
            ))}
          </div>
          <div className='flex flex-wrap gap-3 pt-2'>
            <Link
              href='/about'
              className='group relative inline-flex items-center gap-3 overflow-hidden  bg-[linear-gradient(140deg,hsl(var(--primary)),hsl(202_64%_30%))] px-7 py-3.5 text-sm font-semibold text-white shadow-float transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105'
            >
              <span className='pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full' />
              Discover My Journey
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
            <Link
              href='/contact'
              className='group inline-flex items-center gap-2  border border-primary/25 bg-primary/5 px-5 py-3.5 text-sm font-semibold text-primary transition-all hover:border-primary/45 hover:bg-primary/10 dark:border-primary/30 dark:bg-primary/10'
            >
              Quick intro call
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>
          <div className='border border-border/40 bg-white/80 p-6 backdrop-blur-sm dark:border-border/50 dark:bg-card/90'>
            <div className='flex items-center gap-3'>
              <div className='rounded-full bg-green-500/10 p-2'>
                <div className='h-2 w-2 rounded-full bg-green-500 animate-pulse' />
              </div>
              <div>
                <h4 className='font-semibold text-heading'>
                  Available for work
                </h4>
                <p className='text-xs text-body/60'>
                  Open to new opportunities
                </p>
              </div>
            </div>

            <div className='mt-4 flex flex-wrap gap-2'>
              {['Freelance', 'Contract', 'Full-time'].map(type => (
                <span
                  key={type}
                  className='rounded-md bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary dark:bg-primary/15'
                >
                  {type}
                </span>
              ))}
            </div>

            <Link
              href='/contact'
              className='mt-5 flex w-full items-center justify-center gap-2  border border-primary/20 bg-white px-4 py-3 text-sm font-semibold text-primary transition-all hover:border-primary/35 hover:bg-primary/5 dark:bg-slate-900/50 dark:hover:bg-primary/10'
            >
              Let&apos;s work together
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </div>

        <aside className='space-y-6'>
          <WhyPartnerCodeCard
            approach={whyPartnerWithMe}
            philosophy={workPhilosophy}
          />
        </aside>
      </div>
    </section>
  )
}
