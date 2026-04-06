"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
        <SectionTitle title="Working Experience" />
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {experience.map((job, idx) => (
          <motion.article
            key={job.company + job.period}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="glass-card hover-lift rounded-2xl p-5"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.17em] text-cyan-100">{job.period}</p>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/20 bg-white/10">
                <Image src={job.logo} alt={`${job.company} logo`} fill sizes="40px" className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">{job.company}</h3>
            </div>
            <p className="mt-1 text-sm text-violet-200">{job.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{job.highlight}</p>
            <TagList tags={job.stack} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
