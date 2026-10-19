"use client";

import { TESTIMONIALS } from "@/data/site";

export default function TestimonialMarquee() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="marquee-viewport mt-10">
      <div className="marquee-track gap-4 pr-4 sm:gap-5 sm:pr-5">
        {loop.map((t, i) => (
          <figure
            key={`${t.name}-${i}`}
            className="card-surface flex w-[290px] shrink-0 flex-col justify-between p-5 transition-colors duration-500 hover:border-gold-500/25 sm:w-[400px] sm:p-7"
            aria-hidden={i >= TESTIMONIALS.length}
          >
            <div>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-gold-500/50"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="mt-3 font-display text-base font-light leading-relaxed text-white/85 sm:text-lg">
                {t.quote}
              </blockquote>
            </div>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="h-px w-5 bg-gold-500/60" />
              <div>
                <p className="text-sm text-white">{t.name}</p>
                <p className="mt-0.5 text-[0.6rem] uppercase tracking-widest2 text-white/40">
                  {t.event}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
