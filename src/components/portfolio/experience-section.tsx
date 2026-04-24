"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/portfolio/section-title";
import { TagList } from "@/components/portfolio/tag-list";
import type { ExperienceItem } from "@/types/portfolio";

type ExperienceSectionProps = {
  experience: ExperienceItem[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title="Working Experience" hint="A timeline of my growth and impact" />
      </motion.div>

      <div className="relative pl-6 sm:pl-8">
        <div className="pointer-events-none absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-blue-300 via-blue-200 to-transparent sm:left-3" />

        {experience.map((job, idx) => (
          <motion.article
            key={job.company + job.period}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="group relative mb-8 pb-2 last:mb-0"
          >
            <span className="absolute -left-[1.4rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-blue-400 bg-white shadow-[0_0_0_4px_rgba(59,130,246,0.12)] transition group-hover:bg-blue-400 sm:-left-[1.66rem]" />

            <div className="glass-card hover-lift space-y-4 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-blue-500">{job.period}</p>

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                  <Image src={job.logo} alt={`${job.company} logo`} fill sizes="40px" className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{job.company}</h3>
                  <p className="text-sm text-blue-600">{job.role}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-700">{job.highlight}</p>
              <p className="text-sm leading-relaxed text-slate-500">{job.description}</p>

              <TagList tags={job.stack} />

              <div className="flex justify-end pt-1">
                <Link
                  href={`/experience/${job.slug}`}
                  className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600 transition hover:bg-blue-100"
                >
                  Read more
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
