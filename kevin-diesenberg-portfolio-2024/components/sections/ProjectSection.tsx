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
  priority?: boolean; // Mark high-priority features
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
      "useSWR for live data updates",
      "ARIA roles & keyboard navigation",
      "Configurable contest rules",
      "Hidden Overall admin view",
      "Snapscroll for smooth mobile navigation",
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
    priority: true,
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
      "ARIA live updates",
      "Built-in retry flow",
      "Styled-components theming",
      "Smooth transitions",
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
      "Screen-reader & keyboard support",
      "Dynamic success/error messaging",
      "Embedded in side rails & articles",
      "Redirects to newsletter page",
    ],
    demo: "#",
  },
];

const ProjectSection: React.FC<ProjectSectionProps> = ({
  id = "professional-projects",
}) => {
  const [expandedProjects, setExpandedProjects] = React.useState<Set<number>>(
    new Set()
  );

  const toggleFeatures = (projectIndex: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectIndex)) {
      newExpanded.delete(projectIndex);
    } else {
      newExpanded.add(projectIndex);
    }
    setExpandedProjects(newExpanded);
  };
  return (
    <Section id={id} title="">
      <div className="text-center mb-xl">
        <h2 className="text-h2 font-heading font-semibold gradient-text mb-md">
          Professional Projects
        </h2>
        <div className="section-separator" />
        <p className="text-lg text-textMuted max-w-2xl mx-auto">
          Recent work at Graham Media Group, building features for millions of
          daily users
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {professionalProjects.map((proj, idx) => (
          <Card key={idx} className="flex flex-col h-full group">
            {/* Image with enhanced hover effect */}
            <div className="relative w-full h-48 mb-md rounded-md overflow-hidden bg-surface-hover">
              <Image
                src={proj.image}
                alt={proj.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
              {/* Optional: subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-heading font-semibold mb-sm text-emphasis">
              {proj.name}
            </h3>

            <p className="mb-md flex-grow text-textMuted text-sm leading-relaxed">
              {proj.description}
            </p>

            {/* Enhanced features display - show top 2 prominently */}
            <div className="mb-md">
              {/* Always show first 2 features */}
              {proj.features.slice(0, 2).map((feat, i) => (
                <span
                  key={i}
                  className={cn(
                    "inline-block mr-2 mb-2",
                    "px-3 py-1 rounded-full",
                    "bg-surface border border-border",
                    "text-xs text-text font-medium",
                    "transition-colors duration-200",
                    "hover:border-border-hover"
                  )}
                >
                  {feat}
                </span>
              ))}

              {/* Show remaining features if expanded */}
              {expandedProjects.has(idx) &&
                proj.features.slice(2).map((feat, i) => (
                  <span
                    key={i + 2}
                    className={cn(
                      "inline-block mr-2 mb-2",
                      "px-3 py-1 rounded-full",
                      "bg-surface border border-border",
                      "text-xs text-text font-medium",
                      "transition-all duration-200",
                      "animate-in fade-in slide-in-from-left-1"
                    )}
                  >
                    {feat}
                  </span>
                ))}

              {/* Expandable toggle */}
              {proj.features.length > 2 && (
                <button
                  onClick={() => toggleFeatures(idx)}
                  className={cn(
                    "text-xs text-primary hover:text-primary-start",
                    "transition-colors duration-200",
                    "focus-ring rounded px-1 py-0.5",
                    "font-medium"
                  )}
                  aria-label={
                    expandedProjects.has(idx)
                      ? `Hide additional features for ${proj.name}`
                      : `Show ${proj.features.length - 2} more features for ${
                          proj.name
                        }`
                  }
                >
                  {expandedProjects.has(idx)
                    ? `Show less`
                    : `+${proj.features.length - 2} more features`}
                </button>
              )}
            </div>

            {/* Enhanced CTA buttons */}
            <div className="mt-auto space-y-2">
              {proj.liveUrls ? (
                proj.liveUrls.map(({ label, url }, i) => (
                  <Button
                    key={i}
                    asChild
                    variant={i === 0 ? "default" : "secondary"}
                    className={cn(
                      "w-full",
                      i === 0 && "font-semibold" // Emphasize primary CTA
                    )}
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center focus-ring"
                    >
                      <Icon name="eye" className="mr-2" size="sm" />
                      {label.replace(`View `, ``)}
                    </a>
                  </Button>
                ))
              ) : (
                <Button
                  asChild
                  variant="secondary"
                  className="w-full"
                  disabled={proj.demo === "#"}
                >
                  <a
                    href={proj.demo!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center focus-ring"
                  >
                    <Icon name="play" className="mr-2" size="sm" />
                    {proj.demo === "#" ? `Demo Coming Soon` : `View Demo`}
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
