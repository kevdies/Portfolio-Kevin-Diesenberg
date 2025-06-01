import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import StructuredData from "@/components/StructuredData";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: true, // Reduces layout shift
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
  display: "swap",
  adjustFontFallback: true, // Reduces layout shift
  preload: true,
});

const isProduction = process.env.NODE_ENV === "production";

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
    "Tailwind CSS",
    "Michigan",
    "Frontend Developer",
    "Accessibility",
    "Performance",
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
    // images: [ // Add when you have OG images
    //   {
    //     url: "https://www.kevindiesenberg.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Kevin Diesenberg - Web Developer",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Diesenberg - Web Developer & Software Engineer",
    description:
      "Web Developer passionate about building accessible, performant applications using React, TypeScript, and modern tooling.",
    creator: "@KevinDiesenberg",
    // images: ["https://www.kevindiesenberg.com/og-image.jpg"], // Add when you have OG images
  },
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
      },
  alternates: {
    canonical: "https://www.kevindiesenberg.com",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5, // Allow zooming for accessibility
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#a78bfa" },
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-background text-text antialiased">
        <StructuredData />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
        >
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
