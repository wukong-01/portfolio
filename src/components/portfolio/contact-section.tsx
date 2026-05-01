"use client";

import { motion } from "framer-motion";
import { HiEnvelope } from "react-icons/hi2";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { PhotoTile } from "@/components/portfolio/photo-tile";
import { SkillsSection } from "@/components/portfolio/skills-section";
import type { SkillGroup } from "@/types/portfolio";
import type { StaticImageData } from "next/image";

type GalleryImage = { src: StaticImageData | string; portrait: boolean };

type ContactSectionProps = {
  skillGroups?: SkillGroup[];
  images?: GalleryImage[];
};

const ROTATIONS = ["-rotate-6", "rotate-2", "-rotate-3", "rotate-6", "-rotate-4", "rotate-3", "-rotate-2", "rotate-5"];

export function ContactSection({ skillGroups, images = [] }: ContactSectionProps) {
  const loop = images.length > 0 ? [...images, ...images] : [];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="flex w-full flex-col items-center text-center"
    >
      <h2 className="text-[26px] font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
        Let&apos;s build incredible<br className="hidden sm:block" /> things together!
      </h2>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3">
        <a
          href="mailto:binh17122001@gmail.com"
          className="inline-flex max-w-full items-center gap-2 truncate rounded-full bg-slate-900 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-slate-700 sm:text-sm"
        >
          <HiEnvelope className="shrink-0 text-base" />
          <span className="truncate">binh17122001@gmail.com</span>
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
          href="https://facebook.com/ctbinhh"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700"
          aria-label="Facebook"
        >
          <FaFacebookF className="text-base" />
        </a>
      </div>

      {loop.length > 0 && (
        <div className="marquee-container marquee-mask-x relative mt-10 w-full overflow-hidden py-8 sm:mt-14">
          <div className="marquee-left flex w-max items-end gap-5 pr-5 sm:gap-7 sm:pr-7">
            {loop.map(({ src, portrait }, idx) => (
              <PhotoTile
                key={idx}
                src={src as StaticImageData | string}
                alt={`Project image ${(idx % images.length) + 1}`}
                width={portrait ? "w-[80px] sm:w-[95px]" : "w-[180px] sm:w-[220px]"}
                height={portrait ? "h-[160px] sm:h-[190px]" : "h-[110px] sm:h-[135px]"}
                sizes={portrait ? "95px" : "220px"}
                shadowClass=""
                className={ROTATIONS[idx % ROTATIONS.length]}
              />
            ))}
          </div>
        </div>
      )}

      {skillGroups ? <SkillsSection skillGroups={skillGroups} /> : null}
    </motion.section>
  );
}
