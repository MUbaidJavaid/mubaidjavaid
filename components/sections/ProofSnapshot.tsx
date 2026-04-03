import { posts } from '@/data/posts'
import { projects, type Project } from '@/data/projects'
import { site } from '@/data/site'
import { ArrowUpRight, BookOpen, FolderGit2, Timer } from 'lucide-react'
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

  const stats = [
    {
      label: 'Case studies',
      value: String(caseStudies),
      hint: 'Documented builds',
      icon: FolderGit2
    },
    {
      label: 'Engineering articles',
      value: String(articles),
      hint: 'Implementation depth',
      icon: BookOpen
    },
    {
      label: 'Response target',
      value: '24h',
      hint: 'First reply on inquiries',
      icon: Timer
    }
  ]

  return (
    <section
      className='section-anchor relative overflow-hidden surface-page'
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

      <div className='container-wide relative z-10 px-4 py-14 sm:px-6 md:px-8 lg:px-10 lg:py-16'>
        <div className='  md:p-8 lg:p-9'>
          <div className='grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10'>
            {/* Copy column */}
            <div className='relative flex flex-col justify-center'>
              <div
                className='absolute -left-3 top-1 hidden h-[min(100%,8.5rem)] w-px bg-gradient-to-b from-primary/55 via-primary/20 to-transparent lg:block'
                aria-hidden
              />
              <div className='lg:pl-5'>
                <p className='section-label'>Proof</p>
                <h2
                  id='proof-snapshot-heading'
                  className='section-heading mt-2.5 text-balance text-[1.95rem] leading-[1.12] sm:text-[2.2rem] lg:text-[2.35rem]'
                >
                  Built for{' '}
                  <span className='section-heading-accent'>
                    reliable delivery
                  </span>{' '}
                  - not just demos
                </h2>
                <p className='mt-4 max-w-md text-sm leading-[1.8] text-body/85 md:max-w-lg'>
                  I document how systems are structured, how trade-offs were
                  made, and what shipped. Public code and deep-dive writing are
                  how you verify substance before we ever get on a call.
                </p>
                <div className='mt-6 flex flex-wrap gap-2.5'>
                  <Link
                    href='/projects'
                    className='inline-flex items-center gap-2  bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(30, 43, 75, 0.18)] transition-all duration-200  hover:bg-[#1e293b] dark:bg-cyan-500/90 dark:hover:bg-cyan-600'
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
            </div>

            {/* Stats */}
            <div className='grid gap-3 sm:grid-cols-3 sm:gap-3.5'>
              {stats.map((s, i) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.label}
                    className='group relative flex min-h-[160px] flex-col overflow-hidden border border-border/30 surface-panel p-4 shadow-[0_1px_2px_rgba(15,23,42,.04)] ring-1 ring-black/[0.015] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 dark:border-border/50 dark:ring-white/[0.04]'
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    <div className='mb-4 inline-flex h-10 w-10 items-center justify-center text-primary transition-all duration-300 '>
                      <Icon
                        className='h-4.5 w-4.5'
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>
                    <p className='tabular-nums-pro font-heading text-[2rem] font-extrabold tracking-tight text-heading'>
                      {s.value}
                    </p>
                    <p className='mt-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-body/50'>
                      {s.label}
                    </p>
                    <p className='mt-2 text-xs leading-relaxed text-body/65'>
                      {s.hint}
                    </p>
                  </div>
                )
              })}
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
                <p className='text-sm leading-relaxed text-body/85'>
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
