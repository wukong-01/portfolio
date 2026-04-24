"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/portfolio/section-title";
import hcmutLogo from "@/images/hcmut.jpeg";

export function EducationSection() {
  return (
    <section id="education" className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title="Education" />
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45 }}
        className="glass-card hover-lift rounded-2xl p-6"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">08/2019 – 12/2023</p>
        <div className="mt-3 flex items-start gap-4">
          <div className="relative mt-0.5 h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <Image src={hcmutLogo} alt="HCMUT logo" fill sizes="40px" className="object-cover" />
          </div>
          <div>
            <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl md:text-2xl">
              Ho Chi Minh City University of Technology
            </h3>
            <p className="mt-1 text-sm font-medium text-blue-600 sm:text-base">Bachelor of Computer Science</p>
            <p className="mt-2 text-sm text-slate-500">GPA: 8.15</p>
          </div>
        </div>
      </motion.article>
    </section>
  );
}
