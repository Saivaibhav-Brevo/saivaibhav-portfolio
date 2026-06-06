import { SiteHeader } from "@/components/site-header";
import { AboutCard } from "@/components/cards/about-card";
import { ProfileCard } from "@/components/cards/profile-card";
import { HeroCard } from "@/components/cards/hero-card";
import { StackCard } from "@/components/cards/stack-card";
import { GithubCard } from "@/components/cards/github-card";
import { ProjectsCard } from "@/components/cards/projects-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { ExploringCard } from "@/components/cards/exploring-card";
import { WritingCard } from "@/components/cards/writing-card";
import { HighlightsCard } from "@/components/cards/highlights-card";
import { ContactCard } from "@/components/cards/contact-card";

export default function Home() {
  return (
    <div id="top" className="relative mx-auto w-full max-w-[1280px] px-4 pb-24 sm:px-6">
      <SiteHeader />

      <section className="mt-10">
        {/* HERO — full width */}
        <div className="mb-4 grid grid-cols-12 gap-4">
          <HeroCard />
        </div>

        {/* About + Profile */}
        <div id="about" className="mb-4 grid grid-cols-12 gap-4">
          <AboutCard />
          <ProfileCard />
        </div>

        {/* Projects (left, 2 rows) + Stack + GitHub (right column) */}
        <div id="projects" className="mb-4 grid grid-cols-12 gap-4">
          <ProjectsCard />
          <div id="stack" className="col-span-12 md:col-span-5 grid grid-cols-1 gap-4">
            <StackCard />
            <GithubCard />
          </div>
        </div>

        {/* Experience + Exploring + Writing */}
        <div className="mb-4 grid grid-cols-12 gap-4">
          <div id="experience" className="col-span-12 md:col-span-6 contents md:block">
            <ExperienceCard />
          </div>
          <div id="exploring" className="contents">
            <ExploringCard />
          </div>
          <div id="writing" className="contents">
            <WritingCard />
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4 grid grid-cols-12 gap-4">
          <HighlightsCard />
        </div>

        {/* Contact */}
        <div className="grid grid-cols-12 gap-4">
          <ContactCard />
        </div>
      </section>

      <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/35 sm:flex-row">
        <span>© {new Date().getFullYear()} Saivaibhav K S — Bangalore, India</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
          Crafted with Next.js, Tailwind & Framer Motion
        </span>
      </footer>
    </div>
  );
}
