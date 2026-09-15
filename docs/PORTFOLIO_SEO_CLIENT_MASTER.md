# PORTFOLIO SEO + CLIENT ACQUISITION MASTER
## M Ubaid Javaid — Research, Architecture, and SRS

| Field | Value |
|---|---|
| Document | PORTFOLIO-SEO-CLIENT-MASTER |
| SRS ID | SRS-PORTFOLIO-SEO-CLIENT-001 |
| Owner | M Ubaid Javaid |
| Research date | 15 September 2026 |
| Status | Research complete — implementation-ready; **no code in this pass** |
| Baseline audited | `docs/PORTFOLIO_SRS.md` (SRS-PORTFOLIO-001 v1.0) |
| Primary host (indexed) | https://mubaidjavaid.vercel.app/ |
| Preview host (this repo) | https://mubaidjavaid-ten.vercel.app/ |
| GitHub | https://github.com/MUbaidJavaid |
| LinkedIn (in code) | https://www.linkedin.com/in/mubaidjavaid00 |
| LinkedIn (prompt) | https://www.linkedin.com/in/mubaidjavaid00 — **NEEDS USER INPUT** |

---

## RESEARCH LOG

### Sources checked (Tier hierarchy)

**Tier 1 — Google Search Central / Google Help**
- SEO Starter Guide (meta keywords unused; keyword stuffing; domain keyword impact)
- Meta tags Google supports
- Google does not use the keywords meta tag (2009 blog; still current per Starter Guide + Office Hours)
- ProfilePage structured data (valid/invalid use cases)
- Intro to structured data (schema.org ≠ Google rich-result eligibility)
- Search gallery / structured data features
- Google Business Profile eligibility & service-area guidelines

**Tier 2**
- Next.js App Router metadata patterns (repo)
- Bing Webmaster / IndexNow (capability noted; not live-verified for this property)

**Tier 3**
- Web SERP sampling via search tool (Ahrefs/Semrush volumes **not available**)

**Tier 4**
- Industry articles used only where they restate Google docs

### URLs inspected (OBSERVED)

- `https://mubaidjavaid.vercel.app/` (+ `/projects`, `/about`, `/services`, `/blog`, `/contact`, `/robots.txt`, `/sitemap.xml`)
- `https://mubaidjavaid-ten.vercel.app/` (+ same routes, robots, sitemap)
- `https://github.com/MUbaidJavaid` (API + HTML pins)
- LinkedIn requested slug: authwalled (HTTP 999) — headline **UNVERIFIED** without login
- Repo: `data/site.ts`, `lib/seo.ts`, `app/sitemap.ts`, `app/robots.ts`, `data/projects.ts`, `data/evolvo-work.ts`, `data/posts/*`, `docs/PORTFOLIO_SRS.md`

### Tools used

- Live HTTP fetch / HTML parse
- Google web search tool (`site:`, branded queries)
- GitHub API profile fields
- Codebase inventory

### Limitations (explicit)

| Gap | Status |
|---|---|
| Google Search Console export | **UNVERIFIED** — no property access in this research |
| Keyword search volume / KD | **UNKNOWN / NOT AVAILABLE** — no Ahrefs/Semrush |
| Full backlink graph | **UNVERIFIED** |
| LinkedIn headline for both slugs | **UNVERIFIED** (authwall); Google snippet for alt slug observed |
| CrUX / field CWV on primary | **NEEDS LIVE TEST** after production unify |
| Whether user can overwrite primary Vercel Production | **NEEDS USER INPUT** |
| Custom domain ownership | **NEEDS USER INPUT** |

### Evidence labels used below

**OBSERVED** · **VERIFIED** (against Google docs) · **INFERRED** · **RECOMMENDED** · **UNVERIFIED** · **NEEDS USER INPUT**

Claim tags: `[GOOGLE-DOCUMENTED]` · `[EXPERIMENTAL]` · `[INDUSTRY PRACTICE]` · `[INFERENCE]` · `[NOT SUPPORTED]`

---

# 01 — EXECUTIVE VERDICT

**OBSERVED:** Google is not “broken.” The discovery system is. Two different websites share one brand name; the newer, stronger portfolio lives on a preview host while SEO signals (`canonical`, `og:url`, sitemap `<loc>`) claim the older host — where most sitemap URLs **404**.

**Verdict (RECOMMENDED):**

1. **Canonical origin:** `https://mubaidjavaid.vercel.app/` after **promoting this repo** to that Production deployment. Preview `-ten` must redirect or `noindex`. Custom domain is optional trust/CTR — **not** a ranking magic wand `[GOOGLE-DOCUMENTED]` (Starter Guide: TLD/domain keywords have hardly any ranking effect).
2. **Public identity cluster:** `Software Engineer · Full-Stack (MERN / Next.js) · Multan, Pakistan`. Keep “Product Engineer” as secondary copy only.
3. **Do not chase** generic `software engineer` / jobs SERPs — dominated by Wikipedia, job boards, courses **[INFERENCE from SERP sampling]**.
4. **Compete where personal portfolios win:** branded name; local/stack long-tails; domain proof (fintech/health/POS/housing); hire-intent pages that look like Vlad Sedenko / Nayan Kyada style service pages — not Upwork directory pages alone.
5. **Evolvo:** hub + 5 categories + 6 deep case studies. **Not** 53 thin SEO pages.
6. **Meta keywords:** **META KEYWORDS ARE NOT A GOOGLE RANKING STRATEGY.** `[GOOGLE-DOCUMENTED]`
7. **Conversion + SEO share one system:** real Evolvo-attributed proof → clear hire pages → entity consistency on LinkedIn/GitHub → contact within 90 seconds.

**If Phase 1 (host unify) is skipped, almost all later SEO work is wasted.**

---

# 02 — LIVE WEBSITE AUTOPSY

## 2.1 Two-host comparison (homepage)

| Signal | Primary `mubaidjavaid.vercel.app` | Preview `mubaidjavaid-ten.vercel.app` |
|---|---|---|
| Status | 200 | 200 |
| What it is | **OLD** MERN portfolio site | **THIS repo** Product Engineer portfolio |
| Title | `M Ubaid Javaid \| Expert MERN Stack Developer \| Next.js Specialist` | `Product Engineer · M Ubaid Javaid` |
| H1 | `Ubaid Javaid` | `M Ubaid Javaid` |
| Canonical | **ABSENT** | Points to **primary** |
| Robots meta | ABSENT | `index, follow` |
| Keywords meta | PRESENT (MERN/Next…) | PRESENT (long Product Engineer list) |
| JSON-LD | ABSENT | Person + WebSite (jobTitle=Product Engineer; sameAs GitHub + LinkedIn code slug) |
| OG url / image | primary / `mubaidjavaid.png` | **primary** / primary `mubaidjavaid.png` |
| Google `site:` | Homepage appears with MERN title | **No hits** in sampled `site:` queries |

**OBSERVED:** Hosts are **not** content duplicates. Preview SEO identity is incorrectly aligned to primary URL namespace.

## 2.2 Route autopsy table

| URL | Purpose | Indexable? | Canonical | Title | H1 | Meta | Schema | Internal links | Main issue | Priority |
|---|---|---|---|---|---|---|---|---|---|---|
| primary `/` | Old brand home | Likely yes | none | Expert MERN… | Ubaid Javaid | Senior MERN… | none | Old nav | Stale entity vs new site | P0 |
| primary `/projects` | Broken | Directory listing | none | Files within /projects/ | Index of… | n/a | none | n/a | Not the app | P0 |
| primary `/about` `/services` `/blog` `/contact` | Missing | 404 | none | 404 | 404 | n/a | none | n/a | Sitemap targets 404 | P0 |
| primary `/robots.txt` | Crawl | yes | n/a | n/a | n/a | Allow all; **no Sitemap** | n/a | n/a | No sitemap line | P1 |
| primary `/sitemap.xml` | Discovery | **404** | n/a | n/a | n/a | n/a | n/a | n/a | No sitemap | P0 |
| preview `/` | New brand home | Should be noindex until promote | → primary | Product Engineer · … | M Ubaid Javaid | Product Engineer… | Person+WebSite | Full | Canonical to wrong live content | P0 |
| preview `/about` `/services` `/projects` `/blog` `/contact` | New IA | 200 on preview | → primary paths | Work/About/… | Present | Present | Mixed | Strong | Canonical URLs 404 on primary | P0 |
| preview `/sitemap.xml` | Discovery | 200 (intermittency UNVERIFIED) | locs = **primary** | n/a | n/a | 34 URLs | n/a | Points at 404s | **Active index harm** | P0 |
| Case studies (preview) | Proof | 200 | → primary | Unique | Unique | Unique | BlogPosting-ish on blog | Good | Not live on indexed host | P0 |
| Blog posts ×22 (preview) | Authority | 200 | → primary | Unique | Unique | Unique | BlogPosting in app | Dev-to-dev heavy | Same host problem | P1 |

## 2.3 Off-site autopsy

| Property | OBSERVED |
|---|---|
| GitHub bio | Software Engineer specializing in MERN and Next.js… |
| GitHub website | `https://mubaidjavaid-ten.vercel.app/` (**wrong vs intended canonical**) |
| GitHub location / company | Multan / Evolvo Technologies |
| Pinned | AiCapability, Commit4-Solutions, Evolvo, ForexTradingInvestmentPage-0 (0 stars) |
| LinkedIn prompt slug | Authwall — **UNVERIFIED** |
| LinkedIn code slug in JSON-LD | `m-ubaid-javaid-260735407`; Google snippet: “Software Engineer \| Scaling distributed backends…” **[OBSERVED in search]** |

## 2.4 Core Web Vitals risk

| Host | Note |
|---|---|
| `-ten` lab (user report Sep 15) | Mobile Performance ~76; LCP ~5.6s; LCP element CSS background portrait; GTM 168 KiB; CLS 0 |
| Code fixes in repo (not necessarily on Production) | Hero `<img>` + fetchPriority; deferred GA; smaller favicons — **NEEDS LIVE TEST after deploy** |
| Primary old site | Lab CWV **NEEDS LIVE TEST** — separate codebase |

---

# 03 — GOOGLE SEARCH RESEARCH

## 3.1 Principles that apply here `[GOOGLE-DOCUMENTED]`

| Topic | Implication for this portfolio |
|---|---|
| Search Essentials / helpful content | Prove first-hand delivery (Evolvo role, case studies); no fabricated metrics |
| Title links | Google may rewrite titles — write accurate, unique titles anyway |
| Meta descriptions | Influence snippets sometimes; not a ranking factor guarantee |
| Meta keywords | **Unused for Google ranking** |
| Canonicalization | Conflicting signals + soft 404 targets = disaster (current state) |
| Sitemaps | Must list URLs that return 200 and are canonical |
| Structured data | Helps understanding / eligibility; **does not guarantee** rich results or rankings |
| ProfilePage | For pages whose **primary focus** is one person — About Me / employee profile — **not** a multi-section homepage |
| CWV / page experience | Part of systems; fix LCP after host unify |
| JS SEO | Prefer crawlable HTML for H1/title (App Router SSG — good) |
| Spam / doorway | No city farm pages (`/usa-developer`) without unique useful content |
| Keyword stuffing | Against spam policies |

## 3.2 Myths rejected `[NOT SUPPORTED]`

1. “50–60 char title = ranking rule” → practical writing guideline only.
2. “140–155 char meta = ranking rule” → snippet writing guideline only.
3. “More schema = better rankings.”
4. “Person JSON-LD creates a Knowledge Panel.”
5. “1,200+ words required.”
6. “Custom domain boosts rankings” as a rule.
7. “Backlinks are 50% of SEO” (unsupported percentage in old SRS).
8. “Request indexing = ranking tactic.”
9. “E-E-A-T is a numeric ranking score.”
10. “Meta keywords help Google.”
11. “ProfessionalService schema makes hire pages rank.”
12. “53 Evolvo URLs should become 53 SEO pages.”

## 3.3 Meta keywords verdict

> **META KEYWORDS ARE NOT A GOOGLE RANKING STRATEGY.**

Replace with: search intent, titles, H1/H2, body, internal links, entity consistency, crawlability, useful content, technical quality, legitimate mentions. `[GOOGLE-DOCUMENTED]`

Both live hosts currently emit keywords meta / Next `keywords` — **remove from SEO backlog priority** (harmless noise for Google; maintenance waste).

---

# 04 — CURRENT SRS AUDIT (`PORTFOLIO_SRS.md`)

| Old SRS claim | Audit |
|---|---|
| Two Vercel URLs + title mismatch | **CONFIRMED and worse** — different sites + sitemap→404 |
| Canonical = primary | Code intends primary, but **new content not on primary** |
| Recommend Software Engineer cluster | **KEEP** — aligns LinkedIn/GitHub buyer language |
| ProfessionalService on `/services` | **DOWNGRADE** — semantic optional; not a Google rich-result strategy for personal hire pages |
| ProfilePage on About | **KEEP if `/about` is person-primary**; do **not** put ProfilePage on homepage |
| Title 50–60 / meta 140–155 as requirements | Soften to guidelines |
| 6–8 articles = topical authority | Insufficient alone; need buyer intent + internal links + proof |
| 1,200+ words | Not a requirement |
| Custom domain recommended for ranking | Reframe: trust/CTR/ownership; optional Phase 2+ |
| Backlinks “50%” | Delete percentage; keep “off-site entity matters” |
| GBP optional for Multan | **Caution:** Google lists many online-only businesses as **ineligible**; remote software without customer visits may not qualify — **NEEDS USER INPUT** on whether clients visit a Multan office |
| Evolvo not thin pages | **KEEP** — reinforce Option B/C |
| Request indexing in GSC | Keep as crawl aid; not ranking |
| LCP advice “CSS background so H1 is LCP” | **OUTDATED vs latest lab** — CSS bg became LCP with long discovery delay; prefer discoverable `<img>` + fetchpriority |

---

# 05 — CANONICAL / DOMAIN STRATEGY

## 5.1 Decision (RECOMMENDED default)

**Single public origin:** `https://mubaidjavaid.vercel.app/`

**Migration path:**

1. Deploy **this repo** as Production for the Vercel project that owns `mubaidjavaid.vercel.app`. **NEEDS USER INPUT** if primary is a separate project you cannot overwrite.
2. Set `site.url` to that origin (already is).
3. On `-ten`: 301 all routes → primary **or** `noindex,follow` + remove from GitHub.
4. Update GitHub website field → primary.
5. GSC: URL-prefix property on primary; submit sitemap; URL Inspection after 200s exist.
6. Custom domain (`mubaidjavaid.com` etc.): only if owned — then 301 vercel.app → custom; update `site.url`, GSC domain property preferred. **Not required for Phase 1.**

## 5.2 Why not make `-ten` canonical?

- Primary already has branded Google mentions **[OBSERVED]**.
- `-ten` has no `site:` hits **[OBSERVED]**.
- Changing brand URL away from the indexed host without redirects wastes equity **[INDUSTRY PRACTICE]**.

## 5.3 Custom domain evaluation

| Factor | Assessment |
|---|---|
| Ranking boost | **Not assumed** `[GOOGLE-DOCUMENTED]` |
| Trust / memorability / email | Positive for international clients `[INDUSTRY PRACTICE]` |
| Entity consistency | Helps if LinkedIn/GitHub/email match |
| Cost / DNS / redirects | Must be done carefully |

---

# 06 — ENTITY / PERSONAL BRAND STRATEGY

## 6.1 Locked public cluster

**Primary:** M Ubaid Javaid — Software Engineer · Full-Stack (MERN / Next.js) · Multan, Pakistan  
**Secondary:** Product-minded delivery for fintech, healthcare, SaaS, and operational platforms.  
**Employer framing:** “Built as part of my role at Evolvo-Technologies” / prior Fiesta — never imply client brand ownership.

## 6.2 Channel-specific (same entity, not copy-paste spam)

| Channel | Version |
|---|---|
| Site title default | `M Ubaid Javaid · Software Engineer (MERN / Next.js)` |
| H1 home | `M Ubaid Javaid` + visible subline with Software Engineer / Multan / stack |
| JSON-LD `jobTitle` | `Software Engineer` (optionally array / secondary description for product-minded) |
| LinkedIn headline | `Software Engineer | MERN & Next.js | Multan · Fintech, Healthcare, SaaS` |
| GitHub bio | `Software Engineer · MERN & Next.js · Multan, Pakistan` |
| GitHub website | Canonical portfolio only |
| Email signature | Name · Software Engineer · URL · email |
| Contra/Upwork/Wellfound | Same cluster + 1 domain proof link |

## 6.3 sameAs (accurate only)

Include only profiles you control:
- GitHub `MUbaidJavaid`
- One LinkedIn URL (**resolve slug** — NEEDS USER INPUT)
- Future custom domain
- Optional: Evolvo team page if it exists and names you **UNVERIFIED**

Do not invent Clutch/Upwork profiles.

---

# 07 — ICP + INTERNATIONAL CLIENT STRATEGY

## 7.1 ICPs (priority)

1. **Pakistan SME / D2C** — COD ecom, POS/Udhaar, society/ERP (HSMS, QuikPOS, Naaz proof).
2. **Fintech / payments / prop-trading marketing + dashboards** (Evolvo catalog + Apex).
3. **Healthcare ops / clinic platforms** (SurgiCore, Vitalis + Evolvo health line).
4. **SaaS founders (remote)** — MVP → multi-tenant (QuikPOS pattern).
5. **Agencies** needing overflow Next.js/MERN implementation (Evolvo-style partner).

## 7.2 Country realism (not doorway pages)

| Market | Realism | Approach |
|---|---|---|
| Pakistan | High for SME/ops | Local keywords + Urdu outreach optional later |
| UAE / Saudi / Qatar | Medium — prop/fintech adjacent via Evolvo proof | English site; LinkedIn; agency intros |
| USA / UK / Canada / Australia / EU | Medium-low organic for cold hire SERPs; higher via LinkedIn + proof | Remote trust page; timezone honesty; no `/usa-developer` pages |
| Europe | Case-by-case | Same as US/UK |

**Do not create** `/usa-developer`, `/uk-developer`, etc. unless unique demand + unique content is proven — doorway risk `[GOOGLE-DOCUMENTED]` spam policies.

## 7.3 International trust checklist (content — only if truthful)

Timezone (PKT), English async communication, GitHub workflow, staging URLs, NDA willingness, payment methods you actually use (**NEEDS USER INPUT**), weekly updates, Evolvo attribution, live links.

**RECOMMENDED page/section:** “How I work” on `/services` or `/about` — not a separate spammy country page.

---


# 08 — SERP + COMPETITOR RESEARCH

## 8.1 SERP autopsy (sampled queries)

Volumes: **UNKNOWN / NOT AVAILABLE**. Result types from search-tool sampling 15 Sep 2026.

| Keyword / theme | Intent | Dominant SERP types | Can personal portfolio compete? | Target URL | Priority |
|---|---|---|---|---|---|
| M Ubaid Javaid | Navigational | LinkedIn, GitHub, primary Vercel | **Yes — must own** | `/` | P0 |
| MUbaidJavaid | Navigational | GitHub, primary | Yes | `/` + GitHub | P0 |
| site:mubaidjavaid.vercel.app | Diagnostic | Homepage (with keyword) | n/a | Fix index | P0 |
| site:mubaidjavaid-ten.vercel.app | Diagnostic | Empty | n/a | Retire host | P0 |
| hire Next.js developer | Transactional | Personal hire pages (Sedenko, Kyada, Mouhid), Upwork | **Yes if hire page + proof** | `/services` | P0 |
| freelance Next.js developer | Commercial | Personal portfolios + marketplaces | Yes | `/services` | P0 |
| MERN stack developer Multan | Local+role | **LinkedIn profiles dominate** | Weak organic; brand LinkedIn + site entity | `/` `/about` | P1 |
| full stack developer Multan | Local | LinkedIn | Same | `/about` | P1 |
| software engineer Multan | Mixed | Jobs / LinkedIn / education likely | Poor for portfolio | Do not chase | — |
| software engineer | Informational/jobs | Wiki / boards / courses | **No** | Do not chase | — |
| freelance full stack developer Pakistan | Hire | LinkedIn, Freelancer, portfolios | Partial | `/services` | P1 |
| Next.js developer Pakistan | Role+geo | LinkedIn + freelancers | Partial | `/` `/services` | P1 |
| SaaS MVP developer | Commercial | Agencies, freelancers, blogs | Possible long-tail | `/services` | P1 |
| fintech website developer | Industry | Mixed LinkedIn/agency | With Apex + Evolvo proof | `/projects` + Apex case | P1 |
| healthcare web application developer | Industry | LinkedIn specialists | With SurgiCore/Vitalis | Case studies | P1 |
| housing society management system | Problem | Product/vendor pages | Case study long-tail | `/projects/hsms-…` | P2 |
| POS software Pakistan | Problem | Vendors | QuikPOS case | `/projects/quikpos-…` | P2 |
| COD ecommerce Pakistan | Problem | Guides + stores | Naaz case | `/projects/naaz-wears-…` | P2 |
| hire MERN stack developer | Hire | Marketplaces + LinkedIn | Services page | `/services` | P1 |
| React developer for startup | Hire | Marketplaces | Secondary | `/services` | P2 |
| custom CRM developer | Hire | Agencies | Only if proof exists | Skip unless proof | — |
| AI automation developer | Hire | Crowded AI freelancers | Weak vs proof | Low priority | — |

**Pattern:** Hire-intent SERPs reward **clear “for hire” personal sites with verifiable projects** OR marketplaces. Local Multan queries reward **LinkedIn**. Generic engineer queries reward **job boards**.

## 8.2 Competitor gap matrix

| Competitor | Type | Positioning strength | Gap / opportunity for M Ubaid |
|---|---|---|---|
| Vlad Sedenko (sedenko.net) | Intl Next.js hire page | Explicit “hire freelance Next.js”; remote EU/US; case studies; FAQ | Match clarity of hire page + remote trust; you have deeper fintech/health catalog |
| Nayan Kyada | Next.js + Sanity hire | Staging-from-day-one; Lighthouse claims; booking CTA | Add process clarity; avoid unverifiable score claims |
| Zakaria Mouhid | Senior React/Next | Figma→prod; deep case narrative | Strengthen case-study narrative structure |
| Webkhal | Full-stack SaaS | Pricing bands public | Optional later; not required |
| Upwork Next.js hub | Marketplace | Dominates “hire Next.js” | Compete with owned media + LinkedIn, not by becoming Upwork-only |
| Muhammad Basit (Multan LI) | Local full-stack | Strong Multan LinkedIn SEO | Your site must support LinkedIn clicks with matching entity |
| Mohammad Azeem (Multan LI) | MERN + Stripe/AWS | Marketplace reputation signals | Your differentiator = Evolvo production catalog volume |
| Hassan Raza (hassanraza.net) | PK remote, Upwork Top Rated | Clear systems/ecom POS story | Similar POS/ops angle — differentiate with HSMS + health + prop |
| Abdul Wahab (theabdulwahab.com) | Multan portfolio | Local academic/freelance | Outpace with production Evolvo breadth + case depth |
| Wajeeh Aslam (Toptal) | Healthcare + Next | Marketplace prestige | You won’t beat Toptal brand; win with live Evolvo URLs + honest role |

**Opportunity:** Few Multan engineers combine **(a)** large live multi-industry catalog, **(b)** deep case studies, **(c)** hire-intent English site. Entity fragmentation currently prevents that story from ranking.

---

# 09 — KEYWORD RESEARCH

Estimated demand = **UNKNOWN** unless noted. Business value scored 1–5 by ICP fit **[INFERENCE]**.

### A. Brand
| Keyword | Intent | Biz value | SERP note | URL | Priority |
|---|---|---|---|---|---|
| M Ubaid Javaid | Nav | 5 | Must win | `/` | P0 |
| Ubaid Javaid developer | Nav | 4 | Variant | `/` | P0 |
| M Ubaid Javaid Multan | Nav+local | 4 | Entity | `/about` | P0 |
| MUbaidJavaid | Nav | 4 | GitHub | GitHub+`/` | P0 |

### B–D. Role / tech / location
| Keyword | Intent | Biz | URL | Priority |
|---|---|---|---|---|
| Software Engineer Multan | Mixed | 2 | Avoid as primary | — |
| MERN stack developer Multan | Comm | 4 | `/` `/about` | P1 |
| Next.js developer Multan | Comm | 4 | `/` | P1 |
| Full stack developer Multan | Comm | 3 | `/` | P1 |
| Next.js developer Pakistan | Comm | 4 | `/services` | P1 |
| React developer Pakistan freelance | Comm | 3 | `/services` | P2 |
| MERN developer Pakistan | Comm | 4 | `/services` | P1 |

### E–F. Hire / service
| Keyword | Intent | Biz | Compete? | URL | Pri |
|---|---|---|---|---|---|
| hire Next.js developer | Trans | 5 | Yes w/ page | `/services` | P0 |
| hire MERN stack developer | Trans | 5 | Yes | `/services` | P0 |
| freelance full stack developer Pakistan | Trans | 4 | Partial | `/services` | P1 |
| SaaS MVP developer Pakistan | Comm | 5 | Long-tail | `/services` | P1 |
| freelance Next.js developer | Trans | 5 | Yes | `/services` | P0 |

### G–J. Industry / problem / project / tech+biz
| Keyword | Intent | Biz | URL | Pri |
|---|---|---|---|---|
| fintech website developer | Comm | 5 | Apex + `/projects` | P1 |
| healthcare web application developer | Comm | 5 | Vitalis/SurgiCore | P1 |
| housing society management system | Info/comm | 4 | HSMS case | P2 |
| POS software Pakistan | Comm | 4 | QuikPOS | P2 |
| Pakistani fashion ecommerce COD | Comm | 3 | Naaz | P2 |
| prop trading website developer | Comm | 4 | Evolvo markets hub | P2 |

### K–M. International / agency / buyer questions
| Keyword / theme | Note | URL |
|---|---|---|
| remote Next.js developer Pakistan | Useful supporting phrase on `/services` | `/services` |
| Next.js developer for startup | Supporting | `/services` |
| agency overflow Next.js developer | Outreach > SEO | LinkedIn |
| “How long to build SaaS MVP Next.js” | Content | Blog → `/services` |

**Do not chase:** software engineer, software engineer jobs, best software engineer, AI engineer, 10x developer.

---

# 10 — KEYWORD → URL MAP (no cannibalization)

| Intent | One primary URL | Must not also primary-target |
|---|---|---|
| Brand / who | `/` | `/about` supports entity, not duplicate title |
| Hire / what to buy | `/services` | Home may mention; not same title |
| Portfolio proof | `/projects` | |
| Domain deep proof | `/projects/[slug]` | Blog may support, not duplicate case title |
| Person / E-E-A-T | `/about` | |
| Informational authority | `/blog` + `/blog/[slug]` | |
| Convert | `/contact` | |

---

# 11 — INFORMATION ARCHITECTURE

```
https://mubaidjavaid.vercel.app/          ← sole indexable origin
├── /                     Who + stack + industries + proof + CTA
├── /projects             Evolvo catalog (categories) + 6 case studies
│   └── /projects/{slug}  Deep case (HSMS, Naaz, QuikPOS, Apex, SurgiCore, Vitalis)
├── /services             Hire offers + how I work + CTA
├── /about                Person entity + employers + sameAs
├── /blog                 Index of notes
│   └── /blog/{slug}      Article
└── /contact              Form + email + LinkedIn/GitHub
```

**Evolvo live URLs:** external links only — not `/projects/primate-props` thin pages (Option B+C).

**Future service children (only if proof + SERP justify later):**
- `/services/nextjs-development` P2
- `/services/mern-stack-development` P2
- `/services/saas-mvp` P2  
Defer until hub converts and GSC shows demand.

---

# 12 — HOMEPAGE SEO CONTRACT

| Field | Spec |
|---|---|
| Purpose | Entity + positioning + proof path + CTA in ≤90s |
| Primary intent | Brand + role/tech/location |
| Primary theme | Software Engineer Full-Stack MERN/Next.js Multan |
| Secondary | Fintech, healthcare, SaaS, Evolvo delivery |
| H1 | `M Ubaid Javaid` |
| Visible subhead (not only slogan) | `Software Engineer · Full-Stack MERN & Next.js · Multan, Pakistan` |
| Supporting line | Product-minded delivery for fintech, healthcare, and SaaS — shipped in production. |
| SEO title | `M Ubaid Javaid · Software Engineer (MERN / Next.js)` |
| Meta description | `Software Engineer in Multan building full-stack MERN and Next.js products for fintech, healthcare, and SaaS. View production work and discuss your project.` |
| Canonical | `https://mubaidjavaid.vercel.app/` |
| Robots | `index,follow` |
| Schema | `WebSite` + `Person` (jobTitle Software Engineer). **No ProfilePage on home.** |
| OG title/desc | Match SEO title/description |
| OG image | Dedicated 1200×630 ≤300KB WebP/JPEG (not 2.5MB PNG) |
| Sections | Hero → proof/stats → selected work → industries → stack → process → writing teaser → contact CTA |
| Primary CTA | `Discuss your project` → `/contact` |
| Secondary CTA | `View work` → `/projects` |
| Internal out | `/projects`, `/services`, `/about`, `/contact`, 1–2 case studies |
| Word depth | Enough to answer who/what/where/proof — **not** a keyword essay |

---

# 13 — SERVICES SEO CONTRACT

| Field | Spec |
|---|---|
| Purpose | Answer “what can I hire you for?” |
| Primary intent | Transactional hire |
| Primary theme | Hire Next.js / MERN / full-stack engineer |
| H1 | `Hire a Full-Stack Next.js & MERN Engineer` |
| SEO title | `Hire Next.js & MERN Developer · M Ubaid Javaid` |
| Meta | `Contract and freelance full-stack development: Next.js, MERN, SaaS MVPs, fintech and healthcare web apps. Clear process. Production proof. Discuss your project.` |
| Canonical | `…/services` |
| Robots | index,follow |
| Schema | Optional `Service` items as plain content; **skip ProfessionalService rich-result chasing**. BreadcrumbList OK. |
| Sections | Offers (Next.js apps, MERN platforms, SaaS MVP, integrations) → industries → how I work (timezone, process) → proof links → FAQ only if real questions → CTA |
| CTA | `Start a project` / `Discuss your project` |
| Internal | Case studies matching offers; `/projects`; `/contact`; 2 buyer articles when written |
| Child pages | Deferred (see §11) |

**One services page is sufficient for 90 days.**

---

# 14 — PROJECTS SEO CONTRACT

| Field | Spec |
|---|---|
| Purpose | Proof hub |
| Intent | Commercial investigation |
| H1 | `Selected Work & Production Delivery` |
| SEO title | `Projects · Fintech, Healthcare & SaaS · M Ubaid Javaid` |
| Meta | `Case studies and live products delivered with Next.js and MERN — including fintech, healthcare, POS, and housing-society systems. Built in production roles.` |
| Canonical | `…/projects` |
| Schema | CollectionPage or ItemList of CreativeWorks **[INDUSTRY PRACTICE]**; BreadcrumbList |
| Content | Category filters (Evolvo) + 6 case study cards with unique blurbs + “Delivered at Evolvo-Technologies” label |
| CTA | Case study + contact |

---

# 15 — CASE STUDY SEO CONTRACT

**Template (all 6):**

| Block | Required |
|---|---|
| Problem / context | Yes |
| Role & employer attribution | Yes — Evolvo / independent / Fiesta as truthful |
| Users / constraints | If known |
| Architecture & stack | Yes |
| Key features | Yes |
| Challenges & decisions | Yes |
| Outcome | Only **verifiable** (live URL, modules shipped). **No fake %.** |
| Live link | If public |
| Related services / cases | Yes |
| CTA | Discuss similar project |

**Metadata template:**
- Title: `{Short product} · {Domain} Case Study · M Ubaid Javaid`
- H1: `{Product} — {one-line domain}`
- Meta: problem + role + stack + CTA (no fake metrics)
- Schema: `CreativeWork` or `SoftwareApplication` only if accurate; author Person; BreadcrumbList
- Robots: index,follow

| Slug | Primary long-tail theme |
|---|---|
| hsms-housing-society-management | Housing society management system |
| naaz-wears-ecommerce | Pakistani fashion COD ecommerce |
| quikpos-saas-point-of-sale | Multi-tenant POS / Udhaar SaaS |
| apex-platinum-fintech-platform | Fintech marketing/platform Next.js |
| surgicore-pro-surgical-management | Surgical / healthcare ops platform |
| vitalis-health-healthcare-platform | Healthcare web application |

---

# 16 — ABOUT / PERSON ENTITY CONTRACT

| Field | Spec |
|---|---|
| Purpose | Person entity / E-E-A-T |
| H1 | `About M Ubaid Javaid` |
| SEO title | `About · Software Engineer in Multan · M Ubaid Javaid` |
| Meta | `Software Engineer in Multan, Pakistan. Full-stack MERN and Next.js. Experience at Evolvo-Technologies and Fiesta. Open to freelance, contract, and full-time.` |
| Schema | **`ProfilePage` + `mainEntity` Person** `[GOOGLE-DOCUMENTED]` eligibility path; detailed Person (name, jobTitle, image, sameAs, worksFor Evolvo as Organization if truthful, knowsAbout) |
| Must include | Photo, city, employers, stack, email, GitHub, LinkedIn, availability |
| CTA | Contact |

Homepage remains multi-purpose — ProfilePage stays on `/about` only.

---

# 17 — BLOG / TOPICAL AUTHORITY STRATEGY

## 17.1 Audit of current ~22 posts (OBSERVED themes)

Almost all are **developer-to-developer**: REST, MongoDB schemas, Express middleware, JWT, TanStack Query, Server Actions, Docker, logging, rate limits, Redis cache, TypeScript strict, observability, webhooks, Supertest, GitHub Actions, a11y, Mongoose aggregation, MERN deploy, Next.js SEO/UX, inventory workflow, MERN dashboards.

| Class | Count (approx) | Client-acquisition value |
|---|---|---|
| DIY engineering notes | ~20 | Indirect E-E-A-T |
| Buyer-leaning | ~2 (SEO Next.js business sites; inventory workflow lessons) | Medium |
| Hire-intent landing | 0 | Gap |

## 17.2 Strategy

- Keep existing posts; improve titles/internal links to `/services` + relevant case studies.
- **Do not** rewrite all to “SEO keyword articles.”
- Add **buyer pillars** (see §30) that connect proof → contact.
- Pillars: Next.js delivery, SaaS MVP, Fintech web, Healthcare web, Pakistan ops (POS/COD/HSMS), Performance/launch SEO.

## 17.3 Blog index contract

| Field | Spec |
|---|---|
| H1 | `Field Notes from Production` |
| SEO title | `Writing · Next.js, MERN & Product Engineering · M Ubaid Javaid` |
| Meta | `Practical notes on Next.js, MERN, APIs, and shipping production web products — written from real delivery work.` |
| Schema | Blog + ItemList; posts use BlogPosting |

---

# 18 — CONTACT / CONVERSION STRATEGY

| Field | Spec |
|---|---|
| H1 | `Let’s discuss your project` |
| SEO title | `Contact · M Ubaid Javaid` |
| Meta | `Contact M Ubaid Javaid for freelance, contract, or full-time full-stack work. Email, form, LinkedIn, and GitHub. Response within 24 hours when stated — only if true.` |
| Intent | Conversion |
| Schema | ContactPage + Person |
| CTAs | Form primary; mailto; LinkedIn; GitHub |
| WhatsApp | Only if you monitor it for international clients — **NEEDS USER INPUT** |
| Calendly | Optional later |
| Preferred CTA language | **Discuss your project** / **Start a project** over “Hire me” `[INDUSTRY PRACTICE]` — professional, lower ego, matches founder language |
| Friction | Keep form short; thank-you may be `noindex` if thin |

---


# 19 — TECHNICAL SEO

| Area | Current (OBSERVED) | Recommendation |
|---|---|---|
| Canonical | Preview → primary 404s | Unify new site on primary; self-canonical correct URLs |
| robots.txt | Preview lists Sitemap+Host primary; primary has no Sitemap | Primary must serve Allow + Sitemap to itself |
| sitemap.xml | Preview lists 34 primary URLs; primary sitemap 404 | Regenerate on primary after deploy; only 200 URLs |
| Rendering | Next App Router SSG/force-static on home | Keep crawlable titles/H1 |
| Trailing slash | Next default | Stay consistent with `site.url` |
| 404 | Present | Custom 404; no soft-404 for removed pages |
| Preview host | Indexed risk low today | 301 or noindex after cutover |
| Debug routes | Ensure `/api/*` not in sitemap | Keep out; noindex if HTML |
| HTTPS | Yes (Vercel) | Keep |
| Duplicate titles | Old vs new | One site only |
| JS SEO | Dynamic below-fold OK | Hero/H1 server-rendered |
| Image SEO | Large OG PNG | Compress; WebP heroes |
| Security headers | CSP etc. optional | Nice-to-have; not ranking |
| Analytics | GA deferred in code | Keep off LCP path |

---

# 20 — METADATA SYSTEM

Rules `[GOOGLE-DOCUMENTED]` + `[INDUSTRY PRACTICE]`:
- Unique title & description per indexable URL
- Accurate; allow Google rewrite
- Character counts = writing targets (~50–60 title, ~140–160 description), **not ranking rules**
- Remove reliance on `keywords` meta for SEO
- `robots` explicit on sensitive pages
- OG/Twitter aligned with title/description
- Blog/case: `publishedTime` / `modifiedTime` where real dates exist

Author: M Ubaid Javaid sitewide.

---

# 21 — STRUCTURED DATA SYSTEM

| Type | Where | Class | Notes |
|---|---|---|---|
| Person | Layout (careful) + About detailed | A semantic | jobTitle Software Engineer; sameAs accurate |
| WebSite | Home/layout | A | name, url, description |
| ProfilePage | `/about` only | B eligible path | Primary focus = person |
| BreadcrumbList | Nested pages | A / sometimes UI | Home › … |
| BlogPosting | `/blog/[slug]` | B if guidelines met | author Person `@id` |
| CreativeWork / SoftwareApplication | Case studies | A | Only if accurate |
| ContactPage | `/contact` | A | Optional |
| ProfessionalService / OfferCatalog | `/services` | C/D for this site | **Not recommended** as ranking tactic |
| FAQPage | Only real visible FAQs | B if visible | No hidden FAQ spam |

**Person ≠ Knowledge Panel guarantee** `[NOT SUPPORTED]`.

---

# 22 — INTERNAL LINKING SYSTEM

```
Home → Services, Projects, About, Contact, 2 cases
Projects → each case, Services, Contact
Case → Services (matching), related case, Contact, optional blog
Services → 3 cases, Projects, Contact, buyer blogs
About → Projects, Services, Contact
Blog post → Services, 1 case, Contact
Contact ← all primary CTAs
```

**Anchor principles:** descriptive, varied (“SurgiCore healthcare case study”, “Next.js & MERN services”); avoid repeating exact-match “hire Next.js developer” on every link `[GOOGLE-DOCUMENTED]` spam caution.

---

# 23 — IMAGE / OG / SOCIAL SEO

| Asset | Rules |
|---|---|
| Hero portrait | Meaningful or decorative? If decorative: empty alt; discoverable `<img>` + `fetchpriority=high`; width/height; WebP |
| Profile (About) | Descriptive alt: `M Ubaid Javaid, software engineer` |
| Project screenshots | Alt = product + UI context; not keyword stuffing |
| Evolvo cards | Short alt or empty if title adjacent |
| OG/Twitter | 1200×630, ≤300KB, unique default + optional per case/blog |
| Filenames | `mubaidjavaid-hero.webp`, `og-default.jpg` |
| Lazy load | Below-fold only; never LCP |
| Image sitemap | Not required initially |

**OBSERVED issue:** `/mubaidjavaid.png` ~2.5MB as icon/OG — replace.

---

# 24 — SEARCH CONSOLE + BING

## Google Search Console

1. Verify **URL-prefix** `https://mubaidjavaid.vercel.app/` (or Domain if custom).
2. Submit `https://mubaidjavaid.vercel.app/sitemap.xml` after it 200s with correct locs.
3. URL Inspection on `/`, `/about`, `/projects`, `/services`, `/contact` after cutover.
4. Monitor: Pages, Page indexing, Experience/CWV, Enhancements (if any), Manual actions, Security.
5. Performance: queries, pages, countries, devices, CTR, position.
6. **Request indexing** = crawl request aid, **not** a ranking technique `[GOOGLE-DOCUMENTED]` intent.

### First-week baseline sheet (fill after GSC access) — NEEDS USER INPUT to populate

| Metric | Value |
|---|---|
| Branded queries | |
| Homepage impressions/clicks/CTR/position | |
| Pages indexed | |
| Non-branded queries | |
| Top countries | |
| Queries positions 4–20 | |
| Pages impressions low CTR | |
| New queries | |

### Monthly dashboard
Branded vs non-branded clicks; top landing pages; index coverage delta; CWV; conversions from organic (analytics).

## Bing Webmaster

- Import GSC or verify site; submit sitemap; enable **IndexNow** if available on stack `[INDUSTRY PRACTICE]`.
- Do not duplicate busywork weekly — monthly check enough for personal site.

---

# 25 — PERFORMANCE / CORE WEB VITALS

Google thresholds (good): LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 `[GOOGLE-DOCUMENTED]`.

| Item | Status |
|---|---|
| Target | Mobile good CWV on canonical |
| `-ten` lab LCP 5.6s | Resource load delay on CSS bg LCP **[OBSERVED user report]** |
| Fix direction | Discoverable LCP image or text; defer GTM; reduce unused JS; modern browserslist (in repo) |
| After promote | Re-run PageSpeed on **primary**; CrUX may stay “No data” on low-traffic vercel.app |

**NEEDS LIVE TEST** on production after cutover — do not invent scores.

---

# 26 — OFF-SITE AUTHORITY / BACKLINKS

### Legitimate roadmap
1. Fix entity URLs (GitHub, LinkedIn Featured → canonical).
2. Employer/team mentions (Evolvo) if allowed.
3. Contra / Wellfound / curated directories — same bio, one URL.
4. Technical writing on own blog (canonical self); optional Hashnode/Dev.to with canonical back.
5. Open-source / meaningful GitHub READMEs.
6. Guest contributions only where editorial and relevant.

### Avoid
PBNs, link farms, paid spam, mass guest posts, fake reviews, automated directories.

### Backlinks today
Full graph **UNVERIFIED**. Expect GitHub + self-references primarily.

Disavow: **not** recommended without spam evidence `[INDUSTRY PRACTICE]`.

---

# 27 — LINKEDIN + GITHUB ENTITY ALIGNMENT

| Surface | Action |
|---|---|
| LinkedIn headline | Match Software Engineer cluster |
| LinkedIn About first lines | Who / stack / domains / CTA to canonical |
| Featured | Canonical home + 1 case study |
| GitHub website | Canonical (not `-ten`) |
| GitHub bio | Software Engineer · MERN & Next.js · Multan |
| Pin | This portfolio repo when public; else best production demos with descriptions |
| README | Short entity + link to case studies |

Resolve LinkedIn slug conflict (**NEEDS USER INPUT**).

---

# 28 — CLIENT-HUNTING SYSTEM

SEO + LinkedIn + GitHub + outreach share one positioning.

### ICP cards

**Founder / SaaS**
- Pain: need MVP without agency overhead
- Offer: Next.js/MERN MVP → production
- Proof: QuikPOS case + `/services`
- Queries: SaaS MVP developer, hire Next.js
- LI search: “SaaS founder” + hiring
- Email angle: staging-in-week honesty + case link
- CTA: Discuss your project

**CTO / tech lead**
- Pain: overflow feature delivery
- Offer: contract full-stack with clear boundaries
- Proof: Evolvo catalog volume + architecture notes blog
- CTA: Contact

**SME Pakistan**
- Pain: COD/POS/society ops software
- Proof: Naaz, QuikPOS, HSMS
- Outreach: Urdu/English mix OK; site stays English

**Fintech / prop**
- Proof: Apex + Evolvo markets/fintech list
- Angle: production marketing + dashboards at Evolvo

**Healthcare**
- Proof: SurgiCore, Vitalis + health catalog
- Angle: admin + public surfaces; no fake compliance claims (HIPAA etc. unless true)

**Agency partner**
- Offer: implementation engineer capacity
- Proof: 50+ live deliveries attributed to Evolvo role
- Pitch: white-label overflow

### Outreach packs (no spam, no “best developer”)

**5 LinkedIn positioning angles**
1. Production Evolvo multi-industry delivery
2. Pakistan ops (POS/COD/HSMS)
3. Fintech/prop web shipping
4. Healthcare ops platforms
5. Remote Next.js contract for startups

**5 LinkedIn post formats**
1. Case teardown (problem→decision→link)
2. “What I shipped this month” with Evolvo attribution
3. Mythbust (e.g. thin marketing sites vs product surfaces)
4. Process post (how I start a project)
5. Before/after performance note only if measured

**5 connection messages** (short)
1. Saw you’re building X — relevant case: {link}
2. Agency overflow capacity — portfolio: {link}
3. Fintech web — Apex/Evolvo examples: {link}
4. Healthcare ops — SurgiCore/Vitalis: {link}
5. PK retail ops — QuikPOS/Naaz: {link}

**5 follow-ups**
1. Any open build work this quarter?
2. Happy to review architecture 20 min
3. Sharing one relevant case only
4. Intro to `/services` how-I-work
5. Close the loop politely

**5 cold email openers**
1. Subject: Next.js production examples for {company domain}
2. Built similar {fintech/health} surfaces at Evolvo — two links
3. QuikPOS-style multi-tenant if useful
4. Housing/society modules reference
5. Looking for implementation help, not redesign theater

**5 agency pitches** — capacity, stack, attribution honesty, rate **NEEDS USER INPUT**, sample links  
**5 startup / SaaS / fintech / healthcare pitches** — map to proof URLs above; always Evolvo attribution where required

---

# 29 — CONTENT CALENDAR (90 days)

| Week | Type | Item | Links to |
|---|---|---|---|
| 1 | Tech | Host unify + entity copy | — |
| 2 | Commercial | Services hire rewrite | Cases, contact |
| 3 | Case | Strengthen HSMS + QuikPOS outcomes (honest) | Services |
| 4 | Buyer article | Ship a SaaS MVP on Next.js (timeline) | QuikPOS, services |
| 5 | Buyer | Fintech marketing site trust checklist | Apex, Evolvo |
| 6 | Case | Surgis + SurgiCore polish | Services |
| 7 | Buyer | Pakistan COD checkout mistakes | Naaz |
| 8 | Buyer | POS + Udhaar: why generic templates fail | QuikPOS |
| 9 | Authority | Technical SEO launch checklist (your real steps) | Services |
| 10 | Buyer | Healthcare admin + public site in one app | Vitalis |
| 11 | Outreach | LinkedIn series from cases | Home |
| 12 | Measure | GSC 28-day review + iterate titles | — |

Educational posts already shipped continue as supporting; add CTAs.

---

# 30 — 20 HIGH-VALUE CONTENT OPPORTUNITIES

Ranked by business value × proof fit (volumes UNKNOWN).

| # | Title | Audience | Why | URL idea | Proof |
|---|---|---|---|---|---|
| 1 | How I ship a SaaS MVP on Next.js (realistic timeline) | Founders | Hire intent | `/blog/ship-saas-mvp-nextjs` | QuikPOS |
| 2 | What to look for when hiring a Next.js developer | Buyers | Commercial | `/blog/hiring-nextjs-developer-checklist` | Services |
| 3 | Fintech website trust without fake metrics | Fintech | Industry | `/blog/fintech-web-trust-signals` | Apex |
| 4 | Healthcare web apps: admin + public in one codebase | Health | Industry | `/blog/healthcare-admin-public-nextjs` | Vitalis/SurgiCore |
| 5 | COD ecommerce checkout patterns for Pakistan | PK D2C | Problem | `/blog/pakistan-cod-checkout` | Naaz |
| 6 | Multi-tenant POS lessons (Udhaar/Khata realities) | Retail | Problem | `/blog/multitenant-pos-pakistan` | QuikPOS |
| 7 | Housing society software modules that actually get used | Ops | Problem | `/blog/housing-society-modules` | HSMS |
| 8 | Working with a remote engineer in Pakistan (timezone, Git, staging) | Intl | Trust | `/blog/remote-pakistan-engineer` | About |
| 9 | Next.js App Router SEO setup I use before launch | Mixed | Authority+hire | existing post upgrade | Services |
| 10 | Webhook idempotency for payments (buyer: reliability) | Fintech | Existing deepen | existing | Apex |
| 11 | From agency brief to Vercel production | Agencies | Partner | new | Evolvo |
| 12 | When not to use Server Actions | Devs | Authority | existing | — |
| 13 | MERN dashboard information architecture | Ops SaaS | Authority | existing | QuikPOS |
| 14 | Prop-trading marketing sites: performance + compliance posture (no legal advice) | Markets | Industry | new | Evolvo markets |
| 15 | Case study: Apex Platinum (expanded public narrative) | Buyers | Proof | case page | Apex |
| 16 | Case study: QuikPOS (expanded) | Buyers | Proof | case | QuikPOS |
| 17 | Comparing MVP scopes: marketing site vs multi-tenant app | Founders | Commercial | new | Services |
| 18 | Accessibility on dashboards (business risk framing) | Buyers | Existing angle | existing | — |
| 19 | Observability before you scale a Node API | CTOs | Authority | existing | — |
| 20 | Portfolio of production Evolvo deliveries (hub essay) | All | Proof | `/projects` section or blog | Evolvo |

**Reject:** “What is React?”, “What is Next.js?” unless SERP shows rare gap — usually dominated by docs/giants.

### §30 implementation note (15 Sep 2026)
- Rows **1–8:** shipped in `data/posts/batch-commercial.ts` (deepened)
- Rows **9, 11, 14, 17, 20** (+ hire/LCP/SME extras): `batch-commercial-b.ts` (12)
- Local/hire/stack search batch: `batch-commercial-c.ts` (15)
- All posts pass `enrichPostForSearch` (services + contact + projects CTAs)
- **Total posts on site:** ~57 (20+ commercial buyer set plus engineering notes); original SEO/RBAC/dashboard posts retitled for search intent

---


# 31 — 90-DAY IMPLEMENTATION ROADMAP

| Phase | Tasks | Priority | Owner | Dependency | Expected outcome | Verify | Risk | Status (15 Sep 2026) |
|---|---|---|---|---|---|---|---|---|
| 0 Research+baseline | This document; GSC access; screenshot SERPs | P0 | M Ubaid | — | Shared truth | Doc exists | Skipping GSC | **Done** (doc); GSC property still user |
| 1 Canonical/entity | Promote repo to primary; fix GitHub; LinkedIn Featured; noindex/301 `-ten`; jobTitle cluster | P0 | M Ubaid + Vercel | Can overwrite primary? | One origin | `site:` + view-source canonical | Wrong project overwrite | **Code done** — Software Engineer cluster, `-ten` noindex middleware, `getSiteUrl` rejects `-ten`. User: GitHub website + LinkedIn Featured |
| 2 Technical SEO | Sitemap 200; robots; OG compress; LCP retest; debug noindex | P0 | Eng | Phase 1 | Clean crawl | GSC coverage | Lab≠field | **Done in code + live** — robots/sitemap on primary; thank-you noindex; OG present. PageSpeed retest user |
| 3 On-page | Titles/H1/meta per §33 table; home subhead; services hire copy | P0 | Eng | Phase 1 | Intent clarity | View-source | Keyword stuffing | **Done** — titles via `pageMetadata` + layout template (no double brand); hire copy on `/services` |
| 4 Case studies | Attribution; structure; internal links | P1 | Eng | Phase 3 | Proof depth | Human review | Fake metrics | **Done** — `deliveryAttribution`, `relatedSlugs`, case CTAs |
| 5 Commercial content | Articles 1–8 from §30 + search batch | P1 | Eng | Phase 3 | Buyer traffic | GSC queries | Thin posts | **Done** — 8 (§30) + 12 batch-B = **20** commercial posts in `data/posts/` |
| 6 Authority | Directories (honest); team page ask; writing | P2 | M Ubaid | Phase 1 | Mentions | Manual | Spam dirs | **Partial** — outreach pack docs; directories/Evolvo ask = user |
| 7 Client hunting | LI + email packs weekly | P0 ongoing | M Ubaid | Proof URLs live | Conversations | CRM/notes | Spammy outreach | **Pack ready** — `docs/CLIENT_OUTREACH_PACK.md`; weekly execution = user |
| 8 Measure | 28/60/90 GSC+analytics review | P0 | M Ubaid | GSC | Iterate titles/CTAs | Dashboard | Vanity metrics | **Checklist ready** — `docs/PHASE8_MEASUREMENT.md` + `trackCta` events; GSC/GA verify = user |

---

# 32 — COMPLETE NEW SRS

## SRS-PORTFOLIO-SEO-CLIENT-001

### 1. Executive Summary
Personal portfolio system for M Ubaid Javaid with two jobs: **discovery** (brand + hire-intent search) and **conversion** (founder/CTO/agency conversations). Current blocker is host/content fragmentation, not lack of meta tags.

### 2. Goals
- One canonical public origin with consistent entity
- Rank/appear for brand and realistic hire/local-stack queries
- Convert visitors in 30–90 seconds via proof + CTA
- Support outbound hunting with the same proof pack

### 3. Non-goals
- Ranking for generic `software engineer` / jobs
- Guaranteed Knowledge Panel or #1 rankings
- 53 thin Evolvo SEO pages
- Country doorway pages
- Fake metrics, ownership claims, compliance claims
- Meta-keyword optimization
- Paid link schemes

### 4. Users / ICP
Founders, CTOs, SMEs (PK), fintech/health operators, agencies, recruiters, Googlebot.

### 5. Current-state audit
See §02–§04 of this master doc. Primary = old site; preview = new site; sitemap points primary at 404s.

### 6. SEO architecture
Brand → Home; Hire → Services; Proof → Projects/Cases; Entity → About; Authority → Blog; Convert → Contact. One intent per URL.

### 7. Information architecture
See §11.

### 8. Keyword architecture
See §09–§10. Volumes UNKNOWN without tools.

### 9. Content architecture
Buyer pillars + existing engineering notes + 6 deep cases + Evolvo hub. Quality gate: who/problem/why you/proof/CTA.

### 10. Technical SEO
See §19. Phase 1 host unify mandatory.

### 11. Metadata system
See §20 and §33 table.

### 12. Structured data
See §21. ProfilePage on About only.

### 13. Entity system
Software Engineer cluster; sameAs; Evolvo attribution; channel variants §06/§27.

### 14. Internal linking
See §22.

### 15. Image SEO
See §23.

### 16. International SEO
English remote positioning; trust/process content; **no** geo doorway URLs.

### 17. Local SEO
Multan/Pakistan in entity copy. GBP only if eligible (in-person/service-area rules) — often **not** for online-only software; **NEEDS USER INPUT**. No city farm.

### 18. Off-site authority
See §26–§27.

### 19. Client hunting
See §28.

### 20. Conversion system
Discuss/Start a project CTAs; contact form; proof pack of ≤4 links.

### 21. Analytics
GA4 after interaction/idle; events: `contact_submit`, `cta_click`, outbound case/live; UTM for outreach (`utm_source=linkedin|email&utm_medium=outreach&utm_campaign=…`). No event spam.

### 22. Performance
CWV good targets; retest after deploy.

### 23. Security
No secrets client-side; rate-limit contact; don’t publish debug env routes.

### 24. Accessibility
Semantic headings, landmarks, contrast, named links, form labels — improves UX and crawl clarity.

### 25. Acceptance criteria
See §34 checklist.

### 26. Implementation backlog (ordered)
1. Promote this repo to `mubaidjavaid.vercel.app` Production  
2. 301/noindex `-ten`; GitHub website fix  
3. Align titles/H1/JSON-LD to Software Engineer cluster  
4. Fix sitemap/robots on primary  
5. Compress OG; LCP verify  
6. GSC + Bing verify + sitemap  
7. Services hire-intent rewrite  
8. Case study attribution pass  
9. Buyer articles 1–8  
10. Optional service child pages if GSC demand  
11. Optional custom domain  
12. Outreach operating rhythm  

### 27–29. 30 / 60 / 90 day plans
- **30:** Phases 0–3 complete; brand query shows new titles; contact works  
- **60:** Cases polished; 4 buyer articles live; LinkedIn aligned; first outreach batch  
- **90:** 8+ buyer pieces; GSC non-brand impressions; iterate losers; optional domain  

### 30. Measurement framework
GSC + GA4 + manual lead log (source, ICP, proof link used, outcome).

### 31. Risks
| Risk | Mitigation |
|---|---|
| Cannot overwrite primary | Alternate: make `-ten` canonical temporarily + 301 when possible — **worse**; prefer gaining Production access |
| Evolvo misread as ownership | Attribution copy |
| Thin content chase | Hub not 53 pages |
| Title rewrite by Google | Accurate visible H1 |
| GBP ineligibility | Skip if online-only |

### 32. Open questions (NEEDS USER INPUT)
1. Can Production for `mubaidjavaid.vercel.app` be overwritten with this repo?  
2. Custom domain in 90 days?  
3. Official LinkedIn slug?  
4. WhatsApp / Calendly / public rates?  
5. Payment methods for international clients?  
6. Physical Multan office visits (GBP eligibility)?  
7. Which Evolvo projects are NDA-restricted beyond listing?

---

# 33 — EXACT IMPLEMENTATION CHECKLIST + SEO COPY TABLE

## 33.1 Exact SEO copy table (ready to implement after host unify)

| PAGE | URL | INTENT | PRIMARY TOPIC | SECONDARY | SEO TITLE | META DESCRIPTION | H1 | CANONICAL | ROBOTS | SCHEMA | OG TITLE | OG DESC | OG IMAGE | PRIMARY CTA | INTERNAL LINKS | CONTENT REQUIREMENTS | PRIORITY |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Home | `/` | Brand+role | Software Engineer MERN/Next Multan | Fintech health SaaS | M Ubaid Javaid · Software Engineer (MERN / Next.js) | Software Engineer in Multan building full-stack MERN and Next.js products for fintech, healthcare, and SaaS. View production work and discuss your project. | M Ubaid Javaid | `https://mubaidjavaid.vercel.app/` | index,follow | WebSite+Person | =title | =meta | og-default ≤300KB | Discuss your project | /projects /services /about /contact | Subhead with role+city; proof; industries; no keyword essay | P0 |
| Projects | `/projects` | Proof | Portfolio fintech health SaaS | Evolvo delivery | Projects · Fintech, Healthcare & SaaS · M Ubaid Javaid | Case studies and live products delivered with Next.js and MERN — fintech, healthcare, POS, and housing-society systems. | Selected Work & Production Delivery | `…/projects` | index,follow | CollectionPage/ItemList+Breadcrumb | =title | =meta | og-default or projects | View case study | cases, /services, /contact | Evolvo categories + 6 cases; employer label | P0 |
| HSMS | `/projects/hsms-housing-society-management` | Problem | Housing society management | PK ops | HSMS · Housing Society Management · M Ubaid Javaid | Housing society management system case study — roles, modules, and stack. Delivered as production engineering work. | HSMS — Housing Society Management System | self | index,follow | CreativeWork+Breadcrumb | =title | =meta | case OG | Discuss similar project | /services /projects related | Full case template | P1 |
| Naaz | `/projects/naaz-wears-ecommerce` | Problem | COD fashion ecommerce PK | Next.js store | Naaz Wears · Fashion Ecommerce Case Study · M Ubaid Javaid | Pakistani fashion ecommerce case study with COD-oriented flows. Stack, constraints, and delivery notes. | Naaz Wears — Premium Pakistani Fashion | self | index,follow | CreativeWork+Breadcrumb | =title | =meta | case OG | Discuss similar project | /services /projects | Case template | P1 |
| QuikPOS | `/projects/quikpos-saas-point-of-sale` | Problem | Multi-tenant POS SaaS | Udhaar | QuikPOS · Multi-Tenant POS SaaS · M Ubaid Javaid | Multi-tenant point-of-sale SaaS case study — architecture, tenancy, and operational workflows. | QuikPOS — Multi-Tenant Point-of-Sale SaaS | self | index,follow | CreativeWork+Breadcrumb | =title | =meta | case OG | Discuss similar project | /services | Case template | P0 |
| Apex | `/projects/apex-platinum-fintech-platform` | Industry | Fintech platform | Next.js | Apex Platinum · Fintech Case Study · M Ubaid Javaid | Fintech platform case study covering product surfaces and engineering decisions. No fabricated returns. | Apex Platinum — Fintech Platform | self | index,follow | CreativeWork+Breadcrumb | =title | =meta | case OG | Discuss similar project | /services /projects | Case template | P0 |
| SurgiCore | `/projects/surgicore-pro-surgical-management` | Industry | Surgical management | Healthcare | SurgiCore Pro · Healthcare Case Study · M Ubaid Javaid | Surgical management platform case study — operational UX and full-stack delivery notes. | SurgiCore Pro — Surgical Management Platform | self | index,follow | CreativeWork+Breadcrumb | =title | =meta | case OG | Discuss similar project | /services | Case template | P1 |
| Vitalis | `/projects/vitalis-health-healthcare-platform` | Industry | Healthcare web app | Next.js | Vitalis Health · Healthcare Web App · M Ubaid Javaid | Healthcare web application case study — public and operational surfaces built with modern web stack. | Vitalis Health — Healthcare Web Application | self | index,follow | CreativeWork+Breadcrumb | =title | =meta | case OG | Discuss similar project | /services | Case template | P0 |
| Services | `/services` | Hire | Hire Next.js/MERN | SaaS MVP remote | Hire Next.js & MERN Developer · M Ubaid Javaid | Contract and freelance full-stack development: Next.js, MERN, SaaS MVPs, fintech and healthcare web apps. Discuss your project. | Hire a Full-Stack Next.js & MERN Engineer | `…/services` | index,follow | Breadcrumb; skip ProfessionalService chase | =title | =meta | og-default | Start a project | 3 cases, /projects, /contact, blogs | Offers + how I work + proof | P0 |
| About | `/about` | Entity | Person Multan | Employers | About · Software Engineer in Multan · M Ubaid Javaid | Software Engineer in Multan, Pakistan. Full-stack MERN and Next.js. Evolvo-Technologies and Fiesta experience. | About M Ubaid Javaid | `…/about` | index,follow | **ProfilePage+Person** | =title | =meta | profile OG | Contact | /projects /services /contact | Photo, employers, stack, sameAs | P0 |
| Blog | `/blog` | Info hub | Engineering notes | Product eng | Writing · Next.js, MERN & Product Engineering · M Ubaid Javaid | Practical notes on Next.js, MERN, APIs, and shipping production web products. | Field Notes from Production | `…/blog` | index,follow | Blog+ItemList | =title | =meta | og-default | Read article | posts, /services | Index cards | P1 |
| Blog post | `/blog/[slug]` | Info | Post topic | Stack | `{Post title} · M Ubaid Javaid` | From post summary + CTA soft | Post title | self | index,follow | BlogPosting+Breadcrumb | =title | =meta | article OG optional | Discuss project | /services + 1 case | Author, dates, links | P1 |
| Contact | `/contact` | Convert | Contact | Hire Multan | Contact · M Ubaid Javaid | Contact for freelance, contract, or full-time full-stack work. Form, email, LinkedIn, GitHub. | Let’s discuss your project | `…/contact` | index,follow | ContactPage+Person | =title | =meta | og-default | Submit form | /services /projects | Short form; trust line | P0 |

### 33.2 Blog metadata template
`Title · M Ubaid Javaid` · meta from excerpt · BlogPosting with `author` Person · `datePublished`/`dateModified` real · canonical self · link to services.

### 33.3 Case metadata template
See table rows + §15.

### 33.4 OG / Twitter
`summary_large_image`; title/description match; image absolute HTTPS on canonical host.

### 33.5 robots / sitemap
Allow `/`; Sitemap absolute on canonical; exclude thank-you/debug if needed; preview host noindex.

---

# 34 — FINAL QUALITY GATE

## Acceptance checklist

- [x] One canonical public origin **decided** (primary after promote) — execute pending user Vercel access
- [x] Duplicate host strategy defined (301/noindex `-ten`)
- [x] Job title/entity cluster defined
- [x] Homepage intent clear
- [x] Every indexable page unique purpose
- [x] Commercial intents mapped to one URL
- [x] No keyword cannibalization map
- [x] No fake location pages recommended
- [x] No fake metrics policy
- [x] No fake client claims policy
- [x] Evolvo attribution required
- [x] Meta keyword myth resolved (**not a Google ranking strategy**)
- [x] Titles/descriptions/H1s specified unique
- [x] Schema based on Google support classes A/B/C/D
- [x] Person entity accurate strategy
- [x] sameAs accuracy rules
- [x] Sitemap/robots strategy
- [x] GSC + Bing plans
- [x] CWV plan
- [x] Image SEO plan
- [x] Internal linking map
- [x] Case-study strategy (hub not 53 pages)
- [x] Blog strategy (buyer gap acknowledged)
- [x] International strategy (no doorways)
- [x] Client-hunting system
- [x] Backlink strategy (ethical)
- [x] Analytics strategy
- [x] 90-day roadmap

## Self-challenge (passed)

| Question | Answer |
|---|---|
| Supported by evidence? | Host split OBSERVED; meta keywords GOOGLE-DOCUMENTED unused; ProfilePage invalid on homepage per Google |
| Would Google need it? | Canonical/sitemap fix first; schema secondary |
| Would a client care? | Proof, clarity, contact — yes; keyword density — no |
| Unique intent per page? | Yes in map |
| Doorway risk? | Explicitly rejected country farms & 53 thin pages |
| Buyer keywords? | Hire Next.js/MERN validated via SERP types (personal hire pages + marketplaces) |
| Provable claims? | Evolvo role + live links; no invented ROI |
| Template SEO? | Rejected word-count/schema-spam/custom-domain-as-rank |

## CLAIM → SOURCE → IMPLICATION samples

| CLAIM | SOURCE | EVIDENCE | IMPLICATION | ACTION |
|---|---|---|---|---|
| Google doesn’t use meta keywords | Search Central blog 2009 + Starter Guide | Documented | Don’t invest | Remove from strategy |
| ProfilePage needs person-primary page | Google ProfilePage docs | Invalid: store homepage | Use on `/about` only | Don’t mark home as ProfilePage |
| Online-only businesses often ineligible for GBP | Google Business eligibility help | Documented examples | Don’t fake office | Confirm eligibility first |
| Domain TLD/keywords barely affect ranking | SEO Starter Guide | Documented | Custom domain ≠ rank lever | Optional for trust |
| Preview sitemap points to primary 404s | Live fetch 2026-09-15 | OBSERVED | Index harm | Promote site + fix sitemap |

---

## APPENDIX A — Research + implementation stamp

- Research completed: **15 September 2026**
- Deliverable path: `docs/PORTFOLIO_SEO_CLIENT_MASTER.md`
- **Implementation pass (same day):** Phases 1–5 code complete; 6–8 docs + analytics hooks; brand palette unified to steel navy (no purple drift); title template duplication fixed; commercial blog batches A+B (20 buyer posts)
- Live verified: `https://mubaidjavaid.vercel.app/robots.txt` + `/sitemap.xml` on primary (commercial URLs included after deploy)
- **Still user-owned:** GSC/Bing verify + sitemap submit; GitHub website field; LinkedIn Featured; weekly outreach; PageSpeed retest log; optional custom domain

## APPENDIX B — Proof pack (outbound)

1. `https://mubaidjavaid.vercel.app/`  
2. `/projects`  
3. One matching case study  
4. `/contact`

## APPENDIX C — Relationship to old SRS

`docs/PORTFOLIO_SRS.md` remains historical baseline (**v1.1** adds implementation status pointer). **This master document supersedes it** for SEO + client-acquisition decisions where they conflict (especially: ProfessionalService emphasis, meta char “requirements”, backlink “50%”, GBP assumptions, LCP CSS-background guidance, and the incomplete diagnosis that hosts were mere mirrors).

## APPENDIX D — Code / content map (implemented)

| Area | Location |
|---|---|
| Canonical URL helper | `lib/site-url.ts` |
| Metadata / JSON-LD | `lib/seo.ts` |
| Robots / sitemap | `app/robots.ts`, `app/sitemap.ts` |
| Preview noindex | `middleware.ts` |
| CTA analytics | `lib/analytics.ts`, `components/analytics/TrackedCtaLink.tsx` |
| Commercial posts §30 | `data/posts/batch-commercial.ts` (8) |
| Commercial posts search batch | `data/posts/batch-commercial-b.ts` (12) |
| Case attribution | `data/projects.ts` → `deliveryAttribution`, `relatedSlugs` |
| How I work | `/services#how-i-work` |
| Outreach pack | `docs/CLIENT_OUTREACH_PACK.md` |
| Measurement | `docs/PHASE8_MEASUREMENT.md` |
| Brand color tokens | `app/globals.css` (`--primary` / `--highlight` steel navy) |

---

*End of PORTFOLIO SEO + CLIENT ACQUISITION MASTER / SRS-PORTFOLIO-SEO-CLIENT-001*
