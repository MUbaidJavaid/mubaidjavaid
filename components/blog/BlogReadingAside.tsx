'use client'

import { LottiePlayer } from '@/components/ui/LottiePlayer'
import { lottieAssets } from '@/lib/lottie-assets'

type BlogReadingAsideProps = {
  noteNo: string
  category: string
  readTime: string
  sections: { id: string; title: string }[]
}

/** Sticky rail — reading mark + TOC (book Lottie, not coding). */
export function BlogReadingAside ({
  noteNo,
  category,
  readTime,
  sections
}: BlogReadingAsideProps) {
  return (
    <aside className='hidden lg:block'>
      <div className='sticky top-28 space-y-4'>
        <div className='overflow-hidden border border-border/60 bg-card dark:border-border/45'>
          <div className='border-b border-border/50 bg-[linear-gradient(160deg,#0B1220_0%,#1A4A6B_100%)] px-4 pb-2 pt-4'>
            <p className='font-mono text-[10px] font-bold tracking-[0.16em] text-[#7DD3FC]'>
              READING MARK
            </p>
            <LottiePlayer
              src={lottieAssets.bookOpen}
              className='mx-auto h-[120px] w-full max-w-[170px]'
              aria-label='Open book reading animation'
              speed={0.9}
            />
          </div>
          <div className='p-5'>
            <p className='font-mono text-[10px] font-bold tracking-[0.16em] text-primary/80'>
              NOTE {noteNo}
            </p>
            <p className='mt-2 text-[12px] leading-relaxed text-body/55'>
              {category} · {readTime}
            </p>
          </div>
        </div>

        <nav
          aria-label='On this page'
          className='border border-border/60 bg-card p-5 dark:border-border/45'
        >
          <p className='font-mono text-[10px] font-bold tracking-[0.16em] text-body/45'>
            ON THIS PAGE
          </p>
          <div className='mt-4 space-y-2.5 text-sm text-body'>
            {sections.map((section, i) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className='flex gap-2 transition-colors hover:text-primary'
              >
                <span className='font-mono text-[10px] text-primary/55'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className='leading-snug'>{section.title}</span>
              </a>
            ))}
            <a
              href='#key-takeaways'
              className='block font-semibold text-heading transition-colors hover:text-primary'
            >
              Key takeaways
            </a>
            <a
              href='#conclusion'
              className='block font-semibold text-heading transition-colors hover:text-primary'
            >
              Conclusion
            </a>
          </div>
        </nav>
      </div>
    </aside>
  )
}
