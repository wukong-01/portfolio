"use client";

import { motion } from "framer-motion";
import { HiEnvelope } from "react-icons/hi2";
import { FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { PhotoTile } from "@/components/portfolio/photo-tile";

const deviceTiles = [
  { width: "w-[140px] sm:w-[170px]", height: "h-[200px] sm:h-[240px]", rotate: "-rotate-6", rounded: "rounded-[1.75rem]" },
  { width: "w-[180px] sm:w-[220px]", height: "h-[140px] sm:h-[170px]", rotate: "rotate-2", rounded: "rounded-[1rem]" },
  { width: "w-[150px] sm:w-[180px]", height: "h-[210px] sm:h-[250px]", rotate: "-rotate-3", rounded: "rounded-[1.5rem]" },
  { width: "w-[150px] sm:w-[180px]", height: "h-[220px] sm:h-[260px]", rotate: "rotate-6", rounded: "rounded-[1.5rem]" },
];

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="flex flex-col items-center text-center"
    >
      <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
        Let&apos;s build incredible<br className="hidden sm:block" /> things together!
      </h2>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="mailto:binh17122001@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          <HiEnvelope className="text-base" />
          binh17122001@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/ctbinh"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="text-base" />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700"
          aria-label="X / Twitter"
        >
          <FaXTwitter className="text-base" />
        </a>
        <a
          href="https://wa.me/84372358493"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white transition hover:bg-emerald-600"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-lg" />
        </a>
      </div>

      <div className="mt-14 flex flex-wrap items-end justify-center gap-4 sm:gap-6">
        {deviceTiles.map((tile, idx) => (
          <PhotoTile
            key={idx}
            width={tile.width}
            height={tile.height}
            rounded={tile.rounded}
            className={tile.rotate}
            shadowClass="shadow-[0_24px_60px_-25px_rgba(15,23,42,0.45)]"
          />
        ))}
      </div>
    </motion.section>
  );
}
