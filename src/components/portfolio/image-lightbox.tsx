"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type ImageLightboxProps = {
  images: (StaticImageData | string)[];
  alts: string[];
  currentIndex: number;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
};

export function ImageLightbox({ images, alts, currentIndex, onClose, onChangeIndex }: ImageLightboxProps) {
  const total = images.length;
  const src = images[currentIndex];
  const alt = alts[currentIndex] ?? "";

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) onChangeIndex(currentIndex - 1);
      if (e.key === "ArrowRight" && currentIndex < total - 1) onChangeIndex(currentIndex + 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onChangeIndex, currentIndex, total]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative h-[85vh] w-[90vw] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={src} alt={alt} fill sizes="90vw" className="object-contain" priority />
      </div>

      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {currentIndex > 0 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onChangeIndex(currentIndex - 1); }}
          className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {currentIndex < total - 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onChangeIndex(currentIndex + 1); }}
          className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {total > 1 && (
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => { e.stopPropagation(); onChangeIndex(i); }}
              className={`h-1.5 rounded-full transition-all duration-200 ${i === currentIndex ? "w-5 bg-white" : "w-1.5 bg-white/35 hover:bg-white/60"}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
