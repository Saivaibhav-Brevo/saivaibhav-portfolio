"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { SectionLabel } from "@/components/section-label";
import { TypingText } from "@/components/typing-text";
import { Magnetic } from "@/components/magnetic";
import { profile, typingRoles } from "@/data/portfolio";

const letters = profile.name.split("");

export function HeroCard() {
  return (
    <BentoCard className="col-span-12 row-span-2 p-10 md:p-14" cursorLabel="Hello">
      {/* Soft glow behind the name */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(34,197,94,0.18), rgba(34,197,94,0) 70%)",
        }}
      />
      {/* Moving beams */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-px left-0 right-0 mx-auto h-px w-[60%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(34,197,94,0.7), transparent)",
        }}
        animate={{ x: ["-30%", "30%", "-30%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <SectionLabel icon={<Sparkles className="h-3 w-3" />}>Frontend Engineer</SectionLabel>
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
            </span>
            <span className="text-xs font-medium text-white/70">{profile.status}</span>
          </div>
        </div>

        <div className="mt-10 md:mt-14">
          <h1 className="text-balance text-[clamp(2.6rem,9vw,7.2rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            {letters.map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.05 * i,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block text-gradient"
                style={{ whiteSpace: "pre" }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>

          <div className="mt-6 flex items-center gap-3 text-base md:text-lg">
            <span className="text-white/50">/</span>
            <span className="font-mono text-white/80">
              <TypingText words={typingRoles} />
            </span>
          </div>

          <p className="mt-8 max-w-2xl text-base text-white/60 md:text-lg">
            Building scalable web applications with React, Next.js and TypeScript.
            Focused on performance, design systems, and seamless user experiences.
          </p>
        </div>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-6 pt-10">
          <div className="flex flex-wrap items-center gap-6">
            <MetricStat label="Experience" value={profile.experienceYears + " Years"} />
            <div className="h-8 w-px bg-white/10" />
            <MetricStat label="Currently" value={profile.current} />
            <div className="h-8 w-px bg-white/10" />
            <MetricStat label="Previously" value={profile.previous.join(" · ")} />
          </div>

          <Magnetic>
            <a
              href="#contact"
              data-cursor="Say Hi"
              className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:rotate-45" />
              <span className="pointer-events-none absolute inset-0 shimmer-overlay" />
            </a>
          </Magnetic>
        </div>
      </div>
    </BentoCard>
  );
}

function MetricStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
        {label}
      </span>
      <span className="mt-1 text-sm font-medium text-white/90">{value}</span>
    </div>
  );
}
