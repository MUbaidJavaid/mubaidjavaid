'use client'

import { BrandSection } from '@/components/brand/system/BrandSection'
import { BrandStage } from '@/components/brand/system/BrandStage'
import { brandSpace, brandType } from '@/lib/brand-system'
import { selectedWorkProjects } from '@/lib/homepage-media'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function BrandSelectedWork () {
  const featured = selectedWorkProjects()

  return (
    <BrandSection id='work' layout='band' className='min-h-0'>
      <div className={cn('container-wide', 'py-12 md:py-16')}>
        <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className={brandType.label}>Selected work</p>
            <h2 className={cn('mt-3', brandType.title)}>Products in production.</h2>
          </div>
          <Link href='/projects' className='link-underline text-sm font-medium text-heading'>
            All case studies
          </Link>
        </div>
      </div>

      <ul>
        {featured.map((project, i) => {
          const short = project.title.split('—')[0].trim()
          const img = project.images?.[0] ?? project.image
          const reverse = i % 2 === 1

          return (
            <li key={project.slug} className='border-t border-border/70'>
              <Link
                href={`/projects/${project.slug}`}
                className='group grid lg:grid-cols-12'
              >
                <div
                  className={cn(
                    'flex flex-col justify-center lg:col-span-5',
                    brandSpace.railX,
                    'py-12 md:py-16 lg:py-20',
                    reverse && 'lg:order-2'
                  )}
                >
                  <p className={brandType.mono}>
                    {String(i + 1).padStart(2, '0')} · {project.role}
                  </p>
                  <h3
                    className={cn(
                      'mt-4',
                      brandType.title,
                      'transition-colors duration-300 group-hover:text-highlight'
                    )}
                  >
                    {short}
                  </h3>
                  <p className={cn('mt-4', brandType.lead)}>{project.problem}</p>
                  <p className={cn('mt-6', brandType.mono, '!normal-case tracking-wide')}>
                    {project.stack.slice(0, 4).join(' · ')}
                  </p>
                  <span className='mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-heading'>
                    Open case study
                    <span
                      aria-hidden
                      className='transition-transform duration-300 group-hover:translate-x-1'
                    >
                      →
                    </span>
                  </span>
                </div>
                <div
                  className={cn(
                    'relative min-h-[48vh] overflow-hidden lg:col-span-7 lg:min-h-[min(62vh,560px)]',
                    reverse && 'lg:order-1'
                  )}
                >
                  <BrandStage
                    media='product'
                    tone='paper'
                    productSrc={img}
                    productAlt={project.imageAlt ?? short}
                    productPriority={i === 0}
                    productParallax={false}
                    className='absolute inset-0 min-h-0 h-full transition-transform duration-500 ease-out group-hover:scale-[1.02]'
                  />
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </BrandSection>
  )
}
