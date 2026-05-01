"use client";

import { createPortal } from "react-dom";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useEffect, useCallback } from "react";
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

  const prev = useCallback(() => {
    if (currentIndex > 0) onChangeIndex(currentIndex - 1);
  }, [currentIndex, onChangeIndex]);

  const next = useCallback(() => {
    if (currentIndex < total - 1) onChangeIndex(currentIndex + 1);
  }, [currentIndex, total, onChangeIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const overlay = (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Pre-render current + adjacent images so navigation is instant */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[85vh] w-[90vw] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((src, i) => {
          const isVisible = i === currentIndex;
          const isAdjacent = i === currentIndex - 1 || i === currentIndex + 1;
          if (!isVisible && !isAdjacent) return null;
          return (
            <div
              key={i}
              className="absolute inset-0"
              style={{ opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? "auto" : "none" }}
            >
              <Image
                src={src}
                alt={alts[i] ?? ""}
                fill
                sizes="90vw"
                className="object-contain"
                priority={isVisible}
              />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {currentIndex > 0 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {currentIndex < total - 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {total > 1 && (
        <div
          className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => { e.stopPropagation(); onChangeIndex(i); }}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-200 ${i === currentIndex ? "w-5 bg-white" : "w-1.5 bg-white/35 hover:bg-white/60"}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );

  return createPortal(overlay, document.body);
}
