export type EvolvoCategoryId =
  | 'markets'
  | 'fintech'
  | 'healthcare'
  | 'estate'
  | 'product'

export type EvolvoWorkItem = {
  slug: string
  title: string
  summary: string
  liveUrl: string
  image: string
  imageAlt: string
  category: EvolvoCategoryId
  stack: string[]
  /** Optional documented case study on this site */
  caseStudySlug?: string
}

export const evolvoCategories: {
  id: EvolvoCategoryId
  label: string
  line: string
}[] = [
  {
    id: 'markets',
    label: 'Markets & prop trading',
    line: 'Funded accounts, trading platforms, and wealth education products.'
  },
  {
    id: 'fintech',
    label: 'Fintech & payments',
    line: 'Gateways, wallets, banking portals, and recovery / escrow flows.'
  },
  {
    id: 'healthcare',
    label: 'Healthcare & MedTech',
    line: 'Clinical ops, patient tools, vision AI, and care-home platforms.'
  },
  {
    id: 'estate',
    label: 'Real estate & industry',
    line: 'Property groups, construction estimating, energy, and travel.'
  },
  {
    id: 'product',
    label: 'Brand & product sites',
    line: 'SaaS marketing sites, tools, and conversion-led brand launches.'
  }
]

export const evolvoWork: EvolvoWorkItem[] = [
  {
    slug: 'primate-props',
    title: 'Primate Props',
    summary: 'Prop trading firm site for funded evaluations, challenges, and account onboarding.',
    liveUrl: 'https://primate-props.com/',
    image: '/Projects/Evolvo/primate-props-com.jpg',
    imageAlt: 'Primate Props funded trading hero',
    category: 'markets',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'prop-capitals',
    title: 'Prop Capitals',
    summary: 'Prop firm marketing site covering challenges, rules, and funded-account conversion.',
    liveUrl: 'https://prop-capitals-com.vercel.app/',
    image: '/Projects/Evolvo/prop-capitals-com-vercel-app.jpg',
    imageAlt: 'Prop Capitals landing page',
    category: 'markets',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'elite-fusion-trading',
    title: 'Elite Fusion Trading',
    summary: 'Multi-market trading platform site with live prices, instruments, and account entry.',
    liveUrl: 'https://www.elitefusiontrading.com/',
    image: '/Projects/Evolvo/elitefusiontrading-com.jpg',
    imageAlt: 'Elite Fusion Trading platform hero',
    category: 'markets',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'elite-fusion-agent',
    title: 'Elite Fusion Agent',
    summary: 'Agent-facing surface for the Elite Fusion trading product line.',
    liveUrl: 'https://agent.elitefusiontrading.com/',
    image: '/Projects/Evolvo/agent-elitefusiontrading-com.jpg',
    imageAlt: 'Elite Fusion agent portal',
    category: 'markets',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'forex-knights',
    title: 'Forex Knights',
    summary: 'Prop trading challenge site for evaluation, performance tracking, and rewards.',
    liveUrl: 'https://forex-knights.vercel.app/',
    image: '/Projects/Evolvo/forex-knights-vercel-app.jpg',
    imageAlt: 'Forex Knights prop trading hero',
    category: 'markets',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'corex-giveaways',
    title: 'CoreX Giveaways',
    summary: 'Trading community site for education, peer support, and monthly evaluation giveaways.',
    liveUrl: 'https://corex-giveaways.vercel.app/',
    image: '/Projects/Evolvo/corex-giveaways-vercel-app.jpg',
    imageAlt: 'CoreX Giveaways community landing',
    category: 'markets',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'capital-x-academy',
    title: 'Capital X Academy',
    summary: 'Wealth-education product covering cashflow, credit, real estate, and systematic markets.',
    liveUrl: 'https://www.capitalxacademy.com/',
    image: '/Projects/Evolvo/capitalxacademy-com.jpg',
    imageAlt: 'Capital X Academy wealth skills hero',
    category: 'markets',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'apex-academia',
    title: 'Apex Academia',
    summary: 'Academy marketing site for structured learning and program conversion.',
    liveUrl: 'https://apex-academia-five.vercel.app/',
    image: '/Projects/Evolvo/apex-academia-five-vercel-app.jpg',
    imageAlt: 'Apex Academia landing page',
    category: 'markets',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'platinum-edge',
    title: 'Platinum Edge',
    summary: 'Premium banking, crypto, and payment-gateway marketing platform.',
    liveUrl: 'https://platinum-edge.vercel.app/',
    image: '/Projects/Evolvo/platinum-edge-vercel-app.jpg',
    imageAlt: 'Platinum Edge banking and payments hero',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'novixpay',
    title: 'NovixPay',
    summary: 'Crypto payment gateway for cards, wallets, and cross-border merchant settlement.',
    liveUrl: 'https://novixpay.com/',
    image: '/Projects/Evolvo/novixpay-com.jpg',
    imageAlt: 'NovixPay payment gateway homepage',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'novapay',
    title: 'NovaPay',
    summary: 'Borderless payments product site for smart finance and multi-rail checkout.',
    liveUrl: 'https://novapay-rho.vercel.app/',
    image: '/Projects/Evolvo/novapay-rho-vercel-app.jpg',
    imageAlt: 'NovaPay borderless payments hero',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'nexa-pay',
    title: 'NexaPay',
    summary: 'Unified financial intelligence hub — one dashboard for payment operations.',
    liveUrl: 'https://nexa-pay-ashen.vercel.app/',
    image: '/Projects/Evolvo/nexa-pay-ashen-vercel-app.jpg',
    imageAlt: 'NexaPay financial intelligence hub',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'lumo-pay',
    title: 'LumoPay',
    summary: 'Consumer fintech surface for payments, cards, bills, and savings dashboards.',
    liveUrl: 'https://lumo-pay.vercel.app/',
    image: '/Projects/Evolvo/lumo-pay-vercel-app.jpg',
    imageAlt: 'LumoPay smart money product hero',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'nishimatsu-financial',
    title: 'Nishimatsu Financial',
    summary: 'Institutional trading infrastructure for FX, commodities, equities, and digital assets.',
    liveUrl: 'https://nishimatsu-financial-gilt.vercel.app/',
    image: '/Projects/Evolvo/nishimatsu-financial-gilt-vercel-app.jpg',
    imageAlt: 'Nishimatsu Financial trading platform',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'hanageorae',
    title: 'HANAGEORAE',
    summary: 'Korean multi-asset trading brand built on the Nishimatsu financial product line.',
    liveUrl: 'https://nishimatsu-financial.vercel.app/',
    image: '/Projects/Evolvo/nishimatsu-financial-vercel-app.jpg',
    imageAlt: 'HANAGEORAE global multi-asset trading hero',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'bit-vault',
    title: 'BitVault',
    summary: 'Secure crypto wallet and vault for custody, transfers, and asset management.',
    liveUrl: 'https://bit-vault-xi.vercel.app/',
    image: '/Projects/Evolvo/bit-vault-xi-vercel-app.jpg',
    imageAlt: 'BitVault crypto wallet homepage',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'quantum-ledger',
    title: 'Quantum Ledger',
    summary: 'Smart-wallet product site for secured digital-asset management.',
    liveUrl: 'https://quantum-ledger-wheat.vercel.app/',
    image: '/Projects/Evolvo/quantum-ledger-wheat-vercel-app.jpg',
    imageAlt: 'Quantum Ledger smart wallet hero',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'fairtrade-digital',
    title: 'FairTrade Digital',
    summary: 'Escrow platform for protected digital-work payments between buyers and sellers.',
    liveUrl: 'https://fairtrade-digital.vercel.app/',
    image: '/Projects/Evolvo/fairtrade-digital-vercel-app.jpg',
    imageAlt: 'FairTrade Digital escrow landing',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'trusted-refunds',
    title: 'Trust Refunds',
    summary: 'Fund-recovery product with case intake, evaluation, and client-support flows.',
    liveUrl: 'https://trusted-refunds.vercel.app/',
    image: '/Projects/Evolvo/trusted-refunds-vercel-app.jpg',
    imageAlt: 'Trust Refunds fund recovery hero',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'luxkgate',
    title: 'LuxKGate',
    summary: 'Payment-gateway marketing site for merchant onboarding and processing.',
    liveUrl: 'https://www.luxkgate.com/',
    image: '/Projects/Evolvo/luxkgate-com.jpg',
    imageAlt: 'LuxKGate payment gateway homepage',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'remember-loan',
    title: 're:member',
    summary: 'Nordic investment-credit product in partnership with Nordic Tr.',
    liveUrl: 'https://rememberloan.vercel.app/',
    image: '/Projects/Evolvo/rememberloan-vercel-app.jpg',
    imageAlt: 're:member investment credit landing',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'coxi-link',
    title: 'CoxiLink',
    summary: 'Digital voucher and prepaid-card catalog with instant delivery across markets.',
    liveUrl: 'https://coxi-link.vercel.app/',
    image: '/Projects/Evolvo/coxi-link-vercel-app.jpg',
    imageAlt: 'CoxiLink prepaid voucher platform',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'nexus-capital',
    title: 'Nexus Capital',
    summary: 'Private crypto-banking portal for custody, fiat rails, and cross-border settlement.',
    liveUrl: 'https://nexus-capital-olive.vercel.app/',
    image: '/Projects/Evolvo/nexus-capital-olive-vercel-app.jpg',
    imageAlt: 'Nexus Capital private crypto banking',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'quantum-byte',
    title: 'QuantumByte',
    summary: 'Fintech software studio site for payment companies and high-risk operators.',
    liveUrl: 'https://www.q-bsolutions.com/',
    image: '/Projects/Evolvo/q-bsolutions-com.jpg',
    imageAlt: 'QuantumByte fintech software development',
    category: 'fintech',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'surgicore',
    title: 'SurgiCore Pro',
    summary: 'Enterprise surgical operations platform — OR scheduling, cases, billing, and analytics.',
    liveUrl: 'https://surgi-core.vercel.app/',
    image: '/Projects/Evolvo/surgi-core-vercel-app.jpg',
    imageAlt: 'SurgiCore Pro surgical management hero',
    category: 'healthcare',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    caseStudySlug: 'surgicore-pro-surgical-management'
  },
  {
    slug: 'vitalis-health',
    title: 'Vitalis Health',
    summary: 'Healthcare website plus admin operations for appointments, billing, and staff.',
    liveUrl: 'https://vitalis-health-green.vercel.app/',
    image: '/Projects/Evolvo/vitalis-health-green-vercel-app.jpg',
    imageAlt: 'Vitalis Health care platform hero',
    category: 'healthcare',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    caseStudySlug: 'vitalis-health-healthcare-platform'
  },
  {
    slug: 'vitalsign',
    title: 'VitalSign',
    summary: 'Remote patient symptom tracker with real-time health monitoring analytics.',
    liveUrl: 'https://vitalsign-beige.vercel.app/',
    image: '/Projects/Evolvo/vitalsign-beige-vercel-app.jpg',
    imageAlt: 'VitalSign remote patient tracker',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'vital-monitor',
    title: 'Vital Monitor',
    summary: 'Patient monitoring product surface for symptom tracking and clinical visibility.',
    liveUrl: 'https://vital-monitor-pi.vercel.app/',
    image: '/Projects/Evolvo/vital-monitor-pi-vercel-app.jpg',
    imageAlt: 'Vital Monitor patient tracking dashboard',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'med-remind',
    title: 'MedRemind',
    summary: 'Medication scheduler with dose tracking, alerts, and adherence reporting.',
    liveUrl: 'https://med-remind-jade.vercel.app/',
    image: '/Projects/Evolvo/med-remind-jade-vercel-app.jpg',
    imageAlt: 'MedRemind medication scheduler',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'medix-pro',
    title: 'MedixPro',
    summary: 'Multi-clinic care platform for coordinated operations across healthcare groups.',
    liveUrl: 'https://medix-pro-ten.vercel.app/',
    image: '/Projects/Evolvo/medix-pro-ten-vercel-app.jpg',
    imageAlt: 'MedixPro multi-clinic platform',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'lab-track',
    title: 'LabTrack',
    summary: 'Diagnostic lab platform with test tracking, analytics, and multi-role dashboards.',
    liveUrl: 'https://lab-track-eta.vercel.app/',
    image: '/Projects/Evolvo/lab-track-eta-vercel-app.jpg',
    imageAlt: 'LabTrack diagnostics platform',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'carelink',
    title: 'CareLink',
    summary: 'Healthcare communication platform for teams and patients, with compliance-first UX.',
    liveUrl: 'https://carelink-delta-pink.vercel.app/',
    image: '/Projects/Evolvo/carelink-delta-pink-vercel-app.jpg',
    imageAlt: 'CareLink healthcare communication platform',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'babyvax',
    title: 'BabyVax',
    summary: 'Pediatric vaccine tracker with due-date alerts and printable vaccine cards.',
    liveUrl: 'https://baby-vax.vercel.app/',
    image: '/Projects/Evolvo/baby-vax-vercel-app.jpg',
    imageAlt: 'BabyVax pediatric vaccine tracker',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'mindweave-clinic',
    title: 'MindWeave Clinic',
    summary: 'Behavioral-health clinic platform for mental wellness operations and patient care.',
    liveUrl: 'https://mind-weave-clinic-nine.vercel.app/',
    image: '/Projects/Evolvo/mind-weave-clinic-nine-vercel-app.jpg',
    imageAlt: 'MindWeave Clinic mental wellness hero',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'rehab-flow',
    title: 'RehabFlow',
    summary: 'Home-care rehab SaaS for physical therapy progress, patients, and recovery plans.',
    liveUrl: 'https://rehab-flow-neon.vercel.app/',
    image: '/Projects/Evolvo/rehab-flow-neon-vercel-app.jpg',
    imageAlt: 'RehabFlow home care therapy platform',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'elder-guard',
    title: 'ElderGuard Health',
    summary: 'Elder-care health product for family and clinical monitoring workflows.',
    liveUrl: 'https://elder-guard-health-omega.vercel.app/',
    image: '/Projects/Evolvo/elder-guard-health-omega-vercel-app.jpg',
    imageAlt: 'ElderGuard Health platform',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'visionscope-ai',
    title: 'VisionScope AI',
    summary: 'Clinical vision-AI product site for diagnostic imaging workflows.',
    liveUrl: 'https://visionscope-dev.vercel.app/',
    image: '/Projects/Evolvo/visionscope-dev-vercel-app.jpg',
    imageAlt: 'VisionScope AI clinical imaging',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'opticscope-ai',
    title: 'OpticScope AI',
    summary: 'Ophthalmic AI product for screening, imaging review, and clinic conversion.',
    liveUrl: 'https://opticscopeai.vercel.app/',
    image: '/Projects/Evolvo/opticscopeai-vercel-app.jpg',
    imageAlt: 'OpticScope AI ophthalmology product',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'optivana-ai',
    title: 'Optivana AI',
    summary: 'Vision-care AI brand site for clinical decision support and optics workflows.',
    liveUrl: 'https://optivana-ai.vercel.app/',
    image: '/Projects/Evolvo/optivana-ai-vercel-app.jpg',
    imageAlt: 'Optivana AI vision care product',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'lumina-care',
    title: 'Lumina Care',
    summary: 'Nursing and residential care-home group site with enquiry and home-finder flows.',
    liveUrl: 'https://plasnewyddgroup.vercel.app/',
    image: '/Projects/Evolvo/plasnewyddgroup-vercel-app.jpg',
    imageAlt: 'Lumina Care management homepage',
    category: 'healthcare',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'evolvo-construction',
    title: 'Evolvo Construction',
    summary: 'Construction estimating, material takeoffs, and design-engineering services site.',
    liveUrl: 'https://evolvo-construction.vercel.app/',
    image: '/Projects/Evolvo/evolvo-construction-vercel-app.jpg',
    imageAlt: 'Evolvo construction estimating hero',
    category: 'estate',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'realo-group',
    title: 'Realo Group',
    summary: 'Dubai real-estate investment site covering sourcing through yield management.',
    liveUrl: 'https://realo-group.vercel.app/',
    image: '/Projects/Evolvo/realo-group-vercel-app.jpg',
    imageAlt: 'Realo Group Dubai real estate',
    category: 'estate',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'trittiko-block',
    title: 'Trittiko Block',
    summary: 'Property / development brand site with project storytelling and enquiry paths.',
    liveUrl: 'https://tirritikoblock.vercel.app/',
    image: '/Projects/Evolvo/tirritikoblock-vercel-app.jpg',
    imageAlt: 'Trittiko Block development site',
    category: 'estate',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'gcch-management',
    title: 'GCCH Management',
    summary: 'KYC, compliance, risk, and registry solutions for business due diligence.',
    liveUrl: 'https://gcch-replica.vercel.app/',
    image: '/Projects/Evolvo/gcch-replica-vercel-app.jpg',
    imageAlt: 'GCCH Management compliance homepage',
    category: 'estate',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'dp-golf-energy',
    title: 'DP Golf Energy',
    summary: 'Philippines golf-cart catalog for personal, commercial, and industrial use.',
    liveUrl: 'https://dp-golf-energy.vercel.app/',
    image: '/Projects/Evolvo/dp-golf-energy-vercel-app.jpg',
    imageAlt: 'DP Golf Energy product catalog',
    category: 'estate',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'montero-private',
    title: 'Montero Private',
    summary: 'Dubai luxury travel concierge — jets, yachts, VIP events, and 24/7 booking.',
    liveUrl: 'https://montero-private.vercel.app/',
    image: '/Projects/Evolvo/montero-private-vercel-app.jpg',
    imageAlt: 'Montero Private luxury travel concierge',
    category: 'estate',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'evolvo-development',
    title: 'Evolvo Development',
    summary: 'Evolvo product-studio site for SaaS, web apps, and launch-ready platforms.',
    liveUrl: 'https://evolvo-development.vercel.app/',
    image: '/Projects/Evolvo/evolvo-development-vercel-app.jpg',
    imageAlt: 'Evolvo SaaS product development',
    category: 'product',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'consult-pro',
    title: 'ConsultPro',
    summary: 'Business coaching and management-consulting site with service and enquiry flows.',
    liveUrl: 'https://consult-pro-one.vercel.app/',
    image: '/Projects/Evolvo/consult-pro-one-vercel-app.jpg',
    imageAlt: 'ConsultPro coaching and consulting',
    category: 'product',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'iconotic',
    title: 'Iconotic',
    summary: 'Curated SVG/PNG icon bundles with pay-once commercial licensing.',
    liveUrl: 'https://iconotic.vercel.app/',
    image: '/Projects/Evolvo/iconotic-vercel-app.jpg',
    imageAlt: 'Iconotic icon bundle store',
    category: 'product',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'sheet-bundles',
    title: 'Sheet Bundles',
    summary: 'Excel and Google Sheets template store for budgets, trading journals, and ops.',
    liveUrl: 'https://sheet-doc.vercel.app/',
    image: '/Projects/Evolvo/sheet-doc-vercel-app.jpg',
    imageAlt: 'Sheet Bundles spreadsheet templates',
    category: 'product',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'scandiportalen',
    title: 'Scandiportalen',
    summary: 'Nordic portal product with localized content and conversion-led information architecture.',
    liveUrl: 'https://scandiportalen.com/',
    image: '/Projects/Evolvo/scandiportalen-com.jpg',
    imageAlt: 'Scandiportalen homepage',
    category: 'product',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'beam-panda',
    title: 'Beam Panda',
    summary: 'AI image studio — text prompts to studio-quality visuals with credit-based usage.',
    liveUrl: 'https://beam-panda.com/',
    image: '/Projects/Evolvo/beam-panda-com.jpg',
    imageAlt: 'Beam Panda AI image generation',
    category: 'product',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    slug: 'roamr',
    title: 'ROAMR',
    summary: 'eSIM product for travelers — instant plans, activation, and contract-free connectivity.',
    liveUrl: 'https://theroamrs.com/',
    image: '/Projects/Evolvo/theroamrs-com.jpg',
    imageAlt: 'ROAMR eSIM travel product',
    category: 'product',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  }
]
