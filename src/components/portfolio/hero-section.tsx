"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";
import avatar from "@/images/avatar.jpg";

const roles = [
  { label: "Frontend Engineer", emoji: "🖥", color: "bg-blue-50 text-blue-700" },
  { label: "React Developer", emoji: "⚛️", color: "bg-cyan-50 text-cyan-700" },
  { label: "Go Developer", emoji: "🐹", color: "bg-emerald-50 text-emerald-700" },
] as const;

export function HeroSection() {
  return (
    <section className="grid min-h-[calc(100svh-var(--header-height))] grid-cols-1 items-center gap-12 py-16 md:grid-cols-[auto_1fr] md:gap-16">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex justify-center md:justify-start"
      >
        <div className="relative h-52 w-44 -rotate-3 overflow-hidden rounded-[1.75rem] shadow-md sm:h-64 sm:w-52 md:h-72 md:w-56">
          <Image
            src={avatar}
            alt="Portrait of Cao Thanh Binh"
            fill
            priority
            sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 224px"
            className="object-cover object-[50%_28%]"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-5"
      >
        <p className="text-2xl sm:text-3xl md:text-4xl">Hi 👋</p>
        <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
          I&apos;m Binh, and I love building fast interfaces with clean code!
        </h1>
        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <span
              key={role.label}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium ${role.color}`}
            >
              {role.emoji} {role.label}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="mailto:binh17122001@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            <HiEnvelope className="text-base" />
            Email me
          </a>
          <a
            href="https://github.com/ctbinh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            <FaGithub className="text-base" />
            View GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
