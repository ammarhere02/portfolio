# Portfolio — Ammar Khan

Personal portfolio site: backend engineering work, technical stack, and contact.

🌐 **Live**: [portfolio-delta-pied-12.vercel.app](https://portfolio-delta-pied-12.vercel.app)

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 with semantic CSS-variable tokens |
| Motion | Framer Motion |
| Icons | Lucide React |
| Type | Instrument Serif (display) · Inter Tight (body) · JetBrains Mono (code) |

Fonts are self-hosted through `next/font`, so there are no third-party font
requests and no layout shift on load.

## Design system

Colours are defined once as RGB triplets in `src/app/globals.css` and consumed
through Tailwind semantic tokens, so light and dark stay in sync automatically:

- `canvas`, `surface`, `surface-2` — backgrounds
- `line`, `line-strong` — hairline borders
- `fg`, `fg-muted`, `fg-subtle` — text
- `accent` — the single accent colour

Adding `dark:` variants for colour is generally unnecessary; the tokens flip on
their own when `.dark` is applied to `<html>`.

Shared component classes (`.shell`, `.display`, `.label`, `.panel`, `.btn-*`,
`.tag`) live in the `@layer components` block of the same file.

## Motion

All easing curves, durations, and viewport thresholds come from
`src/lib/motion.ts`. Scroll reveals use the `Reveal` / `RevealGroup` /
`RevealItem` primitives in `src/components/motion/`.

Every animated component checks `useReducedMotion()` and renders its final
state directly when the visitor prefers reduced motion; `globals.css` also
collapses all CSS transitions under `prefers-reduced-motion: reduce`.

## Structure

```
src/
├── app/
│   ├── page.tsx          # Home
│   ├── projects/[slug]/  # Statically generated case studies
│   └── ...               # Layout, metadata, sitemap, robots, OG image
├── components/
│   ├── Hero/             # Hero section, typewriter, interactive terminal
│   ├── About/            # Story, timeline, technical stack
│   ├── Experience/       # Work history and education
│   ├── Projects/         # Featured cards, project index, case-study media
│   ├── Layout/           # Navigation, section headers, footer, theme toggle
│   ├── motion/           # Reveal primitives, magnetic link
│   └── providers/        # Theme context and pre-hydration script
├── hooks/                # useTheme
├── lib/                  # Site config, experience data, JSON-LD, motion tokens
└── utils/                # Project data and case-study content
```

## Content

Everything a recruiter reads comes from three files:

| File | Holds |
|---|---|
| `src/lib/site.ts` | Name, role, location, links, résumé path |
| `src/lib/experience.ts` | Work history and education |
| `src/utils/projectData.ts` | Projects and their case-study content |

Adding a project to `projectData.ts` automatically creates its
`/projects/<id>` page, adds it to the sitemap, and lists it on the home page —
no route file needed.

### Résumé

`site.resumeUrl` is `null` by default, and the download button does not render
while it is. Drop the PDF into `public/` and set the path to switch it on.

### Media

Screenshots and demo clips live in `public/projects/<id>/`. Source recordings
stay out of the repo (`demo/` is gitignored); only optimised WebP and H.264
copies are committed. Images go through `next/image`; videos are muted,
looping, and `preload="metadata"` so they cost nothing until played.

## Theming

`ThemeProvider` holds the theme in React context, so every toggle on the page
shares one source of truth. A small script in `<head>` applies the stored or
system preference before first paint, which avoids a flash of the wrong theme.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

Requires Node 18+.

## Deployment

Deployed on Vercel with zero configuration. Update `site.url` in
`src/lib/site.ts` if the domain changes — metadata, the sitemap, `robots.txt`,
and JSON-LD all read from it.
