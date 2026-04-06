"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/portfolio/section-title";
import hcmutLogo from "@/images/hcmut.jpeg";

export function EducationSection() {
  return (
    <section id="education" className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }}>
        <SectionTitle title="Education" />
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45 }}
        className="glass-card hover-lift rounded-3xl p-6"
      >
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-100">08/2019 - 12/2023</p>
        <div className="mt-2 flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/20 bg-white/10">
            <Image src={hcmutLogo} alt="HCMUT logo" fill sizes="40px" className="object-cover" />
          </div>
          <h3 className="text-2xl font-semibold">Ho Chi Minh City University of Technology</h3>
        </div>
        <p className="mt-2 text-violet-200">Bachelor of Computer Science</p>
        <p className="mt-3 text-sm text-slate-300">GPA: 8.15</p>
      </motion.article>
    </section>
  );
}
