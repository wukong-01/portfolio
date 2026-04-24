"use client";

import { motion } from "framer-motion";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa6";
import { SectionTitle } from "@/components/portfolio/section-title";

export function IntroSection() {
  return (
    <section id="intro" className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title="About me" />
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            I am a Frontend Engineer with 4 years of experience specializing in React. I build scalable, maintainable
            applications with strong attention to clean code, performance, and responsive design. I have hands-on
            experience with microfrontend architecture for modular development and independent deployment.
          </p>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            I am also comfortable with fullstack contributions using Golang, and I enjoy collaborating across
            cross-functional teams to deliver smooth product experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="glass-card rounded-2xl p-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Quick profile</p>
          <ul className="mt-4 space-y-2.5">
            {[
              { icon: HiMapPin, text: "Ho Chi Minh City, Vietnam" },
              { icon: HiEnvelope, text: "binh17122001@gmail.com" },
              { icon: HiPhone, text: "+84 372 358 493" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <Icon className="shrink-0 text-base text-blue-500" />
                <span className="min-w-0 truncate">{text}</span>
              </li>
            ))}
            <li className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <FaLinkedinIn className="shrink-0 text-base text-blue-500" />
              <a
                href="https://www.linkedin.com/in/ctbinh"
                target="_blank"
                rel="noreferrer"
                className="min-w-0 truncate transition hover:text-blue-600"
              >
                linkedin.com/in/ctbinh
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
