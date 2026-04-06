"use client";

import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";
import avatar from "@/images/avatar.jpg";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export function HeroSection() {
  return (
    <section className="-mt-8 flex min-h-[72vh] flex-col items-center justify-center text-center md:-mt-10 md:min-h-[74vh]">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative space-y-6"
      >
        <p
          className={`${bebasNeue.className} -mt-13 text-[4rem] uppercase leading-none tracking-[0.03em] text-white/28 sm:-mt-16 sm:text-[6rem] md:-mt-22 md:text-[8.5rem]`}
        >
          Hi, I&apos;m
        </p>
        <div className="absolute left-1/2 top-[-0.7rem] z-20 h-32 w-32 -translate-x-1/2 overflow-hidden rounded-[2.25rem] border-4 border-white/25 shadow-2xl shadow-violet-900/40 sm:top-[-0.35rem] sm:h-44 sm:w-44 md:top-[0rem] md:h-56 md:w-56">
          <Image
            src={avatar}
            alt="Portrait of Cao Thanh Binh"
            fill
            priority
            sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, 224px"
            className="object-cover object-[50%_28%]"
          />
        </div>
        <h1
          className={`${bebasNeue.className} relative z-30 mt-20 text-[4.1rem] uppercase leading-none tracking-[0.03em] text-white sm:mt-26 sm:text-[6.4rem] md:mt-32 md:text-[8.5rem]`}
        >
          Cao Thanh Binh
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-300 md:text-xl">
          Frontend engineer who loves clean architecture, fast interfaces, and meaningful user experiences.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:binh17122001@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-300"
          >
            <HiEnvelope className="text-base" />
            Email me
          </a>
          <a
            href="https://github.com/ctbinh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-300 hover:bg-violet-500/20"
          >
            <FaGithub className="text-base" />
            View GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
