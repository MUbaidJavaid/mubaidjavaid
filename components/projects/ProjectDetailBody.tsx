import type { Project } from '@/data/projects'
import { ArrowRight, ChevronLeft, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export function ProjectDetailBody ({
  project,
  caseNo = '01'
}: {
  project: Project
  caseNo?: string
}) {
  const [leadImpact, ...restImpact] = project.impact
  const shortTitle = project.title.split('—')[0].trim()

  return (
    <main className='relative'>
      {/* Lead overview — wide editorial measure */}
      <section className='border-b border-border/55 dark:border-border/40'>
        <div className='container-wide py-12 md:py-16'>
          <div className='grid gap-8 lg:grid-cols-[1fr_18rem] lg:gap-14'>
            <div className='min-w-0'>
              <p className='font-mono text-[10px] font-bold tracking-[0.18em] text-primary'>
                OVERVIEW
              </p>
              <h2 className='mt-3 max-w-3xl font-heading !font-semibold uppercase text-[1.35rem] leading-snug tracking-[0.02em] text-heading sm:text-[1.6rem]'>
                Project context
              </h2>
              <p className='mt-4 max-w-[42rem] text-[15px] leading-[1.9] text-body/80 md:text-base'>
                {project.overview}
              </p>
            </div>

            <aside className='hidden lg:block'>
              <div className='sticky top-28 border border-border/60 bg-card p-5 dark:border-border/45'>
                <p className='font-mono text-[10px] font-bold tracking-[0.16em] text-primary/80'>
                  CASE {caseNo}
                </p>
                <p className='mt-2 font-heading text-sm font-semibold uppercase tracking-[0.04em] text-heading'>
                  {shortTitle}
                </p>
                <p className='mt-3 text-[12px] leading-relaxed text-body/55'>
                  {project.role}
                </p>
                <div className='mt-4 flex flex-wrap gap-1.5 border-t border-border/50 pt-4 dark:border-border/40'>
                  {project.stack.slice(0, 6).map(item => (
                    <span
                      key={item}
                      className='border border-border/55 px-2 py-0.5 text-[10px] font-medium text-body/65 dark:border-border/40'
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className='mt-4 flex flex-col gap-2'>
                  {project.liveUrl ? (
                    <Link
                      href={project.liveUrl}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center justify-center gap-2 bg-primary py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover'
                    >
                      <ExternalLink className='h-3.5 w-3.5' />
                      Live
                    </Link>
                  ) : null}
                  {project.githubUrl ? (
                    <Link
                      href={project.githubUrl}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center justify-center gap-2 border border-border/65 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
                    >
                      <Github className='h-3.5 w-3.5' />
                      GitHub
                    </Link>
                  ) : null}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Problem | Goal — accent rules, no cards */}
      <section className='border-b border-border/55 dark:border-border/40'>
        <div className='container-wide grid gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-16'>
          <div className='border-l-[3px] border-primary pl-5 sm:pl-6'>
            <p className='text-[10px] font-bold uppercase tracking-[0.16em] text-primary'>
              Problem
            </p>
            <p className='mt-3 text-[15px] leading-[1.85] text-body/80'>
              {project.problem}
            </p>
          </div>
          <div className='border-l-[3px] border-heading/25 pl-5 sm:pl-6 dark:border-white/20'>
            <p className='text-[10px] font-bold uppercase tracking-[0.16em] text-heading/55'>
              Goal
            </p>
            <p className='mt-3 text-[15px] leading-[1.85] text-body/80'>
              {project.goal}
            </p>
          </div>
        </div>
      </section>

      {/* Architecture band */}
      <section className='relative overflow-hidden bg-[linear-gradient(155deg,#0B1220_0%,#152B40_48%,#1A4A6B_100%)] text-white'>
        <span
          className='pointer-events-none absolute -right-4 bottom-0 select-none font-heading text-[8rem] font-black leading-none tracking-tighter text-white/[0.05] md:text-[10rem]'
          aria-hidden
        >
          {caseNo}
        </span>
        <div className='container-wide relative z-10 py-12 md:py-16'>
          <p className='font-mono text-[10px] font-bold tracking-[0.18em] text-[#7DD3FC]'>
            ARCHITECTURE
          </p>
          <h2 className='mt-3 max-w-xl font-heading !font-semibold uppercase text-[1.25rem] leading-snug tracking-[0.03em] text-white sm:text-[1.45rem]'>
            At a glance
          </h2>
          <p className='mt-4 max-w-3xl text-[15px] leading-[1.9] text-white/75 md:text-base'>
            {project.architectureSummary}
          </p>
        </div>
      </section>

      {/* Role + Features */}
      <section className='border-b border-border/55 dark:border-border/40'>
        <div className='container-wide space-y-12 py-12 md:py-16'>
          <div className='max-w-3xl'>
            <p className='font-mono text-[10px] font-bold tracking-[0.18em] text-primary'>
              ROLE
            </p>
            <h2 className='mt-3 font-heading !font-semibold uppercase text-[1.25rem] leading-snug tracking-[0.03em] text-heading sm:text-[1.4rem]'>
              What I owned
            </h2>
            <p className='mt-4 text-[15px] leading-[1.9] text-body/80'>
              {project.myRole}
            </p>
          </div>

          <div>
            <p className='font-mono text-[10px] font-bold tracking-[0.18em] text-primary'>
              SPEC
            </p>
            <h2 className='mt-3 font-heading !font-semibold uppercase text-[1.25rem] leading-snug tracking-[0.03em] text-heading sm:text-[1.4rem]'>
              What was built
            </h2>
            <ul className='mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
              {project.keyFeatures.map((feature, i) => (
                <li
                  key={feature}
                  className='group relative border border-border/55 p-4 transition-colors hover:border-primary/35 dark:border-border/40'
                >
                  <span className='font-mono text-[10px] font-bold tracking-[0.14em] text-primary/70'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className='mt-2 text-[13px] leading-snug text-heading/85'>
                    {feature}
                  </p>
                  <span
                    className='absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100'
                    aria-hidden
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Decisions */}
      <section className='border-b border-border/55 dark:border-border/40'>
        <div className='container-wide grid gap-10 py-12 md:py-16 sm:grid-cols-2 sm:gap-14'>
          <div>
            <p className='text-[10px] font-bold uppercase tracking-[0.16em] text-primary'>
              Technical decisions
            </p>
            <p className='mt-3 text-[15px] leading-[1.85] text-body/80'>
              {project.technicalDecisions}
            </p>
          </div>
          <div>
            <p className='text-[10px] font-bold uppercase tracking-[0.16em] text-primary'>
              Challenges
            </p>
            <p className='mt-3 text-[15px] leading-[1.85] text-body/80'>
              {project.challenges}
            </p>
          </div>
        </div>
      </section>

      {/* Impact — pull quote + list */}
      <section className='border-b border-border/55 dark:border-border/40'>
        <div className='container-wide py-12 md:py-16'>
          <p className='font-mono text-[10px] font-bold tracking-[0.18em] text-primary'>
            IMPACT
          </p>
          {leadImpact ? (
            <p className='mt-5 max-w-4xl font-heading text-[1.35rem] font-semibold leading-snug tracking-[-0.01em] text-heading sm:text-[1.65rem] md:text-[1.85rem]'>
              “{leadImpact}”
            </p>
          ) : null}
          {restImpact.length > 0 ? (
            <ul className='mt-8 max-w-3xl space-y-0 divide-y divide-border/55 dark:divide-border/40'>
              {restImpact.map((line, i) => (
                <li key={line} className='flex gap-4 py-4 first:pt-0 last:pb-0'>
                  <span className='font-mono text-[11px] font-bold tracking-[0.14em] text-primary'>
                    {String(i + 2).padStart(2, '0')}
                  </span>
                  <p className='text-[14px] leading-[1.75] text-body/80'>
                    {line}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {/* Closing band */}
      <section className='relative overflow-hidden'>
        <div
          className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_0%_50%,hsl(202_61%_42%/0.1),transparent_60%)]'
          aria-hidden
        />
        <div className='container-wide relative z-10 space-y-10 py-12 md:py-16'>
          <div className='grid gap-10 lg:grid-cols-2 lg:gap-16'>
            <div>
              <p className='text-[10px] font-bold uppercase tracking-[0.16em] text-primary'>
                Outcome
              </p>
              <p className='mt-3 text-[16px] leading-[1.85] text-heading/90 md:text-[17px]'>
                {project.outcome}
              </p>
            </div>
            <div>
              <p className='text-[10px] font-bold uppercase tracking-[0.16em] text-primary'>
                Takeaways
              </p>
              <p className='mt-3 text-[15px] leading-[1.85] text-body/80'>
                {project.learned}
              </p>
            </div>
          </div>

          <div className='flex flex-wrap items-center gap-3 border-t border-border/55 pt-8 dark:border-border/40'>
            <Link
              href='/projects'
              className='inline-flex items-center gap-2 border border-border/70 surface-panel px-4 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
            >
              <ChevronLeft className='h-4 w-4' aria-hidden />
              All projects
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover'
            >
              Discuss a similar build
              <ArrowRight className='h-3.5 w-3.5' aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
