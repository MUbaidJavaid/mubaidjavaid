import { AboutPersonJsonLd } from '@/components/about/AboutPersonJsonLd'
import { CodeQualitySection } from '@/components/sections/CodeQualitySection'
import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
import { experience } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Code2,
  Handshake,
  MapPin,
  MessageCircle,
  Settings,
  Target,
  Users,
  Zap
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

// ── FULL PRO-LEVEL SEO METADATA ──────────────────────────────────────
export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'About M Ubaid Javaid - Full-Stack Developer | MERN Stack & Next.js',
  description:
    'Learn how M Ubaid Javaid approaches full-stack product delivery: from problem framing and architecture decisions to scalable implementation with React, Next.js, Node.js, Express, and MongoDB.',
  path: '/about'
})

// ── DATA ─────────────────────────────────────────────────────────────
const stack = [
  { label: 'React', primary: true },
  { label: 'Next.js', primary: true },
  { label: 'TypeScript', primary: true },
  { label: 'Node.js', primary: true },
  { label: 'Express', primary: false },
  { label: 'MongoDB', primary: false },
  { label: 'Tailwind CSS', primary: false },
  { label: 'REST APIs', primary: false },
  { label: 'PostgreSQL', primary: false },
  { label: 'Redis', primary: false }
]

const values = [
  {
    Icon: Settings,
    title: 'Architecture that survives growth',
    desc: 'Frontend and backend decisions are made for long-term maintainability, so new features can be added without creating unstable dependencies.'
  },
  {
    Icon: Zap,
    title: 'Performance aligned with business goals',
    desc: 'Speed, SEO, and usability are treated as product outcomes, not checkbox tasks, improving both discoverability and conversion quality.'
  },
  {
    Icon: Handshake,
    title: 'Execution with clear communication',
    desc: 'Scope, trade-offs, and delivery updates stay transparent, reducing uncertainty and helping teams make faster decisions.'
  }
]

const whyHire = [
  {
    icon: Code2,
    text: 'Technical decisions are documented and intentional, which reduces rework when scope changes.'
  },
  {
    icon: Target,
    text: 'Every build balances user experience, product clarity, and backend reliability instead of optimizing one area only.'
  },
  {
    icon: Users,
    text: 'Collaboration is structured around milestones and outcomes, making progress measurable for stakeholders.'
  },
  {
    icon: CheckCircle2,
    text: 'Delivery quality stays predictable through maintainable coding standards, review discipline, and production-readiness checks.'
  }
]

// ── COMPONENT ────────────────────────────────────────────────────────
export default function AboutPage () {
  const visibleRoles = experience.roles.slice(0, 2)
  const remainingRoles = Math.max(
    0,
    experience.roles.length - visibleRoles.length
  )

  return (
    <>
      <AboutPersonJsonLd />

      <PageHeroHeader
        subtitle='About'
        title={
          <>
            Building business-ready web products
            <br />
            with <span style={{ color: '#256e99' }}>clean engineering</span>
          </>
        }
        description="I'm M Ubaid Javaid, a Full-Stack Developer based in Multan, Pakistan, specialising in React, Next.js, Node.js, Express and MongoDB. I work with startups and teams that need reliable, scalable web products with clear scope and maintainable architecture."
      />

      <section className='section-anchor relative overflow-hidden surface-page py-10'>
        <div className='container-wide relative z-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start'>
          {/* ════ LEFT ════ */}
          <article className='flex flex-col gap-7'>
            {/* Value propositions */}
            <div className='flex flex-col gap-2.5'>
              {values.map(v => (
                <div
                  key={v.title}
                  className='group flex items-start gap-3 border border-[#0F172A]/[.07] bg-[#FAFBFC] p-3.5 transition-all duration-200 hover:translate-x-0.5 hover:border-primary/20 hover:shadow-[0_4px_16px_rgba(15,23,42,.06)] dark:border-border/50 dark:bg-slate-900/50 dark:hover:border-primary/30'
                >
                  <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center border border-[#0F172A]/[.08] bg-white text-primary dark:border-border/50 dark:bg-slate-900'>
                    <v.Icon className='h-4 w-4' strokeWidth={2} />
                  </div>
                  <div>
                    <p className='mb-0.5 text-[.77rem] font-semibold text-heading'>
                      {v.title}
                    </p>
                    <p className='text-[.68rem] leading-[1.55] text-body/55'>
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stack */}
            <div>
              <p className='mb-2.5 text-[.68rem] font-bold uppercase tracking-[.14em] text-body/40'>
                Core Stack
              </p>
              <div className='flex flex-wrap gap-1.5'>
                {stack.map(s => (
                  <span
                    key={s.label}
                    className={`rounded-[7px] border px-3 py-1.5 text-[.68rem] font-semibold transition-all duration-150 hover:-translate-y-px ${
                      s.primary
                        ? 'border-primary/20 bg-primary/[.07] text-primary'
                        : 'border-[#0F172A]/[.09] bg-[#F8FAFC] text-[#334155] hover:border-primary/20 hover:text-primary dark:border-border/50 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-primary/35'
                    }`}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* ════ RIGHT ════ */}
          <aside className='flex flex-col gap-3.5'>
            {/* Professional Experience - from site data, current job highlighted */}
            <div className='space-y-4'>
              <p className='text-[7.5px] font-bold uppercase tracking-[.2em] text-body/40'>
                {experience.title}
              </p>
              {visibleRoles.map(role => (
                <div
                  key={role.id}
                  className={` border p-5 transition-all hover:shadow-[0_6px_24px_rgba(15,23,42,.07)] ${
                    role.current
                      ? 'border-primary/25 bg-primary/[0.04]'
                      : 'border-[#0F172A]/[.08] bg-[#FAFBFC] dark:border-border/50 dark:bg-slate-900/60'
                  }`}
                >
                  <div className='mb-3 flex flex-wrap items-center gap-2'>
                    <span className='inline-flex items-center gap-1.5 rounded-[6px] bg-[#0F172A]/[.06] px-2.5 py-1 font-mono text-[.63rem] font-semibold text-body/60'>
                      <Calendar
                        className='h-3.5 w-3.5 text-body/50'
                        strokeWidth={2}
                      />
                      {role.duration}
                    </span>
                    {role.current && (
                      <span className='inline-flex items-center gap-1 bg-primary/15 px-2.5 py-0.5 text-[.6rem] font-bold uppercase tracking-[.1em] text-primary'>
                        <span className='h-1.5 w-1.5 rounded-full bg-primary' />
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className='text-[.85rem] font-bold text-heading'>
                    {role.role}
                  </h3>
                  <p className='mb-3 text-[.75rem] text-body/60'>
                    {role.company} · {role.location} · {role.type}
                  </p>
                  <p className='mb-3 text-[.73rem] leading-[1.7] text-body/65'>
                    {role.copy}
                  </p>
                  <ul className='mb-3 space-y-1.5'>
                    {role.highlights.slice(0, 3).map(h => (
                      <li
                        key={h}
                        className='flex items-start gap-2 text-[.7rem] leading-[1.6] text-body/65'
                      >
                        <span className='mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/70' />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className='flex flex-wrap gap-1.5'>
                    {role.technologies.map(tech => (
                      <span
                        key={tech}
                        className='rounded-[6px] border border-[#0F172A]/[.09] bg-[#F8FAFC] px-2 py-0.5 text-[.6rem] font-semibold text-body/70 dark:border-border/50 dark:bg-slate-900/80 dark:text-slate-400'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {'note' in role && role.note && (
                    <div className='mt-3 inline-flex items-center gap-1.5 border border-primary/15 bg-primary/[.08] px-2.5 py-1 text-[.62rem] font-bold uppercase tracking-[.08em] text-primary'>
                      <CheckCircle2 className='h-3.5 w-3.5' strokeWidth={2} />
                      {role.note}
                    </div>
                  )}
                </div>
              ))}
              {remainingRoles > 0 ? (
                <div className='border border-dashed border-border/70 bg-primary/[0.03] px-4 py-2.5 text-[.68rem] font-semibold text-body/70 dark:border-border/50 dark:bg-primary/[0.08]'>
                  +{remainingRoles} more role{remainingRoles > 1 ? 's' : ''}{' '}
                  available on request.
                </div>
              ) : null}
            </div>

            {/* Availability - dark card */}
            <div className='rounded-2xl border border-white/[.06] bg-[#0F172A] p-5'>
              <div className='mb-1.5 flex items-center gap-2'>
                <Briefcase
                  className='h-4 w-4 flex-shrink-0 text-green-400'
                  strokeWidth={2}
                />
                <span className='text-[.78rem] font-bold text-white'>
                  Open to new opportunities
                </span>
              </div>
              <p className='text-[.68rem] leading-[1.55] text-white/45'>
                Freelance · Contract · Remote · Full-time
                <br />
                Multan, Pakistan - available globally
              </p>
            </div>

            {/* Why hire */}
            <div className='border border-[#0F172A]/[.08] surface-panel p-5 transition-all hover:shadow-[0_6px_24px_rgba(15,23,42,.07)] dark:border-border/50 dark:hover:shadow-[0_6px_24px_rgba(0,0,0,0.35)]'>
              <p className='mb-3 text-[7.5px] font-bold uppercase tracking-[.2em] text-body/40'>
                Why teams hire me
              </p>
              <ul className='flex flex-col gap-2.5'>
                {whyHire.map(item => (
                  <li
                    key={item.text}
                    className='flex items-start gap-2.5 text-[.73rem] leading-[1.65] text-body/65'
                  >
                    <item.icon
                      className='mt-[5px] h-4 w-4 flex-shrink-0 text-primary'
                      strokeWidth={2}
                    />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Location + response */}
            <div className='flex items-center justify-between border border-[#0F172A]/[.07] bg-[#FAFBFC] px-4 py-3 dark:border-border/50 dark:bg-slate-900/50'>
              <div className='flex items-center gap-2 text-[.73rem] font-semibold text-body/60'>
                <MapPin className='h-4 w-4 text-body/50' strokeWidth={2} />
                Multan, Pakistan
              </div>
              <div className='flex items-center gap-1.5'>
                <MessageCircle
                  className='h-4 w-4 text-green-600'
                  strokeWidth={2}
                />
                <span className='text-[.68rem] font-semibold text-green-600'>
                  Replies within 24 hours
                </span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href='/contact'
              className='group flex items-center justify-center gap-2  bg-[#0F172A] py-3 text-[.82rem] font-semibold text-white transition-all hover:-translate-y-px hover:bg-[#1e293b] hover:shadow-[0_6px_20px_rgba(15,23,42,.18)] dark:bg-cyan-500/90'
            >
              Get in touch
              <span className='transition-transform group-hover:translate-x-0.5'>
                →
              </span>
            </Link>
          </aside>
        </div>
      </section>

      <CodeQualitySection />
    </>
  )
}
