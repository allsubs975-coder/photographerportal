import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  CITY,
  JAY_INSTAGRAM_HANDLE,
  JAY_INSTAGRAM_URL,
  OWNER_IMAGE,
  OWNER_NAME,
  OWNER_ROLE,
  waLink,
} from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Picture Rituals — a wedding photography studio based in Jamnagar, Gujarat, led by Jay Rathod.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-x pb-8 pt-32 sm:pt-40">
        <Reveal>
          <SectionHeading
            kicker="About Us"
            title="Quiet luxury. Honest emotion. Timeless frames."
            description={`Picture Rituals is a wedding photography & film studio based in ${CITY}, travelling wherever your story takes us.`}
          />
        </Reveal>
      </section>

      <section className="container-x py-10 sm:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="space-y-5 text-sm leading-relaxed text-white/55">
              <p>
                <span className="text-white">{OWNER_NAME}</span>, founder and
                lead photographer of Picture Rituals, started the studio
                because the most beautiful parts of a wedding are rarely posed
                — a grandmother&apos;s silent blessing, the tremble before the
                pheras, the laugh that breaks the tension during vows.
              </p>
              <p>
                Our approach is documentary at heart, editorial in finish. We
                work with natural light wherever possible, keep our presence
                calm and unobtrusive, and deliver galleries that feel like
                cinema you can hold.
              </p>
              <p>
                Based in Jamnagar, we cover weddings across Gujarat — from
                Rajkot and surrounding cities to celebrations further afield by
                request — always with the same reverence for your rituals and
                your people.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-5">
              {[
                { k: "200+", v: "Weddings" },
                { k: "40+", v: "Cities" },
                { k: "100%", v: "Heart" },
              ].map((s) => (
                <div key={s.v} className="border-t border-white/10 pt-3">
                  <p className="font-display text-2xl font-light text-gold-400 sm:text-3xl">{s.k}</p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-widest2 text-white/45">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="order-1 lg:order-2">
            <div className="mx-auto max-w-sm">
              <div className="border border-gold-500/25 bg-ink-850 p-3 shadow-[0_0_50px_rgba(201,162,77,0.08)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink-900">
                  <Image
                    src={OWNER_IMAGE}
                    alt={`${OWNER_NAME} — ${OWNER_ROLE}`}
                    fill
                    sizes="(max-width: 640px) 80vw, 384px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent" />
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="font-display text-3xl font-light text-white">{OWNER_NAME}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-widest2 text-gold-400">
                  {OWNER_ROLE}
                </p>
                <a
                  href={JAY_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-gold-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-gold-500/70">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  {JAY_INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-ink-900/40 py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading kicker="Our Values" title="What guides every frame we take" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                t: "Respect for Ritual",
                d: "We learn the significance behind each ceremony so nothing sacred is ever treated as background.",
              },
              {
                t: "Emotion Over Pose",
                d: "Direction is gentle and minimal. The real moments always outshine the arranged ones.",
              },
              {
                t: "Cinematic Craft",
                d: "Consistent colour, considered composition and films that feel like memory, not montage.",
              },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 120}>
                <div className="card-surface h-full p-6 transition-colors duration-500 hover:border-gold-500/25">
                  <span className="label-kicker">{`0${i + 1}`}</span>
                  <h3 className="mt-3 font-display text-xl font-light text-white sm:text-2xl">{v.t}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/45">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 text-center sm:py-20">
        <Reveal>
          <p className="label-kicker">Work With Us</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-light leading-tight text-white sm:text-4xl">
            Let&apos;s create something <span className="gold-text">unforgettable</span>
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-gold">
              Get In Touch
            </Link>
            <a
              href={waLink("Hello Picture Rituals! I'd love to know more about working together.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
