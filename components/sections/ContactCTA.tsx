import { contactCta, site } from '@/data/site'
import {
  Boxes,
  Github,
  Handshake,
  LayoutTemplate,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

const discussionTopics = [
  {
    icon: Boxes,
    text: 'Full-stack web application projects'
  },
  {
    icon: LayoutTemplate,
    text: 'Next.js business websites'
  },
  {
    icon: Handshake,
    text: 'Long-term product collaboration'
  }
] as const

/** Contact CTA band: gradient shell with corner slabs + glass “preferred” card */
export function ContactCTA () {
  return (
    <section className='section-anchor surface-page py-12 md:py-16'>
      <div className='container-wide'>
        <div className='relative overflow-hidden  border border-white/10 bg-[linear-gradient(145deg,#0B1220_0%,#152A3D_42%,#1a4d6e_88%,#246b96_140%)] p-px text-white shadow-[0_28px_64px_-20px_rgba(15,23,42,0.45)] ring-1 ring-black/5'>
          <div className='relative grid gap-8 overflow-hidden  bg-[linear-gradient(165deg,#0B1220_0%,#122535_55%,#163449_100%)] px-6 py-10 sm:gap-10 sm:px-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.92fr)] lg:px-12 lg:py-12'>
            {/* Shell corner accents (half-cut squares, like blog cards) */}
            <span
              aria-hidden
              className='pointer-events-none absolute -right-8 top-[-3.25rem] z-0 aspect-square w-[clamp(9.5rem,16vw,12.5rem)] -rotate-[14deg] rounded-[1.2rem] border border-white/[0.09] bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent'
            />
            <span
              aria-hidden
              className='pointer-events-none absolute -bottom-10 -left-7 z-0 aspect-square w-[clamp(6.5rem,12vw,9rem)] rotate-[11deg] rounded-2xl border border-[#7DD3FC]/[0.12] bg-[#7DD3FC]/[0.04]'
            />

            {/* Soft glow blobs */}
            <div
              className='pointer-events-none absolute left-[8%] top-[-20%] h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-full bg-[#246b96]/25 blur-[100px]'
              aria-hidden
            />

            {/* Left column */}
            <div className='relative z-[1] min-w-0'>
              <p className='section-label text-[#CBDDE9] [&::before]:bg-[#7DD3FC]'>
                Contact
              </p>
              <h2 className='section-heading mt-2 text-2xl text-white sm:text-3xl lg:text-4xl'>
                <span className='text-white'> Let&apos;s build</span>{' '}
                <span className='text-[#7DD3FC]'>something solid</span>
              </h2>
              <p className='mt-4 max-w-2xl text-sm text-slate-200 sm:text-base'>
                {contactCta.body}
              </p>
              <p className='mt-2 max-w-3xl text-sm text-slate-300'>
                {contactCta.support}
              </p>
              <div className='mt-6 flex flex-wrap gap-3'>
                <Link
                  href='/contact'
                  className=' bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] shadow-[0_6px_20px_-6px_rgba(15,23,42,0.35)] transition-all duration-200 hover:bg-[#CBDDE9] active:scale-[0.98]'
                >
                  Open Contact Page
                </Link>
                <Link
                  href={`mailto:${site.email}`}
                  className=' border border-white/35 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/10 active:scale-[0.98]'
                >
                  {site.email}
                </Link>
              </div>
            </div>

            {/* Right: creative glass card */}
            <div className='relative z-[1] min-w-0 lg:justify-self-end lg:self-center'>
              <div className='relative isolate w-full overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/[0.14] via-white/[0.06] to-white/[0.02] px-6 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_48px_-20px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-7 sm:py-8'>
                {/* Card corner slabs */}
                <span
                  aria-hidden
                  className='pointer-events-none absolute -right-5 top-[-2.85rem] z-0 aspect-square w-[clamp(7rem,24vw,8.75rem)] -rotate-[17deg] rounded-[1rem] border border-[#7DD3FC]/20 bg-[linear-gradient(145deg,hsl(199_91%_75%_/0.12),transparent_65%)]'
                />
                <span
                  aria-hidden
                  className='pointer-events-none absolute -right-px top-[-0.85rem] z-0 aspect-square w-[clamp(3.35rem,9vw,3.95rem)] -rotate-[8deg] rounded-lg border border-white/15 opacity-75'
                />

                {/* Inner vignette */}
                <div
                  className='pointer-events-none absolute -right-[30%] -top-[40%] h-[70%] w-[55%] rounded-full bg-[#7DD3FC]/18 blur-[64px]'
                  aria-hidden
                />
                <div
                  className='pointer-events-none absolute bottom-[-30%] left-[-25%] h-[55%] w-[65%] rounded-full bg-[#246b96]/35 blur-[80px]'
                  aria-hidden
                />

                {/* Sub-grid texture */}
                <div
                  className='pointer-events-none absolute inset-0 opacity-[0.17]'
                  aria-hidden
                  style={{
                    backgroundImage:
                      'linear-gradient(hsl(0_0%_100%/0.045) 1px,transparent 1px),linear-gradient(90deg,hsl(0_0%_100%/0.045) 1px,transparent 1px)',
                    backgroundSize: '20px 20px',
                    maskImage:
                      'radial-gradient(ellipse 85% 80% at 50% 0%,black 0%,transparent 75%)'
                  }}
                />

                <div className='relative'>
                  <div className='mb-1 inline-flex items-center gap-2 rounded-full border border-white/18 bg-black/15 px-2.5 py-1 backdrop-blur-sm'>
                    <Sparkles
                      className='h-3.5 w-3.5 text-[#7DD3FC]'
                      aria-hidden
                    />
                    <span className='text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#DCEAF3]/95'>
                      Open to discussing
                    </span>
                  </div>
                  <p className='mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#CBDDE9]/88'>
                    Preferred discussions
                  </p>

                  <ul className='mt-5 space-y-3'>
                    {discussionTopics.map(({ icon: Icon, text }) => (
                      <li
                        key={text}
                        className='flex gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-3.5 py-3 shadow-[inset_0_1px_0_hsl(0_0%_100%/0.06)] transition-colors hover:border-[#7DD3FC]/30 hover:bg-[#7DD3FC]/[0.07]'
                      >
                        <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#7DD3FC]/25 bg-[#7DD3FC]/12 text-[#7DD3FC]'>
                          <Icon
                            className='h-5 w-5'
                            aria-hidden
                            strokeWidth={1.85}
                          />
                        </span>
                        <span className='self-center text-sm font-medium leading-snug text-white/93'>
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={site.github}
                    target='_blank'
                    rel='noreferrer'
                    className='group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/[0.14] bg-gradient-to-br from-black/25 to-transparent px-4 py-3 text-sm font-semibold text-white transition-all hover:border-[#7DD3FC]/45 hover:bg-white/[0.08] hover:shadow-[0_10px_32px_-12px_rgba(125,211,252,0.25)] dark:from-transparent sm:w-auto'
                  >
                    <Github
                      className='h-[1.125rem] w-[1.125rem] shrink-0 text-[#CBDDE9] transition-transform group-hover:scale-[1.05]'
                      aria-hidden
                    />
                    View GitHub Profile
                    <span
                      className='text-[0.65rem] text-[#7DD3FC] transition-transform duration-300 group-hover:translate-x-0.5'
                      aria-hidden
                    >
                      {' '}
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
