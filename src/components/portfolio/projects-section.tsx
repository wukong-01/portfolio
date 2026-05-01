"use client";

import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { GalleryCollage } from "@/components/portfolio/gallery-collage";
import { SectionTitle } from "@/components/portfolio/section-title";
import type { PersonalProject } from "@/types/portfolio";

type ProjectsSectionProps = {
  projects: PersonalProject[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col justify-center space-y-10 py-12 sm:space-y-12 sm:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle
          title="Personal Projects"
          hint="Things I built on my own time, driven by curiosity."
        />
      </motion.div>

      <div className={`grid grid-cols-1 gap-12 sm:gap-8 ${projects.length > 1 ? "sm:grid-cols-2" : ""}`}>
        {projects.map((project, idx) => (
          <ProjectShowcase key={project.slug} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}

function ProjectShowcase({
  project,
  index,
}: {
  project: PersonalProject;
  index: number;
}) {
  const gallery = project.gallery ?? [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="space-y-5 sm:space-y-6"
    >
      {gallery.length > 0 && (
        <GalleryCollage gallery={gallery} company={project.title} />
      )}

      <div className="space-y-2.5 px-1 sm:space-y-3">
        {project.projectUrl ? (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-lg font-bold text-slate-900 transition hover:text-blue-600 sm:text-2xl"
          >
            {project.title}
            <HiArrowUpRight className="text-base text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
          </a>
        ) : (
          <h3 className="text-lg font-bold text-slate-900 sm:text-2xl">
            {project.title}
          </h3>
        )}
        <p className="text-[15px] leading-relaxed text-slate-700">
          {project.highlight}
        </p>
      </div>
    </motion.article>
  );
}
