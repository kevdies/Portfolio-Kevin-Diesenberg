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

interface LeaderboardUrl {
  label: string;
  url: string;
}

interface ProjectWithUrls extends Project {
  liveUrls?: LeaderboardUrl[];
  priority?: boolean;
  imageOrientation?: "landscape" | "portrait" | "square";
}

export interface ProjectSectionProps {
  id?: string;
}

// Project data with image orientation metadata
const professionalProjects: ProjectWithUrls[] = [
  {
    name: "Photo Contest Leaderboard",
    image: brgLeaderboard,
    imageOrientation: "landscape",
    alt: "Leaderboard UI for photo contests",
    description:
      "This reusable leaderboard powers both the Blue Ridge Games and My Hometown's Best photo contests—displaying real-time user rankings per category with contest-specific rules, accessibility support, and responsive design.",
    features: [
      "React & TypeScript",
      "Headless UI Tabs with custom styled primitives",
      "Real-time data sync with useSWR",
      "Dynamic contest rule configuration",
      "Category-based CTAs for media uploads",
      "Admin-only overall leaderboard view",
      "Snap-scroll navigation for mobile UX",
      "Fully responsive across all devices",
    ],
    liveUrls: [
      {
        label: "View My Hometown's Best Leaderboard",
        url: "https://www.wsls.com/pinit/my-hometowns-best/leaderboard/",
      },
      {
        label: "View Blue Ridge Games Leaderboard",
        url: "https://www.wsls.com/pinit/blue-ridge-games/leaderboard/",
      },
    ],
    priority: true,
  },
  {
    name: "Pin Upload Success Modal",
    image: pinUploadModal,
    imageOrientation: "portrait",
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
    imageOrientation: "landscape",
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

// Helper function to get image styling based on orientation
const getImageClasses = (orientation?: string) => {
  const baseClasses = "transition-transform duration-300 group-hover:scale-105";

  if (orientation === "portrait") {
    return cn(baseClasses, "object-contain p-1");
  }
  return cn(baseClasses, "object-cover");
};

// Helper function to get container height based on orientation
const getContainerHeight = (orientation?: string) => {
  return orientation === "portrait" ? "h-56" : "h-48";
};

// Component for rendering project features
const ProjectFeatures: React.FC<{
  features: string[];
  isExpanded: boolean;
  onToggle: () => void;
  projectName: string;
}> = ({ features, isExpanded, onToggle, projectName }) => {
  const visibleFeatures = features.slice(0, 2);
  const hiddenFeatures = features.slice(2);
  const hasMoreFeatures = features.length > 2;

  return (
    <div className="mb-6">
      {/* Always visible features */}
      {visibleFeatures.map((feature, index) => (
        <span
          key={index}
          className={cn(
            "inline-block mr-2 mb-2",
            "px-3 py-1 rounded-full",
            "bg-surface border border-border",
            "text-xs text-text font-medium",
            "transition-colors duration-200",
            "hover:border-border-hover"
          )}
        >
          {feature}
        </span>
      ))}

      {/* Expandable features */}
      {isExpanded &&
        hiddenFeatures.map((feature, index) => (
          <span
            key={index + 2}
            className={cn(
              "inline-block mr-2 mb-2",
              "px-3 py-1 rounded-full",
              "bg-surface border border-border",
              "text-xs text-text font-medium",
              "transition-all duration-200",
              "animate-fade-in"
            )}
          >
            {feature}
          </span>
        ))}

      {/* Toggle button */}
      {hasMoreFeatures && (
        <button
          onClick={onToggle}
          className={cn(
            "text-xs text-primary hover:text-primary-start",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-primary rounded px-1 py-0.5",
            "font-medium"
          )}
          aria-label={
            isExpanded
              ? `Hide additional features for ${projectName}`
              : `Show ${hiddenFeatures.length} more features for ${projectName}`
          }
        >
          {isExpanded ? "Show less" : `+${hiddenFeatures.length} more features`}
        </button>
      )}
    </div>
  );
};

// Component for rendering project actions (buttons)
const ProjectActions: React.FC<{
  liveUrls?: LeaderboardUrl[];
  demo?: string;
}> = ({ liveUrls, demo }) => {
  if (liveUrls) {
    return (
      <div className="mt-auto space-y-2">
        {liveUrls.map(({ label, url }, index) => (
          <Button
            key={index}
            asChild
            variant={index === 0 ? "default" : "secondary"}
            className={cn("w-full", index === 0 && "font-semibold")}
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <Icon name="eye" className="mr-2" size="sm" />
              {label.replace("View ", "")}
            </a>
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-auto">
      <Button
        asChild
        variant="secondary"
        className="w-full"
        disabled={demo === "#"}
      >
        <a
          href={demo!}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <Icon name="play" className="mr-2" size="sm" />
          {demo === "#" ? "Demo Coming Soon" : "View Demo"}
        </a>
      </Button>
    </div>
  );
};

// Main component
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
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-h2 font-heading font-semibold bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent mb-6">
          Professional Projects
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-primary-start to-primary-end mx-auto mb-8 opacity-60 rounded-full" />
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Recent work at Graham Media Group, building features for millions of
          daily users
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {professionalProjects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full group">
            {/* Project image */}
            <div
              className={cn(
                "relative w-full mb-6 rounded-md overflow-hidden bg-surface-hover",
                getContainerHeight(project.imageOrientation)
              )}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={getImageClasses(project.imageOrientation)}
                priority={project.priority}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project title */}
            <h3 className="text-xl font-heading font-semibold mb-4 text-text-emphasis">
              {project.name}
            </h3>

            {/* Project description */}
            <p className="mb-6 flex-grow text-text-muted text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Project features */}
            <ProjectFeatures
              features={project.features}
              isExpanded={expandedProjects.has(index)}
              onToggle={() => toggleFeatures(index)}
              projectName={project.name}
            />

            {/* Project actions */}
            <ProjectActions liveUrls={project.liveUrls} demo={project.demo} />
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectSection;
