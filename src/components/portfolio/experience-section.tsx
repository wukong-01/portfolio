"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { GalleryCollage } from "@/components/portfolio/gallery-collage";
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

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="space-y-5 sm:space-y-6"
    >
      {gallery.length > 0 && <GalleryCollage gallery={gallery} company={job.company} layout={job.galleryLayout} />}

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

