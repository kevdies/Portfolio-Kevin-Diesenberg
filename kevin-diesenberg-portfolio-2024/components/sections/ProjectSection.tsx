"use client";

import React from "react";
import Image from "next/image";
import Section from "../ui/Section";
import { Card } from "../ui/Card";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { cn } from "../../utils/utils";
import type { Project } from "../../types";

import brgLeaderboard from "@/assets/images/Blue_Ridge_Games_Leaderboard.png";
import pinUploadModal from "@/assets/images/Pin_Upload_Success_Modal_Mobile.png";
import newsLetterSignUpCard from "@/assets/images/Newsletter_Sign_Up_Card.png";

// Extend Project to include multiple URLs
interface LeaderboardUrl {
  label: string;
  url: string;
}
interface ProjectWithUrls extends Project {
  liveUrls?: LeaderboardUrl[];
}

export interface ProjectSectionProps {
  id?: string;
}

const professionalProjects: ProjectWithUrls[] = [
  {
    name: "Photo Contest Leaderboard",
    image: brgLeaderboard,
    alt: "Leaderboard UI for photo contests",
    description:
      "This reusable leaderboard powers both the Blue Ridge Games and My Hometown's Best photo contests—displaying real-time user rankings per category with contest-specific rules, accessibility support, and responsive design.",
    features: [
      "React & TypeScript",
      "Configurable contest rules",
      "useSWR for live data updates",
      "Hidden Overall admin view",
      "Snapscroll for smooth mobile navigation",
      "ARIA roles & keyboard navigation",
      "Fully responsive UI",
    ],
    liveUrls: [
      {
        label: "View Blue Ridge Games Leaderboard",
        url: "https://www.wsls.com/pinit/blue-ridge-games/leaderboard/",
      },
      {
        label: "View My Hometown's Best Leaderboard",
        url: "https://www.wsls.com/pinit/my-hometowns-best/leaderboard/",
      },
    ],
  },
  {
    name: "Pin Upload Success Modal",
    image: pinUploadModal,
    alt: "Mobile view of pin upload success modal",
    description:
      "User-friendly modal to confirm pin uploads, with retry flow and Web Share API (plus clipboard fallback), styled via theming and announced via ARIA live regions.",
    features: [
      "React & TypeScript",
      "Web Share API + clipboard fallback",
      "Built-in retry flow",
      "Styled-components theming",
      "Smooth transitions & ARIA live updates",
    ],
    demo: "#",
  },
  {
    name: "Newsletter Sign-Up Card",
    image: newsLetterSignUpCard,
    alt: "Newsletter sign-up card embedded in article",
    description:
      "Dynamic sign-up card embedded in side rails and articles, with email regex validation, personalized messages, full screen-reader & keyboard support, and redirects on success.",
    features: [
      "Email regex validation & timeout handling",
      "Embedded in side rails & articles",
      "Dynamic success/error messaging",
      "Screen-reader & keyboard support",
      "Redirects to newsletter page",
    ],
    demo: "#",
  },
];

const ProjectSection: React.FC<ProjectSectionProps> = ({
  id = "professional-projects",
}) => {
  return (
    <Section id={id} title="Professional Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {professionalProjects.map((proj, idx) => (
          <Card key={idx} className="flex flex-col h-full">
            <div className="relative w-full h-48 mb-md rounded-md overflow-hidden bg-surface-hover">
              <Image
                src={proj.image}
                alt={proj.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-4"
              />
            </div>
            <h3 className="text-xl font-semibold mb-sm">{proj.name}</h3>
            <p className="mb-md flex-grow text-textMuted text-sm leading-relaxed">
              {proj.description}
            </p>
            <div className="mb-md">
              {proj.features.slice(0, 3).map((feat, i) => (
                <span
                  key={i}
                  className={cn(
                    "inline-block mr-2 mb-2",
                    "px-3 py-1 rounded-full",
                    "bg-surface border border-border",
                    "text-xs text-textMuted"
                  )}
                >
                  {feat}
                </span>
              ))}
            </div>
            <div className="mt-auto space-y-2">
              {proj.liveUrls ? (
                proj.liveUrls.map(({ label, url }, i) => (
                  <Button
                    key={i}
                    asChild
                    variant={i === 0 ? "default" : "secondary"}
                    className="w-full"
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      <Icon name="eye" className="mr-2" size="sm" />
                      {label.replace("View ", "")}
                    </a>
                  </Button>
                ))
              ) : (
                <Button
                  asChild
                  variant="default"
                  className="w-full"
                  disabled={proj.demo === "#"}
                >
                  <a
                    href={proj.demo!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    <Icon name="play" className="mr-2" size="sm" />
                    {proj.demo === "#" ? "Demo Coming Soon" : "View Demo"}
                  </a>
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectSection;
