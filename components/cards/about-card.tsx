"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { SectionLabel } from "@/components/section-label";
import { aboutText, aboutSecondary } from "@/data/portfolio";

export function AboutCard() {
  return (
    <BentoCard className="col-span-12 md:col-span-7 p-8 md:p-10" cursorLabel="About">
      <div className="flex h-full flex-col gap-6">
        <SectionLabel icon={<User className="h-3 w-3" />}>About Me</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-balance text-2xl font-medium leading-snug text-white md:text-3xl"
        >
          Less clutter, <span className="text-gradient-accent">more clarity.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance text-[15px] leading-relaxed text-white/60"
        >
          {aboutText}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-[15px] leading-relaxed text-white/45"
        >
          {aboutSecondary}
        </motion.p>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {[
            "Bangalore, India",
            "Frontend Engineer",
            "React + Next.js",
            "TypeScript",
            "Performance",
          ].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs text-white/70 transition-colors hover:border-white/20 hover:text-white"
            >
              <span className="h-1 w-1 rounded-full bg-[#6366f1]" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
