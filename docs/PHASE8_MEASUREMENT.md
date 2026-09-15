# Phase 8 — Measurement checklist

Run after Production deploy with `NEXT_PUBLIC_SITE_URL=https://mubaidjavaid.vercel.app` (Config, not Secret).

## Google Search Console (first week)
- [ ] URL-prefix property verified for canonical host
- [ ] Sitemap submitted: `/sitemap.xml`
- [ ] Confirm sitemap locs are **not** `*-ten.vercel.app`
- [ ] URL Inspection: `/`, `/services`, `/projects`, `/about`, `/contact`
- [ ] Export Performance (28 days when available)

### Baseline sheet
| Metric | Value | Date |
|---|---|---|
| Branded impressions (`M Ubaid Javaid`) | | |
| Homepage clicks / CTR / position | | |
| Pages indexed | | |
| Non-brand queries | | |
| Top countries | | |
| Queries in positions 4–20 | | |

## Bing Webmaster
- [ ] Import GSC or verify site
- [ ] Submit sitemap

## Analytics (GA4)
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` set
- [ ] Confirm gtag loads after interaction / 6s (not on LCP path)
- [ ] Events wired in UI: `discuss_project`, `view_work`, `case_cta`, `contact_submit`
- [ ] Confirm events appear in GA4 DebugView after a real click/submit

## Monthly
- Branded vs non-branded clicks
- Landing pages with impressions but low CTR → rewrite title/meta
- Contact form submissions by source (UTM on outreach links)

### UTM for outreach
`?utm_source=linkedin&utm_medium=outreach&utm_campaign=proof_pack`

## Pass criteria
- robots Host/Sitemap = canonical
- thank-you `noindex`
- PageSpeed mobile retest logged (LCP target ≤ 2.5s — lab may vary)
