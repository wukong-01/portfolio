"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";

const navItems = [
  { label: "Work", href: "#experience" },
  { label: "About", href: "#intro" },
  { label: "Contact", href: "#contact" },
  { label: "Chatbot", href: "#chatbot" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f5f5f7]/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 md:px-10">
        <a
          href="#"
          className="font-mono text-sm font-bold tracking-tight text-blue-600 transition hover:text-blue-500"
          aria-label="Home"
        >
          &lt;/&gt;
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Cao-Thanh-Binh-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Resume
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

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="border-t border-slate-200 bg-white px-4 pb-3 pt-2 sm:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex w-full rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Cao-Thanh-Binh-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex w-full rounded-xl bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
