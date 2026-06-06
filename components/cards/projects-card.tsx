"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { SectionLabel } from "@/components/section-label";
import { projects, type Project } from "@/data/portfolio";

export function ProjectsCard() {
  return (
    <BentoCard
      className="p-6"
      cursorLabel="Projects"
    >
      <div className="flex h-full flex-col gap-6">
        <div className="flex items-center justify-between">
          <SectionLabel icon={<Briefcase className="h-3 w-3" />}>Featured Projects</SectionLabel>
          <span className="text-[11px] text-white/40">2022 — 2026</span>
        </div>

        <div className="flex flex-1 flex-col gap-3.5">
          {projects.map((p, i) => (
            <ProjectRow key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href="#"
      data-cursor="View"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -2 }}
      className="group/proj relative flex flex-1 items-stretch overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
    >
      {/* Preview tile */}
      <div className="relative mr-5 hidden h-auto w-40 shrink-0 overflow-hidden rounded-xl border border-white/[0.06] sm:block">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
        <ProjectPreview kind={project.preview} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="truncate text-base font-semibold text-white md:text-lg">
              {project.title}
            </h3>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-white/40 transition-all duration-300 group-hover/proj:rotate-45 group-hover/proj:text-[#6366f1]" />
          </div>
          <p className="mt-1.5 line-clamp-2 text-xs text-white/55 md:text-sm">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] font-medium text-white/65"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

function ProjectPreview({ kind }: { kind: string }) {
  if (kind === "analytics") {
    return (
      <div className="relative flex h-full w-full items-end justify-around p-3">
        {[40, 70, 55, 90, 65, 80, 50].map((h, i) => (
          <div
            key={i}
            className="w-2 rounded-t-sm bg-white/80 shadow-[0_0_12px] shadow-white/40"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    );
  }
  if (kind === "system") {
    return (
      <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-1.5 p-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="rounded-md border border-white/20 bg-white/10 backdrop-blur"
          />
        ))}
      </div>
    );
  }
  // engagement default
  return (
    <div className="relative h-full w-full p-3">
      <svg viewBox="0 0 100 60" className="h-full w-full">
        <path
          d="M0,45 C20,25 35,55 55,30 S85,15 100,25"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M0,45 C20,25 35,55 55,30 S85,15 100,25 L100,60 L0,60 Z"
          fill="white"
          opacity="0.18"
        />
      </svg>
    </div>
  );
}
