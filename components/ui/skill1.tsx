'use client'

import { useEffect, useRef } from 'react'

const CATS = [
  {
    name: 'Frontend',
    color: '#2872A1',
    bg: 'rgba(0, 172, 240, 0.92)',
    r: 170,
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'JavaScript',
      'Redux Toolkit',
      'Framer Motion',
      'ShadCN UI',
      'TanStack Query',
      'React Hook Form',
      'Material UI',
      'EmailJS',
      'Payment APIs',
      'SumSub'
    ]
  },
  {
    name: 'Backend',
    color: '#1a4f78',
    bg: 'rgba(1, 32, 77, 0.92)',
    r: 210,
    tags: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Auth',
      'Redis',
      'Webhooks',
      'NodeMailer'
    ]
  },
  {
    name: 'Database',
    color: '#0F172A',
    bg: 'rgba(0, 143, 19, 0.92)',
    r: 185,
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL']
  },
  {
    name: 'Tools',
    color: '#475569',
    bg: 'rgba(1, 58, 139, 0.92)',
    r: 220,
    tags: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker']
  },
  {
    name: 'Deploy',
    color: '#64748b',
    bg: 'rgba(2, 2, 2, 0.92)',
    r: 195,
    tags: ['Vercel', 'Netlify', 'Render']
  }
]

export function TechStackSection1 () {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current!
    // Prevent duplicate injected nodes across dev re-renders.
    stage.querySelectorAll('[data-cat], [data-pill]').forEach(el => el.remove())
    const W = () => stage.offsetWidth
    const H = () => stage.offsetHeight
    const CX = () => W() / 2
    const CY = () => (H() - 60) / 2
    const isNarrow = () => W() < 640
    const radiusScale = () => Math.min(1, W() / 480)

    /* ── pill elements ── */
    type PillData = {
      el: HTMLDivElement
      cat: typeof CATS[0]
      phase: number
      speed: number
    }
    const pills: PillData[] = []

    const pillPadding = isNarrow() ? '10px 14px' : '8px 18px'
    const pillFontSize = isNarrow() ? '0.8rem' : '0.7rem'

    CATS.forEach((cat, i) => {
      const div = document.createElement('div')
      div.dataset.pill = 'true'
      div.style.cssText = `
        position:absolute;padding:${pillPadding};border-radius:100px;
        font-family:inherit;font-size:${pillFontSize};font-weight:600;
        letter-spacing:.08em;white-space:nowrap;cursor:pointer;
        background:${cat.bg};color:#fff;
        border:1px solid rgba(255,255,255,.25);
        box-shadow:0 2px 12px ${cat.color}40, 0 1px 2px rgba(0,0,0,.08);
        transform:translate(-50%,-50%);
        transition:box-shadow .25s ease, transform .2s ease;z-index:20;
      `
      div.textContent = cat.name
      stage.appendChild(div)
      pills.push({
        el: div,
        cat,
        phase: (i / CATS.length) * Math.PI * 2,
        speed: 0.0007 * (i % 2 === 0 ? 1 : -1) * (1 + i * 0.12)
      })

      div.addEventListener('mouseenter', () => {
        const blobName = stage.querySelector<HTMLElement>('#blobName')!
        const blobCount = stage.querySelector<HTMLElement>('#blobCount')!
        const tooltip = stage.querySelector<HTMLElement>('#tooltip')!
        const ttHead = stage.querySelector<HTMLElement>('#ttHead')!
        const ttTags = stage.querySelector<HTMLElement>('#ttTags')!
        blobName.textContent = cat.name
        blobCount.textContent = cat.tags.length + ' tools'
        ttHead.textContent = cat.name
        ttHead.style.color = cat.color
        ttTags.innerHTML = cat.tags
          .map(
            t =>
              `<span style="font-family:DM Mono,monospace;font-size:.62rem;padding:3px 8px;border-radius:6px;background:rgba(255,255,255,.08);color:rgba(255,255,255,.8);border:1px solid rgba(255,255,255,.1);display:inline-block">${t}</span>`
          )
          .join(' ')
        tooltip.style.opacity = '1'
        div.style.transform = 'translate(-50%,-50%) scale(1.12)'
        // highlight tags
        stage.querySelectorAll<HTMLElement>('[data-cat]').forEach(el => {
          el.style.opacity = el.dataset.cat === cat.name ? '1' : '.12'
          el.style.color =
            el.dataset.cat === cat.name ? cat.color : 'rgba(15,23,42,.4)'
          el.style.fontWeight = el.dataset.cat === cat.name ? '700' : '400'
        })
      })
      div.addEventListener('mouseleave', () => {
        const blobName = stage.querySelector<HTMLElement>('#blobName')!
        const blobCount = stage.querySelector<HTMLElement>('#blobCount')!
        const tooltip = stage.querySelector<HTMLElement>('#tooltip')!
        blobName.textContent = 'Developer'
        blobCount.textContent = '40+ tools'
        tooltip.style.opacity = '0'
        div.style.transform = 'translate(-50%,-50%)'
        div.style.boxShadow = `0 2px 12px ${cat.color}40, 0 1px 2px rgba(0,0,0,.08)`
        stage.querySelectorAll<HTMLElement>('[data-cat]').forEach(el => {
          el.style.opacity = '.7'
          el.style.color = 'rgba(15,23,42,.45)'
          el.style.fontWeight = '400'
        })
      })
    })

    /* ── floating tags ── */
    CATS.forEach(cat => {
      cat.tags.forEach(tag => {
        const el = document.createElement('div')
        const x = 80 + Math.random() * (W() - 160)
        const y = 60 + Math.random() * (H() - 160)
        el.dataset.cat = cat.name
        el.textContent = tag
        el.style.cssText = `
          position:absolute;left:${x}px;top:${y}px;
          font-family:DM Mono,monospace;font-size:.65rem;font-weight:400;
          color:rgba(15,23,42,.45);letter-spacing:.04em;white-space:nowrap;
          pointer-events:none;opacity:.7;transition:color .3s,opacity .3s,font-weight .3s;
          animation:floatTag ${4 + Math.random() * 4}s ease-in-out ${
          -Math.random() * 6
        }s infinite;
        `
        stage.appendChild(el)
      })
    })

    /* ── RAF loop (responsive orbit radius) ── */
    let raf: number
    const loop = () => {
      const cx = CX()
      const cy = CY()
      const scale = radiusScale()
      const tooltip = stage.querySelector<HTMLElement>('#tooltip')!
      pills.forEach(p => {
        p.phase += p.speed
        const r = p.cat.r * scale
        const x = cx + r * Math.cos(p.phase)
        const y = cy + r * Math.sin(p.phase)
        p.el.style.left = x + 'px'
        p.el.style.top = y + 'px'
        if (p.el.style.transform.includes('scale(1.12)')) {
          tooltip.style.left = x + 'px'
          tooltip.style.top = y + 'px'
        }
      })
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      // cleanup injected elements
      stage
        .querySelectorAll('[data-cat], [data-pill]')
        .forEach(el => el.remove())
    }
  }, [])

  return (
    <section className='section-anchor section-padding relative overflow-x-hidden surface-muted'>
      <style>{`
        @keyframes morphBlob {
          0%,100%{border-radius:60% 40% 55% 45%/45% 55% 40% 60%}
          25%{border-radius:50% 50% 40% 60%/60% 40% 55% 45%}
          50%{border-radius:40% 60% 60% 40%/50% 50% 45% 55%}
          75%{border-radius:55% 45% 50% 50%/40% 60% 55% 45%}
        }
        @keyframes spinR{to{transform:rotate(360deg)}}
        @keyframes spinL{to{transform:rotate(-360deg)}}
        @keyframes floatTag{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes glow{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,.35)}70%{box-shadow:0 0 0 6px transparent}}
      `}</style>

      <div
        ref={stageRef}
        className='container-wide relative min-h-[480px] min-[400px]:min-h-[520px] sm:h-[560px] md:h-[600px] lg:h-[620px] overflow-hidden'
      >
        {/* Subtle dot grid */}
        <div
          className='pointer-events-none absolute inset-0'
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(15,23,42,.06) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage:
              'radial-gradient(ellipse 85% 85% at 50% 50%, black, transparent 75%)'
          }}
        />

        {/* Soft mesh gradient */}
        <div
          className='pointer-events-none absolute inset-0'
          style={{
            background: `
              radial-gradient(ellipse 55% 45% at 25% 45%, rgba(40,114,161,.06) 0%, transparent 65%),
              radial-gradient(ellipse 45% 55% at 75% 55%, rgba(15,23,42,.04) 0%, transparent 65%)
            `
          }}
        />

        {/* Header - responsive typography */}
        <div className='absolute left-5 top-0 z-30 '>
          <p className='section-label mb-1.5 sm:mb-2'>Tech Stack</p>
          <h2 className='section-heading text-2xl sm:text-3xl lg:text-4xl'>
            Skills in <span className='section-heading-accent'>Motion</span>
          </h2>
          <p className='max-w-2xl text-base leading-[1.8] text-body sm:text-[1.05rem]'>
            Hover categories to explore tools by domain.
          </p>
        </div>

        {/* Center morphing blob - responsive size */}
        <div
          className='pointer-events-none absolute left-1/2 top-[calc(50%-20px)] z-10 w-[130px] -translate-x-1/2 -translate-y-1/2 xs:w-[150px] xs:top-[calc(50%-25px)] sm:w-[170px] sm:top-[calc(50%-30px)] md:w-[190px] lg:w-[200px]'
          style={{ aspectRatio: '1' }}
        >
          <div
            className='absolute -inset-3 rounded-full border border-dashed border-primary/90 xs:-inset-4 sm:-inset-20'
            style={{ animation: 'spinR 20s linear infinite' }}
          />
          <div
            className='absolute -inset-1 rounded-full border border-primary/60 min-[400px]:-inset-8.5'
            style={{ animation: 'spinL 12s linear infinite' }}
          />
          <div
            className='absolute inset-0 flex flex-col items-center justify-center gap-0.5'
            style={{
              background:
                'linear-gradient(145deg, #0F172A 0%, #1e3a5f 45%, #2872A1 100%)',
              borderRadius: '60% 40% 55% 45% / 45% 55% 40% 60%',
              animation: 'morphBlob 8s ease-in-out infinite',
              boxShadow:
                '0 0 0 1px rgba(255,255,255,.06), 0 0 0 8px rgba(40,114,161,.05), 0 0 0 16px rgba(40,114,161,.02), 0 12px 40px -8px rgba(15,23,42,.2)'
            }}
          >
            <span className='text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-white/50 min-[400px]:text-[0.6rem]'>
              Full-Stack
            </span>
            <span
              id='blobName'
              className='text-[0.8rem] font-bold tracking-tight text-white min-[400px]:text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem]'
            >
              Developer
            </span>
            <span
              id='blobCount'
              className='mt-0.5 font-mono text-[0.5rem] tracking-wider text-white/45 min-[400px]:text-[0.55rem] sm:text-[0.6rem]'
            >
              40+ tools
            </span>
          </div>
        </div>

        {/* Tooltip - responsive */}
        <div
          id='tooltip'
          className='pointer-events-none absolute z-40 min-w-[160px] max-w-[90vw] rounded-xl border border-white/10 bg-slate-900/95 px-3 py-2.5 shadow-xl backdrop-blur-sm min-[400px]:min-w-[200px] min-[400px]:max-w-[280px] min-[400px]:px-4 min-[400px]:py-3'
          style={{
            opacity: 0,
            transform: 'translate(-50%, -115%)',
            transition: 'opacity 0.2s ease'
          }}
        >
          <div
            id='ttHead'
            className='mb-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] min-[400px]:mb-2 min-[400px]:text-[0.65rem]'
          />
          <div
            id='ttTags'
            className='flex flex-wrap gap-1 text-[0.58rem] min-[400px]:gap-1.5 min-[400px]:text-[0.62rem]'
          />
        </div>

        {/* Stats bar - fully responsive */}
        <div className='absolute bottom-1 left-1/2 z-30 flex w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 overflow-hidden  backdrop-blur-sm   min-[400px]:w-full '>
          {[
            ['40+', 'Tools'],
            ['5', 'Domains'],
            ['3+', 'Years'],
            ['20+', 'Projects']
          ].map(([n, l], i) => (
            <div
              key={l}
              className={`flex-1 px-2 py-2 text-center min-[400px]:px-3 min-[400px]:py-2.5 sm:px-4 sm:py-3 md:px-5 ${
                i > 0 ? 'border-l border-border/50' : ''
              }`}
            >
              <div className='font-heading text-base font-bold leading-none tracking-tight text-heading min-[400px]:text-lg sm:text-xl'>
                {n}
              </div>
              <div className='mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-body/60 min-[400px]:mt-1 min-[400px]:text-[0.65rem] min-[400px]:tracking-[0.16em]'>
                {l}
              </div>
            </div>
          ))}
          <div className='flex items-center gap-1.5 border-l border-border/50 px-2 py-2 min-[400px]:gap-2 min-[400px]:px-3 min-[400px]:py-2.5 sm:px-4 sm:py-3 md:px-5'>
            <span
              className='h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 min-[400px]:h-2 min-[400px]:w-2'
              style={{ animation: 'glow 2s ease-in-out infinite' }}
            />
            <span className='whitespace-nowrap text-[0.65rem] font-semibold text-body/70 min-[400px]:text-[0.7rem]'>
              Available now
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
