"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { CATEGORIES, GALLERY, type GalleryCategory } from "@/data/gallery";
import Lightbox from "./Lightbox";

type Filter = (typeof CATEGORIES)[number];

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return GALLERY;
    return GALLERY.filter((g) => g.category === (filter as GalleryCategory));
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {CATEGORIES.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`relative pb-1 text-[0.68rem] font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
                active ? "text-gold-400" : "text-white/40 hover:text-white/80"
              }`}
            >
              {cat}
              <span
                className={`absolute bottom-0 left-0 h-px bg-gold-500 transition-all duration-500 ${
                  active ? "w-full" : "w-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {filtered.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxIndex(filtered.findIndex((f) => f.id === item.id))}
            className="group relative block w-full overflow-hidden border border-white/[0.06] bg-ink-850 animate-fadeIn"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
                <p className="text-[0.6rem] uppercase tracking-widest2 text-gold-400">
                  {item.category}
                </p>
                <p className="mt-1.5 text-sm text-white/80">{item.alt}</p>
              </div>
              <div className="absolute inset-2 border border-gold-500/0 transition-all duration-500 group-hover:border-gold-500/30 sm:inset-3" />
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-sm text-white/40">
          No images in this category yet.
        </p>
      )}

      <Lightbox
        items={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
