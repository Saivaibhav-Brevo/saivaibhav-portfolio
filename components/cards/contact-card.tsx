"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Mail, Sparkles } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/brand-icons";
import { BentoCard } from "@/components/bento-card";
import { SectionLabel } from "@/components/section-label";
import { Magnetic } from "@/components/magnetic";
import { profile } from "@/data/portfolio";

export function ContactCard() {
  return (
    <BentoCard className="p-6 md:p-7" cursorLabel="Reach out" tilt={false}>
      {/* Accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[260px] w-[120%] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.45), rgba(99,102,241,0) 70%)",
        }}
      />

      <div id="contact" className="relative flex h-full flex-col items-center gap-4 text-center">
        {/* Crown icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#6366f1]/[0.12]">
          <Sparkles className="h-4 w-4 text-[#818cf8]" />
        </div>

        <SectionLabel>Let&apos;s connect</SectionLabel>

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-balance text-xl font-semibold leading-tight tracking-tight text-white"
        >
          Let&apos;s Work <span className="text-gradient-accent">Together</span>
        </motion.h3>

        <p className="text-balance text-[12px] text-white/45">
          Open to frontend roles, collabs & technical chats.
        </p>

        <div className="mt-auto flex w-full flex-col gap-2 pt-2">
          <Magnetic strength={4} className="w-full">
            <a
              href={`mailto:${profile.email}`}
              data-cursor="Email"
              className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#6366f1] px-4 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.01]"
            >
              <Mail className="h-3.5 w-3.5" />
              Email Me
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:rotate-45" />
              <span className="pointer-events-none absolute inset-0 shimmer-overlay" />
            </a>
          </Magnetic>
          <div className="grid grid-cols-2 gap-2">
            <Magnetic strength={4} className="w-full">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="GitHub"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.02] px-2 py-2 text-xs font-medium text-white/80 transition-colors hover:border-white/25 hover:text-white"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            </Magnetic>
            <Magnetic strength={4} className="w-full">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="LinkedIn"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.02] px-2 py-2 text-xs font-medium text-white/80 transition-colors hover:border-white/25 hover:text-white"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </Magnetic>
          </div>
          <Magnetic strength={4} className="w-full">
            <a
              href="#"
              data-cursor="Book"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.02] px-3 py-2 text-xs font-medium text-white/75 transition-colors hover:border-[#6366f1]/40 hover:bg-[#6366f1]/[0.08] hover:text-white"
            >
              <Calendar className="h-3.5 w-3.5" />
              Schedule a Call
            </a>
          </Magnetic>
        </div>
      </div>
    </BentoCard>
  );
}
