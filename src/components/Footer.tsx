import Link from "next/link";
import Image from "next/image";
import {
  CITY,
  DESIGNER_NAME,
  DESIGNER_ROLE,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  JAY_INSTAGRAM_HANDLE,
  JAY_INSTAGRAM_URL,
  LOGO_IMAGE,
  OWNER_NAME,
  OWNER_ROLE,
  SERVICE_AREA,
  WHATSAPP_DISPLAY,
  YOUTUBE_URL,
  waLink,
} from "@/data/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-950">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3 md:py-16">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative block h-14 w-14 shrink-0 overflow-hidden border border-gold-500/25">
              <Image
                src={LOGO_IMAGE}
                alt="Picture Rituals logo"
                fill
                sizes="56px"
                className="object-cover"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-[0.2em] text-white">
                PICTURE
              </span>
              <span className="mt-1 text-[0.6rem] font-medium tracking-widest2 text-gold-500">
                RITUALS
              </span>
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/40">
            Honest wedding storytelling — cinematic films and photographs for
            couples across Gujarat.
          </p>
          <div className="mt-1 flex items-center gap-3">
            <span className="h-px w-6 bg-gold-500/60" />
            <div>
              <p className="text-sm text-white/80">{OWNER_NAME}</p>
              <p className="text-[0.6rem] uppercase tracking-widest2 text-gold-500">
                {OWNER_ROLE}
              </p>
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          <span className="label-kicker mb-2">Explore</span>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-gold-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="label-kicker mb-2">Contact</span>
          <a
            href={waLink("Hello Picture Rituals! I'd love to inquire about wedding photography.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-gold-300"
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <span className="text-sm text-white/50">{CITY}</span>
          <span className="text-sm text-white/50">{SERVICE_AREA}</span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-gold-300"
          >
            Instagram {INSTAGRAM_HANDLE}
          </a>
          <a
            href={JAY_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-gold-300"
          >
            Jay on Instagram {JAY_INSTAGRAM_HANDLE}
          </a>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-gold-300"
          >
            YouTube Channel
          </a>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/30">
            © {new Date().getFullYear()} Picture Rituals. All rights reserved.
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/30">
            Jamnagar · Gujarat
          </p>
        </div>
        <div className="border-t border-white/[0.03]">
          <div className="container-x flex items-center justify-center gap-2.5 py-4">
            <span className="h-px w-6 bg-gold-500/40" />
            <p className="text-center text-[0.65rem] uppercase tracking-[0.22em] text-white/35">
              {DESIGNER_ROLE}{" "}
              <a
                href="https://www.instagram.com/bhushanahuja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500/90 transition-colors duration-300 hover:text-gold-300"
              >
                {DESIGNER_NAME}
              </a>
            </p>
            <span className="h-px w-6 bg-gold-500/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
