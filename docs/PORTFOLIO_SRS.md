# Software Requirements Specification  
## M Ubaid Javaid — Personal Portfolio, SEO, and Client-Hunting System

| Field | Value |
|---|---|
| Document | SRS-PORTFOLIO-001 |
| Product | Personal engineering portfolio + discovery engine |
| Owner | M Ubaid Javaid |
| Location | Multan, Pakistan |
| Primary site | https://mubaidjavaid.vercel.app/ |
| Preview / research URL | https://mubaidjavaid-ten.vercel.app/ |
| Status | Living spec — use for SEO research and outbound |
| Version | 1.0 |
| Date | 15 September 2026 |

---

## 1. Purpose

This SRS defines what the portfolio **is**, what it must **do**, and how it must **get found**.

Two jobs, one product:

1. **Discovery** — Google, LinkedIn, GitHub, and referral traffic find *M Ubaid Javaid* for hire-intent searches.
2. **Conversion** — a founder / hiring manager who lands here can verify skill, domain, and contact within 90 seconds.

This document is the brief for deep SEO research and for client hunting. It is not a rewrite of the app. It is the contract the site, content, and outreach must satisfy.

---

## 2. Problem statement (why Google is not showing you)

You will **not** rank for the query `software engineer` as a personal site. That query is dominated by Wikipedia, Indeed, Coursera, and job boards. Ranking failure there is expected, not a bug.

What *is* a bug is not appearing for searches a buyer would actually type:

| Buyer query class | Example | Current risk |
|---|---|---|
| Branded | `M Ubaid Javaid`, `Ubaid Javaid developer` | Split across two Vercel URLs + GitHub README |
| Local hire | `MERN developer Multan`, `Next.js developer Pakistan freelance` | Title/role says Product Engineer, not Software Engineer / MERN |
| Domain hire | `fintech Next.js developer`, `healthcare SaaS developer Pakistan` | Work exists; pages are not titled for those queries |
| Intent hire | `hire Next.js developer`, `freelance full stack developer Pakistan` | `/services` and `/contact` are thin on hire-intent copy |

### 2.1 Confirmed fragmentation (fix before any “deep research” spend)

| Signal | Finding |
|---|---|
| Canonical in code | `https://mubaidjavaid.vercel.app/` (`data/site.ts`) |
| PageSpeed / preview | `https://mubaidjavaid-ten.vercel.app/` |
| GitHub profile blog field | `https://mubaidjavaid-ten.vercel.app/` |
| Indexed title (web search) | “Expert MERN Stack Developer” — **does not match** current title “Product Engineer” |
| LinkedIn headline | Software Engineer |
| Site H1 / JSON-LD jobTitle | Product Engineer |
| GitHub bio | Software Engineer specializing in MERN and Next.js |

Google sees **three job titles** and **two domains**. That splits PageRank, snippets, and Knowledge-panel candidates.

**Hard requirement:** pick one canonical host and one public job title cluster, then align every property.

Recommended cluster (for client hunting, not vanity):

> **Software Engineer · Full-Stack (MERN / Next.js) · Multan, Pakistan**  
> Secondary line: Product-minded delivery for fintech, healthcare, and SaaS.

Use “Product Engineer” as a supporting phrase, not the only phrase. Buyers search **software engineer**, **full stack**, **MERN**, **Next.js**.

---

## 3. Product scope

### 3.1 In scope

- Public marketing site (this repo)
- Technical SEO, on-page SEO, schema, sitemap, Search Console
- Proof assets: Evolvo live work, 6 case studies, blog
- Contact conversion (form + email)
- Off-site identity: Google, LinkedIn, GitHub, directories
- Client-hunting keyword list and outreach angles

### 3.2 Out of scope

- Ranking for generic `software engineer` worldwide
- Paid ads (optional later; not required for this SRS)
- Fake metrics, invented clients, or keyword stuffing
- Replacing Evolvo NDAs with claims you cannot show

### 3.3 Users

| Actor | Goal |
|---|---|
| Founder / SME owner | Hire one engineer to ship a web product |
| Agency / Evolvo-like studio | Contract overflow or specialist Next.js |
| Recruiter / hiring manager | Verify stack, location, English, and shipped work |
| Googlebot | Crawl, understand entity, index the right URLs |
| You | Inbound leads + outbound hunting with the same proof |

---

## 4. Current system inventory (as built)

Use this as the research baseline.

### 4.1 Routes

| URL | Job | SEO role |
|---|---|---|
| `/` | Positioning + proof stats | Brand + primary keywords |
| `/projects` | 53 Evolvo live products + 6 case studies | Domain proof (fintech, health, markets) |
| `/projects/[slug]` | Deep case study | Long-tail: HSMS, QuikPOS, Naaz Wears, etc. |
| `/services` | 4 offerings | Hire-intent |
| `/about` | Person, Evolvo, Fiesta | Entity + E-E-A-T |
| `/blog` + `/blog/[slug]` | ~22 articles | Topical authority |
| `/contact` | Lead capture (Resend) | Conversion |
| `/sitemap.xml` `/robots.txt` | Discovery | Indexing |

### 4.2 Proof already on the site

- **Case studies:** HSMS, Naaz Wears, QuikPOS, Apex Platinum, SurgiCore, Vitalis Health
- **Evolvo live catalog:** 53 URLs across markets, fintech, healthcare, real estate, brand sites
- **Experience:** Evolvo (Feb 2026–present), Fiesta (Jul 2024–Jan 2026)
- **Stack:** React, Next.js, Node, Express, MongoDB, TypeScript, Vercel
- **Contact:** `mubaidjavaid97@gmail.com`, GitHub, LinkedIn

### 4.3 SEO already implemented

- `robots.txt` allow all + sitemap
- Canonical per page via `pageMetadata`
- Open Graph + Twitter cards
- Person + WebSite JSON-LD
- `index, follow`
- GA when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set

### 4.4 SEO gaps (research backlog)

1. Two live hosts; GitHub points at `-ten`.
2. Job title mismatch across Google / LinkedIn / site.
3. OG image `/mubaidjavaid.png` is **2.5 MB** — slow social crawls.
4. Evolvo cards are live links, not indexable case-study URLs (no `/projects/primate-props` pages).
5. No `ProfessionalService` / `OfferCatalog` schema on `/services`.
6. Blog is engineering notes, not hire-intent landing pages (`hire Next.js developer Pakistan`).
7. No Google Search Console / Bing Webmaster verification documented in-repo.
8. No custom domain (vercel.app is weaker than `mubaidjavaid.com` for trust and CTR).

---

## 5. Goals and success metrics

Do not optimize for “rank #1 software engineer”. Optimize for **named discovery + hire queries**.

| Horizon | Metric | Target |
|---|---|---|
| 14 days | Search Console property on **one** canonical URL | Verified, sitemap submitted |
| 14 days | Branded query `M Ubaid Javaid` | Site in top 3 (often already possible once canonical is clean) |
| 30 days | Local/stack queries (see §7) | Impressions > 0 for at least 10 queries |
| 60 days | `MERN developer Multan`, `Next.js freelance Pakistan` | Page 1 or rising clicks |
| Ongoing | Contact form qualified leads | 2+/month from organic or outbound using this SRS |
| Quality | Core Web Vitals (mobile) | LCP < 2.5s, CLS < 0.1, INP good |

If branded search still fails after canonical unification, the issue is indexing (Search Console) not copy.

---

## 6. Functional requirements

### 6.1 Site

| ID | Requirement |
|---|---|
| F-01 | One canonical origin; all others 301 to it |
| F-02 | Homepage states **who, where, stack, domains, CTA** above the fold in crawlable HTML (no JS-only H1) |
| F-03 | Work index lists Evolvo categories + case studies with unique titles |
| F-04 | Each case study has unique `<title>`, meta description, H1, and FAQ or outcome copy |
| F-05 | Services page answers “what can I hire you for?” in plain language |
| F-06 | About page is a Person entity: name, city, employers, stack, photo, sameAs links |
| F-07 | Contact form works without JS-only dead ends; thank-you is noindex if needed |
| F-08 | Sitemap includes all public indexable URLs; Evolvo live sites stay **external**, not fake internal pages |
| F-09 | 404 and `noindex` on debug routes (`/api/contact/debug-env`) |

### 6.2 SEO engine (for your deep research)

| ID | Requirement |
|---|---|
| S-01 | Google Search Console + Bing Webmaster on canonical host |
| S-02 | Keyword map spreadsheet (seed list in §7) tracked monthly |
| S-03 | Title tags: `Primary keyword · M Ubaid Javaid` (50–60 chars) |
| S-04 | Meta descriptions: benefit + location + CTA (140–155 chars) |
| S-05 | H1 includes a searchable role, not only a slogan |
| S-06 | Internal links: Home → Work → Services → Contact on every page |
| S-07 | Schema: Person, WebSite, BreadcrumbList, BlogPosting, ProfessionalService |
| S-08 | `sameAs`: LinkedIn, GitHub, (future) custom domain, Clutch/Contra optional |
| S-09 | Image alt text names the person or product, not empty decorative LCP |
| S-10 | English primary; optional later: Urdu landing for Pakistan SMEs |

### 6.3 Client hunting (outbound using this SRS)

| ID | Requirement |
|---|---|
| C-01 | One-paragraph pitch per domain (fintech, health, POS, housing, ecom) |
| C-02 | Proof URL per pitch (live site or case study) |
| C-03 | ICP list: Pakistan D2C, Gulf prop/fintech, UK care/property, SaaS founders |
| C-04 | Outreach assets: 3 LinkedIn headlines, 3 cold email openers, 3 Upwork/Contra intros — all matching site copy |
| C-05 | Do not claim company ownership of Evolvo client brands; frame as **delivery at Evolvo-Technologies** |

---

## 7. Keyword research map (use this for deep search)

Run these in Google Keyword Planner, Ahrefs, or Ubersuggest. Record volume, KD, and current ranking URL.

### 7.1 Brand (must win)

- M Ubaid Javaid
- Ubaid Javaid developer
- M Ubaid Javaid Multan
- MUbaidJavaid GitHub
- mubaidjavaid.vercel.app

### 7.2 Role + location (realistic Page 1)

- MERN stack developer Multan
- Next.js developer Multan
- Full stack developer Multan
- Software engineer Multan
- Freelance web developer Multan
- React developer Pakistan freelance
- Next.js developer Pakistan
- MERN developer Pakistan hire

### 7.3 Hire intent

- hire Next.js developer
- hire MERN stack developer
- freelance full stack developer Pakistan
- SaaS MVP developer Pakistan
- fintech website developer
- healthcare web application developer

### 7.4 Domain (your unfair advantage)

- housing society management system Pakistan
- POS software Pakistan Udhaar
- Pakistani fashion ecommerce COD
- prop trading website developer
- payment gateway website Next.js
- clinic management web app

### 7.5 Do not chase (vanity)

- software engineer
- software engineer jobs
- best software engineer
- AI engineer
- 10x developer

### 7.6 Page-to-keyword assignment

| Page | Primary | Secondary |
|---|---|---|
| `/` | Full-stack / MERN / Next.js developer Multan | Software engineer Pakistan freelance |
| `/projects` | Next.js portfolio fintech healthcare | Evolvo web developer |
| `/projects/hsms-…` | Housing society management system | Pakistani society software |
| `/projects/quikpos-…` | POS software Pakistan | Udhaar POS |
| `/projects/naaz-wears-…` | COD ecommerce Pakistan | fashion store Next.js |
| `/services` | Hire Next.js developer | SaaS MVP developer |
| `/about` | M Ubaid Javaid software engineer | Evolvo Technologies developer |
| `/blog` | Next.js performance, MongoDB, Express | supporting topical pages |
| `/contact` | Contact M Ubaid Javaid | hire full stack developer Multan |

---

## 8. Information architecture requirements

```
mubaidjavaid.vercel.app (or future mubaidjavaid.com)
├── /                      Person + stack + domains + CTA
├── /projects              Evolvo catalog + case studies
│   └── /projects/{slug}   6 deep studies (expand over time)
├── /services              Hire packages
├── /about                 Entity + employers
├── /blog                  Topical authority
│   └── /blog/{slug}
└── /contact               Conversion
```

**Rule:** every indexable page must answer one search intent. Do not make Evolvo cards into thin doorway pages. Link out to live URLs; keep SEO juice on `/projects` + case studies.

---

## 9. Content requirements (for ranking + hunting)

### 9.1 Homepage H1 contract

Must be crawlable text, not only a slogan.

Example that matches buyer search:

> M Ubaid Javaid — Software Engineer in Multan  
> Full-stack MERN & Next.js. Fintech, healthcare, and SaaS products in production.

Keep the current brand line as a subhead if needed.

### 9.2 About (E-E-A-T)

Must state: legal name, city, current employer, previous employer, years, stack, photo, email, GitHub, LinkedIn. This is what Google uses to attach a Person entity.

### 9.3 Work

- Case studies: problem → role → stack → live URL → outcome (honest, no fake %).
- Evolvo list: category, one-line summary, live URL, “built at Evolvo-Technologies”.

### 9.4 Blog (research topics that attract clients)

Write 6–8 pages aimed at buyers, not only other developers:

1. How I ship a SaaS MVP on Next.js (timeline + stack)
2. What Pakistani D2C stores get wrong in COD checkout
3. POS + Udhaar: why generic Stripe POS fails in PK
4. Fintech landing pages that pass “trust” without lying
5. Healthcare admin + public site in one React app
6. Technical SEO checklist I use before launch

Each article: 1,200+ words, unique title, internal link to `/services` and one case study.

### 9.5 Off-site (this is 50% of “not on Google”)

| Channel | Action |
|---|---|
| Google Search Console | Verify canonical; request indexing of `/` `/about` `/projects` `/services` |
| Google Business Profile | Optional if you want local pack for Multan (home-based software services) |
| LinkedIn | Headline = site H1 cluster; Featured = portfolio URL; About first 2 lines = keywords |
| GitHub | `blog:` field = canonical URL; pinned repo = this portfolio; README same bio |
| IndexNow / Bing | Submit sitemap |
| Directories | Contra, Upwork (limited), Wellfound — same bio, same URL |
| Backlinks | Guest posts, Evolvo/company site team page, GitHub Pages, Hashnode canonical to your blog |

Without backlinks and one canonical URL, on-page SEO cannot make you appear for competitive terms.

---

## 10. Technical requirements

| ID | Requirement |
|---|---|
| T-01 | SSR/SSG HTML for titles and H1 (already App Router static) |
| T-02 | Mobile LCP < 2.5s on the canonical URL (PageSpeed mobile) |
| T-03 | OG image ≤ 300 KB, 1200×630 |
| T-04 | HTTPS only; www vs non-www decided once |
| T-05 | Custom domain recommended: `mubaidjavaid.com` → 301 from vercel.app |
| T-06 | `rel=canonical` never points at `-ten` if production is the other host |
| T-07 | Debug API not indexed |
| T-08 | Images: WebP/AVIF, width/height or aspect-ratio (CLS = 0 already) |
| T-09 | GA after LCP (`lazyOnload`) — already specified in code |
| T-10 | No keyword stuffing; no hidden text |

---

## 11. Schema requirements

| Page | `@type` |
|---|---|
| All | `Person` in layout (name, jobTitle includes Software Engineer + Full-Stack, addressLocality Multan, sameAs) |
| Home | `WebSite` + `Person` |
| About | `Person` (detailed) + `ProfilePage` |
| Services | `ProfessionalService` + `OfferCatalog` |
| Blog post | `BlogPosting` (author Person, datePublished) |
| Case study | `CreativeWork` or `Article` |
| Breadcrumbs | `BreadcrumbList` |

`knowsAbout` must include: Software Engineering, MERN Stack, Next.js, Fintech, Healthcare software, SaaS.

---

## 12. Client-hunting playbook (use the SRS in outreach)

### 12.1 Ideal customer profile

1. **Pakistan SME / D2C** — COD store, POS, society/ERP (Naaz, QuikPOS, HSMS proof).
2. **Fintech / payments / prop** — needs a production marketing + dashboard site (Evolvo catalog).
3. **Clinics / health ops** — booking + admin (Vitalis, SurgiCore, BabyVax line).
4. **Foreign SME via Evolvo-like agencies** — you are the implementation engineer.

### 12.2 Pitch templates (keep claims honest)

**Fintech**  
I ship payment, wallet, and prop-trading web products (Next.js). Live examples from delivery at Evolvo: NovixPay, Primate Props, Capital X. I can take a Figma or a messy brief to a production Vercel release.

**Healthcare**  
I build clinic/hospital marketing sites plus operational dashboards (appointments, billing, roles). See SurgiCore and Vitalis case studies.

**Pakistan ops**  
I build Pakistan-first workflows: COD checkout, Udhaar/Khata POS, housing-society modules. See QuikPOS and HSMS.

### 12.3 Where to hunt

- LinkedIn Sales Nav: founders in PK/UAE/UK with “website” + “Next.js” or “need developer”
- Twitter/X and Indie Hackers: SaaS MVP
- Local Multan/Lahore Facebook groups: SME websites (Urdu pitch + English site)
- Agency partners: offer yourself as Evolvo-style implementation, not a competing studio brand

### 12.4 Proof pack (send as 4 links max)

1. Home  
2. `/projects`  
3. One case study matching the lead  
4. `/contact`

---

## 13. Alignment requirements (identity)

Until these match, SEO research will keep showing “inconsistent entity”:

| Surface | Required public line |
|---|---|
| Site title | M Ubaid Javaid · Software Engineer (MERN / Next.js) |
| H1 | Name + Software Engineer + Multan |
| JSON-LD jobTitle | Software Engineer |
| LinkedIn | Software Engineer \| MERN & Next.js \| Multan |
| GitHub bio | Software Engineer · MERN & Next.js · Multan |
| GitHub website/blog | Canonical portfolio URL only |
| Email signature | Same title + URL |
| Vercel production | One domain; preview URLs `noindex` |

---

## 14. Non-functional requirements

- Availability: Vercel SLA; contact email monitored 24h (site already claims this)
- Accessibility: keyboard nav, alt text, contrast on light pages
- Security: no secrets in client; contact API rate-limit/validation already present
- Legal: Evolvo client work labeled as employment delivery, not “my startup”
- Language: professional English; no keyword spam

---

## 15. Research checklist (your next deep-search session)

Copy this into a sheet. Fill weekly.

1. [ ] Search `site:mubaidjavaid.vercel.app` — how many pages indexed?  
2. [ ] Search `site:mubaidjavaid-ten.vercel.app` — if indexed, 301 or noindex.  
3. [ ] Search `"M Ubaid Javaid"` in quotes — which URL is #1?  
4. [ ] Search `MERN developer Multan` — note page and competitors.  
5. [ ] Search `software engineer Multan` — note if any personal sites rank (likely universities/jobs).  
6. [ ] GSC → Performance → Queries: export 28 days.  
7. [ ] GSC → Pages: which URLs get impressions?  
8. [ ] URL Inspection on `/` `/about` `/projects` `/services`.  
9. [ ] Ahrefs/Ubersuggest: volumes for §7.2–7.4.  
10. [ ] Backlink check: who links to you besides GitHub?  
11. [ ] Compare title tag in view-source vs Google snippet.  
12. [ ] Confirm LinkedIn Featured link = canonical.

---

## 16. Implementation backlog (after research)

Priority order:

1. Unify canonical domain + noindex preview.  
2. Align title/H1/schema/LinkedIn/GitHub to Software Engineer + MERN/Next.js + Multan.  
3. Compress OG image; unique meta per page from keyword map.  
4. Search Console + indexing requests.  
5. Custom domain.  
6. Hire-intent sections on `/services` and homepage.  
7. 6 buyer-focused articles.  
8. ProfessionalService schema.  
9. Team-page / directory backlinks.  
10. Optional: location landing `/multan-nextjs-developer` only if research shows volume and you can write unique copy (avoid doorway spam).

---

## 17. Risks

| Risk | Mitigation |
|---|---|
| Two Vercel URLs split index | 301 + GSC change of address if you move |
| Evolvo clients look like your companies | Always attribute employer |
| “Product Engineer” vs buyer language | Dual phrasing: Software Engineer first |
| Thin Evolvo cards | Strength is `/projects` hub + outbound proof, not 53 thin URLs |
| Slow LCP on preview | Keep hero as CSS background; H1 as LCP |

---

## 18. Glossary

- **Canonical** — the one URL Google should treat as the original.  
- **Branded query** — search for your name.  
- **Hire intent** — search that means “I want to pay someone”.  
- **E-E-A-T** — experience, expertise, authoritativeness, trust.  
- **ICP** — ideal customer profile for hunting.

---

## 19. Document control

This SRS is the source of truth for SEO research and client hunting. When copy on the site changes, update §4 and §13 in the same PR.

**Owner:** M Ubaid Javaid  
**Review:** after GSC has 28 days of data  
**Related live site:** https://mubaidjavaid.vercel.app/
