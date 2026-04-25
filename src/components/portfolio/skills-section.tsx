"use client";

import { motion } from "framer-motion";
import type { SkillGroup } from "@/types/portfolio";
import type { IconType } from "react-icons";
import {
  SiAntdesign,
  SiBabel,
  SiClaude,
  SiCss,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGithubcopilot,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMicrodotblog,
  SiNextdotjs,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import { BsCursorFill } from "react-icons/bs";
import { TbBrandRadixUi } from "react-icons/tb";

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

const skillIcons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  ReactJS: SiReact,
  NextJS: SiNextdotjs,
  HTML: SiHtml5,
  CSS: SiCss,
  SASS: SiSass,
  "Tailwind CSS": SiTailwindcss,
  "Shadcn UI": SiShadcnui,
  "Radix UI": TbBrandRadixUi,
  "Ant Design": SiAntdesign,
  Redux: SiRedux,
  "React Hook Form": SiReacthookform,
  "React Query": SiReactquery,
  Golang: SiGo,
  Git: SiGit,
  Webpack: SiWebpack,
  Babel: SiBabel,
  Figma: SiFigma,
  Cursor: BsCursorFill,
  "Claude Code": SiClaude,
  "Github Copilot": SiGithubcopilot,
  "Microfrontend Architecture": SiMicrodotblog,
  "CI/CD Pipeline": SiGithubactions,
};

const skillAccent: Record<string, string> = {
  JavaScript: "text-amber-500",
  TypeScript: "text-blue-600",
  ReactJS: "text-sky-500",
  NextJS: "text-slate-900",
  HTML: "text-orange-500",
  CSS: "text-blue-500",
  SASS: "text-pink-500",
  "Tailwind CSS": "text-cyan-500",
  "Shadcn UI": "text-slate-900",
  "Radix UI": "text-slate-700",
  "Ant Design": "text-red-500",
  Redux: "text-violet-600",
  "React Hook Form": "text-pink-600",
  "React Query": "text-rose-500",
  Golang: "text-cyan-600",
  Git: "text-orange-600",
  Webpack: "text-sky-600",
  Babel: "text-yellow-500",
  Figma: "text-pink-500",
  Cursor: "text-slate-900",
  "Claude Code": "text-orange-500",
  "Github Copilot": "text-slate-900",
  "Microfrontend Architecture": "text-emerald-500",
  "CI/CD Pipeline": "text-slate-900",
};

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  const skills = Array.from(new Set(skillGroups.flatMap((g) => g.items)));

  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-[2rem] border-[3px] border-white bg-[#f3f4fa] p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.18)] sm:p-10"
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-500">My toolbox</p>
            <h2 className="mt-2 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
              Tech I work with
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-500">
            A practical stack honed across product teams — from frontend foundations to AI-assisted workflows.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {skills.map((skill, idx) => {
            const Icon = skillIcons[skill];
            const accent = skillAccent[skill] ?? "text-slate-700";
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.02, 0.4) }}
                whileHover={{ y: -3 }}
                className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border-[3px] border-white bg-white/85 p-3 shadow-[0_8px_22px_-18px_rgba(15,23,42,0.3)] transition hover:shadow-[0_14px_30px_-18px_rgba(59,130,246,0.4)]"
              >
                {Icon ? (
                  <Icon className={`text-2xl ${accent} transition group-hover:scale-110`} />
                ) : (
                  <div className="h-6 w-6 rounded-md bg-slate-200" />
                )}
                <span className="line-clamp-2 px-1 text-center text-[11px] font-medium leading-tight text-slate-700">
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
