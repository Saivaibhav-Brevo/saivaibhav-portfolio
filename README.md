# Saivaibhav K S — Portfolio

A premium dark Bento Grid portfolio for **Saivaibhav K S**, Frontend Engineer at Brevo.

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Framer Motion**.

[Live site →](https://saivaibhav.dev)  ·  [Repo →](https://github.com/Saivaibhav-Brevo/saivaibhav-portfolio)

---

## Highlights

- **11 bento cards** in a 12-col responsive grid — Hero, About, Profile, Stack, GitHub Activity, Featured Projects, Experience Timeline, Currently Exploring, Writing, Highlights, Contact.
- **Custom cursor** with dual-layer dot + expanding ring + `data-cursor` text labels.
- **Spotlight & 3D tilt** on every card (Framer Motion springs).
- **Magnetic CTAs**, **animated counters**, **typing role rotator**, **per-letter name reveal**.
- **Aurora + grid + particles + noise** layered background.
- **Scroll-driven progress bar** + **scroll-driven timeline line** for the experience card.
- **⌘K / Ctrl+K command palette** with fuzzy search, grouped sections, arrow-key navigation.
- **SEO**: OpenGraph + Twitter cards + JSON-LD Person + sitemap + robots.
- **Single source of truth** in `data/portfolio.ts` — easy to edit text, links, projects.

## Architecture

```
app/
  layout.tsx          → metadata, JSON-LD, mounts background / cursor / palette
  page.tsx            → composes the 12-col bento grid
  sitemap.ts          → static sitemap
  robots.ts           → robots.txt
  globals.css         → Tailwind v4 theme + utilities + keyframes
components/
  bento-card.tsx      → spotlight + tilt + glass border + noise (reused everywhere)
  magnetic.tsx        → magnetic wrapper for buttons / links
  custom-cursor.tsx   → fixed dot + ring driven by springs
  scroll-progress.tsx → top accent progress bar
  background-fx.tsx   → aurora + grid + particles + vignette
  command-palette.tsx → ⌘K palette
  site-header.tsx     → sticky pill nav
  brand-icons.tsx     → Github + Linkedin SVGs (lucide v1 dropped brands)
  typing-text.tsx     → type → hold → delete state machine
  animated-counter.tsx → useInView + rAF easeOutCubic
  section-label.tsx   → tiny uppercase chip
  cards/              → 11 composed bento cards
data/
  portfolio.ts        → name, role, skills, projects, experience, stats, articles
lib/
  cn.ts               → clsx + tailwind-merge
```

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve the build
```

## Editing your content

Everything text-shaped lives in `data/portfolio.ts`. Update there, and every card re-renders accordingly. No code changes needed for text, links, projects, or stats.

## Credits

- Design inspiration: Linear, Vercel, Raycast, Stripe, Framer, Apple, Notion.
- Font: [Geist](https://vercel.com/font) by Vercel.
- Icons: [Lucide](https://lucide.dev) + custom brand SVGs.
