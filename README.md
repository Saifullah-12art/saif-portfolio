# Saifullah Nazari — personal site

Static, editorial personal website. No build step, no framework.

## Run locally

```bash
npm run dev      # = npx serve . -l 3000
```

Then open http://localhost:3000. Opening `index.html` directly in a browser also works.

## Deploy to Vercel

```bash
vercel          # preview deploy
vercel --prod   # production
```

Or import the GitHub repo at vercel.com/new (framework preset: "Other"). `cleanUrls` serves `/work`, `/about`, `/ideas`.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Home: hero, the eight Building & Growth chapters, closing question, contact |
| `work.html` | Selected work as case studies |
| `about.html` | The longer story, reading, daily standard, roadmap |
| `ideas.html` | Index of forthcoming essays |
| `config.js` | **Edit me:** email and social links (empty links are hidden) |
| `styles.css` | Design tokens (top of file), layout, light and dark themes |
| `main.js` | Nav state, mobile menu, reveal animations, hero parallax, copy email |
| `favicon.svg`, `og-image.png` | Tab icon and 1200×630 link preview |
| `fonts/` | Self-hosted woff2: Instrument Serif, IBM Plex Sans, IBM Plex Mono |

## Filling in what's missing

Search the HTML for `EDIT:` and `Image slot` comments.

- **Social links:** add LinkedIn, Substack, YouTube, Instagram URLs in `config.js`.
- **Photos:** every figure is an SVG plate. To use a photograph instead, put it in `images/` and replace the `<svg>` inside `.plate` with an `<img>` (keep `loading="lazy"` below the fold). The plate adds the shared grain and muted grading.
- **Portrait:** uncomment the photo slot in `about.html` and add `images/portrait.jpg`.
- **Work details:** roles, dates and organisation names for startup, teaching and community work.
- **Essays:** they will live on Substack; see the comment above the list in `ideas.html` for how to link one. Keep "In draft" until then.
- **Domain:** canonical links, `og:url` and absolute `og:image` point at `https://saifnazari.vercel.app`. If the domain changes, update them in all four pages.
