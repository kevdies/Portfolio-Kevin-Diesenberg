import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, poppins } from "@/lib/fonts";
import { MainLayout } from "@/components/layout/MainLayout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const isProduction = process.env.NODE_ENV === "production";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kevindiesenberg.com"),
  title: "Kevin Diesenberg - Web Developer & Software Engineer",
  description:
    "Web Developer & Software Engineer specializing in enterprise media platforms and video analytics APIs. Built features serving 6 NBC, CBS, and ABC affiliate news stations for Graham Media Group. Based in Michigan.",
  keywords: [
    "Kevin Diesenberg",
    "Web Developer",
    "Software Engineer",
    "Graham Media Group",
    "Broadcast Media Technology",
    "Enterprise Media Platforms",
    "Video Analytics APIs",
    "ArcXP CMS",
    "Nielsen DCR",
    "Chartbeat",
    "Anyclip",
    "Bitmovin",
    "NBC CBS ABC Affiliates",
    "React",
    "TypeScript",
    "Next.js",
    "Michigan",
  ],
  authors: [
    { name: "Kevin Diesenberg", url: "https://www.kevindiesenberg.com" },
  ],
  creator: "Kevin Diesenberg",
  openGraph: {
    title: "Kevin Diesenberg - Web Developer & Software Engineer",
    description:
      "Web Developer & Software Engineer specializing in enterprise media platforms and video analytics APIs for Graham Media Group's NBC, CBS, and ABC affiliate stations.",
    url: "https://www.kevindiesenberg.com",
    siteName: "Kevin Diesenberg Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Kevin Diesenberg, a web developer from Michigan, with his dogs enjoying a sunny day by Lake Huron.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Diesenberg - Web Developer & Software Engineer",
    description:
      "Web Developer & Software Engineer specializing in enterprise media platforms and video analytics APIs for Graham Media Group's NBC, CBS, and ABC affiliate stations.",
    creator: "@KevinDiesenberg",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Kevin Diesenberg, a web developer from Michigan, with his dogs enjoying a sunny day by Lake Huron.",
      },
    ],
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
    icon: [{ url: "/favicon.ico" }],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="bg-surface-primary text-hierarchy-primary antialiased">
        <MainLayout>{children}</MainLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
