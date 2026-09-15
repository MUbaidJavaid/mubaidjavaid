/**
 * Brand Visual System — single source of truth.
 *
 * COLOR
 * - One accent family only: steel navy (CSS --primary / --highlight, ~hsl 211).
 * - Do not introduce purple, cyan-only accents, or one-off hex gradients for CTAs.
 * - Prefer `bg-primary`, `text-highlight`, `text-highlight-on-ink` over raw hsl().
 *
 * RULES
 * 1. Every homepage section uses BrandSection + BrandCopy + BrandStage only.
 * 2. A stage may contain exactly ONE media type: product | diagram | motion | code.
 * 3. No section invents a new visual language (no orbits, rings, random SVGs, ad-hoc Lotties).
 * 4. Motion uses brandMotion only.
 * 5. Spacing uses brandSpace tokens only.
 *
 * COMPOSITION
 * - Grid: 12 columns, max 1180px (container-wide)
 * - Split: copy 5/12 · stage 7/12 (stage always ≥58% — visual majority)
 * - Reverse split: stage 7/12 · copy 5/12
 * - Band: full-bleed stage rows (Selected Work) with copy rail 5/12
 *
 * STAGE TONES
 * - paper  → background
 * - muted  → muted surface
 * - ink    → heading (for code / high-contrast motion)
 *
 * DIAGRAM LANGUAGE
 * - NetworkGraph = architecture / systems / tech / open source
 * - WorkflowPath = delivery process only (same stroke family)
 *
 * MOTION MEDIA (approved roles only)
 * - craft   → developer.json   (hero)
 * - write   → blog-type.json   (writing)
 * - connect → contact-mail.json (contact)
 *
 * PRODUCT MEDIA
 * - Real project images ONLY in Selected Work
 *
 * SECTION-OWNED VISUALS (content-matched)
 * - Hero → presence / cover composition (no feature list, no project dump)
 * - Proof → metrics
 * - Impact → outcomes with product images (alternate frames)
 * - Process → delivery sequence
 * - Philosophy → editorial manifesto / operating beliefs
 * - Technologies → stack map
 * - Open Source → public repos
 * - Timeline → career spine
 * - Writing → article desk
 * - Contact → next-step path
 *
 * CODE MEDIA
 * - CodeVisualizer (reusable interactive snippet)
 */

export const brandSpace = {
  /** Horizontal padding inside copy/stage rails */
  railX: 'px-6 md:px-10 lg:px-12',
  /** Vertical padding inside copy rails */
  railY: 'py-16 md:py-20 lg:py-24',
  /** Stack gap between label → title → body */
  stack: 'space-y-4',
  /** Gap between major blocks inside copy */
  block: 'mt-8 md:mt-10',
  /** Section min height for split layouts */
  minSplit: 'min-h-[min(100svh,920px)]',
  minBand: 'min-h-[70vh]'
} as const

export const brandMotion = {
  ease: [0.22, 1, 0.36, 1] as const,
  duration: 0.6,
  durationSlow: 0.85,
  revealY: 20,
  stagger: 0.06
} as const

export const brandType = {
  label: 'section-label',
  /** Homepage / band H2 — one scale site-wide (Issues 1, 4) */
  title:
    'font-display text-[clamp(2.25rem,4.2vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-heading',
  titleInk:
    'font-display text-[clamp(2.25rem,4.2vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white',
  titleHero:
    'font-display text-[clamp(2.75rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-heading',
  lead: 'max-w-md text-sm leading-relaxed text-body md:text-base',
  italic: 'font-body text-xl font-medium leading-snug text-heading/70 md:text-2xl',
  mono: 'font-mono text-xs tracking-wide text-muted-foreground'
} as const

/** Approved Lottie roles — do not invent new roles per section */
export const brandMotionRole = {
  craft: '/lottie/developer.json',
  write: '/lottie/blog-type.json',
  connect: '/lottie/contact-mail.json'
} as const

export type BrandLayout = 'split' | 'split-reverse' | 'band'
export type BrandStageTone = 'paper' | 'muted' | 'ink'
export type BrandStageMedia = 'product' | 'diagram' | 'motion' | 'code'
