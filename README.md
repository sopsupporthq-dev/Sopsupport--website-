# SOP Support Website

Premium website for **SOP Support**, a web design, SEO, automation, and growth-systems agency serving home health, hospice, and home care agencies.

Built with React 19, TanStack Start (Router + SSR), Vite 7, Tailwind CSS v4, and shadcn/ui.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Scripts

```bash
npm run dev       # Start the dev server
npm run build     # Build for production (outputs to ./dist)
npm run preview   # Preview the production build locally
```

## Routes

- `/` — Home
- `/services` — Services
- `/why-us` — Why Us
- `/process` — Our Process
- `/results` — Growth Outcomes
- `/resources` — Resources
- `/faq` — FAQ
- `/contact` — Contact
- `/launch-program` — Launch Program
- `/meet-our-team` — Meet Our Team (not linked in main nav)

## Deployment

The build output is in `dist/`. The project ships with `public/_redirects` for SPA fallback (Netlify / Cloudflare Pages).

### Render (Static Site)
- Build command: `npm install && npm run build`
- Publish directory: `dist`

### Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- `_redirects` is included for SPA routing.

### Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`

## Project Structure

```
src/
  routes/         # File-based routes (TanStack Router)
  components/     # Shared UI components
  components/ui/  # shadcn/ui primitives
  hooks/          # Custom React hooks
  lib/            # Utilities
  styles.css      # Tailwind + design tokens
public/           # Static assets
```

## License

© SOP Support. All rights reserved.
