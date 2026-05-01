export function TrustStrip () {
  return (
    <section
      className='section-anchor min-w-0 bg-white/95 py-8 sm:py-10 lg:py-12 dark:bg-slate-950/85'
      aria-label='Bespoke website comparison'
    >
      <div className='container-wide min-w-0'>
        <div className='relative mx-auto w-full min-w-0 max-w-[1100px] overflow-hidden rounded-[2rem] bg-transparent'>
          <div className='relative aspect-[1/0.74] min-h-[460px] w-full sm:aspect-[1/0.66] sm:min-h-[560px] lg:aspect-[1/0.56]'>
            <svg
              className='absolute inset-0 h-full w-full'
              viewBox='0 0 1200 760'
              preserveAspectRatio='xMidYMid meet'
              aria-hidden='true'
            >
              <defs>
                <linearGradient
                  id='blobFill'
                  x1='0%'
                  y1='0%'
                  x2='100%'
                  y2='100%'
                >
                  <stop offset='0%' stopColor='#2a5c63' />
                  <stop offset='100%' stopColor='#244a50' />
                </linearGradient>

                <linearGradient
                  id='arrowStroke'
                  x1='0%'
                  y1='0%'
                  x2='100%'
                  y2='100%'
                >
                  <stop offset='0%' stopColor='#e6ecef' />
                  <stop offset='100%' stopColor='#f7f9fa' />
                </linearGradient>

                <path
                  id='topArcPath'
                  d='M 120 248 C 162 116, 306 52, 470 50 C 610 48, 716 96, 804 184'
                />
                <path
                  id='bottomArcPath'
                  d='M 950 560 C 858 700, 618 730, 430 702 C 250 674, 150 604, 92 524'
                />

                <marker
                  id='arrowHead'
                  markerWidth='12'
                  markerHeight='12'
                  refX='8'
                  refY='6'
                  orient='auto'
                  markerUnits='strokeWidth'
                >
                  <path d='M 0 0 L 12 6 L 0 12 z' fill='url(#arrowStroke)' />
                </marker>

                <filter
                  id='softShadow'
                  x='-20%'
                  y='-20%'
                  width='140%'
                  height='140%'
                >
                  <feDropShadow
                    dx='0'
                    dy='18'
                    stdDeviation='18'
                    floodColor='#10262b'
                    floodOpacity='0.14'
                  />
                </filter>
              </defs>

              <rect width='1200' height='760' fill='#fafbfd' />

              <text
                fill='#11363d'
                fontSize='38'
                fontWeight='500'
                letterSpacing='0.01em'
              >
                <textPath href='#topArcPath' startOffset='4%'>
                  Bespoke Website
                </textPath>
              </text>

              <text
                fill='#11363d'
                fontSize='38'
                fontWeight='500'
                letterSpacing='0.01em'
              >
                <textPath href='#bottomArcPath' startOffset='10%'>
                  Template Website
                </textPath>
              </text>

              <path
                d='M 176 164C238 116 334 102 420 134C482 158 520 192 564 226C610 260 676 268 728 300C792 340 816 414 802 478C790 530 748 570 724 620C704 662 694 710 642 724C586 738 516 706 454 702C388 698 324 724 262 708C200 692 156 646 130 594C104 544 114 486 94 438C70 382 48 320 70 258C92 196 130 192 176 164Z'
                fill='url(#blobFill)'
              />

              <path
                d='M 234 352 C 194 404, 198 470, 250 540'
                fill='none'
                stroke='url(#arrowStroke)'
                strokeWidth='4'
                strokeLinecap='round'
                markerEnd='url(#arrowHead)'
              />

              <path
                d='M 1008 532 C 1052 480, 1048 424, 1006 374'
                fill='none'
                stroke='url(#arrowStroke)'
                strokeWidth='4'
                strokeLinecap='round'
                markerEnd='url(#arrowHead)'
              />

              <circle
                cx='938'
                cy='214'
                r='150'
                fill='#ffffff'
                stroke='#ffffff'
                strokeWidth='18'
                filter='url(#softShadow)'
              />
              <circle
                cx='390'
                cy='520'
                r='156'
                fill='#ffffff'
                stroke='#ffffff'
                strokeWidth='18'
                filter='url(#softShadow)'
              />

              <circle
                cx='610'
                cy='410'
                r='38'
                fill='#183d44'
                stroke='#ffffff'
                strokeWidth='8'
                filter='url(#softShadow)'
              />
              <text
                x='588'
                y='424'
                fill='#ffffff'
                fontSize='36'
                fontWeight='600'
                letterSpacing='-0.02em'
              >
                VS
              </text>

              <text
                x='74'
                y='228'
                fill='#f3f7f8'
                fontSize='26'
                fontWeight='500'
                letterSpacing='-0.02em'
              >
                Template
              </text>
              <text
                x='72'
                y='260'
                fill='#f3f7f8'
                fontSize='26'
                fontWeight='500'
                letterSpacing='-0.02em'
              >
                Website
              </text>

              <text
                x='768'
                y='520'
                fill='#f3f7f8'
                fontSize='26'
                fontWeight='500'
                letterSpacing='-0.02em'
              >
                Bespoke
              </text>
              <text
                x='768'
                y='552'
                fill='#f3f7f8'
                fontSize='26'
                fontWeight='500'
                letterSpacing='-0.02em'
              >
                Website
              </text>
            </svg>

            <div className='absolute left-[6%] top-[26%] hidden rounded-2xl border border-white/0 px-1 py-1 text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.18)] lg:block'>
              <p className='text-[2.05rem] font-medium leading-[0.92] tracking-[-0.02em] text-white/95'>
                Template
                <br />
                Website
              </p>
            </div>

            <div className='absolute right-[12%] bottom-[26%] hidden rounded-2xl px-1 py-1 text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.18)] lg:block'>
              <p className='text-[1.7rem] font-medium leading-[0.92] tracking-[-0.02em] text-white/95'>
                Bespoke
                <br />
                Website
              </p>
            </div>

            <div className='absolute right-[14.5%] top-[12%] h-[254px] w-[254px] overflow-hidden rounded-full border border-white/75 bg-white shadow-[0_18px_40px_rgba(10,27,36,0.16)] sm:h-[292px] sm:w-[292px] lg:h-[320px] lg:w-[320px]'>
              <div className='absolute inset-3 rounded-full bg-[linear-gradient(135deg,#f8fafb_0%,#eef3f5_30%,#d7e0e5_100%)] p-4'>
                <div className='flex h-full flex-col rounded-[999px] border border-slate-200/70 bg-[radial-gradient(circle_at_30%_20%,#2f3438_0,#1a1f23_58%,#0f1114_100%)] p-4 shadow-inner'>
                  <div className='mb-3 flex items-center justify-between'>
                    <div className='flex gap-1.5'>
                      <span className='h-2.5 w-2.5 rounded-full bg-white/35' />
                      <span className='h-2.5 w-2.5 rounded-full bg-white/22' />
                      <span className='h-2.5 w-2.5 rounded-full bg-white/16' />
                    </div>
                    <span className='rounded-full bg-white/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70'>
                      Bespoke
                    </span>
                  </div>

                  <div className='mt-1 space-y-3'>
                    <p className='text-xl font-semibold leading-tight text-white'>
                      Clean structure.
                      <br />
                      Confident delivery.
                    </p>
                    <div className='grid grid-cols-2 gap-2.5'>
                      <div className='rounded-[22px] border border-white/10 bg-white/5 p-3'>
                        <div className='mb-2 h-2.5 w-16 rounded-full bg-white/24' />
                        <div className='space-y-2'>
                          <div className='h-2 w-full rounded-full bg-white/12' />
                          <div className='h-2 w-4/5 rounded-full bg-white/12' />
                          <div className='h-2 w-2/3 rounded-full bg-white/12' />
                        </div>
                      </div>
                      <div className='rounded-[22px] border border-white/10 bg-white/5 p-3'>
                        <div className='grid grid-cols-2 gap-2'>
                          <div className='h-14 rounded-xl bg-gradient-to-br from-cyan-300/35 to-sky-500/18' />
                          <div className='h-14 rounded-xl bg-gradient-to-br from-slate-200/65 to-slate-500/18' />
                          <div className='h-10 rounded-xl bg-white/8' />
                          <div className='h-10 rounded-xl bg-white/8' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='absolute left-[14%] bottom-[12%] h-[274px] w-[274px] overflow-hidden rounded-full border border-white/75 bg-white shadow-[0_18px_40px_rgba(10,27,36,0.16)] sm:h-[312px] sm:w-[312px] lg:h-[338px] lg:w-[338px]'>
              <div className='absolute inset-3 rounded-full bg-[linear-gradient(135deg,#fbfbfc_0%,#eef2f6_44%,#d8dfe6_100%)] p-4'>
                <div className='flex h-full flex-col rounded-[999px] border border-slate-300/70 bg-slate-100 p-4 shadow-inner'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <div className='h-2.5 w-24 rounded-full bg-slate-300' />
                      <div className='mt-2 h-2 w-16 rounded-full bg-slate-200' />
                    </div>
                    <div className='rounded-full border border-slate-300/80 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-600'>
                      Template
                    </div>
                  </div>

                  <div className='mt-4 grid flex-1 grid-cols-3 gap-2.5'>
                    <div className='rounded-2xl bg-white shadow-sm' />
                    <div className='rounded-2xl bg-gradient-to-br from-sky-100 to-slate-200 shadow-sm' />
                    <div className='rounded-2xl bg-white shadow-sm' />
                    <div className='rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 shadow-sm' />
                    <div className='rounded-2xl bg-gradient-to-br from-cyan-100 to-slate-200 shadow-sm' />
                    <div className='rounded-2xl bg-white shadow-sm' />
                  </div>
                </div>
              </div>
            </div>

            <div className='absolute left-[31%] top-[42%] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center'>
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-[#183d44] text-[2.25rem] font-heading font-semibold text-white shadow-[0_16px_30px_rgba(16,38,43,0.28)] ring-8 ring-white/90 dark:ring-slate-950/90'>
                VS
              </div>
            </div>

            <div className='absolute left-[7%] top-[26%] h-0 w-0 border-b-[22px] border-l-[14px] border-r-[14px] border-b-white border-l-transparent border-r-transparent rotate-[14deg] sm:hidden' />
            <div className='absolute right-[20%] bottom-[28%] h-0 w-0 border-t-[18px] border-l-[12px] border-r-[12px] border-t-white border-l-transparent border-r-transparent rotate-[26deg] sm:hidden' />
          </div>
        </div>
      </div>
    </section>
  )
}
