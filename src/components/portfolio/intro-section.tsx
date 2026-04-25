"use client";

import { motion } from "framer-motion";
import { PhotoTile } from "@/components/portfolio/photo-tile";

const paragraphs = [
  "I am a Frontend Engineer with 4 years of experience specializing in React. I build scalable, maintainable applications with strong attention to clean code, performance, and responsive design.",
  "I have hands-on experience with microfrontend architecture for modular development and independent deployment.",
  "I am also comfortable with fullstack contributions using Golang, and I enjoy collaborating across cross-functional teams to deliver smooth product experiences.",
];

const leftColumn = ["aspect-[4/5]", "aspect-[4/3]", "aspect-[4/5]", "aspect-[4/3]"];
const rightColumn = ["aspect-[4/3]", "aspect-[4/5]", "aspect-[4/3]", "aspect-[4/5]"];

export function IntroSection() {
  return (
    <section id="intro" className="flex min-h-screen scroll-mt-24 flex-col justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-[2rem] border-[3px] border-white bg-[#f3f4fa] p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.18)] sm:p-10"
      >

        <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          {/* Left: text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">About me</h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right: vertical infinite-scroll photo collage */}
          <div className="marquee-container marquee-mask relative h-[520px] overflow-hidden sm:h-[560px]">
            <div className="marquee-up flex flex-col gap-3">
              <PhotoTrack />
              <PhotoTrack ariaHidden />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function PhotoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex gap-3" aria-hidden={ariaHidden}>
      <div className="flex flex-1 flex-col gap-3">
        {leftColumn.map((ratio, idx) => (
          <PhotoTile key={`l-${idx}`} ratio={ratio} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        {rightColumn.map((ratio, idx) => (
          <PhotoTile key={`r-${idx}`} ratio={ratio} />
        ))}
      </div>
    </div>
  );
}
