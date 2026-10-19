import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ALBUMS, PACKAGES, waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Wedding photography collections and fine-art albums by Picture Rituals — Jamnagar, Gujarat. Custom quotes for every celebration.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-x pb-8 pt-32 sm:pt-40">
        <Reveal>
          <SectionHeading
            kicker="Services"
            title="Collections crafted around your celebration"
            description="Every wedding is different. These collections are starting points — final quotes are tailored after we understand your dates, functions and film needs."
          />
        </Reveal>
      </section>

      <section className="container-x pb-16 pt-4 sm:pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 120}>
              <article
                className={`relative flex h-full flex-col p-6 transition-all duration-500 sm:p-8 ${
                  pkg.featured
                    ? "border border-gold-500/40 bg-gradient-to-b from-gold-500/[0.07] to-ink-850/60 shadow-[0_0_50px_rgba(201,162,77,0.08)]"
                    : "card-surface hover:border-white/15"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap border border-gold-500/50 bg-ink-950 px-4 py-1 text-[0.6rem] uppercase tracking-widest2 text-gold-400">
                    Most Booked
                  </span>
                )}
                <h3 className="font-display text-3xl font-light text-white">{pkg.name}</h3>
                <p className="mt-2 text-sm text-white/45">{pkg.tagline}</p>

                <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <p className="text-[0.65rem] uppercase tracking-widest2 text-gold-500">
                  Custom quote
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/35">
                  Pricing shared after a quick consultation call.
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/65">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Hello Picture Rituals! I'd like a custom quote for the ${pkg.name} collection.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full ${pkg.featured ? "btn-gold" : "btn-outline"}`}
                >
                  Enquire
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="card-surface mt-8 flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-2xl font-light text-white">
                Something more bespoke?
              </p>
              <p className="mt-2 text-sm text-white/45">
                Multi-day weddings, destination travel — all customisable.
              </p>
            </div>
            <a
              href={waLink("Hello Picture Rituals! I'd like a custom quote for our wedding.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold shrink-0"
            >
              Request Custom Quote
            </a>
          </div>
        </Reveal>
      </section>

      <div className="gold-line" />

      <section className="container-x py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            kicker="Fine-Art Albums"
            title="Heirlooms you can hold"
            description="After the gallery is delivered, your favourite frames become a handcrafted album — linen or leather, designed page by page."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {ALBUMS.map((album, i) => (
            <Reveal key={album.name} delay={i * 120}>
              <article
                className={`relative flex h-full flex-col p-6 transition-all duration-500 sm:p-8 ${
                  album.featured
                    ? "border border-gold-500/40 bg-gradient-to-b from-gold-500/[0.07] to-ink-850/60"
                    : "card-surface hover:border-white/15"
                }`}
              >
                {album.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap border border-gold-500/50 bg-ink-950 px-4 py-1 text-[0.6rem] uppercase tracking-widest2 text-gold-400">
                    Bestseller
                  </span>
                )}
                <h3 className="font-display text-2xl font-light text-white sm:text-3xl">
                  {album.name}
                </h3>
                <p className="mt-2 text-sm text-white/45">{album.tagline}</p>

                <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <p className="text-[0.65rem] uppercase tracking-widest2 text-gold-500">
                  Custom quote
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {album.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/65">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Hello Picture Rituals! I'd like a quote for the ${album.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full ${album.featured ? "btn-gold" : "btn-outline"}`}
                >
                  Enquire
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading kicker="How It Works" title="Simple, from first hello to final gallery" />
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Enquire", d: "Share your dates, functions and vision on WhatsApp." },
              { n: "02", t: "Consult", d: "A short call to understand your rituals, venues and priorities." },
              { n: "03", t: "Create", d: "We document your celebration with calm, unobtrusive presence." },
              { n: "04", t: "Relive", d: "A curated online gallery of edited images and your highlight film." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="border-t border-gold-500/30 pt-6">
                  <p className="font-display text-3xl font-light text-gold-500/70">{s.n}</p>
                  <p className="mt-4 text-base text-white">{s.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/45">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
