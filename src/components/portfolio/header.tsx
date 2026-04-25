"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3, HiOutlineChatBubbleOvalLeft, HiXMark } from "react-icons/hi2";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navItems: readonly NavItem[] = [
  { label: "Work", href: "#experience" },
  { label: "Resume", href: "/Cao-Thanh-Binh-Resume.pdf", external: true },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative z-50 bg-transparent"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 md:px-10">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight text-slate-900 transition hover:text-slate-700"
          aria-label="Home"
        >
          Cao Thanh Binh
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            <HiOutlineChatBubbleOvalLeft className="text-base" />
            Let&apos;s Talk
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:text-slate-900 sm:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiXMark className="text-lg" /> : <HiBars3 className="text-lg" />}
        </button>
      </div>

      {/* Mobile dropdown — overlay so it doesn't push content */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 top-full z-40 mx-4 mt-1 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)] sm:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                onClick={() => setMenuOpen(false)}
                className="flex w-full rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              <HiOutlineChatBubbleOvalLeft className="text-base" />
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
