import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { Analytics } from "@vercel/analytics/react";

// FontAwesome CSS fix
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import StructuredData from "@/components/StructuredData";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Kevin Diesenberg - Web Developer & Software Engineer",
  description:
    "Web Developer passionate about building accessible, performant applications using React, TypeScript, and modern tooling. Based in Michigan.",
  keywords: [
    "Kevin Diesenberg",
    "Web Developer",
    "Software Engineer",
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Michigan",
    "Frontend Developer",
  ],
  authors: [
    { name: "Kevin Diesenberg", url: "https://www.kevindiesenberg.com" },
  ],
  creator: "Kevin Diesenberg",
  openGraph: {
    title: "Kevin Diesenberg - Web Developer & Software Engineer",
    description:
      "Web Developer passionate about building accessible, performant applications using React, TypeScript, and modern tooling.",
    url: "https://www.kevindiesenberg.com",
    siteName: "Kevin Diesenberg Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Diesenberg - Web Developer & Software Engineer",
    description:
      "Web Developer passionate about building accessible, performant applications using React, TypeScript, and modern tooling.",
    creator: "@KevinDiesenberg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code", // Add when you have Google Search Console set up
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
