# Saif Ullah Nazari — personal site

Static personal website. No build step.

## Run locally

```bash
npx serve .
```

Then open http://localhost:3000. Opening `index.html` directly in a browser also works.

## Deploy to Vercel

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production
```

Or push to GitHub and import the repo at vercel.com/new (framework preset: "Other").

## Files

| File | What it is |
| --- | --- |
| `index.html` | All page content |
| `styles.css` | Design tokens (top of file), layout, light and dark themes |
| `main.js` | Today's date on the daily card, copy-email button |
| `favicon.svg` | Tab icon |
| `CLAUDE.md` | Project notes for Claude Code |
