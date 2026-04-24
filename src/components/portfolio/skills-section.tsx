"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/portfolio/section-title";
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
  "Microfrontend Architecture": SiMicrodotblog,
  "CI/CD Pipeline": SiGithubactions,
};

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <section id="skills" className="space-y-10">
      <SectionTitle title="Skills" hint="Toolbox for shipping reliable frontend products." />

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, idx) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass-card rounded-2xl p-5"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-400">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => {
                const Icon = skillIcons[item];
                return (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {Icon ? <Icon className="text-sm text-slate-400" /> : null}
                    {item}
                  </span>
                );
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
