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
    <section id="experience" className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }}>
        <SectionTitle title="Working Experience" hint="A timeline of my growth and impact" />
      </motion.div>

      <div className="relative pl-5 sm:pl-7">
        <div className="pointer-events-none absolute bottom-0 left-1 top-0 w-px bg-gradient-to-b from-violet-300/70 via-violet-300/30 to-transparent sm:left-2" />
        {experience.map((job, idx) => (
          <motion.article
            key={job.company + job.period}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="group relative mb-8 pb-2 last:mb-0"
          >
            <span className="absolute -left-[1.16rem] top-1 h-3.5 w-3.5 rounded-full border-2 border-violet-200/80 bg-violet-500 shadow-[0_0_0_6px_rgba(30,27,75,0.65)] transition group-hover:bg-violet-300 sm:-left-[1.66rem]" />

            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition group-hover:border-violet-300/40 group-hover:bg-violet-500/[0.07] md:p-5">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs uppercase tracking-[0.17em] text-cyan-100">{job.period}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/20 bg-white/10">
                  <Image src={job.logo} alt={`${job.company} logo`} fill sizes="40px" className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{job.company}</h3>
                  <p className="text-sm text-violet-200">{job.role}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">{job.highlight}</p>
              <p className="text-sm leading-relaxed text-slate-400">{job.description}</p>

              <TagList tags={job.stack} />

              <div className="flex justify-end pt-2">
                <Link
                  href={`/experience/${job.slug}`}
                  className="inline-flex items-center gap-1 rounded-full border border-violet-300/40 bg-violet-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-violet-100 transition hover:border-violet-200 hover:bg-violet-400/30"
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
