"use client";

import { motion } from "framer-motion";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa6";

export function IntroSection() {
  return (
    <section id="intro" className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55 }}
        className="space-y-5"
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cyan-100">
          Intro
        </p>
        <h2 className="text-3xl font-semibold md:text-5xl">About me</h2>
        <p className="text-base leading-relaxed text-slate-300 md:text-lg">
          I am a Frontend Engineer with 4 years of experience specializing in React. I build scalable, maintainable
          applications with strong attention to clean code, performance, and responsive design. I have hands-on
          experience with microfrontend architecture for modular development and independent deployment.
        </p>
        <p className="text-base leading-relaxed text-slate-300 md:text-lg">
          I am also comfortable with fullstack contributions using Golang, and I enjoy collaborating across
          cross-functional teams to deliver smooth product experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="glass-card rounded-3xl p-6"
      >
        <p className="text-sm text-violet-200">Quick profile</p>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          <li className="hover-lift glass-card flex items-center gap-3 rounded-2xl p-4">
            <HiMapPin className="text-base text-violet-200" />
            <span>Location: Ho Chi Minh City, Vietnam</span>
          </li>
          <li className="hover-lift glass-card flex items-center gap-3 rounded-2xl p-4">
            <HiEnvelope className="text-base text-violet-200" />
            <span>Email: binh17122001@gmail.com</span>
          </li>
          <li className="hover-lift glass-card flex items-center gap-3 rounded-2xl p-4">
            <HiPhone className="text-base text-violet-200" />
            <span>Phone: +84 372 358 493</span>
          </li>
          <li className="hover-lift glass-card flex items-center gap-3 rounded-2xl p-4">
            <FaLinkedinIn className="text-base text-violet-200" />
            <a
              href="https://www.linkedin.com/in/ctbinh"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-200"
            >
              LinkedIn: linkedin.com/in/ctbinh
            </a>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
