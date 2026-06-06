import { SiteHeader } from "@/components/site-header";
import { TaglineStrip } from "@/components/tagline-strip";
import { AboutCard } from "@/components/cards/about-card";
import { ProfileCard } from "@/components/cards/profile-card";
import { StackCard } from "@/components/cards/stack-card";
import { GithubCard } from "@/components/cards/github-card";
import { ProjectsCard } from "@/components/cards/projects-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { ExploringCard } from "@/components/cards/exploring-card";
import { WritingCard } from "@/components/cards/writing-card";
import { HighlightsCard } from "@/components/cards/highlights-card";
import { ContactCard } from "@/components/cards/contact-card";
import { MiniStatCard } from "@/components/cards/mini-stat-card";
import { Award, Layers, Users } from "lucide-react";

export default function Home() {
  return (
    <div id="top" className="relative mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6">
      <SiteHeader />
      <TaglineStrip />

      {/* Above-the-fold dense 3-column bento */}
      <section className="mt-4 grid grid-cols-12 gap-3.5 md:gap-4">
        {/* LEFT column ─ 5/12: stats row + profile + stack */}
        <div id="about" className="col-span-12 flex flex-col gap-3.5 md:col-span-5 md:gap-4">
          <div className="grid grid-cols-3 gap-3.5 md:gap-4">
            <MiniStatCard value="4" label="Years" icon={<Award className="h-3 w-3" />} />
            <MiniStatCard value="20" label="Projects" icon={<Layers className="h-3 w-3" />} />
            <MiniStatCard value="100K" label="Users" icon={<Users className="h-3 w-3" />} />
          </div>
          <ProfileCard />
          <div id="stack">
            <StackCard />
          </div>
        </div>

        {/* MIDDLE column ─ 4/12: about + github + writing */}
        <div className="col-span-12 flex flex-col gap-3.5 md:col-span-4 md:gap-4">
          <AboutCard />
          <GithubCard />
          <div id="writing">
            <WritingCard />
          </div>
        </div>

        {/* RIGHT column ─ 3/12: experience + exploring + contact */}
        <div className="col-span-12 flex flex-col gap-3.5 md:col-span-3 md:gap-4">
          <div id="experience">
            <ExperienceCard />
          </div>
          <div id="exploring">
            <ExploringCard />
          </div>
          <ContactCard />
        </div>
      </section>

      {/* Below-the-fold: projects (wide) + highlights (compact) */}
      <section
        id="projects"
        className="mt-3.5 grid grid-cols-12 gap-3.5 md:mt-4 md:gap-4"
      >
        <div className="col-span-12 md:col-span-8">
          <ProjectsCard />
        </div>
        <div className="col-span-12 md:col-span-4">
          <HighlightsCard />
        </div>
      </section>

      <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/35 sm:flex-row">
        <span>© {new Date().getFullYear()} Saivaibhav K S — Bangalore, India</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
          Crafted with Next.js, Tailwind & Framer Motion
        </span>
      </footer>
    </div>
  );
}
