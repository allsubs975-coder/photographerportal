import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  OWNER_IMAGE,
  OWNER_NAME,
  WHATSAPP_DISPLAY,
  waLink,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquire about wedding photography with Picture Rituals — Jamnagar, Gujarat. Message us on WhatsApp for availability and a custom quote.",
};

export default function ContactPage() {
  return (
    <>
      <section className="container-x pb-8 pt-32 sm:pt-40">
        <Reveal>
          <SectionHeading
            kicker="Contact"
            title="Let's talk about your celebration"
            description="The fastest way to reach us is WhatsApp. Share your dates and we'll reply with availability and a custom quote."
          />
        </Reveal>
      </section>

      <section className="container-x pb-20 pt-4 sm:pb-28">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-8 text-center">
          <Reveal>
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-gold-500/30">
              <Image
                src={OWNER_IMAGE}
                alt={OWNER_NAME}
                fill
                sizes="96px"
                className="object-cover object-top"
              />
            </div>
            <p className="mt-4 font-display text-2xl font-light text-white">{OWNER_NAME}</p>
            <p className="mt-1 text-[0.6rem] uppercase tracking-widest2 text-gold-400">
              Founder & Lead Photographer
            </p>
          </Reveal>

          <Reveal delay={120}>
            <a
              href={waLink(
                "Hello Picture Rituals! I'd like to enquire about wedding photography for our celebration."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp — {WHATSAPP_DISPLAY}
            </a>
          </Reveal>

          <Reveal delay={200}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-gold-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              {INSTAGRAM_HANDLE}
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/35">
              All studio details, service areas and social links are listed in the footer below.
            </p>
            <div className="mt-6">
              <Link href="/services" className="btn-outline">
                View Collections
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
