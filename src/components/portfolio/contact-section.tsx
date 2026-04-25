"use client";

import { motion } from "framer-motion";
import { HiEnvelope } from "react-icons/hi2";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { PhotoTile } from "@/components/portfolio/photo-tile";
import { SkillsSection } from "@/components/portfolio/skills-section";
import type { SkillGroup } from "@/types/portfolio";

const deviceTiles = [
  { width: "w-[110px] sm:w-[170px]", height: "h-[160px] sm:h-[240px]", rotate: "-rotate-6", rounded: "rounded-[1.5rem] sm:rounded-[1.75rem]" },
  { width: "w-[140px] sm:w-[220px]", height: "h-[110px] sm:h-[170px]", rotate: "rotate-2", rounded: "rounded-[1rem]" },
  { width: "w-[120px] sm:w-[180px]", height: "h-[170px] sm:h-[250px]", rotate: "-rotate-3", rounded: "rounded-[1.25rem] sm:rounded-[1.5rem]" },
  { width: "w-[120px] sm:w-[180px]", height: "h-[180px] sm:h-[260px]", rotate: "rotate-6", rounded: "rounded-[1.25rem] sm:rounded-[1.5rem]" },
];

type ContactSectionProps = {
  skillGroups?: SkillGroup[];
};

export function ContactSection({ skillGroups }: ContactSectionProps) {
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

      <div className="mt-10 flex flex-wrap items-end justify-center gap-3 sm:mt-14 sm:gap-6">
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

      {skillGroups ? <SkillsSection skillGroups={skillGroups} /> : null}
    </motion.section>
  );
}
