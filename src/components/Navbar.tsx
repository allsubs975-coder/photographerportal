"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOGO_IMAGE } from "@/data/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-white/[0.06] bg-ink-950/90 backdrop-blur-xl"
            : "bg-gradient-to-b from-ink-950/80 to-transparent"
        }`}
      >
        <nav className="container-x flex h-[4.5rem] items-center justify-between sm:h-20">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative block h-10 w-10 shrink-0 overflow-hidden border border-gold-500/25 sm:h-11 sm:w-11">
              <Image
                src={LOGO_IMAGE}
                alt="Picture Rituals logo"
                fill
                sizes="44px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-gold-300 sm:text-xl">
                PICTURE
              </span>
              <span className="mt-0.5 text-[0.55rem] font-medium tracking-widest2 text-gold-500 sm:text-[0.6rem]">
                RITUALS
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-[0.7rem] font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
                      active ? "text-gold-400" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-px bg-gold-500 transition-all duration-500 ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
          >
            <span
              className={`h-px w-6 bg-white transition-all duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-white transition-all duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-ink-950/98 transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <span
          className={`relative mb-8 block h-16 w-16 overflow-hidden border border-gold-500/30 transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <Image src={LOGO_IMAGE} alt="Picture Rituals" fill sizes="64px" className="object-cover" />
        </span>
        <ul className="flex flex-col items-center gap-6">
          {LINKS.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                className={`font-display text-3xl font-light tracking-wide ${
                  pathname === link.href ? "text-gold-400" : "text-white/85"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <p className="mt-6 text-[0.65rem] uppercase tracking-widest2 text-white/40">
          Jamnagar, Gujarat
        </p>
      </div>
    </>
  );
}
