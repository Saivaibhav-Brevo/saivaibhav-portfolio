export const profile = {
  name: "Saivaibhav K S",
  role: "Frontend Engineer",
  location: "Bangalore, India",
  experienceYears: "4+",
  status: "Available for work",
  email: "kssaivaibhav@brevo.com",
  github: "https://github.com/Saivaibhav-Brevo",
  linkedin: "https://www.linkedin.com/in/saivaibhav-k-s/",
  resume: "/resume.pdf",
  current: "Brevo",
  previous: ["CARS24", "Juspay"],
  initials: "SV",
};

export const aboutText =
  "Frontend Engineer with 4+ years of experience building scalable web applications and customer-facing products. Experienced in React, Next.js, TypeScript and modern frontend architecture. Passionate about performance optimization, design systems and creating seamless user experiences.";

export const aboutSecondary =
  "Currently building products at Brevo and previously contributed to engineering teams at CARS24 and Juspay.";

export const typingRoles = [
  "React Developer",
  "Next.js Specialist",
  "Frontend Architect",
  "Performance Enthusiast",
  "UI Engineer",
];

export type Skill = { name: string; group: "core" | "state" | "tooling" | "test" | "runtime" };

export const skills: Skill[] = [
  { name: "React", group: "core" },
  { name: "Next.js", group: "core" },
  { name: "TypeScript", group: "core" },
  { name: "JavaScript", group: "core" },
  { name: "Tailwind", group: "core" },
  { name: "Redux", group: "state" },
  { name: "Zustand", group: "state" },
  { name: "React Query", group: "state" },
  { name: "Node.js", group: "runtime" },
  { name: "Webpack", group: "tooling" },
  { name: "Jest", group: "test" },
  { name: "Cypress", group: "test" },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  accent: string;
  preview: string;
};

export const projects: Project[] = [
  {
    title: "Merchant Analytics Platform",
    description:
      "Built scalable analytics dashboards enabling merchants to track subscriptions, revenue and customer metrics.",
    tech: ["React", "TypeScript", "Redux"],
    accent: "from-emerald-500/30 via-emerald-500/0 to-transparent",
    preview: "analytics",
  },
  {
    title: "Design System",
    description:
      "Created reusable component libraries and shared UI architecture across multiple product teams.",
    tech: ["React", "Storybook", "TypeScript"],
    accent: "from-violet-500/30 via-violet-500/0 to-transparent",
    preview: "system",
  },
  {
    title: "Customer Engagement Dashboard",
    description:
      "Built customer-facing interfaces improving engagement and operational efficiency.",
    tech: ["Next.js", "Tailwind", "React Query"],
    accent: "from-sky-500/30 via-sky-500/0 to-transparent",
    preview: "engagement",
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Brevo",
    role: "Frontend Engineer",
    period: "2025 — Present",
    bullets: [
      "Building SaaS products used by 500k+ businesses",
      "Performance optimization across critical user flows",
      "Component systems and shared frontend architecture",
    ],
  },
  {
    company: "CARS24",
    role: "Frontend Engineer",
    period: "2023 — 2025",
    bullets: [
      "Merchant dashboards with real-time analytics",
      "Frontend architecture for internal tooling",
      "Reusable internal component libraries",
    ],
  },
  {
    company: "Juspay",
    role: "Software Engineer",
    period: "2022 — 2023",
    bullets: [
      "Payments UI for high-throughput merchants",
      "Frontend development on checkout surfaces",
      "Bundle + runtime performance improvements",
    ],
  },
];

export type GitHubStat = { label: string; value: number; suffix?: string };

export const githubStats: GitHubStat[] = [
  { label: "Contributions", value: 1240 },
  { label: "Repositories", value: 38 },
  { label: "Pull Requests", value: 286 },
  { label: "Stars", value: 412 },
];

export const exploring = [
  "AI Assisted Development",
  "Micro Frontends",
  "React Server Components",
  "System Design",
  "Performance Engineering",
];

export type Article = { title: string; readingTime: string; topic: string };

export const articles: Article[] = [
  {
    title: "Building Scalable React Applications",
    readingTime: "8 min read",
    topic: "Architecture",
  },
  {
    title: "Frontend Performance Optimization",
    readingTime: "6 min read",
    topic: "Performance",
  },
  {
    title: "Modern Next.js Architecture",
    readingTime: "10 min read",
    topic: "Next.js",
  },
];

export const highlights = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "100K+", label: "Users Impacted" },
  { value: "99+", label: "Performance Scores" },
];
