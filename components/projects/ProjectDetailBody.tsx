import type { Project } from '@/data/projects'
import { ChevronLeft, ExternalLink, Github, Layers } from 'lucide-react'
import Link from 'next/link'

export function ProjectDetailBody ({ project }: { project: Project }) {
  return (
    <main className='container-wide grid gap-10 py-12 lg:grid-cols-[1fr_22rem] lg:gap-12 lg:py-16'>
      <div className='space-y-12'>
        <section className='space-y-3'>
          <p className='display-kicker'>Overview</p>
          <h2 className='font-heading text-xl font-bold text-heading sm:text-2xl'>
            Project context
          </h2>
          <p className='max-w-3xl text-sm leading-[1.85] text-body sm:text-base'>
            {project.overview}
          </p>
        </section>

        <div className='grid gap-px overflow-hidden  sm:grid-cols-2'>
          <div className='sm:border-r sm:border-border/80 p-6 sm:p-7'>
            <p className='display-kicker'>Problem</p>
            <p className='mt-3 text-sm leading-[1.85] text-body sm:text-base'>
              {project.problem}
            </p>
          </div>
          <div className=' p-6 sm:p-7'>
            <p className='display-kicker'>Goal</p>
            <p className='mt-3 text-sm leading-[1.85] text-body sm:text-base'>
              {project.goal}
            </p>
          </div>
        </div>

        <div className='border border-border/80 bg-background p-6 sm:p-8'>
          <div className='flex items-start gap-3'>
            <div className='border border-border bg-[#F8FAFC] p-2.5 text-primary dark:border-border/50 dark:bg-slate-900/70'>
              <Layers className='h-5 w-5' aria-hidden />
            </div>
            <div>
              <p className='display-kicker'>Architecture</p>
              <h2 className='mt-1 font-heading text-lg font-bold text-heading sm:text-xl'>
                At a glance
              </h2>
              <p className='mt-3 max-w-3xl text-sm leading-[1.85] text-body sm:text-base'>
                {project.architectureSummary}
              </p>
            </div>
          </div>
        </div>

        <section className='space-y-3'>
          <p className='display-kicker'>My Role</p>
          <h2 className='section-heading text-lg sm:text-xl lg:text-2xl'>
            What I owned
          </h2>
          <p className='max-w-3xl text-sm leading-[1.85] text-body sm:text-base'>
            {project.myRole}
          </p>
        </section>

        <div className=''>
          <p className='display-kicker'>Key Features</p>
          <h2 className='mt-1 section-heading text-lg sm:text-xl'>
            What was built
          </h2>
          <ul className='mt-5 grid gap-3 sm:grid-cols-2'>
            {project.keyFeatures.map(feature => (
              <li key={feature} className='flex items-start gap-3 text-sm text-body'>
                <span className='mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary' />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className='grid gap-5 sm:grid-cols-2'>
          <section className='space-y-3'>
            <p className='display-kicker'>Technical Decisions</p>
            <p className='text-sm leading-[1.85] text-body sm:text-base'>
              {project.technicalDecisions}
            </p>
          </section>
          <section className='space-y-3'>
            <p className='display-kicker'>Challenges</p>
            <p className='text-sm leading-[1.85] text-body sm:text-base'>
              {project.challenges}
            </p>
          </section>
        </div>

        <div className=''>
          <p className='display-kicker'>Impact & outcomes</p>
          <h2 className='mt-1 section-heading text-lg sm:text-xl'>
            What changed for users
          </h2>
          <ul className='mt-5 space-y-3'>
            {project.impact.map(line => (
              <li
                key={line}
                className='flex gap-3 text-sm leading-relaxed text-body sm:text-base'
              >
                <span
                  className='mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-highlight'
                  aria-hidden
                />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className='border border-border/80 bg-[linear-gradient(145deg,#0F172A_0%,#1e1b4b_55%,#1d4ed8_120%)] p-7 sm:p-9'>
          <p className='text-[0.69rem] font-semibold uppercase tracking-[0.2em] text-slate-300/95'>
            Outcome
          </p>
          <p className='mt-3 text-base leading-[1.8] text-slate-100 sm:text-lg'>
            {project.outcome}
          </p>
        </div>

        <section className='space-y-3'>
          <p className='display-kicker'>What I Learned</p>
          <h2 className='section-heading text-lg sm:text-xl lg:text-2xl'>
            Takeaways
          </h2>
          <p className='max-w-3xl text-sm leading-[1.85] text-body sm:text-base'>
            {project.learned}
          </p>
        </section>

        <div className='flex flex-wrap items-center gap-3 border-t border-border pt-8'>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 border border-border surface-panel px-5 py-2.5 text-sm font-semibold text-heading shadow-card transition-all duration-200 hover:border-primary/30 hover:text-primary hover:shadow-float dark:border-border/50'
          >
            <ChevronLeft className='h-4 w-4' aria-hidden />
            All Projects
          </Link>
          <Link
            href='/contact'
            className='inline-flex  bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition-all duration-200 hover:bg-primary-hover hover:shadow-float'
          >
            Discuss a similar build
          </Link>
        </div>
      </div>

      <aside className='hidden lg:block'>
        <div className='sticky top-28 space-y-5'>
          <div className='border border-border/80 surface-panel p-6 dark:border-border/50'>
            <p className='display-kicker'>Links</p>
            <div className='mt-4 flex flex-col gap-2'>
              {project.githubUrl ? (
                <Link
                  href={project.githubUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center justify-center gap-2 border border-border surface-muted-soft py-3 text-sm font-semibold text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
                >
                  <Github className='h-4 w-4' />
                  View on GitHub
                </Link>
              ) : null}
              {project.liveUrl ? (
                <Link
                  href={project.liveUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center justify-center gap-2 bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover'
                >
                  <ExternalLink className='h-4 w-4' />
                  Open live demo
                </Link>
              ) : (
                <p className='border border-dashed border-border surface-muted-soft px-3 py-3 text-center text-xs leading-relaxed text-body/70 dark:border-border/50'>
                  No public demo link for this build. I can walk through the
                  product on a call or share artifacts under NDA.
                </p>
              )}
            </div>
          </div>
          <div className='border border-border/80 surface-panel p-6 dark:border-border/50'>
            <p className='display-kicker'>Role</p>
            <p className='mt-1.5 text-base font-semibold text-heading'>
              {project.role}
            </p>
          </div>
          <div className='border border-border/80 surface-panel p-6 dark:border-border/50'>
            <p className='display-kicker'>Tech Stack</p>
            <div className='mt-3 flex flex-wrap gap-2'>
              {project.stack.map(item => (
                <span
                  key={item}
                  className='rounded-full border border-border surface-muted-soft px-3 py-1 text-xs font-medium text-body dark:border-border/50'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className=' border border-border/80 bg-[linear-gradient(145deg,#0F172A_0%,#1e1b4b_100%)] p-6 text-white'>
            <p className='text-[0.69rem] font-semibold uppercase tracking-[0.2em] text-slate-300'>
              Next step
            </p>
            <p className='mt-2 text-sm leading-relaxed text-slate-300'>
              Share scope, timeline, and constraints - I respond with a concrete
              plan, not a generic pitch.
            </p>
            <Link
              href='/contact'
              className='mt-4 inline-flex w-full items-center justify-center surface-panel px-4 py-2.5 text-sm font-semibold text-[#0F172A] transition-all hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800'
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </aside>
    </main>
  )
}
