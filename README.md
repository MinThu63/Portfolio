# Kyaw Min Thu — Personal Portfolio

Personal portfolio built with Next.js, React, and Tailwind CSS. Features dark/light mode, responsive design, project case studies, academic records, certifications, and static export for free deployment.

## Live Site

Deployed on Vercel (or GitHub Pages).

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React, Tailwind CSS
- **Theming:** next-themes (dark/light mode)
- **Icons:** lucide-react
- **Deployment:** Static export (`output: "export"`)

## Features

- Responsive design (mobile-first)
- Dark/light mode with system preference detection
- Animated sections (fade-in on scroll)
- Scroll to top button
- Dropdown navigation with grouped categories
- Project cards with process reflections and "What I Learned"
- Team/School/FYP/In Progress badges on projects
- Academic transcript with grade and credit filters
- Certifications with clickable certificate images
- Awards section
- Competitions section (active challenges)
- Activities with volunteer filter and searchable representation table
- Skills section with featured view and expandable full list
- Work experience section
- Downloadable resume
- Contact links (Email, LinkedIn, GitHub)
- SEO: Open Graph meta tags, sitemap.xml, robots.txt
- PWA: manifest.json for installable web app

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          — Root layout with ThemeProvider
│   ├── page.tsx            — Homepage (all sections)
│   ├── globals.css         — Tailwind + dark mode + mobile styles
│   ├── academics/          — Full transcript page with filters
│   ├── activities/         — All activities + representation table
│   ├── certifications/     — All certifications & awards
│   └── projects/           — All projects with category filters
├── components/
│   ├── Navigation.tsx      — Sticky nav with dropdown menus
│   ├── HeroSection.tsx     — Name, headline, photo, CTA
│   ├── AboutSection.tsx    — Bio, currently learning, CTA
│   ├── CompetitionsSection.tsx
│   ├── ProjectsSection.tsx — Featured project cards
│   ├── AcademicsSection.tsx — GPA + distinction modules
│   ├── CertificationsSection.tsx — Cert cards with images
│   ├── AwardsSection.tsx
│   ├── ExperienceSection.tsx — Work experience
│   ├── SkillsSection.tsx   — Featured + expandable full list
│   ├── ActivitiesSection.tsx
│   ├── DocumentsSection.tsx — Resume download
│   ├── ContactSection.tsx  — Email, LinkedIn, GitHub
│   ├── ScrollToTop.tsx
│   ├── AnimateOnScroll.tsx
│   ├── ThemeProvider.tsx
│   └── Footer.tsx
└── lib/
    └── data.ts             — All content (single source of truth)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build
```

The static site is generated in the `out/` folder.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Deploy — zero config needed

### GitHub Pages
1. Run `npm run build`
2. Push the `out/` folder to a `gh-pages` branch
3. Enable Pages in repo settings

### Netlify
1. Run `npm run build`
2. Drag and drop the `out/` folder on [netlify.com](https://netlify.com)

## Customisation

All content is in `src/lib/data.ts`. Edit this single file to update:
- Personal info and bio
- Skills (technical + soft)
- Activities and representation records
- Certifications and awards
- Projects (with process, reflections, team roles)
- Academic records
- Work experience
- Competitions
- Navigation links

## Files to Add in `public/`

- `profile.jpg` — Your photo (used in Hero section)
- `resume.pdf` — Your CV (linked in Documents section)
- `certs/` — Certificate images (referenced in data.ts)
- `og-image.png` (1200×630) — Social share image
- `icon-192.png`, `icon-512.png` — PWA icons

## License

MIT
