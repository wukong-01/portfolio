"use client";

import { PhotoTile } from "@/components/portfolio/photo-tile";
import img1 from "@/images/about-me/ctb-1.jpg";
import img2 from "@/images/about-me/ctb-2.jpg";
import img3 from "@/images/about-me/ctb-3.jpg";
import img4 from "@/images/about-me/ctb-4.jpg";
import img5 from "@/images/about-me/ctb-5.jpg";
import { motion } from "framer-motion";

const paragraphs = [
  "I am a Frontend Engineer with 4 years of experience specializing in React. I build scalable, maintainable applications with strong attention to clean code, performance, and responsive design.",
  "I have hands-on experience with microfrontend architecture for modular development and independent deployment.",
  "I am also comfortable with fullstack contributions using Golang, and I enjoy collaborating across cross-functional teams to deliver smooth product experiences.",
];

const leftImages = [
  { src: img1, ratio: "aspect-[4/5]", alt: "Photo 1" },
  { src: img2, ratio: "aspect-[4/3]", alt: "Photo 3" },
  { src: img3, ratio: "aspect-[4/5]", alt: "Photo 5" },
];

const rightImages = [
  { src: img5, ratio: "aspect-[4/3]", alt: "Photo 2" },
  { src: img4, ratio: "aspect-[4/5]", alt: "Photo 4" },
  { src: img2, ratio: "aspect-[4/5]", alt: "Photo 6" },
];

export function IntroSection() {
  return (
    <section
      id="intro"
      className="flex min-h-screen scroll-mt-24 flex-col justify-center py-12 sm:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-[1.75rem] border-[3px] border-white bg-[#f3f4fa] p-5 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.18)] sm:rounded-[2rem] sm:p-10"
      >
        <div className="relative grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:gap-8">
          {/* Left: text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              About me
            </h2>
            <div className="mt-4 space-y-3.5 text-[15px] leading-relaxed text-slate-600 sm:mt-5 sm:space-y-4 sm:text-base">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right: vertical infinite-scroll photo collage */}
          <div className="marquee-container marquee-mask relative h-[380px] overflow-hidden px-3 py-2 sm:h-[520px] lg:h-[560px]">
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
        {leftImages.map((img) => (
          <PhotoTile
            key={img.alt}
            src={img.src}
            alt={img.alt}
            ratio={img.ratio}
            imageClassName="object-cover object-center"
          />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        {rightImages.map((img) => (
          <PhotoTile
            key={img.alt}
            src={img.src}
            alt={img.alt}
            ratio={img.ratio}
            imageClassName="object-cover object-center"
          />
        ))}
      </div>
    </div>
  );
}
