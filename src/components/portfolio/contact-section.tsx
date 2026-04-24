"use client";

import { motion } from "framer-motion";
import { HiEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-3xl px-8 py-14 text-center"
    >
      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
        Let&apos;s build incredible<br className="hidden sm:block" /> things together!
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-base text-slate-500">
        Open to frontend engineering opportunities. I enjoy collaborating across teams to create smooth user experiences.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="mailto:binh17122001@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          <HiEnvelope className="text-base" />
          <span className="max-w-[180px] truncate">binh17122001@gmail.com</span>
        </a>
        <a
          href="https://github.com/ctbinh"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          aria-label="GitHub"
        >
          <FaGithub className="text-lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/ctbinh"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="text-lg" />
        </a>
      </div>
    </motion.section>
  );
}
