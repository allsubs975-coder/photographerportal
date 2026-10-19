"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { GALLERY } from "@/data/gallery";
import { HOME_IMAGE, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/data/site";
import TestimonialMarquee from "@/components/TestimonialMarquee";

const YOUTUBE_ID = "ScMzIvxBSi4";

const INSTA_POSTS = [
  { src: "/indian-1.webp", alt: "Bridal portrait — Picture Rituals" },
  { src: "/indian-3.webp", alt: "Traditional ceremony moment" },
  { src: "/homeimage.webp", alt: "Wedding couple portrait" },
  { src: "/indian-4.webp", alt: "Ritual detail frame" },
  { src: "/indian-5.webp", alt: "Candid celebration frame" },
  { src: "/indian-6.webp", alt: "Reception highlight" },
];

export default function HomePage() {
  const [filmOpen, setFilmOpen] = useState(false);
  const featured = GALLERY.slice(0, 6);

  return (
    <>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden sm:items-center">
        <div className="absolute inset-0">
          <Image
            src={HOME_IMAGE}
            alt="Indian wedding couple — Picture Rituals"
            fill
            priority
            sizes="100vw"
            className="animate-kenburns object-cover object-[center_22%] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/65 to-ink-950/35 sm:bg-gradient-to-r sm:from-ink-950 sm:via-ink-950/55 sm:to-transparent" />
        </div>

        <div className="container-x relative z-10 pb-20 pt-28 sm:py-28">
          <div className="max-w-xl">
            <Reveal>
              <p className="label-kicker">Wedding Photography</p>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-4 max-w-full break-words font-display font-light leading-[1.02] text-white [font-size:clamp(2.5rem,9vw,4rem)] sm:[font-size:clamp(3rem,5vw,4.75rem)]">
                Your Story,
                <span className="gold-text-animated block">Our Frame</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/65 sm:text-base">
                Honest moments. Beautifully remembered.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-3 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-gold-500/90">
                Jamnagar · Gujarat
              </p>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link href="/contact" className="btn-gold">
                  Enquire Now
                </Link>
                <button type="button" className="btn-outline" onClick={() => setFilmOpen(true)}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Our Film
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {filmOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Wedding film"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4 animate-fadeIn"
          onClick={() => setFilmOpen(false)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setFilmOpen(false)}
              aria-label="Close film"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-gold-500/60 hover:text-gold-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <div className="relative aspect-video w-full border border-white/10">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                title="Wedding film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      )}

      <section className="container-x py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/[0.06]">
              <Image
                src="/indian-2.webp"
                alt="Indian bride and groom in a warm embrace"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <SectionHeading
              align="left"
              kicker="Our Philosophy"
              title="Every ritual deserves to be remembered beautifully"
              description="From the first haldi splash to the last dance, we blend documentary honesty with editorial polish — so your gallery feels less like photos and more like memory."
            />
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
              {[
                { k: "Weddings", v: "Full-day storytelling" },
                { k: "Pre-Weddings", v: "Cinematic couple films" },
                { k: "Rituals", v: "Tradition, respected" },
              ].map((s) => (
                <div key={s.k} className="border-t border-white/10 pt-3">
                  <p className="text-[0.55rem] uppercase tracking-[0.2em] text-gold-500 sm:text-[0.6rem] sm:tracking-widest2">
                    {s.k}
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-white/60 sm:text-sm">{s.v}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-outline">
                Our Story
              </Link>
              <Link href="/portfolio" className="btn-gold">
                View Portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="gold-line" />

      <section className="container-x py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            kicker="Selected Work"
            title="Frames from real celebrations"
            description="A glimpse into recent weddings, receptions and couple sessions."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {featured.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <Link
                href="/portfolio"
                className="group relative block aspect-[3/4] overflow-hidden border border-white/[0.06]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-0 flex items-end p-3 sm:p-4">
                  <span className="text-[0.55rem] uppercase tracking-[0.2em] text-gold-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:text-[0.6rem]">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-2 border border-gold-500/0 transition-all duration-500 group-hover:border-gold-500/30 sm:inset-3" />
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <Link href="/portfolio" className="btn-gold">
              Explore Full Portfolio
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/[0.06] bg-ink-900/40 py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              kicker="Kind Words"
              title="Loved by couples across Gujarat"
            />
          </Reveal>
        </div>
        <TestimonialMarquee />
      </section>

      <section className="container-x py-16 sm:py-20">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="label-kicker">Instagram</p>
            <h2 className="mt-3 font-display text-3xl font-light text-white sm:text-4xl">
              Daily frames on{" "}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-text-animated"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/40">
              Recent weddings, behind-the-scenes and couple sessions — updated every day.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
          {INSTA_POSTS.map((post, i) => (
            <Reveal key={post.src} delay={i * 60}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden border border-white/[0.06]"
                aria-label={`View ${post.alt} on Instagram`}
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink-950/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-white" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex justify-center">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Follow {INSTAGRAM_HANDLE}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
