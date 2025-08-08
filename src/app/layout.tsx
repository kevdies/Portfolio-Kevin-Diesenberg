import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import MainLayout from "@/components/layout/MainLayout";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

const isProduction = process.env.NODE_ENV === "production";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#a855f7" },
  ],
};

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Diesenberg - Web Developer & Software Engineer",
    description:
      "Web Developer passionate about building accessible, performant applications using React, TypeScript, and modern tooling.",
    creator: "@KevinDiesenberg",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-black text-gray-200 antialiased">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
