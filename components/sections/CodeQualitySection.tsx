import { TrueFocus } from '@/components/ui/TrueFocus'
import { codeQuality, site } from '@/data/site'
import Link from 'next/link'
import QualityCircle from '../ui/QualityCircle'

export function CodeQualitySection () {
  return (
    <section className='section-anchor surface-page py-10'>
      <div className='container-wide flex flex-col items-center justify-center md:flex-row space-y-4'>
        <div>
          {' '}
          <header className='space-y-2'>
            <p className='section-label'>Development Standards</p>
            <h2 className='section-heading text-2xl sm:text-3xl lg:text-4xl'>
              Code Quality &{' '}
              <span className='section-heading-accent'>
                Development Approach
              </span>
            </h2>
            <TrueFocus
              sentence='Maintainable | Reusable | Reliable | Practical'
              separator=' | '
              blurAmount={3}
              borderColor='#3550B8'
              glowColor='rgba(53, 80, 184, 0.42)'
              animationDuration={0.35}
              pauseBetweenAnimations={1.2}
              className='text-base font-medium text-body sm:text-lg'
            />
          </header>
          <div className='grid gap-6 my-2 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] md:items-center'>
            <div className='space-y-4'>
              <p className='max-w-full leading-relaxed text-body'>
                {codeQuality.copy}
              </p>
              <div className='flex flex-wrap gap-3'>
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
        </div>

        <div className='flex items-center justify-center w-full  md:mx-20'>
          <QualityCircle />
        </div>
      </div>
    </section>
  )
}
