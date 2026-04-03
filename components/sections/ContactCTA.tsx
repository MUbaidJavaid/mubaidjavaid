import { contactCta, site } from '@/data/site'
import Link from 'next/link'

export function ContactCTA () {
  return (
    <section className='section-anchor surface-page py-12 md:py-16'>
      <div className='container-wide'>
        <div className=' border border-white/10 bg-[linear-gradient(145deg,#0B1220_0%,#152A3D_42%,#1a4d6e_88%,#246b96_140%)] p-px text-white shadow-[0_28px_64px_-20px_rgba(15,23,42,0.45)] ring-1 ring-black/5'>
          <div className='grid gap-8 overflow-hidden [1.95rem] bg-[linear-gradient(165deg,#0B1220_0%,#122535_55%,#163449_100%)] px-6 py-10 sm:px-10 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-12'>
            <div>
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
                  className=' bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] shadow-card transition-all duration-200 hover:bg-[#CBDDE9]'
                >
                  Open Contact Page
                </Link>
                <Link
                  href={`mailto:${site.email}`}
                  className=' border border-white/35 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10'
                >
                  {site.email}
                </Link>
              </div>
            </div>

            <div className=' border border-white/15 bg-white/[0.08] p-6 shadow-inner backdrop-blur-md ring-1 ring-white/10'>
              <p className='text-xs font-semibold uppercase tracking-[0.15em] text-[#CBDDE9]'>
                Preferred discussions
              </p>
              <ul className='mt-4 space-y-2.5 text-sm leading-relaxed text-slate-200'>
                <li className='flex gap-2'>
                  <span className='mt-1.5 h-1 w-1 shrink-0  bg-[#7DD3FC]' />
                  Full-stack web application projects
                </li>
                <li className='flex gap-2'>
                  <span className='mt-1.5 h-1 w-1 shrink-0  bg-[#7DD3FC]' />
                  Next.js business websites
                </li>
                <li className='flex gap-2'>
                  <span className='mt-1.5 h-1 w-1 shrink-0  bg-[#7DD3FC]' />
                  Long-term product collaboration
                </li>
              </ul>
              <Link
                href={site.github}
                target='_blank'
                rel='noreferrer'
                className='mt-6 inline-flex  border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-white/45 hover:bg-white/10'
              >
                View GitHub Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
