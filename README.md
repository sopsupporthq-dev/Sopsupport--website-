# SOP Support

**Websites & Growth Systems for Home Health, Hospice & Home Care Agencies**

A premium marketing website for SOP Support — a web design, SEO, referral systems, and growth-systems agency serving care agencies.

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** — fast dev server & build tool
- **Tailwind CSS v4** — utility-first CSS with glassmorphism design
- **Framer Motion** — scroll-triggered animations
- **Wouter** — lightweight client-side routing
- **Radix UI** — accessible component primitives
- **Lucide React** — icons

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, services, specialization, process, results, FAQ, CTA |
| `/launch-program` | SOP Support Launch Program offering page |
| `/meet-our-team` | Team profiles + client testimonials |

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: Node 20 LTS)
- npm 9+

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/sop-support.git
cd sop-support

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site will be available at **http://localhost:5173**

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server at http://localhost:5173 |
| `npm run build` | Type-check and build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run TypeScript type checking without building |

---

## Deployment

This is a static frontend app — deploy anywhere that serves static files.

### Vercel (recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add a `_redirects` file in `public/` with: `/* /index.html 200` (for SPA routing)

### Render

1. Push your code to GitHub
2. New Static Site → connect your repo
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## Project Structure

```
sop-support/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/                  # Radix-based UI primitives
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── SpecializationSection.tsx
│   │   ├── AgencyProblemsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ResultsSection.tsx
│   │   ├── ResourcesSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── FinalCTASection.tsx
│   ├── pages/
│   │   ├── LaunchProgram.tsx
│   │   ├── MeetOurTeam.tsx
│   │   └── not-found.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .env.example
├── .gitignore
└── README.md
```

---

## Customization

### Updating content

All content is co-located in each component file under `src/components/`. For example:
- **Services** → `src/components/ServicesSection.tsx`
- **Team** → `src/pages/MeetOurTeam.tsx`
- **FAQ** → `src/components/FAQSection.tsx`

### Updating contact links / CTA buttons

Search for `href="#contact"` or `href="mailto:"` across component files and replace with your actual URLs (Calendly, contact form, etc.).

### Colours & theme

All design tokens are in `src/index.css` under `:root`. The primary palette uses emerald/teal/cyan.

---

## License

Private — all rights reserved by SOP Support.
