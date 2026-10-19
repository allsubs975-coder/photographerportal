# Picture Rituals — Luxury Wedding Photography Website

Premium, mobile-first wedding photography site for **Picture Rituals** (Jamnagar, India).
Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS**. Luxury black & champagne-gold art direction.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build:

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new → import the repo.
3. Vercel auto-detects Next.js — no config needed → **Deploy**.

Or via CLI:

```bash
npm i -g vercel
vercel
vercel --prod
```

## What's implemented (live, working)

| Feature | Status |
|---|---|
| Home: cinematic hero, Ken Burns image, philosophy, featured grid, testimonials, CTA | Working |
| Portfolio: 5-category filter (All / Weddings / Pre-Wedding / Receptions / Candid / Traditional) | Working |
| Portfolio: full-screen lightbox with prev/next, keyboard (←/→/Esc), counter, captions | Working |
| Services: Essential / Signature / Couture collections, "Most Booked" highlight | Working |
| About: story, stats, values | Working |
| Contact: client-side validated form that opens **WhatsApp (+91 81280 36019)** with the message pre-filled | Working |
| Floating WhatsApp button (all pages) with pulse ring | Working |
| Mobile full-screen nav menu, scroll-aware navbar, active link states | Working |
| Scroll-reveal animations (IntersectionObserver, respects `prefers-reduced-motion`) | Working |
| Next.js Image optimization (Unsplash WebP/auto-format), self-hosted fonts | Working |
| SEO metadata, Open Graph | Working |

## Honest placeholders / future work

These are **not** faked — no fake backend, no invented prices:

- **Pricing** — shown as "Custom quote" per your instruction (no hard-coded prices). Edit `src/data/site.ts` `PACKAGES` when prices are decided.
- **Contact form** — validates in the browser, then opens WhatsApp with a pre-filled message. No data is stored on the site. To add a real backend later, replace `handleSubmit` in `src/components/ContactForm.tsx` with a route handler / Formspree / Resend call.
- **Wedding film** — the "Watch Our Film" modal embeds a placeholder YouTube video. Replace `YOUTUBE_ID` at the top of `src/app/page.tsx` with your real film ID.
- **Portfolio images** — high-quality Unsplash placeholders (all URLs verified loading). Swap `GALLERY` in `src/data/gallery.ts` with your real WebP files in `/public`.
- **Instagram** — handle set to `@picturerituals`; update `INSTAGRAM_URL` in `src/data/site.ts` if different.
- **Testimonials** — sample quotes in `src/data/site.ts`; replace with real client words.

## Project structure

```
src/
  app/
    layout.tsx            # Root layout, fonts, nav/footer/WhatsApp float
    page.tsx              # Home
    portfolio/page.tsx    # Filterable gallery + lightbox
    services/page.tsx     # Collections + process
    about/page.tsx        # Story + values
    contact/page.tsx      # Form + contact cards
    fonts/                # Self-hosted variable fonts (woff2)
    globals.css           # Theme, components, animations
  components/
    Navbar.tsx  Footer.tsx  WhatsAppFloat.tsx
    Gallery.tsx  Lightbox.tsx  ContactForm.tsx
    Reveal.tsx  SectionHeading.tsx
  data/
    gallery.ts            # All gallery images + categories
    site.ts               # Packages, testimonials, contact constants
```

## Changing key values

| What | Where |
|---|---|
| WhatsApp number | `src/data/site.ts` → `WHATSAPP_NUMBER` / `waLink()` |
| Gallery images & categories | `src/data/gallery.ts` |
| Packages & features | `src/data/site.ts` → `PACKAGES` |
| Testimonials | `src/data/site.ts` → `TESTIMONIALS` |
| YouTube film ID | `src/app/page.tsx` → `YOUTUBE_ID` |
| Colors (gold / ink) | `tailwind.config.ts` → `colors.gold`, `colors.ink` |
