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

The build output is in `dist/`. The project ships with `public/_redirects` for SPA fallback routing.

### Cloudflare Pages (current host)
- Connect the GitHub repository directly in the Cloudflare Pages dashboard.
- Build command: `npm run build`
- Build output directory: `dist`
- `public/_redirects` (`/* /index.html 200`) handles SPA fallback so client-side routes resolve correctly.
- The contact form is proxied through `functions/api/contact.ts`, a Cloudflare Pages Function, so the Web3Forms access key never ships to the browser. Set `WEB3FORMS_ACCESS_KEY` under **Settings → Environment variables** in the Pages dashboard (Production and Preview) — see `.env.example` for the full list of variables.

## Project Structure

```
functions/
  api/contact.ts  # Cloudflare Pages Function — proxies the contact form
                   # server-side so the Web3Forms key stays off the client
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
