"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { PhotoTile } from "@/components/portfolio/photo-tile";
import { SectionTitle } from "@/components/portfolio/section-title";
import type { ExperienceItem } from "@/types/portfolio";

type ExperienceSectionProps = {
  experience: ExperienceItem[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="flex min-h-screen flex-col justify-center space-y-10 py-12 sm:space-y-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle
          title="Work Showcase"
          hint="My craft, condensed into the projects I am proud of!"
        />
      </motion.div>

      <div className="space-y-14 sm:space-y-20">
        {experience.map((job, idx) => (
          <ProjectShowcase key={job.slug} job={job} index={idx} />
        ))}
      </div>
    </section>
  );
}

function ProjectShowcase({ job, index }: { job: ExperienceItem; index: number }) {
  const gallery = job.gallery ?? [];
  const slots: (ExperienceItem["gallery"] extends (infer T)[] | undefined ? T | undefined : never)[] = [
    gallery[0],
    gallery[1],
    gallery[2],
    gallery[3],
    gallery[4],
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="space-y-5 sm:space-y-6"
    >
      {/* Image collage — 2-column on mobile, 3-column asymmetric on tablet+ */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] sm:gap-4">
        {/* Center phone — first on mobile so it leads visually */}
        <div className="row-span-2 sm:order-2">
          <PhotoTile
            src={slots[2]}
            alt={`${job.company} preview 3`}
            ratio="aspect-[9/17]"
            rounded="rounded-[1.5rem] sm:rounded-[2rem]"
            shadowClass="shadow-[0_24px_60px_-25px_rgba(15,23,42,0.45)]"
          />
        </div>

        {/* Right side on mobile, left column on desktop */}
        <div className="flex flex-col gap-3 sm:order-1 sm:gap-4">
          <PhotoTile src={slots[0]} alt={`${job.company} preview 1`} ratio="aspect-[4/5]" />
          <PhotoTile src={slots[1]} alt={`${job.company} preview 2`} ratio="aspect-[4/3]" />
        </div>

        {/* Hidden on mobile to avoid cramping; shown on tablet+ */}
        <div className="hidden flex-col gap-3 sm:order-3 sm:flex sm:gap-4">
          <PhotoTile src={slots[3]} alt={`${job.company} preview 4`} ratio="aspect-[4/5]" />
          <PhotoTile src={slots[4]} alt={`${job.company} preview 5`} ratio="aspect-[4/3]" />
        </div>
      </div>

      {/* Caption */}
      <div className="space-y-2.5 px-1 sm:space-y-3">
        <Link
          href={`/experience/${job.slug}`}
          className="group inline-flex items-center gap-1.5 text-lg font-bold text-slate-900 transition hover:text-blue-600 sm:text-2xl"
        >
          {job.company}
          <HiArrowUpRight className="text-base text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
        </Link>
        <p className="max-w-3xl text-[15px] leading-relaxed text-slate-700 sm:text-base">
          {job.description} {job.highlight}
        </p>
      </div>
    </motion.article>
  );
}

