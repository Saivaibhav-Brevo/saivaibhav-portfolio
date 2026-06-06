"use client";

import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { profile } from "@/data/portfolio";
import { Magnetic } from "@/components/magnetic";

export function ProfileCard() {
  return (
    <BentoCard className="col-span-12 md:col-span-5 p-8 md:p-10" cursorLabel="Profile">
      <div className="flex h-full flex-col items-center justify-between gap-6 text-center">
        <div className="relative">
          {/* Conic ring */}
          <div
            aria-hidden
            className="absolute -inset-2 rounded-full opacity-70 blur-md animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(34,197,94,0.5), rgba(34,197,94,0) 60%, rgba(34,197,94,0.5))",
            }}
          />
          <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-[#111] to-[#0a0a0a]">
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
              {profile.initials}
            </span>
          </div>
          {/* Online dot */}
          <span className="absolute bottom-1 right-1 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-[#22c55e]">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#22c55e] opacity-50" />
          </span>
        </div>

        <div className="space-y-1">
          <div className="text-lg font-semibold text-white">{profile.name}</div>
          <div className="text-sm text-white/55">{profile.role}</div>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/45">
            <MapPin className="h-3 w-3" /> {profile.location}
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-2">
          <IconLink href={profile.github} label="GitHub" icon={<Github className="h-4 w-4" />} />
          <IconLink href={profile.linkedin} label="LinkedIn" icon={<Linkedin className="h-4 w-4" />} />
          <IconLink href={`mailto:${profile.email}`} label="Email" icon={<Mail className="h-4 w-4" />} />
          <IconLink href={profile.resume} label="Resume" icon={<Download className="h-4 w-4" />} download />
        </div>
      </div>
    </BentoCard>
  );
}

function IconLink({
  href,
  label,
  icon,
  download,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  download?: boolean;
}) {
  return (
    <Magnetic strength={6} className="w-full">
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        download={download}
        data-cursor={label}
        className="group/link inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2.5 text-xs font-medium text-white/75 transition-all duration-300 hover:border-[#22c55e]/40 hover:bg-[#22c55e]/[0.08] hover:text-white"
      >
        <span className="transition-transform duration-300 group-hover/link:scale-110">{icon}</span>
        {label}
      </a>
    </Magnetic>
  );
}
