import { Check, LayoutTemplate, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const IMG_TEMPLATE =
  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85'
const IMG_BESPOKE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85'

/**
 * Template vs bespoke: real imagery, clearer copy (no em dashes), grounded tone.
 */
export function TrustStrip () {
  return (
    <section
      className='section-anchor min-w-0 bg-white/95 py-10 sm:py-12 lg:py-14 dark:bg-slate-950/85'
      aria-labelledby='truststrip-heading'
    >
      <div className='container-wide min-w-0'>
        <header className='mx-auto mb-8 max-w-2xl text-center sm:mb-10'>
          <h2
            id='truststrip-heading'
            className='font-heading text-[1.35rem] font-bold leading-snug tracking-tight text-heading sm:text-2xl md:text-[1.65rem]'
          >
            Same web. Different foundations.
          </h2>
          <p className='mt-3 text-[0.9rem] leading-relaxed text-body sm:text-[0.95rem]'>
            Templates are a sensible starting point. Bespoke builds map structure,
            content, and technology to{' '}
            <span className='font-medium text-heading dark:text-slate-200'>
              how you work and what visitors need to trust you
            </span>
            , without fighting a one-size grid later.
          </p>
        </header>

        <div className='relative mx-auto max-w-[1040px]'>
          <div
            className='pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] opacity-95 sm:-inset-6'
            aria-hidden
          >
            <div className='absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,hsl(202_45%_97%)_0%,hsl(188_35%_96%)_42%,hsl(202_40%_94%)_100%)] dark:bg-[linear-gradient(135deg,hsl(222_41%_12%)_0%,hsl(202_35%_14%)_48%,hsl(188_30%_12%)_100%)]' />
            <div className='absolute left-[10%] top-[20%] h-[42%] w-[52%] rounded-full bg-[hsl(202_61%_37%_/0.12)] blur-3xl dark:bg-[hsl(188_72%_34%_/0.16)]' />
            <div className='absolute bottom-[12%] right-[8%] h-[38%] w-[48%] rounded-full bg-[hsl(188_72%_34%_/0.11)] blur-3xl dark:bg-[hsl(202_55%_40%_/0.1)]' />
          </div>

          <div className='grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-6 lg:gap-10'>
            {/* Template */}
            <article className='group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border/80 bg-white/90 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.2)] backdrop-blur-sm dark:border-border/55 dark:bg-slate-900/75'>
              <div className='p-5 pb-0'>
                <div className='mb-4 flex items-center gap-3'>
                  <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-heading transition-transform duration-300 group-hover:scale-[1.03] dark:bg-slate-800 dark:text-slate-100'>
                    <LayoutTemplate
                      className='h-[1.35rem] w-[1.35rem]'
                      aria-hidden
                    />
                  </span>
                  <div className='min-w-0'>
                    <p className='font-heading text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-body/78 dark:text-slate-400'>
                      Approach A
                    </p>
                    <h3 className='font-heading text-lg font-bold leading-tight text-heading dark:text-slate-100'>
                      Template website
                    </h3>
                  </div>
                </div>
              </div>

              <figure className='relative mx-5 mb-5 w-[min(100%,320px)] max-w-full shrink-0 overflow-hidden rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-black/10 dark:ring-white/12 sm:mx-auto'>
                {/* width/height (not fill): figure had only out-of-flow children, so layout height collapsed → invisible image */}
                <Image
                  src={IMG_TEMPLATE}
                  alt='Laptop on a calm desk: a familiar setup for launching with a template.'
                  width={900}
                  height={675}
                  sizes='(max-width: 768px) min(92vw, 320px), 320px'
                  className='block aspect-[4/3] h-auto w-full object-cover object-[center_40%] transition-[transform] duration-500 ease-out group-hover:scale-[1.03]'
                />
                <div
                  className='pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-slate-900/72 via-slate-900/15 to-transparent'
                  aria-hidden
                />
                <figcaption className='absolute inset-x-0 bottom-0 z-[2] p-4'>
                  <p className='text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/82'>
                    Off-the-shelf starting point
                  </p>
                  <p className='mt-0.5 font-heading text-[0.95rem] font-bold leading-snug text-white'>
                    Familiar grids. Fast publish.
                  </p>
                </figcaption>
                <span className='absolute left-3 top-3 z-[2] rounded-full border border-white/25 bg-white/92 px-2.5 py-1 font-heading text-[9px] font-bold uppercase tracking-[0.14em] text-slate-800 shadow-md backdrop-blur-sm dark:bg-slate-900/92 dark:text-slate-100'>
                  Template
                </span>
              </figure>

              <div className='mt-auto px-5 pb-5'>
                <ul className='space-y-2.5 border-t border-border/60 pt-4 text-[0.82rem] leading-snug text-body dark:border-border/45 dark:text-slate-400'>
                  <li className='flex gap-3'>
                    <span
                      className='mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-body/45 dark:bg-slate-500'
                      aria-hidden
                    />
                    <span>
                      Predictable layouts: quick to publish,{' '}
                      <span className='font-medium text-heading/85 dark:text-slate-300'>
                        harder to differentiate
                      </span>{' '}
                      as you grow.
                    </span>
                  </li>
                  <li className='flex gap-3'>
                    <span
                      className='mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-body/45 dark:bg-slate-500'
                      aria-hidden
                    />
                    <span>
                      Fits common patterns;{' '}
                      <span className='font-medium text-heading/85 dark:text-slate-300'>
                        you may compromise
                      </span>{' '}
                      on workflows that don&apos;t fit the theme.
                    </span>
                  </li>
                </ul>
              </div>
            </article>

            <div
              className='flex items-center justify-center gap-3 py-2 md:flex-col md:py-10'
              aria-hidden
            >
              <span className='h-px min-w-[2.5rem] flex-1 bg-border/65 md:hidden' />
              <span className='flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-full border-2 border-white bg-[hsl(202_61%_32%)] text-sm font-heading font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_28px_-10px_rgba(36,107,150,0.45)] ring-4 ring-[hsl(202_61%_37%_/0.12)] dark:border-slate-800 dark:bg-[hsl(202_61%_30%)] dark:ring-[hsl(188_72%_34%_/0.15)]'>
                vs
              </span>
              <span className='h-px min-w-[2.5rem] flex-1 bg-border/65 md:hidden' />
            </div>

            {/* Bespoke */}
            <article className='group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border/80 bg-white/90 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.22)] backdrop-blur-sm dark:border-border/55 dark:bg-slate-900/75'>
              <div className='p-5 pb-0'>
                <div className='mb-4 flex items-center gap-3'>
                  <span
                    className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[hsl(202_61%_37%_/0.12)] text-[hsl(202_61%_37%)] transition-transform duration-300 group-hover:scale-[1.03] dark:bg-[hsl(188_72%_34%_/0.18)] dark:text-[hsl(188_72%_52%)]'
                    aria-hidden
                  >
                    <Sparkles className='h-[1.35rem] w-[1.35rem]' />
                  </span>
                  <div className='min-w-0'>
                    <p className='font-heading text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-body/78 dark:text-slate-400'>
                      Approach B
                    </p>
                    <h3 className='font-heading text-lg font-bold leading-tight text-heading dark:text-slate-100'>
                      Bespoke website
                    </h3>
                  </div>
                </div>
              </div>

              <figure className='relative mx-5 mb-5 w-[min(100%,320px)] max-w-full shrink-0 overflow-hidden rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-black/15 dark:ring-white/15 sm:mx-auto'>
                <Image
                  src={IMG_BESPOKE}
                  alt='Team collaborating: planning and building a site around real goals.'
                  width={900}
                  height={675}
                  sizes='(max-width: 768px) min(92vw, 320px), 320px'
                  className='block aspect-[4/3] h-auto w-full object-cover object-center transition-[transform] duration-500 ease-out group-hover:scale-[1.03]'
                />
                <div
                  className='pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[hsl(202_61%_24%_/0.82)] via-[hsl(202_61%_35%_/0.35)] to-transparent dark:from-[hsl(222_47%_8%_/0.7)] dark:via-transparent'
                  aria-hidden
                />
                <figcaption className='absolute inset-x-0 bottom-0 z-[2] p-4'>
                  <p className='text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/88'>
                    Crafted for your story
                  </p>
                  <p className='mt-0.5 font-heading text-[0.95rem] font-bold leading-snug text-white'>
                    Clean structure. Confident delivery.
                  </p>
                </figcaption>
                <span className='absolute left-3 top-3 z-[2] rounded-full border border-white/30 bg-[hsl(202_61%_37%_/0.92)] px-2.5 py-1 font-heading text-[9px] font-bold uppercase tracking-[0.14em] text-white shadow-md backdrop-blur-sm'>
                  Bespoke
                </span>
              </figure>

              <div className='mt-auto px-5 pb-5'>
                <ul className='space-y-2.5 border-t border-border/60 pt-4 text-[0.82rem] leading-snug text-body dark:border-border/45 dark:text-slate-400'>
                  <li className='flex gap-2.5'>
                    <Check
                      className='mt-0.5 h-4 w-4 shrink-0 text-[hsl(188_72%_36%)] dark:text-[hsl(188_72%_48%)]'
                      aria-hidden
                    />
                    <span>
                      <span className='font-medium text-heading/90 dark:text-slate-300'>
                        Architecture matched
                      </span>{' '}
                      to your offer, content, and conversion paths.
                    </span>
                  </li>
                  <li className='flex gap-2.5'>
                    <Check
                      className='mt-0.5 h-4 w-4 shrink-0 text-[hsl(188_72%_36%)] dark:text-[hsl(188_72%_48%)]'
                      aria-hidden
                    />
                    <span>
                      <span className='font-medium text-heading/90 dark:text-slate-300'>
                        Easier to extend
                      </span>
                      : performance, SEO, and integrations without theme debt.
                    </span>
                  </li>
                </ul>
              </div>
            </article>
          </div>

          <div className='mx-auto mt-8 max-w-xl text-center'>
            <p className='text-[0.8rem] leading-relaxed text-body/88 dark:text-slate-500'>
              Both can be done well. The right choice depends on timeline, budget,
              and how unique your customer journey needs to be. If you want a
              second opinion, we can talk it through.
            </p>
            <Link
              href='/contact'
              className='mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-[hsl(202_61%_37%_/0.35)] bg-[hsl(202_61%_37%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_hsl(202_61%_37%_/0.55)] transition-all hover:bg-[hsl(202_64%_32%)] active:scale-[0.98] dark:border-[hsl(188_72%_42%_/0.4)] dark:bg-[hsl(202_61%_34%)] dark:hover:bg-[hsl(202_61%_38%)]'
            >
              Book a discovery call
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.3'
                strokeLinecap='round'
                aria-hidden
              >
                <path d='M5 12h14M13 6l6 6-6 6' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
