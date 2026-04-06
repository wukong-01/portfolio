"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-3xl p-8 text-center"
    >
      <p className="text-sm uppercase tracking-[0.17em] text-violet-200">Let&apos;s connect</p>
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Available for frontend engineering opportunities.</h2>
      <p className="mx-auto mt-4 max-w-xl text-slate-300">
        I enjoy collaborating across cross-functional teams to create smooth user experiences and maintainable
        systems.
      </p>
      <a
        href="mailto:binh17122001@gmail.com"
        className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
      >
        Contact: binh17122001@gmail.com
      </a>
    </motion.section>
  );
}
