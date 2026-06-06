"use client";

import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import { profile } from "@/data/portfolio";

const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-3 z-50 mx-auto mt-3 flex w-full max-w-[1280px] items-center justify-between rounded-full border border-white/[0.08] bg-[#0a0a0a]/70 px-3 py-2 backdrop-blur-xl"
    >
      <a
        href="#top"
        data-cursor="Home"
        className="flex items-center gap-2 pl-2 pr-3 text-sm font-semibold tracking-tight text-white"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] text-[11px] font-bold text-black">
          {profile.initials}
        </span>
        <span className="hidden sm:inline">{profile.name}</span>
      </a>

      <nav className="hidden items-center gap-1 md:flex">
        {nav.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            className="rounded-full px-3 py-1.5 text-xs font-medium text-white/65 transition-colors hover:bg-white/[0.04] hover:text-white"
          >
            {n.label}
          </a>
        ))}
      </nav>

      <Magnetic strength={6}>
        <a
          href={`mailto:${profile.email}`}
          data-cursor="Email"
          className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/[0.12]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
          Get in touch
        </a>
      </Magnetic>
    </motion.header>
  );
}
