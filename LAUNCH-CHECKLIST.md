# Suraha Enterprise — Launch Checklist (internal)

Status: **Soft publish / preview launch approved. NOT the official company launch yet.**

## ⚠️ Required before OFFICIAL launch (statutory)

- [ ] **Add the real company registration number and registered office address**
      to the footer fine-print and legal pages.
      UK trading-disclosure rules (Companies Act 2006 + Trading Disclosures
      Regulations 2015) require the registered name, number, place of
      registration, and registered office address on the company website.
      Until then, the site shows only: "Registered in England & Wales."
      **Do not invent or placeholder these details — use the real ones only.**

## Before soft publish (verify manually)

- [ ] Send a test email to enquiries@surahaenterprise.com and confirm it is received
- [ ] Confirm production domain is connected on Vercel and serves over HTTPS
- [ ] Open the deployed site on a real phone: Home, Capabilities (structure diagram), Contact
- [ ] Check navbar layout at ~1024px browser width

## Post-launch (within 2–4 weeks, non-blocking)

- [ ] sitemap.xml + canonical tag + og:image + per-route meta descriptions
- [ ] JSON-LD Organization schema
- [ ] Contact form with spam protection (currently mailto-only)
- [ ] Link to Companies House profile once company number is displayed

## Verified at soft publish (June 2026)

- [x] All internal links resolve to real routes; no `href="#"`; no dead buttons
- [x] enquiries@surahaenterprise.com used consistently (7 occurrences, 1 address)
- [x] No false claims (FCA, clients, awards, revenue, partnerships) anywhere
- [x] UK spelling consistent; tagline consistent across title/OG/hero/footer
- [x] Favicon/app icon set complete and versioned; manifest valid
- [x] 404 page, mobile menu, skip link, focus states, reduced-motion all working
- [x] Legal pages present (Privacy, Terms, Cookies, Accessibility, Disclaimer) — dated June 2026
- [x] TypeScript, ESLint, and production build all pass
