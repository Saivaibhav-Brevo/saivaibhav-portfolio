import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackgroundFX } from "@/components/background-fx";
import { CommandPalette } from "@/components/command-palette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://saivaibhav.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saivaibhav K S — Frontend Engineer",
    template: "%s · Saivaibhav K S",
  },
  description:
    "Frontend Engineer with 4+ years building scalable web applications with React, Next.js and TypeScript. Currently at Brevo.",
  keywords: [
    "Saivaibhav K S",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Brevo",
    "Bangalore",
    "Portfolio",
  ],
  authors: [{ name: "Saivaibhav K S" }],
  creator: "Saivaibhav K S",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Saivaibhav K S — Frontend Engineer",
    description:
      "Frontend Engineer building scalable web apps with React, Next.js & TypeScript.",
    siteName: "Saivaibhav K S",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saivaibhav K S — Frontend Engineer",
    description:
      "Frontend Engineer building scalable web apps with React, Next.js & TypeScript.",
    creator: "@saivaibhav",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saivaibhav K S",
  jobTitle: "Frontend Engineer",
  url: siteUrl,
  worksFor: { "@type": "Organization", name: "Brevo" },
  alumniOf: [
    { "@type": "Organization", name: "CARS24" },
    { "@type": "Organization", name: "Juspay" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "India",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Performance Engineering",
    "Design Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} has-custom-cursor antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-[#050505] text-[#ededed]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <BackgroundFX />
        <ScrollProgress />
        <CustomCursor />
        <CommandPalette />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
