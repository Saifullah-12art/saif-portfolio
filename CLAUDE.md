# saif-portfolio

Personal website for Saifullah Nazari (software engineering student at AUCA, Bishkek; building Ascenda). Editorial, art-directed; not a developer template.

## Stack
- Plain static site, no build step: `index.html` (home), `work.html`, `about.html`, `ideas.html`, `styles.css`, `main.js`, `config.js`, `favicon.svg`, `og-image.png`.
- Header nav and footer are duplicated in each page; change all four together.
- `config.js` holds email and social URLs; `main.js` renders them into `[data-social]` / `[data-email]`. The HTML keeps a GitHub + email fallback for no-JS.
- Fonts are self-hosted woff2 in `fonts/`: Instrument Serif 400 normal + italic (display), IBM Plex Sans 400–600 (body), IBM Plex Mono 400/500 (labels). Using a new weight or style means adding its file and `@font-face`.
- Deploy: Vercel static with `cleanUrls`. `.vercelignore` is an allowlist; add any new top-level file to it.

## Run locally
- `npm run dev` (serves on :3000), or open `index.html` directly.

## Design rules
- All colors are CSS custom properties in `:root` at the top of `styles.css`. Never hard-code a color in a component or SVG; add a token (SVG art uses the `.a-*` / `.r1–.r5` classes).
- Palette: warm paper `#F3F0E7`, ink `#101820`, muted warm gray `#6B665C`, hairlines `#D8D4C9`, one deep navy accent `#1C2B4A` used sparingly. No other hues.
- Dark mode: tokens are redefined under `@media (prefers-color-scheme: dark)` and `:root[data-theme="dark"]`. Keep both blocks in sync.
- Type: huge serif display, italic serif only for one emphasised word per heading, uppercase mono labels at 0.15em tracking.
- Signature look: 2px ink rules at major breaks, 1px hairlines between chapters, 12-column grid with intentional asymmetry, figures as "plates" with shared grain.
- Must work at 390px wide with no horizontal scroll. Respect `prefers-reduced-motion`. Motion stays restrained (fade/rise, mask reveals, mild hero parallax).

## Content rules
- Only real facts about Saifullah. Don't invent metrics, GPAs, employers, titles, dates or links; use `<!-- EDIT: -->` comments for unknowns.
- Never publish phone number or home address.
- Tone: early-career, curious, building. Never "expert", "visionary", "successful trader", etc. Trading must not overpower software/building.
- Missing and wanted: LinkedIn, Substack, YouTube, Instagram URLs (`config.js`), a portrait (`images/portrait.jpg`, slot in `about.html`), real photos for plates, role/date details in `work.html`.
