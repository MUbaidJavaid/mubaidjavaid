import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { TrueFocus } from '@/components/ui/TrueFocus'
import { codeQuality, site } from '@/data/site'
import Link from 'next/link'
import QualityCircle from '../ui/QualityCircle'

export function CodeQualitySection () {
  return (
    <section className='section-anchor surface-page py-10'>
      <div className='container-wide flex flex-col items-center gap-8'>
        <div className='section-header w-full'>
          <SectionDisplayTag tag='Code' pattern='chevron' />
          <header className='space-y-4'>
            <TrueFocus
              sentence='Maintainable | Reusable | Reliable | Practical'
              separator=' | '
              blurAmount={3}
              borderColor='#3550B8'
              glowColor='rgba(53, 80, 184, 0.42)'
              animationDuration={0.35}
              pauseBetweenAnimations={1.2}
              className='text-body-base font-medium text-body sm:text-lg'
            />
          </header>
          <div className='space-y-4'>
            <p className='section-lead'>
              {codeQuality.copy}
            </p>
            <div className='flex flex-wrap justify-center gap-3'>
              <Link
                href={site.github}
                target='_blank'
                rel='noreferrer'
                className='border border-border surface-panel px-5 py-2.5 text-sm font-semibold text-heading shadow-card transition-all duration-200 hover:bg-secondary hover:shadow-float dark:border-border/50 dark:hover:bg-slate-800'
              >
                View GitHub
              </Link>
              <Link
                href='/projects'
                className=' bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all duration-200  hover:bg-primary-hover hover:shadow-float'
              >
                Review Case Studies
              </Link>
            </div>
          </div>
        </div>

        <div className='flex w-full items-center justify-center'>
          <QualityCircle />
        </div>
      </div>
    </section>
  )
}
