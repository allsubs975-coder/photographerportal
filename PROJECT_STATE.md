# Picture Rituals — Project State & Progress
**Last updated: 18 Oct 2026**

This file tracks everything done, decisions made, and what's pending. Read this first when resuming work.

---

## Business details (final, confirmed by owner)

| Item | Value |
|---|---|
| Brand name | Picture Rituals (website text: "PICTURE RITUALS") |
| Domain / repo name | picturerituals |
| Location (display) | Jamnagar · Gujarat |
| Service area | Jamnagar, Rajkot & Across Gujarat (NO "nationwide" / "India-wide" claims) |
| Owner | Jay Rathod — Founder & Lead Photographer |
| Owner photo | `/public/jayrathod.webp` |
| WhatsApp | `+91 81280 36019` (raw: `918128036019`) — `wa.me` links, floating green FAB |
| Brand Instagram | [@pictureritual](https://www.instagram.com/pictureritual) |
| Jay Instagram | [@jayrathod_artistry](https://www.instagram.com/jayrathod_artistry) |
| YouTube | https://youtube.com/@picturerituals (placeholder channel) |
| Designer credit | "Designed & Developed by Bhushan Ahuja" — Instagram [@bhushanahuja](https://www.instagram.com/bhushanahuja) |
| Tech stack | Next.js 15 App Router + TypeScript + Tailwind 3 + next/font/local |
| Deploy target | Vercel (static export style, no backend) |

All constants live in `src/data/site.ts`. Never hard-code these elsewhere.

---

## Design system (locked)

- **Theme**: luxury black (`ink-950 #060607`, `ink-900`, `ink-850`) + champagne gold (`gold-500 #c9a24d`, gold gradient shimmer).
- **Fonts**: self-hosted `CormorantGaramond-var.woff2` (display) + `Jost-var.woff2` (body) in `src/app/fonts/`. Do NOT use `next/font/google` — Google Fonts is blocked at build time on this machine.
- **Buttons**: `.btn-gold` (primary), `.btn-outline` (secondary), `.btn-whatsapp` (green `#25D366`).
- **Gold gradient text**: `.gold-text` / `.gold-text-animated` (shimmer loop).
- **Reveal-on-scroll**: `Reveal` component + `.reveal` / `.is-visible` classes, IntersectionObserver, respects `prefers-reduced-motion`.
- **Container**: `.container-x` (max-w-7xl, responsive padding).
- **Marquee**: `.marquee-viewport` + `.marquee-track` (CSS `@keyframes marquee`, 70s linear infinite, hover pause). DO NOT nest these inside a media query — that bug caused reviews to not slide.

---

## What's DONE & working

### Global
- [x] Mobile-first responsive, all 5 routes build static (`/`, `/portfolio`, `/services`, `/about`, `/contact`).
- [x] Navbar: logo (`/public/logo.webp`) + wordmark, scroll-aware, mobile fullscreen menu, active link states. Logo ONLY in navbar/footer/menu — never duplicated in hero.
- [x] Footer: logo, owner credit, Explore links, Contact column (WhatsApp, city, service area, both Instagrams, YouTube), copyright, designer credit row.
- [x] Floating WhatsApp button: green `#25D366`, white icon, pulse ring, aria-label "Chat on WhatsApp", all pages.
- [x] SEO metadata + Open Graph per page.
- [x] Self-hosted fonts, Next Image optimization.
- [x] Root source assets to delete before deploy: `HOMEIMAGE.png`, `JAYRATHOD.png`, `LOGO.jpg` (WebP copies live in `public/`).

### Home (`src/app/page.tsx`)
- [x] Hero: full-bleed Ken Burns Indian couple image (`/homeimage.webp`), eyebrow "WEDDING PHOTOGRAPHY", H1 "Your Story," (white) + "Our Frame" (gold shimmer), sub "Honest moments. Beautifully remembered.", location "JAMNAGAR · GUJARAT", CTAs ENQUIRE NOW (→ `/contact`) + WATCH OUR FILM (YouTube modal, `YOUTUBE_ID` placeholder).
- [x] NO stats blocks, NO "Luxury wedding photography" tagline, NO duplicate logo in hero.
- [x] Philosophy section: Indian image (`/indian-2.webp`) + heading + 3-col service strip + Our Story / View Portfolio buttons.
- [x] Selected Work: 6 featured gallery items, uniform `aspect-[3/4]`, **2-col on mobile** (side-by-side), 3-col desktop, hover category label + inner gold border.
- [x] Testimonials: `TestimonialMarquee` — 15 reviews × 2 loop, horizontal slide (reviews appear side-by-side, NOT stacked), hover pause.
- [x] Instagram section: heading links to [@pictureritual](https://www.instagram.com/pictureritual), 6-image square grid (3-col mobile, 6-col desktop), hover IG icon overlay, Follow button.
- [x] **REMOVED**: bottom "Begin Your Story / Dates book quickly" CTA section (user explicitly removed — bad background, invisible text). No replacement CTA section at bottom.

### Portfolio (`/portfolio` + `src/components/Gallery.tsx`)
- [x] Category filter: All / Weddings / Pre-Wedding / Receptions / Candid / Traditional.
- [x] Grid: **2-col mobile side-by-side**, 3-col desktop, uniform `aspect-[3/4]`.
- [x] Full-screen lightbox: prev/next, keyboard ←/→/Esc, counter, captions.
- [x] All images Indian (local `/indian-*.webp`, `/homeimage.webp` + verified Unsplash Indian IDs).

### Services (`/services`)
- [x] 3 packages (Essential / Signature "Most Booked" / Couture) — **no hard-coded prices**, each shows "Custom quote — pricing after a quick consultation call".
- [x] Enquire buttons → direct WhatsApp with pre-filled collection name.
- [x] "Request Custom Quote" WhatsApp CTA card.
- [x] Fine-Art Albums section (user approved): Linen Wedding Album, Leather Wedding Album ("Bestseller"), Parent Albums — all Custom quote + WhatsApp Enquire.
- [x] How It Works: 4-step process (Enquire via WhatsApp / Consult / Create / Relive).

### About (`/about`)
- [x] Story, Jay Rathod owner block with photo, values, CTAs.

### Contact (`/contact`) — SIMPLIFIED (user request)
- [x] Form REMOVED entirely. Sidebar detail cards REMOVED.
- [x] Now only: Jay photo + name/role, big green **Chat on WhatsApp** button (`btn-whatsapp`), Instagram link, note "details in footer below", View Collections link.
- [x] `ContactForm.tsx` deleted. All contact info lives in Footer only.
- [x] Navbar/Footer/About still link to `/contact` (page exists, just minimal).

---

## Content decisions (do not change without asking)

- **Pricing**: always "Custom quote". No fake ₹ prices, no invented numbers.
- **Testimonials**: 15 sample couples in `src/data/site.ts` — fictional placeholders, user aware; replace with real reviews later.
- **Images**: currently crops of the one real photo (`homeimage.webp`) + verified Indian Unsplash IDs. User said real photos will be added LATER — keep Indian imagery only, never Western stock.
- **Instagram sync**: section links to real profile with styled grid. True live API sync needs IG Business token — NOT implemented (user aware, can add later).
- **Films page**: user said NO separate films page.
- **Client login / private galleries**: user said NO (photographer doesn't want it).
- **Google reviews embed**: user said NO for now.
- **Blog**: user said NO.
- **Vercel Analytics**: user said later.
- **Bhushan's real portfolio URL**: user said later (currently IG link).
- **Real wedding photos**: user said later.

---

## Pending / next steps (when user asks)

1. **Real photos** — user will provide; replace `GALLERY` in `src/data/gallery.ts` + `INSTA_POSTS` in `page.tsx` + `/public/indian-*.webp` crops.
2. **Real YouTube film ID** — replace `YOUTUBE_ID` in `src/app/page.tsx`.
3. **Real testimonials** — replace `TESTIMONIALS` in `src/data/site.ts`.
4. **Instagram live feed** — needs IG Business account + Graph API token or third-party embed (Snapwidget etc.).
5. **Analytics** — Vercel Analytics + Google Search Console when ready.
6. **Bhushan portfolio URL** — update `DESIGNER_URL` in `site.ts` + Footer link.
7. **Delete root source files** before deploy: `HOMEIMAGE.png`, `JAYRATHOD.png`, `LOGO.jpg`.
8. **Custom domain** + Vercel deploy when ready.

---

## Key file map

| File | Purpose |
|---|---|
| `src/data/site.ts` | ALL constants: PACKAGES, ALBUMS, TESTIMONIALS, WhatsApp, Instagrams, owner/designer, `waLink()` |
| `src/data/gallery.ts` | GALLERY items + CATEGORIES filter list |
| `src/app/page.tsx` | Home: hero, philosophy, featured, marquee, Instagram section, film modal |
| `src/app/globals.css` | Theme, buttons, marquee, reveal, kenburns, fadeIn — keep marquee OUTSIDE media queries |
| `src/components/TestimonialMarquee.tsx` | 15×2 loop, uses `.marquee-track` |
| `src/components/Gallery.tsx` | Filter + 2/3-col grid + lightbox trigger |
| `src/components/Lightbox.tsx` | Fullscreen viewer |
| `src/components/Navbar.tsx` / `Footer.tsx` / `WhatsAppFloat.tsx` | Chrome |
| `src/components/Reveal.tsx` / `SectionHeading.tsx` | Shared UI |
| `public/` | `logo.webp`, `homeimage.webp`, `jayrathod.webp`, `indian-1..6.webp`, favicons |
| `src/app/fonts/` | Self-hosted woff2 — do not remove |

---

## Verified Indian imagery (safe to reuse)

Local: `/homeimage.webp` (941×1672 real photo), `/indian-1.webp` … `/indian-6.webp` (crops).

Verified-good Unsplash Indian IDs:
- `photo-1611106211090-8f3c79eb8552`
- `photo-1587271407850-8d438ca9fdf2`
- `photo-1597157639073-69284dc0fdaf`
- `photo-1583391733956-3750e0ff4e8b`
- `photo-1601482441062-b9f13131f33a`
- `photo-1610030469983-98e550d6193c`
- `photo-1594463750939-ebb28c3f7f75`

---

## Commands

```bash
npm run dev          # dev server :3000
npm run build        # production build (must pass lint/types)
npm start            # serve production build
```

Health check (PowerShell):
```powershell
Invoke-WebRequest http://localhost:3000 -UseBasicParsing
```

---

## Recent bug fixes (do not regress)

- Marquee CSS was accidentally nested inside `@media (prefers-reduced-motion: reduce)` → reviews stopped sliding. Fixed by rewriting `globals.css` with marquee rules at top level.
- Gallery used removed `item.tall` property → type error. Fixed to uniform `aspect-[3/4]`.
- Contact page form was removed; `ContactForm.tsx` deleted — don't re-add without user request.
- Hero had duplicate logo + stats + "Luxury" tagline — all removed per user.
- Location was "India" / nationwide — changed to Gujarat only per user.
