"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import avatar from "@/images/avatar.jpg";

const navItems = [
  {
    label: "Resume",
    href: "/Cao-Thanh-Binh-Resume.pdf",
    external: true,
  },
  {
    label: "Work",
    href: "#experience",
    external: false,
  },
  {
    label: "About Me",
    href: "#intro",
    external: false,
  },
  {
    label: "Contact",
    href: "#contact",
    external: false,
  },
  {
    label: "Chatbot",
    href: "#chatbot",
    external: false,
  },
] as const;

export function Header() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 flex items-center justify-between px-1 py-2"
    >
      <a
        href="#"
        className="relative h-10 w-10 overflow-hidden rounded-full border border-white/30 bg-black/55"
      >
        <Image
          src={avatar}
          alt="Cao Thanh Binh avatar"
          fill
          sizes="40px"
          className="object-cover object-[50%_28%]"
        />
      </a>
      <div className="rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-md">
        <div className="flex items-center gap-4 text-xs font-medium text-slate-300 md:text-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="transition hover:text-white"
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
