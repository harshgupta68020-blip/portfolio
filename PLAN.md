# Portfolio Build Plan

**Based on the architecture and design spec in** [`Qwen_text_20260815_4zfnl08k9.txt`](file:///C:/Users/harsh/project/portfolio/Qwen_text_20260815_4zfnl08k9.txt)

---

### 1️⃣ Project Bootstrap
| Task | Details | Owner | Target |
|------|---------|-------|--------|
| **Create repo** | `git init portfolio && git checkout -b main` | You | Day 1 |
| **Init Next.js 15 (App Router)** | `npx -y create-next-app@latest ./ --typescript --eslint --app` | – | Day 1 |
| **Add Tailwind CSS** | Install `tailwindcss`, `postcss`, `autoprefixer`; configure `tailwind.config.ts` (purge `src/**/*.{js,ts,jsx,tsx}`) | – | Day 1 |
| **Add Shadcn/UI** | `npx shadcn@latest init` → select components needed (button, card, etc.) | – | Day 1 |
| **Install runtime libs** | `npm i lenis framer-motion lucide-react @radix-ui/react-*` | – | Day 1 |
| **Set up GitHub Actions** | Lint, type‑check, Prettier, Lighthouse CI (≥ 95) | – | Day 2 |
---

### 2️⃣ Core Foundations (Build Order #1)
| Sub‑task | Description | Deliverable |
|----------|-------------|-------------|
| **Tokens & Global Styles** | `src/lib/tokens.ts` (colors, spacing, typography). Add `globals.css` with base fonts (Geist via `next/font`), dark‑mode vars, and the “cinematic minimalism” palette (`#3B82F6` accent only). | Design‑system package |
| **Layout Shell** | `src/app/layout.tsx` – HTML skeleton, `<html lang="en">`, `<body>` with `className="font-geist"` and Lenis provider wrapper. | Page‑wide layout |
| **Lenis Smooth‑Scroll** | `src/hooks/useLenis.ts` (init Lenis, expose `scrollY` for scroll‑driven animations). | Smooth scroll |
| **Reduced‑Motion Guard** | `src/hooks/useReducedMotion.ts` – `matchMedia('(prefers-reduced-motion)')` → disables Lenis & motion. | Accessibility fallback |
---

### 3️⃣ Section‑by‑Section Implementation
| Section | Core Components | Key Visual/Interaction Details | Milestone |
|---------|----------------|--------------------------------|-----------|
| **Navbar** | `src/components/navbar/` (floating pill, backdrop blur, active‑state indicator) | Transparent → blur after 24 px scroll, accent line, ARIA `aria‑current`. Mobile: collapses to centered chip row. | End of Week 1 |
| **Hero** | `src/components/hero/` (eyebrow rotator, headline, sub‑heading, CTAs, scroll cue) | Full‑viewport scene, background radial gradients (lines 57‑60), fine‑grain SVG turbulence, “slow drift” animation (24 s). CTA hover: arrow +4 px. | End of Week 1 |
| **About** | `src/components/about/` (statement + split panel) | Left rail (30 %) with vertical nav buttons, right panel (70 %) content, panel transition 500 ms, mobile → horizontal chip row. | End of Week 2 |
| **Projects** | `src/components/projects/` (featured card, grid cards, SVG diagrams) | Featured card ≥ 600 px height, SVG diagram always visible (lines 119‑124). Hover: scale 1.02 + glow. Placeholder “Future Exploration”. | End of Week 3 |
| **Skills** | `src/components/skills/` (4‑col desktop cards, hover reveal) | Cards show category, level, project refs, detailed layer on focus/hover. No progress bars. | End of Week 3 |
| **Engineering Journey** | `src/components/journey/` (vertical timeline) | Scroll‑growing line (scaleY), nodes scale 0.8→1, accent glow on pass. | End of Week 4 |
| **Notes / Philosophy** | `src/components/notes/` (masonry grid) | 3‑col desktop, varied heights 200‑350 px, typography‑first cards, hover slight rotation & lift. | End of Week 4 |
| **Contact** | `src/components/contact/` (headline + pill links) | Simple CTA, minimal UI, focus rings. | End of Week 4 |
---

### 4️⃣ Motion & Interaction Pass (Build Order #9)
| Item | Action |
|------|--------|
| **Shared animation variants** | `src/animations/` – `fadeUp`, `stagger`, `reveal` (Framer Motion). |
| **Section entry sequencing** | Navbar → headline → sub‑heading → buttons (100 ms stagger, 0.8 s total). |
| **Scroll‑driven highlights** | `useActiveSection` hook for About nav, timeline, note cards. |
| **Reduced‑motion fallback** | Disable Lenis & all motion when `prefers-reduced-motion` is true. |
---

### 5️⃣ Accessibility Audit (Build Order #10)
- **Focus-visible** rings on every interactive element.
- **ARIA roles**: Navbar buttons (`role="button"` + `aria-current`), sections live regions for dynamic content.
- **Contrast**: Ensure text never below 80 % opacity; captions ≤ 14 px at 40 % only.
- **Keyboard navigation** for all panels and cards.
---

### 6️⃣ SEO & Meta (Build Order #11)
| Asset | Content |
|-------|---------|
| **Title** | `"Your Name — Backend & AI Engineer"` |
| **OG Image** | 1200 × 630, background `#09090B`, hero headline in Geist, white text (auto‑generated via `next/image` or a static asset). |
| **Meta tags** | `description`, `canonical`, `robots`, `viewport`. |
| **Semantic heading order** | `h1` in Hero, `h2` for each major section, `h3` for sub‑sections. |
| **Schema.org** | `Person` schema with `sameAs` links. |
---

### 7️⃣ Performance & Lighthouse (Build Order #12)
| Metric | Target |
|--------|--------|
| **Lighthouse score** | ≥ 95 on mobile (4G) & desktop (mid‑tier CPU). |
| **Image strategy** | No photos/videos; all graphics are CSS gradients / SVG. |
| **Font loading** | `next/font` with `swap`; only Geist (plus fallback). |
| **Code‑splitting** | Dynamic imports for heavy components (e.g., Projects SVG diagram). |
| **Caching** | `Cache-Control` headers via Vercel/Netlify. |
---

### 8️⃣ Final QA & Deployment
| Step | Tool | Description |
|------|------|-------------|
| **A11y testing** | `axe-core` (npm script) | Verify focus rings ARIA, reduced‑motion. |
| **SEO validation** | Lighthouse → “SEO” tab, `sitechecker.dev`. |
| **Performance regression** | `web-vitals` endpoint, CI Lighthouse. |
| **Deploy** | Vercel (or Netlify) – automatic GitHub integration. |
| **Post‑launch monitoring** | uptime‑monitor, performance dash. |
---

### 📌 Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| **Heavy animation causing jank** | Low FPS on low‑end devices | Use Framer Motion’s `layout`/`transition` optimizations; fallback to static when `prefers-reduced-motion`. |
| **SVG diagram size** | Large payload | Keep SVGs simple, compress with SVGO, lazy‑load only when in viewport. |
| **Accessibility oversights** | Non‑compliant launch | Run automated a11y tests each PR; manual keyboard walkthrough. |
| **Theme‑color clashes** | Brand consistency broken | Centralize colors in `tokens.ts`; only one accent color (`#3B82F6`). |
---

### ✅ Next Action
1. **Confirm** the timeline and any additional stakeholder constraints (e.g., deadline, hosting provider).
2. **Provide** any preferred naming conventions for data files (`about.ts`, `projects.ts`, etc.) if different from the spec.

*Once you give the go‑ahead, we can start with the repo setup and directory scaffolding.*
