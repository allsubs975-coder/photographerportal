"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;

  const prev = useCallback(() => {
    if (index === null || items.length === 0) return;
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const next = useCallback(() => {
    if (index === null || items.length === 0) return;
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, prev, next]);

  if (index === null || !items[index]) return null;
  const item = items[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className="fixed inset-0 z-[60] flex flex-col bg-ink-950/97 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-5 py-5 sm:px-8">
        <span className="text-[0.65rem] uppercase tracking-widest2 text-white/50">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/70 transition-colors duration-300 hover:border-gold-500/60 hover:text-gold-300"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-16" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center border border-white/10 bg-ink-900/60 text-white/70 backdrop-blur transition-all duration-300 hover:border-gold-500/60 hover:text-gold-300 sm:left-5"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="relative flex max-h-full w-full max-w-5xl items-center justify-center">
          <Image
            key={item.id}
            src={item.src}
            alt={item.alt}
            width={1400}
            height={933}
            priority
            className="h-auto max-h-[74vh] w-auto max-w-full object-contain animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center border border-white/10 bg-ink-900/60 text-white/70 backdrop-blur transition-all duration-300 hover:border-gold-500/60 hover:text-gold-300 sm:right-5"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="px-5 pb-8 text-center sm:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-gold-500">{item.category}</p>
        <p className="mt-2 text-sm text-white/50">{item.alt}</p>
      </div>
    </div>
  );
}
