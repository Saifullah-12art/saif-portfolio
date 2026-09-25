# saif-portfolio

Personal website for Saif Ullah Nazari (software engineering student at AUCA, Bishkek; building Ascenda).

## Stack
- Plain static site: `index.html`, `styles.css`, `main.js`, `favicon.svg`. No build step, no framework.
- Fonts are self-hosted woff2 in `fonts/` (no Google Fonts requests): Bricolage Grotesque 700–800 (display), IBM Plex Sans 400–600 (body), IBM Plex Mono 400 and 500 (labels). `@font-face` is at the top of `styles.css`; the Bricolage and Plex Sans latin files are preloaded in `index.html`. Using a new weight or style means adding its file and `@font-face`, otherwise the browser fakes it.
- Deploy target: Vercel (static). `vercel` from this folder, or import the GitHub repo in the Vercel dashboard.

## Run locally
- `npx serve .` (or open `index.html` directly in a browser).

## Design rules
- All colors are CSS custom properties in `:root` at the top of `styles.css`. Never hard-code a color in a component; add a token.
- Palette: cobalt `#2B44FF`, coral `#FF5533`, sun `#FFC21A`, mint `#0FB57E` on a cool bright ground `#F4F5FF`, ink `#0E1033`.
- Dark mode: tokens are redefined under `@media (prefers-color-scheme: dark)` and `:root[data-theme="dark"]`. Keep both blocks in sync.
- Bright fills (sun, coral, mint) always use `--on-bright` text; cobalt fills use `--on-cobalt`.
- Signature look: 2px ink rules between sections, hard offset shadows (`8px 8px 0`) on the hero card and the Ascenda feature.
- Must work at 400px wide with no horizontal scroll. Respect `prefers-reduced-motion`.

## Content rules
- Only real facts about Saif. Don't invent metrics, GPAs, employers or links.
- Never publish phone number or home address.
- Missing and wanted: GitHub, LinkedIn, Substack and YouTube URLs, and a photo.
