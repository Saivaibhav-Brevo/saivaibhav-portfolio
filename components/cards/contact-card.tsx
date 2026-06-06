"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { SectionLabel } from "@/components/section-label";
import { Magnetic } from "@/components/magnetic";
import { profile } from "@/data/portfolio";

export function ContactCard() {
  return (
    <BentoCard
      className="col-span-12 p-10 md:p-14"
      cursorLabel="Reach out"
      tilt={false}
    >
      {/* Big accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[80%] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(34,197,94,0.35), rgba(34,197,94,0) 70%)",
        }}
      />

      <div id="contact" className="relative flex flex-col items-center gap-8 text-center">
        <SectionLabel icon={<Sparkles className="h-3 w-3" />}>Let&apos;s connect</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl"
        >
          Let&apos;s Build <span className="text-gradient-accent">Something Amazing</span>
        </motion.h2>

        <p className="max-w-2xl text-balance text-white/55 md:text-lg">
          Open to frontend engineering opportunities, collaborations and
          technical discussions. Drop a line — I usually reply within 24 hours.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              data-cursor="Email"
              className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" />
              Email me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:rotate-45" />
              <span className="pointer-events-none absolute inset-0 shimmer-overlay" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="GitHub"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/85 transition-colors hover:border-white/30 hover:text-white"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="LinkedIn"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/85 transition-colors hover:border-white/30 hover:text-white"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </Magnetic>
        </div>

        <div className="mt-6 flex flex-col items-center gap-1 text-xs text-white/35">
          <span>{profile.email}</span>
          <span>· {profile.location} ·</span>
        </div>
      </div>
    </BentoCard>
  );
}
