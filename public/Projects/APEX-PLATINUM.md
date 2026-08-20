Software Requirements Specification (SRS)

APEX-PLATINUM — The Apex of Global Finance

Version: 1.0
Date: 2026-06-24
Project: apex-platinum

---

1. Introduction

1.1 Purpose

This document specifies the software requirements for the Apex-Platinum web
application — an ultra-premium fintech platform providing institutional-grade payment
services, multicurrency accounts, custody visualization, and a private concierge
experience for business and individual clients.

1.2 Scope

Apex-Platinum is a marketing and institutional portal built as a Next.js 16 web
application. It serves two primary audiences:

1. Prospective clients — via a public-facing marketing site (landing, solutions,
   pricing, careers, support, contacts, blog).
2. Authenticated clients — via a simulated institutional dashboard (portfolio,
   markets, vault, concierge, login).

1.3 Technology Stack

┌──────────────┬──────────────────────────────────────────────────────────────┐
│ Layer │ Technology │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ Framework │ Next.js 16 (App Router) │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ Language │ TypeScript 5 │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ UI │ React 19, Tailwind CSS 4 │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ Animations │ GSAP 3.15, Framer Motion (motion), Lenis (smooth scroll) │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ 3D / Shaders │ Three.js 0.184, OGL, Postprocessing │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ Fonts │ Syne, Inter, Be Vietnam Pro (Google Fonts), Material Symbols │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ Styling │ Dark/light theme with localStorage persistence │
└──────────────┴──────────────────────────────────────────────────────────────┘

---

2. Overall Description

2.1 Product Perspective

Apex-Platinum operates as a licensed Electronic Money Institution (EMI) based in
Vilnius, Lithuania, with a London office. The platform presents its financial services
(SWIFT, SEPA, correspondent banking, merchant acquiring, crypto exchange IBANs,
business financing) through a premium, visually rich web experience.

2.2 User Classes

┌──────────────────┬──────────────────────────────────────────────────────────────┐
│ User Class │ Description │
├──────────────────┼──────────────────────────────────────────────────────────────┤
│ Visitor │ Anonymous user browsing the public marketing site │
├──────────────────┼──────────────────────────────────────────────────────────────┤
│ Business Client │ Company seeking payment/account services (Business, Business │
│ │ Plus, Business Exclusive tiers) │
├──────────────────┼──────────────────────────────────────────────────────────────┤
│ Individual │ EU/EEA individual seeking a personal multicurrency account │
│ Client │ │
├──────────────────┼──────────────────────────────────────────────────────────────┤
│ Institutional │ High-net-worth / institutional user accessing the dashboard │
│ Client │ experience (Portfolio, Vault, Markets, Concierge) │
└──────────────────┴──────────────────────────────────────────────────────────────┘

2.3 Operating Environment

- Modern web browsers (Chrome, Firefox, Safari, Edge)
- Desktop and mobile responsive (Tailwind responsive breakpoints)
- Client-side rendered dashboard pages; server-rendered marketing pages

---

3. Functional Requirements

3.1 Public Marketing Site

FR-01: Landing Page

- Description: Full-screen immersive landing with hero stats (36+ SEPA countries,
  Insta SEPA, €0 opening, 2FA), animated service marquee, "How It Works" steps, built-in
  services bento grid, pricing tier preview, events calendar, FAQ accordion, trust
  metrics, and live activity feed simulation.
- Animations: Shader background, Hyperspeed effect, ScrollStack cards, cursor tracer,
  page loader, Lightfall particles.

FR-02: Solutions Pages (7 pages)

- Routes: /solutions/[slug] where slug is one of: payments, correspondent-banking,
  accounts, e-shop-payments, business-financing, crypto-exchange-ibans, crypto-exchange.
- Content per page: Hero badge, title, subtitle, intro text, 4 feature cards (icon +
  title + description), benefits list, and CTA.

FR-03: Pricing Page

- Description: Displays 3 business tiers and 1 individual tier:
  - Business — €0 opening, €9/mo, SEPA from €1, SWIFT €25
  - Business Plus — €399 opening, €59/mo, SEPA from €3+0.1%, SWIFT €25+0.7% (featured)
  - Business Exclusive — €599 opening, €99/mo, SEPA from €3+0.2%, SWIFT €30+1%
  - EU/EEA Individual — Free opening, €3/mo, SEPA from €0

FR-04: Support Page

- Channels: Phone (+370 5 207 5750), Email (support@apex-platinum.com), Hours
  (9:00–18:00 EET).
- Topics: Account opening, Payments, API & Integration, Security.

FR-05: Careers Page

- Listings: Senior Payment Operations Specialist (Vilnius/Remote), Compliance Analyst
  (Vilnius), Full-Stack Engineer (Remote EU), Relationship Manager (London).

FR-06: Contacts Page

- Offices: Vilnius (info@apex-platinum.com), London (uk@apex-platinum.com).

FR-07: Blog Page

- Description: Lists 6 news articles with title, category, timestamp, and excerpt.

FR-08: Navigation

- Primary nav with dropdowns: Solutions (7 items), Company (Blog), Pricing, Support,
  Careers, Contacts.
- Site header adapts to variant: default, login, landing.
- Site footer with legal links (9 items: terms, privacy, complaints, cookies,
  whistleblowing, fraud prevention, customer service standard, onboarding guide).

  3.2 Institutional Dashboard (Simulated)

FR-09: Login Page (/login)

- 3-step flow:
  a. Institutional ID input (Platinum-ID)
  b. 4-digit MFA code entry
  c. Decryption animation → auto-redirect to Portfolio
- Security UI: Biometric Platinum-ID, AES-256 Quantum Shield, Device Binding,
  FINRA/SIPC badges.
- Note: This is a UI simulation — no actual authentication backend.

FR-10: Portfolio Page (/portfolio)

- Stats: Total AUM ($142.8M), 24h P&L, Sharpe Ratio (2.84), Risk Score, Alpha Rating.
- Allocation breakdown: Private Equity ($42.4M / 30%), Liquid Markets ($88.2M / 62%),
  Alt Strategy ($12.2M / 8%).
- Custody table: 5 tier-1 custodians (JP Morgan, Apex Cold Storage, Goldman Sachs,
  UBS, Deutsche Bank) with region, value, risk rating.
- Liquidity terminal: 5 tickers (BTC, GLD, ETH, OIL, EUR/USD) with live-style price
  display.

FR-11: Markets Page (/markets)

- Global markets terminal view with institutional-grade data visualization.

FR-12: Vault / Private Asset Ledger (/vault)

- Holdings bento grid: Private Equity (42%, 14 active deals), Digital Alpha ($42.1M),
  Venture Capital (28 tech unicorns), Concierge Advisory.
- Total liquidity: $142,850,912.00
- Stats: Yield +4.28% (24h), Alpha Rating AAA+.
- 3D VaultOrb animation with AES-256-GCM encryption badge.

FR-13: Sovereign Vault (/vault/sovereign)

- Deep vault access — extended custodial/wealth view.

FR-14: Concierge Page (/concierge)

- Dedicated wealth strategist interface (Julian Vance, Senior Advisor).

  3.3 Cross-Cutting Features

FR-15: Theme System

- Dark mode (default) and light mode toggle.
- Persisted via localStorage key apex-theme.
- Inline script in <head> prevents flash of wrong theme.

FR-16: Smooth Scrolling

- Lenis smooth-scroll library for the entire application.

FR-17: Page Transitions & Animations

- GSAP: Page entry animations, parallax backgrounds, staggered card reveals,
  scroll-triggered sections.
- Three.js / OGL: Shader backgrounds, VaultOrb 3D orb, Hyperspeed effect.
- Motion (Framer Motion): Component-level animations.
- Custom: PageLoader, CursorTracer, Lightfall particles, MagicBento, AnimatedList,
  ScrollStack.

FR-18: Responsive Design

- Mobile-first with Tailwind breakpoints (md, lg).
- Hamburger/mobile navigation.
- Touch-friendly card interactions.

---

4. Non-Functional Requirements

NFR-01: Performance

- Dynamic imports (next/dynamic) for heavy 3D components (VaultOrb) with ssr: false.
- Google Fonts optimized via next/font.
- Image optimization via next/image.

NFR-02: Accessibility

- Semantic HTML structure.
- Material Symbols for iconography.
- Selection color customization (selection:bg-neon-cyan/20).

NFR-03: SEO

- Server-side metadata (title, description) defined in root layout.
- App Router server components for marketing pages.

NFR-04: Browser Compatibility

- Modern evergreen browsers (ES2020+).
- CSS custom properties for theming.
- suppressHydrationWarning for theme flash prevention.

NFR-05: Maintainability

- Content separated from components (lib/site-content.ts, lib/landing-content.ts,
  lib/routes.ts, lib/assets.ts).
- Centralized route definitions.
- Component-per-page architecture (components/pages/).
- Shared layout components (AppShell, SiteHeader, SiteFooter, InnerHero, PageHero).

NFR-06: Design System

- Color palette: Platinum, Gold Shimmer, Neon Cyan, plus surface/background variants.
- Typography: Syne (headings), Inter (body), Be Vietnam Pro (accent), monospace for
  financial data.
- Components: PremiumCard (with tilt/shine effects), StatCard, PlatinumButton,
  TiltCard.
- Micro-interactions: Metallic shine, brushed platinum, wealth gradient, radial glow,
  scan line animations.

---

5. System Architecture

src/
├── app/ # Next.js App Router pages
│ ├── layout.tsx # Root layout (fonts, metadata, providers)
│ ├── page.tsx # Landing page
│ ├── login/page.tsx
│ ├── portfolio/page.tsx
│ ├── markets/page.tsx
│ ├── vault/page.tsx
│ ├── vault/sovereign/page.tsx
│ ├── concierge/page.tsx
│ ├── pricing/page.tsx
│ ├── support/page.tsx
│ ├── careers/page.tsx
│ ├── contacts/page.tsx
│ ├── company/blog/page.tsx
│ └── solutions/[slug]/page.tsx
├── components/
│ ├── animations/ # Visual effects (8 components)
│ ├── cards/ # Card showcase + chip
│ ├── landing/ # Landing-specific sections
│ ├── layout/ # AppShell, Header, Footer, Hero, Nav
│ ├── pages/ # Page-level components (11 pages)
│ ├── providers/ # ClientProviders, ThemeProvider
│ └── ui/ # Reusable primitives (Logo, PremiumCard, TiltCard)
├── hooks/ # useLandingGsap, usePageGsap
└── lib/ # Content data, routes, assets

---

6. Constraints & Assumptions

1. No backend/API — All data is static/hardcoded. The dashboard is a visual
   demonstration, not a functional trading platform.
1. No real authentication — The login flow is a UI simulation that auto-redirects
   after animation.
1. No database — Content is managed via TypeScript files.
1. EMI licensing context — Copy references licensed Electronic Money Institution
   status; legal links are placeholder (#).
1. Pricing is illustrative — "Fees may vary at the sole discretion of Apex-Platinum."

---

7. Future Considerations

- Backend integration for real account opening/onboarding
- Live market data feeds (replacing static ticker data)
- Actual authentication system with 2FA
- CMS integration for blog/news content
- API documentation portal
- Multi-language / i18n support
- Legal page content (currently all links point to #)

---

This SRS covers all pages, features, content, and architecture currently implemented
in the codebase. Let me know if you'd like me to expand any section or export this as
a file.
