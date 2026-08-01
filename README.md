# Yashasvi Dagar — Portfolio

Personal portfolio, rebuilt from scratch as a single page. Terminal /
firmware aesthetic: warm dark surface, a hand-authored pixel-art
sprite instead of a stock hero image, a custom slicer-reticle cursor,
and a scroll indicator that reads like a 3D printer's job progress.

Live: [yashasvi-d-portfolio.vercel.app](https://yashasvi-d-portfolio.vercel.app/)

## Stack

- React 19 + Vite
- Tailwind CSS v4 (CSS-based theme config, no `tailwind.config.js`)
- Self-hosted fonts via `@fontsource` — Martian Mono (display), IBM
  Plex Mono (UI/data), Instrument Sans (body)
- Plain CSS/JS for the interactive pieces (cursor, sprite, scroll
  progress, contact terminal) — no animation library

## Structure

```
src/
├── components/
│   ├── Navbar/         fixed status-bar nav, IntersectionObserver active-link tracking
│   ├── Cursor/          custom crosshair cursor with live X/Y readout
│   ├── PrintProgress/   fixed scroll-progress bar ("LAYER n/240 — pct%")
│   ├── Hero/            headline + pixel-art sprite
│   ├── Sprite/          the sprite itself — idle/blink loop, cursor-snapped look direction
│   ├── Now/             one dated line on what's currently in progress
│   ├── EarlierWork/     Stupify / Infinity project cards
│   ├── Stack/           shipped/learning stack as a monospace manifest, plus competitive programming
│   ├── Education/       four lines, no component
│   ├── Contact/         click-to-copy email + a small hand-written terminal
│   └── Footer/
├── utils/scroll.js      reduced-motion-aware smooth-scroll helper
├── constants.js         earlier-work project data
└── index.css            palette/type tokens, global base styles
```

`public/sprite/` holds the sprite's frame PNGs (`idle-0`, `idle-1`,
`look-left`, `look-right`, `look-up`, `look-down`) — 64×64, scaled only
at integer multiples with `image-rendering: pixelated`.

## Running locally

```bash
npm install
npm run dev
```

```bash
npm run build      # production build to dist/
npm run preview     # serve that build locally
npm run lint
```

No environment variables or third-party services are required — the
contact section is a plain email address plus a hand-written command
parser, not a form.

## Accessibility / performance notes

- Custom cursor and sprite animation are disabled under
  `prefers-reduced-motion` and on touch/coarse-pointer devices
  (verified with emulated contexts, not just the media query logic).
- Palette contrast was computed against WCAG AA (4.5:1), not eyeballed.
- LCP measured under a simulated mid-range-Android + Slow-4G profile
  lands around 1.3s.

## Status

Hero through Contact are built. The iykyk Prints case study and the
doodlydoo section are still pending real content and aren't in this
branch yet.
