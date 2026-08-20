import {
  ProofRotatingCards,
  type ProofStat
} from '@/components/sections/ProofRotatingCards'
import { posts } from '@/data/posts'
import { projects, type Project } from '@/data/projects'
import { site } from '@/data/site'
import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

function countWithRepos (list: Project[]) {
  return list.filter(p => p.githubUrl).length
}

/**
 * Homepage “proof” band: quantified delivery + authority signals (no fake client logos).
 * Flow: Hero → Trust → Projects → **Proof** → …
 */
export function ProofSnapshot () {
  const caseStudies = projects.length
  const articles = posts.length
  const reposLinked = countWithRepos(projects)

  const stats: ProofStat[] = [
    {
      label: 'Case studies',
      value: String(caseStudies),
      hint: 'Documented builds',
      icon: 'folder-git2',
      href: '/projects'
    },
    {
      label: 'Engineering articles',
      value: String(articles),
      hint: 'Implementation depth',
      icon: 'book-open',
      href: '/blog'
    },
    {
      label: 'Response target',
      value: '24h',
      hint: 'First reply on inquiries',
      icon: 'timer',
      href: '/contact'
    }
  ]

  return (
    <section
      className='section-anchor relative surface-page'
      aria-labelledby='proof-snapshot-heading'
    >
      {/* Softer atmosphere (less visual noise) */}
      <div
        className='pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,#F8FBFD_48%,#fff_100%)] dark:bg-[linear-gradient(180deg,hsl(222_47%_9%)_0%,hsl(222_41%_11%)_48%,hsl(222_47%_9%)_100%)]'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.65]'
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 52% at 100% -10%, hsl(var(--primary) / 0.09), transparent 54%), radial-gradient(ellipse 45% 35% at 0% 100%, hsl(var(--primary) / 0.04), transparent 50%)'
        }}
      />

      <div className='container-wide relative z-10 py-14 lg:py-16'>
        <div className='  md:p-8 lg:p-9'>
          <div className='flex flex-col gap-8'>
            {/* Copy column */}
            <div className='section-header'>
              <SectionDisplayTag
                id='proof-snapshot-heading'
                tag='Proof'
                pattern='brace'
              />
              <p className='section-lead text-body/85'>
                Case studies, code, and writing — verify the work before we talk.
              </p>
            </div>

            {/* Rotating proof cards */}
            <div className='flex items-center justify-center overflow-visible px-2 py-6'>
              <ProofRotatingCards stats={stats} />
            </div>

            <div className='flex flex-wrap justify-center gap-2.5'>
              <Link
                href='/projects'
                className='inline-flex items-center gap-2 bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(30,43,75,0.18)] transition-all duration-200 hover:bg-[#1e293b]'
              >
                Review case studies
                <ArrowUpRight className='h-4 w-4 opacity-90' aria-hidden />
              </Link>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 border border-border/90 surface-panel px-5 py-2.5 text-sm font-semibold text-heading shadow-sm transition-all hover:border-primary/35 hover:text-primary dark:border-border/50'
              >
                Read the blog
                <ArrowUpRight className='h-4 w-4' aria-hidden />
              </Link>
            </div>
          </div>

          {/* Authority strip */}
          <div className='relative mt-7 overflow-hidden border border-border/30 bg-gradient-to-r from-[#FAFBFC] via-white to-[hsl(var(--primary)/0.035)] p-px shadow-sm dark:border-border/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/95'>
            <div className='flex flex-col items-stretch justify-between gap-3 bg-white/95 px-4 py-4 dark:bg-slate-950/95 sm:flex-row sm:items-center sm:px-6'>
              <div className='flex gap-3'>
                <div
                  className='hidden w-1 shrink-0 self-stretch rounded-full bg-gradient-to-b from-primary to-primary/40 sm:block'
                  aria-hidden
                />
                <p className='section-copy leading-relaxed text-body/85'>
                  <span className='font-semibold text-heading'>
                    Source code:{' '}
                  </span>
                  {reposLinked > 0
                    ? `${reposLinked} case studies link to repositories or demos.`
                    : 'Repositories and demos are linked where they can be shared publicly.'}
                </p>
              </div>
              <Link
                href={site.github}
                target='_blank'
                rel='noreferrer'
                className='inline-flex shrink-0 items-center justify-center gap-2 border border-border/80 surface-muted-soft px-4 py-2 text-sm font-semibold text-heading transition-all hover:border-primary/35 hover:bg-white hover:text-primary dark:border-border/50 dark:hover:bg-slate-800 dark:hover:text-slate-100'
              >
                GitHub profile
                <ArrowUpRight className='h-4 w-4' aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
