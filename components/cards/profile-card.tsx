"use client";

import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/brand-icons";
import { BentoCard } from "@/components/bento-card";
import { profile } from "@/data/portfolio";
import { Magnetic } from "@/components/magnetic";

const chips = [
  { icon: <MapPin className="h-3 w-3" />, label: profile.location },
  { icon: "🧠", label: "React + Next.js" },
  { icon: "💼", label: "Brevo" },
  { icon: "🇮🇳", label: "EN · हिंदी · ಕನ್ನಡ" },
  { icon: "⌨️", label: "TypeScript" },
];

export function ProfileCard() {
  return (
    <BentoCard className="p-6 md:p-7" cursorLabel="Profile">
      <div className="flex h-full flex-col gap-5">
        {/* Top row: status + Resume CTA */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs text-white/75">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.status}
          </span>

          <Magnetic strength={5}>
            <a
              href={profile.resume}
              download
              data-cursor="Resume"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-white/75 transition-colors hover:border-[#6366f1]/40 hover:bg-[#6366f1]/[0.08] hover:text-white"
            >
              Resume <Download className="h-3.5 w-3.5" />
            </a>
          </Magnetic>
        </div>

        {/* Identity row: photo + name + role */}
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <div
              aria-hidden
              className="absolute -inset-1.5 rounded-2xl opacity-70 blur-md animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(99,102,241,0.55), rgba(99,102,241,0) 55%, rgba(99,102,241,0.55))",
              }}
            />
            <div className="relative h-[88px] w-[88px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1a2a] to-[#0a0a0a]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={176}
                height={176}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">I&apos;m</div>
            <div className="mt-0.5 truncate text-2xl font-semibold tracking-tight text-white md:text-[26px]">
              {profile.name}
            </div>
            <div className="mt-1 text-sm text-white/55">
              a <span className="font-medium text-[#818cf8]">{profile.role}</span>
            </div>
          </div>
        </div>

        {/* Chip row */}
        <div className="flex flex-wrap gap-1.5">
          {chips.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[11px] text-white/70"
            >
              <span className="text-[#818cf8]">{c.icon}</span>
              {c.label}
            </span>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="mt-auto grid grid-cols-3 gap-2 pt-2">
          <SocialButton
            href={profile.github}
            label="GitHub"
            icon={<Github className="h-3.5 w-3.5" />}
          />
          <SocialButton
            href={profile.linkedin}
            label="LinkedIn"
            icon={<Linkedin className="h-3.5 w-3.5" />}
          />
          <SocialButton
            href={`mailto:${profile.email}`}
            label="Email"
            icon={<span className="text-sm leading-none">✉</span>}
          />
        </div>
      </div>
    </BentoCard>
  );
}

function SocialButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Magnetic strength={5}>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        data-cursor={label}
        className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-2 py-2 text-xs font-medium text-white/75 transition-all duration-300 hover:border-[#6366f1]/40 hover:bg-[#6366f1]/[0.08] hover:text-white"
      >
        {icon}
        {label}
      </a>
    </Magnetic>
  );
}
