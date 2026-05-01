"use client";

import { useState } from "react";
import type { StaticImageData } from "next/image";
import { PhotoTile } from "./photo-tile";
import { ImageLightbox } from "./image-lightbox";

type GalleryCollageProps = {
  gallery: (StaticImageData | string)[];
  company: string;
  layout?: "default" | "portrait-mix" | "landscape-portrait";
};

export function GalleryCollage({ gallery, company, layout }: GalleryCollageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const s = gallery as (StaticImageData | string | undefined)[];
  const alts = gallery.map((_, i) => `${company} preview ${i + 1}`);

  function openAt(index: number) {
    setLightboxIndex(index);
  }
  function close() {
    setLightboxIndex(null);
  }

  function tile(
    idx: number,
    props: {
      alt: string;
      ratio?: string;
      sizes?: string;
      rounded?: string;
      shadowClass?: string;
      height?: string;
      buttonClassName?: string;
    }
  ) {
    const { buttonClassName, ...tileProps } = props;
    return (
      <button
        key={idx}
        type="button"
        onClick={() => openAt(idx)}
        className={`block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1${buttonClassName ? ` ${buttonClassName}` : ""}`}
        style={{ borderRadius: "inherit" }}
      >
        <PhotoTile src={s[idx]} {...tileProps} />
      </button>
    );
  }

  let collage: React.ReactNode;

  if (gallery.length === 4) {
    collage = (
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {tile(0, { alt: alts[0], ratio: "aspect-[16/9]", sizes: "(max-width: 640px) 45vw, 22vw" })}
        {tile(1, { alt: alts[1], ratio: "aspect-[16/9]", sizes: "(max-width: 640px) 45vw, 22vw" })}
        {tile(2, { alt: alts[2], ratio: "aspect-[16/9]", sizes: "(max-width: 640px) 45vw, 22vw" })}
        {tile(3, { alt: alts[3], ratio: "aspect-[16/9]", sizes: "(max-width: 640px) 45vw, 22vw" })}
      </div>
    );
  } else if (gallery.length >= 5 && layout === "landscape-portrait") {
    collage = (
      <div className="grid grid-cols-6 gap-3 sm:gap-4">
        <div className="col-span-3">{tile(0, { alt: alts[0], ratio: "aspect-[16/9]", sizes: "(max-width: 640px) 46vw, 26vw" })}</div>
        <div className="col-span-3">{tile(1, { alt: alts[1], ratio: "aspect-[16/9]", sizes: "(max-width: 640px) 46vw, 26vw" })}</div>
        <div className="col-span-2">{tile(2, { alt: alts[2], ratio: "aspect-[9/16]", sizes: "(max-width: 640px) 30vw, 17vw" })}</div>
        <div className="col-span-2">{tile(3, { alt: alts[3], ratio: "aspect-[9/16]", sizes: "(max-width: 640px) 30vw, 17vw" })}</div>
        <div className="col-span-2">{tile(4, { alt: alts[4], ratio: "aspect-[9/16]", sizes: "(max-width: 640px) 30vw, 17vw" })}</div>
      </div>
    );
  } else if (gallery.length >= 5 && layout === "portrait-mix") {
    collage = (
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <div className="col-span-3">{tile(0, { alt: alts[0], ratio: "aspect-[16/9]", sizes: "(max-width: 640px) 90vw, 56vw" })}</div>
        <div>{tile(1, { alt: alts[1], ratio: "aspect-[3/4]", sizes: "(max-width: 640px) 30vw, 18vw" })}</div>
        <div className="col-span-2">{tile(2, { alt: alts[2], ratio: "aspect-[3/2]", sizes: "(max-width: 640px) 60vw, 37vw" })}</div>
        <div>{tile(3, { alt: alts[3], ratio: "aspect-[3/4]", sizes: "(max-width: 640px) 30vw, 18vw" })}</div>
        <div className="col-span-2">{tile(4, { alt: alts[4], ratio: "aspect-[3/2]", sizes: "(max-width: 640px) 60vw, 37vw" })}</div>
      </div>
    );
  } else if (gallery.length >= 5) {
    collage = (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-6 sm:gap-4">
        <div className="col-span-1 sm:col-span-2">{tile(0, { alt: alts[0], ratio: "aspect-[4/3]", sizes: "(max-width: 640px) 45vw, 30vw" })}</div>
        <div className="col-span-1 sm:col-span-2">{tile(1, { alt: alts[1], ratio: "aspect-[4/3]", sizes: "(max-width: 640px) 45vw, 30vw" })}</div>
        <div className="col-span-2 sm:col-span-2">{tile(2, { alt: alts[2], ratio: "aspect-[4/3]", sizes: "(max-width: 640px) 90vw, 30vw" })}</div>
        <div className="col-span-1 sm:col-span-3">{tile(3, { alt: alts[3], ratio: "aspect-[16/9]", sizes: "(max-width: 640px) 45vw, 45vw" })}</div>
        <div className="col-span-1 sm:col-span-3">{tile(4, { alt: alts[4], ratio: "aspect-[16/9]", sizes: "(max-width: 640px) 45vw, 45vw" })}</div>
      </div>
    );
  } else {
    // 3-image layout
    collage = (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] sm:gap-4">
        <div className="row-span-2 grid sm:col-start-2 sm:row-start-1 sm:row-span-2">
          {tile(2, { alt: alts[2], rounded: "rounded-[1.5rem] sm:rounded-[2rem]", shadowClass: "shadow-[0_24px_60px_-25px_rgba(15,23,42,0.45)]", sizes: "(max-width: 640px) 45vw, 50vw", height: "h-full", buttonClassName: "h-full" })}
        </div>
        <div className="sm:col-start-1 sm:row-start-1">
          {tile(0, { alt: alts[0], ratio: "aspect-[4/3]", sizes: "(max-width: 640px) 45vw, 35vw" })}
        </div>
        <div className="sm:col-start-1 sm:row-start-2">
          {tile(1, { alt: alts[1], ratio: "aspect-[4/3]", sizes: "(max-width: 640px) 45vw, 35vw" })}
        </div>
      </div>
    );
  }

  return (
    <>
      {collage}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={gallery}
          alts={alts}
          currentIndex={lightboxIndex}
          onClose={close}
          onChangeIndex={setLightboxIndex}
        />
      )}
    </>
  );
}
