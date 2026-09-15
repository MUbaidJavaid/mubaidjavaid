# GitHub Profile README — Research, Autopsy & Master SRS

**Subject:** M Ubaid Javaid (`MUbaidJavaid`)  
**Date:** 2026-09-15  
**Scope:** Elite GitHub **profile** README (repo must be named `MUbaidJavaid/MUbaidJavaid`) + ecosystem consistency with portfolio `mubaidjavaid` and live site.

**Evidence standard:** OBSERVED = verified via GitHub API / public profile / docs. INFERRED = reasoned from patterns. RECOMMENDED = judgment.

---

## PHASE 1 — RESEARCH SUMMARY

### Official GitHub capability (sources)

| Finding | Source |
| --- | --- |
| Profile README shows only if public repo name **equals username**, root `README.md` has content | [Managing your profile README](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme) |
| GFM + sanitized HTML; no scripts/iframes; style/class/id stripped | GitHub markup sanitization / community HTML whitelist research |
| Dark/light images via `<picture>` + `prefers-color-scheme` | [GitHub Blog, Apr 2025](https://github.blog/developer-skills/github/how-to-make-your-images-in-markdown-on-github-adjust-for-dark-mode-and-light-mode/) |
| Relative images work when hosted in the **same** profile repo | GitHub docs + observed practice |
| Third-party stats widgets fail offline / some previews; create fragile dependency | OBSERVED (Cursor preview broken images) + reliability judgment |

### Elite-profile principles (RECOMMENDED, not official)

1. First screen = identity + proof + path to more.  
2. Restraint beats decoration (Linear / Vercel / Stripe information density, not their pixels).  
3. Outcomes > badge walls.  
4. Native GitHub signals > external widgets when possible.  
5. Curated projects > exhaustive catalogs (catalog belongs on portfolio).

---

## PHASE 2 — CURRENT README AUTOPSY

### A. Live profile README (OBSERVED on https://github.com/MUbaidJavaid)

Live page still shows older content: Philosophy quote, “Independent / Contract” experience (2024—Now), broken Architecture images, Current Focus table. That is **not** the latest portfolio-repo README in this workspace.

| Current Element | Problem | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- |
| Experience “Independent / Contract” | Conflicts with Evolvo + Fiesta (source of truth) | Trust damage | Align to verified employers | P0 |
| Experience “2022—2024” | Not in verified timeline; may over-claim | Credibility risk | Remove unless verified | P0 |
| Broken Architecture SVGs | Empty visual holes | Looks unfinished | Remove or fix assets in **profile** repo | P0 |
| Philosophy essay | Strong copy but long; template-adjacent | Dilutes first screen | Compress to 2–3 lines | P1 |
| Billing / Stripe / webhooks claims | Not evidenced as primary public proof | Overclaim risk | Soften or tie to verified case studies | P1 |
| Portfolio blog URL on profile | Points to `mubaidjavaid-ten.vercel.app` | Canonical / brand drift | Set to `https://mubaidjavaid.vercel.app` | P0 |
| Display name `mubaidjavaid` | Unprofessional vs “M Ubaid Javaid” | Weak identity | Set Name field to `M Ubaid Javaid` | P1 |

### B. Workspace portfolio README (this repo — OBSERVED)

| Current Element | Problem | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- |
| MU monogram + code-panel hero SVG | Decorative; “designer demo” risk; AI-ish motif | Looks crafted for show, not signal | Prefer markdown-first hero; optional thin brand mark | P0 |
| Image CTA buttons | Local SVG; preview brittle | Broken affordances in some clients | Prefer text markdown links | P0 |
| 53-project live tables | Catalog, not judgment | Scanners bounce; mobile table hell | Curate 4–6 featured + link to gallery | P0 |
| skillicons.dev row | Useful but common | Mild template smell | Keep **one** compact row OR text stack | P2 |
| Proof-panel SVG metrics | Static OK, but SVG-heavy | Noise | Inline markdown facts | P1 |
| Missing Evolvo attribution clarity | Client delivery may read as “owned products” | Ethics / trust | Explicit “Evolvo client delivery” label | P0 |

---

## PHASE 3 — GITHUB PROFILE AUTOPSY

**OBSERVED (API / public profile):**

| Field | Value | Issue |
| --- | --- | --- |
| login | `MUbaidJavaid` | OK |
| name | `mubaidjavaid` | Should be `M Ubaid Javaid` |
| company | Evolvo Technologies | OK |
| location | Multan | Prefer `Multan, Pakistan` |
| blog | `https://mubaidjavaid-ten.vercel.app/` | **Wrong canonical** |
| bio | MERN/Next.js; ends “frontend engineer” | Incomplete sentence |
| hireable | true | OK |
| public_repos | 43 | Many learning / duplicate / low-signal |
| followers | 9 | Neutral |
| Profile README host | Must be `MUbaidJavaid/MUbaidJavaid` | Portfolio repo `mubaidjavaid` does **not** auto-render as profile |

**Pinned (OBSERVED):** AiCapability, Commit4-Solutions, Evolvo, ForexTradingInvestmentPage-0 — naming inconsistent; low stars; not strongest engineering narrative.

**Stronger pin candidates (OBSERVED repos with clearer product signal):**  
`Housing-Society-Management-System_*`, `POS`, `SurgiCore`, `vitalis-health`, `ElderGuard_Health`, `MindWeave_Clinic`, `RehabFlow`, `Idea_hub-*`, `mubaidjavaid` (portfolio).

**Repo quality signals:** Many repos lack polished READMEs / topics; learning repos dilute first impression. Stars are not a quality metric here (max ~2).

---

## PHASE 4 — COMPETITOR / BENCHMARK ANALYSIS

| Pattern | OBSERVED in strong profiles | Verdict |
| --- | --- | --- |
| Short opening identity | Near-universal | Keep |
| Badge walls | Common junior pattern | Avoid |
| github-readme-stats | Very common | Optional; not required for elite |
| Snake / visitor counters | Trendy | Avoid (noise + tracking) |
| Curated featured projects | Senior / founder profiles | Keep |
| Long philosophy | Mixed | Compress |
| Custom SVG heroes | Hit-or-miss | Use only if content-bearing |

**INFERRED:** Elite profiles look authored: fewer sections, sharper claims, better repo hygiene.

---

## PHASE 5 — GAP ANALYSIS

| Area | Gap | Fix |
| --- | --- | --- |
| Identity | Profile name/blog/bio inconsistent with portfolio | Update GitHub settings |
| Positioning | Live README still “independent contractor” story | Rewrite experience |
| Proof | Either broken SVGs or uncurated 53-list | Curated featured + gallery link |
| Visual | Oscillates between sparse and SVG-heavy | Markdown-first premium |
| Conversion | CTAs exist but buried / image-fragile | Text CTA near top |
| Ecosystem | Profile README ≠ portfolio repo README | Dual-deploy / sync process |
| Discoverability | `-ten` URL hurts brand | Fix blog + README links |

---

## PHASE 6 — POSITIONING STRATEGY

**Primary line (RECOMMENDED):**

> Software Engineer — I ship production Next.js and MERN products for real businesses: fintech, healthcare, markets, and operations systems.

**Supporting:** TypeScript-first, maintainable architecture, staging before opinions, clear handover.

**Avoid:** passionate / coffee / building the future / Senior Architect inflation (repo description currently says “Senior MERN Architect” — verify before using).

**Tone:** confident, understated, product-minded, international.

---

## PHASE 7 — DESIGN DIRECTION OPTIONS

| | A Minimal Premium | B Product Engineer Portfolio | C Client Studio |
| --- | --- | --- | --- |
| Visual | Text-first | Light structure + curated cards | Marketing sections |
| Credibility | High if repos strong | Highest for your proof set | High for freelancers |
| Client appeal | Medium | High | Highest but can feel salesy |
| Recruiter | High | High | Medium |
| Maintainability | Best | Good | Heavier |
| Uniqueness | Quiet excellence | Distinct via real Evolvo proof | Risk of brochure |
| Complexity | Low | Medium | High |

---

## PHASE 8 — WINNING DESIGN DIRECTION

**Winner: Direction B (Product Engineer / Technical Portfolio) with Direction A restraint.**

**Why:** Your differentiator is **verifiable live delivery** (Evolvo client sites + documented case studies), not open-source fame or badge craft. Show judgment via curation; send exhaustive lists to the portfolio gallery.

---

## PHASE 9 — INFORMATION ARCHITECTURE

```
Identity (5s)
→ What I build (outcomes)
→ Featured proof (4–6 case studies)
→ Production delivery (Evolvo summary + gallery link)
→ Stack (compact)
→ Experience (2 roles)
→ Contact
```

No stats wall. No architecture SVG gallery. No 53-row README catalog.

---

## PHASE 10 — CONTENT STRATEGY

| Section | Answers |
| --- | --- |
| Hero | Who / what / where |
| Build | What business problems |
| Featured | Can you actually build it? |
| Evolvo note | Real production volume (attributed) |
| Stack | How |
| Experience | Trust / timeline |
| Contact | Conversion |

---

## PHASE 11 — MASTER SRS (compressed)

1. **Executive summary:** Markdown-first profile README; curated proof; sync profile settings; host in `MUbaidJavaid/MUbaidJavaid`.  
2. **Current state:** Live profile outdated + wrong website URL; portfolio README over-decorated / over-listed.  
3–5. Research / competitor / gaps: see Phases 1–5.  
6–8. Positioning / brand / visual: markdown hierarchy; steel-navy only if SVG retained; no neon.  
9–10. IA / content: Phase 9–10.  
11. Sections: as Phase 12.  
12–13. Projects / stack: curated case studies; Core/Frontend/Backend/Data/Deploy lists.  
14–15. Badges/icons: max one skillicons row OR none; no shields spam.  
16. Images: optional none; if any, repo-hosted + `<picture>` + alt.  
17. GitHub compatibility: GFM + safe HTML (`p`, `a`, `img`, `picture`, `table`, `details`).  
18–19. A11y / mobile: alt text; avoid wide multi-column HTML; short tables.  
20. Theme: text adapts natively; avoid single-theme SVG dependence.  
21. External deps: prefer zero; skillicons optional single dep.  
22. Repo requirements: improve featured repo READMEs before pinning.  
23. Ecosystem: GitHub blog → canonical portfolio; LinkedIn aligned; Evolvo attribution.  
24. Client acquisition: soft CTA, domains named once, no geo keyword stuffing.  
25. Discoverability: natural terms in bio + README; no SEO article.  
26. Maintenance: update featured list quarterly; avoid widget breakage.  
27–28. QA / implementation: Phases 15–16.

---

## PHASE 12 — SECTION-BY-SECTION SPECIFICATION

| Section | Purpose | Visual | Assets | Mobile |
| --- | --- | --- | --- | --- |
| Hero | Identity 5s | H1 + 2 lines + links | None required | Wrap links |
| What I build | Outcomes | Bullets | None | Fine |
| Featured | Proof | Mini case blocks | Portfolio URLs | Stacked |
| Delivery | Volume signal | Short para + link | Gallery | Fine |
| Stack | How | Compact lists ± 1 icon row | Optional skillicons | Wrap |
| Experience | Trust | 2 rows | None | Fine |
| Contact | Conversion | Centered text CTA | mailto / URLs | Fine |

---

## PHASE 13 — REQUIRED REPOSITORY / PROFILE IMPROVEMENTS

### Profile settings (do on github.com)

- [ ] Name → `M Ubaid Javaid`  
- [ ] Website → `https://mubaidjavaid.vercel.app`  
- [ ] Bio → complete sentence; no “Senior Architect” unless verified  
- [ ] Location → `Multan, Pakistan`  

### Profile README hosting

- [ ] Ensure content lives in **`MUbaidJavaid/MUbaidJavaid`** (username repo)  
- [ ] Portfolio repo README can mirror or stay product-focused  

### Pin recommendation (RECOMMENDED)

1. `mubaidjavaid` (portfolio)  
2. `Housing-Society-Management-System_Front-end` (+ note backend)  
3. `POS`  
4. `SurgiCore` or `vitalis-health`  
5. `Idea_hub-frontend`  
6. `ElderGuard_Health` or `RehabFlow`  

Unpin weak / oddly named marketing pages as primary pins.

### Repo hygiene before featuring on profile

- Clear description + topics  
- Working homepage URL  
- Short README: problem / stack / live link  
- No inflated “enterprise-grade” without substance  

---

## PHASE 14 — FINAL PRODUCTION README

Implemented in [`README.md`](../README.md) (this workspace).

**Critical:** GitHub only auto-shows the profile README from **`MUbaidJavaid/MUbaidJavaid`**. Copy `README.md` there after review, or the live profile will keep showing the old Philosophy/contract version.

---

## PHASE 15 — QA / QUALITY GATE

| Check | Result |
| --- | --- |
| Communicates who you are in 5–10s | Pass |
| Positioning clear (MERN/Next.js product engineer) | Pass |
| Premium / non-template | Pass (markdown-first, curated) |
| Avoids fake metrics/awards | Pass |
| Evolvo work attributed as employment delivery | Pass |
| Experience matches source of truth | Pass |
| Stack truthful | Pass |
| CTA present (not shouty) | Pass |
| No badge spam / snake / visitor counter | Pass |
| No 53-row catalog in profile surface | Pass (gallery link instead) |
| Mobile-friendly tables | Pass (narrow featured blocks) |
| External deps minimal | Pass (optional skillicons only) |
| Links use canonical portfolio (no `-ten`) | Pass in README |
| Profile settings blog still `-ten` | **Fail until you update GitHub settings** |
| Live profile still old README | **Fail until synced to username repo** |

Anti-AI pass: removed code-panel hero, image button strip, proof SVG theater, exhaustive domain dump, and cliché slogans.

---

## PHASE 16 — IMPLEMENTATION CHECKLIST

1. [x] Research + SRS written (`docs/GITHUB_PROFILE_README_SRS.md`)  
2. [x] Final README written (`README.md`)  
3. [ ] Copy README → `https://github.com/MUbaidJavaid/MUbaidJavaid`  
4. [ ] GitHub settings: Name, Website (canonical), Bio, Location  
5. [ ] Re-pin repos per Phase 13  
6. [ ] Preview on github.com (dark/light/mobile)  
7. [ ] Spot-check every case-study + contact link  
