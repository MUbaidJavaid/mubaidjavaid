'use client'

import type { Project } from '@/data/projects'
import { getProjectNarrative } from '@/data/projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function ArchitectureDiagram ({ summary }: { summary: string }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const reduce = useReducedMotion()

  useGSAP(
    () => {
      if (reduce || !svgRef.current) return
      const paths = svgRef.current.querySelectorAll('path, line, rect, circle')
      gsap.fromTo(
        paths,
        { strokeDashoffset: 120, opacity: 0.2 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top 80%'
          }
        }
      )
    },
    { dependencies: [reduce] }
  )

  return (
    <div className='grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center'>
      <div>
        <p className='section-label'>Architecture</p>
        <h2 className='mt-4 font-display text-fluid-xl text-heading'>
          System at a glance
        </h2>
        <p className='mt-5 max-w-xl text-fluid-sm text-body'>{summary}</p>
      </div>
      <svg
        ref={svgRef}
        viewBox='0 0 480 280'
        className='h-auto w-full text-heading'
        fill='none'
        aria-hidden
      >
        <rect
          x='20'
          y='40'
          width='120'
          height='56'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeDasharray='120'
        />
        <text x='80' y='74' textAnchor='middle' fill='currentColor' style={{ fontSize: 11 }}>
          Client
        </text>
        <line
          x1='140'
          y1='68'
          x2='200'
          y2='68'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeDasharray='80'
        />
        <rect
          x='200'
          y='40'
          width='120'
          height='56'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeDasharray='120'
        />
        <text x='260' y='74' textAnchor='middle' fill='currentColor' style={{ fontSize: 11 }}>
          API
        </text>
        <line
          x1='320'
          y1='68'
          x2='380'
          y2='68'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeDasharray='80'
        />
        <rect
          x='340'
          y='40'
          width='120'
          height='56'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeDasharray='120'
        />
        <text x='400' y='74' textAnchor='middle' fill='currentColor' style={{ fontSize: 11 }}>
          Data
        </text>
        <path
          d='M260 96 V160 H80 V200'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeDasharray='200'
        />
        <path
          d='M260 96 V160 H400 V200'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeDasharray='200'
        />
        <circle cx='80' cy='220' r='18' stroke='currentColor' strokeWidth='1.25' strokeDasharray='120' />
        <circle cx='260' cy='220' r='18' stroke='currentColor' strokeWidth='1.25' strokeDasharray='120' />
        <circle cx='400' cy='220' r='18' stroke='currentColor' strokeWidth='1.25' strokeDasharray='120' />
        <text x='80' y='224' textAnchor='middle' fill='currentColor' style={{ fontSize: 9 }}>
          Auth
        </text>
        <text x='260' y='224' textAnchor='middle' fill='currentColor' style={{ fontSize: 9 }}>
          Jobs
        </text>
        <text x='400' y='224' textAnchor='middle' fill='currentColor' style={{ fontSize: 9 }}>
          Sync
        </text>
      </svg>
    </div>
  )
}

export function ProjectDetailBody ({
  project,
  caseNo = '01'
}: {
  project: Project
  caseNo?: string
}) {
  const narrative = getProjectNarrative(project)
  const [leadImpact, ...restImpact] = project.impact
  const shortTitle = project.title.split('—')[0].trim()

  const beats = [
    { label: 'Problem', body: project.problem },
    narrative.research
      ? { label: 'Research', body: narrative.research }
      : null,
    { label: 'Strategy', body: narrative.strategy },
    { label: 'UX', body: narrative.ux },
    { label: 'Development', body: narrative.development },
    { label: 'Challenges', body: project.challenges },
    { label: 'Business impact', body: narrative.businessImpact }
  ].filter(Boolean) as Array<{ label: string; body: string }>

  return (
    <main>
      <section className='border-b border-border/70'>
        <div className='container-wide py-16 md:py-24'>
          <div className='grid gap-10 lg:grid-cols-[1fr_16rem] lg:gap-16'>
            <div>
              <p className='section-label'>Overview</p>
              <h2 className='mt-4 max-w-2xl font-display text-fluid-xl text-heading'>
                Project context
              </h2>
              <p className='mt-5 max-w-[40rem] text-fluid-base text-body'>
                {project.overview}
              </p>
            </div>
            <aside className='hidden lg:block'>
              <div className='sticky top-28 border-t border-heading pt-5'>
                <p className='font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground'>
                  Case {caseNo}
                </p>
                <p className='mt-2 font-display text-lg text-heading'>{shortTitle}</p>
                <p className='mt-3 text-xs leading-relaxed text-body'>{project.role}</p>
                <p className='mt-4 font-mono text-[0.625rem] leading-relaxed tracking-wide text-muted-foreground'>
                  {project.stack.join(' · ')}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className='border-b border-border/70'>
        <div className='container-wide space-y-14 py-16 md:py-24'>
          {beats.map((beat, i) => (
            <article
              key={beat.label}
              className='grid gap-4 md:grid-cols-[10rem_1fr] md:gap-12'
            >
              <p className='font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground'>
                {String(i + 1).padStart(2, '0')} · {beat.label}
              </p>
              <p className='max-w-2xl text-fluid-base text-heading/85'>{beat.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='border-b border-border/70 bg-muted/30'>
        <div className='container-wide py-16 md:py-24'>
          <ArchitectureDiagram summary={project.architectureSummary} />
        </div>
      </section>

      <section className='border-b border-border/70'>
        <div className='container-wide py-16 md:py-24'>
          <p className='section-label'>Tech stack</p>
          <ul className='mt-8 flex flex-wrap gap-x-6 gap-y-3'>
            {project.stack.map(item => (
              <li
                key={item}
                className='font-mono text-sm tracking-wide text-heading/80'
              >
                {item}
              </li>
            ))}
          </ul>

          <p className='section-label mt-16'>What was built</p>
          <ul className='mt-8 grid gap-4 sm:grid-cols-2'>
            {project.keyFeatures.map((feature, i) => (
              <li key={feature} className='border-t border-border/70 pt-4'>
                <span className='font-mono text-[0.6875rem] text-muted-foreground'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className='mt-2 text-sm leading-relaxed text-heading/85'>
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className='border-b border-border/70'>
        <div className='container-wide py-16 md:py-24'>
          <p className='section-label'>Results</p>
          {leadImpact ? (
            <p className='mt-6 max-w-3xl font-display text-fluid-xl italic text-heading'>
              “{leadImpact}”
            </p>
          ) : null}
          {restImpact.length > 0 ? (
            <ul className='mt-10 max-w-2xl space-y-4'>
              {restImpact.map((line, i) => (
                <li key={line} className='flex gap-4 text-sm text-body'>
                  <span className='font-mono text-[0.6875rem] text-muted-foreground'>
                    {String(i + 2).padStart(2, '0')}
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          ) : null}
          <div className='mt-14 grid gap-10 md:grid-cols-2'>
            <div>
              <p className='section-label'>Outcome</p>
              <p className='mt-4 text-fluid-sm text-body'>{project.outcome}</p>
            </div>
            <div>
              <p className='section-label'>Takeaways</p>
              <p className='mt-4 text-fluid-sm text-body'>{project.learned}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container-wide flex flex-wrap items-center gap-3 py-12 md:py-16'>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-medium text-heading transition-colors hover:border-heading'
          >
            <ChevronLeft className='h-4 w-4' aria-hidden />
            All work
          </Link>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover'
          >
            Discuss a similar build
            <ArrowRight className='h-3.5 w-3.5' aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  )
}
