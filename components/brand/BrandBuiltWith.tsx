import { builtWithTools } from '@/data/site'

/**
 * Production-tools marquee — CSS animation only (no Framer Motion).
 */
export function BrandBuiltWith () {
  const loop = [...builtWithTools, ...builtWithTools]

  return (
    <section
      id='built-with'
      className='min-h-0 border-t border-border/70 bg-white'
    >
      <div className='container-wide py-10 md:py-12'>
        <p className='text-center font-mono text-xs tracking-wide text-muted-foreground'>
          Built with production-grade tools
        </p>

        <div className='relative mt-7 overflow-hidden'>
          <div
            className='pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24'
            aria-hidden
          />
          <div
            className='pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24'
            aria-hidden
          />

          <ul
            className='brand-marquee flex w-max gap-10 md:gap-12'
            aria-label='Production tools'
          >
            {loop.map((tool, i) => (
              <li
                key={`${tool.name}-${i}`}
                className='flex shrink-0 items-center gap-2.5'
                aria-hidden={i >= builtWithTools.length}
              >
                <span className='grid h-7 w-7 shrink-0 place-items-center'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tool.logo}
                    alt=''
                    width={24}
                    height={24}
                    loading='lazy'
                    decoding='async'
                    className='h-6 w-6 object-contain'
                  />
                </span>
                <span className='whitespace-nowrap text-sm font-medium tracking-tight text-heading'>
                  {tool.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
