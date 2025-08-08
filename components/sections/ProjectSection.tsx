"use client";

import React from "react";
import Image from "next/image";
import Section from "../ui/Section";
import { Card } from "../ui/Card";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { professionalProjects } from "@/lib/data";
import type { ProjectWithUrls, LeaderboardUrl } from "@/lib/data";

export interface ProjectSectionProps {
  id?: string;
}

const FeatureTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block mr-2 mb-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-600 text-xs text-gray-200 font-medium transition-colors duration-200 hover:border-zinc-500">
    {children}
  </span>
);

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
      {visibleFeatures.map((feature, index) => (
        <FeatureTag key={index}>{feature}</FeatureTag>
      ))}

      {isExpanded &&
        hiddenFeatures.map((feature, index) => (
          <FeatureTag key={`expanded-${index}`}>{feature}</FeatureTag>
        ))}

      {hasMoreFeatures && (
        <button
          onClick={onToggle}
          className="text-xs text-purple-500 hover:text-purple-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-1 py-0.5 font-medium"
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

const ProjectActions: React.FC<{
  liveUrls?: LeaderboardUrl[];
  demo?: string;
}> = ({ liveUrls, demo }) => {
  if (liveUrls?.length) {
    return (
      <div className="mt-auto space-y-2">
        {liveUrls.map(({ label, url }, index) => (
          <Button
            key={url}
            asChild
            variant={index === 0 ? "default" : "secondary"}
            className="w-full"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Icon name="eye" className="mr-2" size="sm" />
              {label}
            </a>
          </Button>
        ))}
      </div>
    );
  }

  const isDemoDisabled = !demo || demo === "#";

  const content = (
    <>
      <Icon name="play" className="mr-2" size="sm" />
      {isDemoDisabled ? "Demo Coming Soon" : "View Demo"}
    </>
  );

  return (
    <div className="mt-auto">
      <Button
        asChild={!isDemoDisabled}
        variant="secondary"
        className="w-full"
        disabled={isDemoDisabled}
      >
        {isDemoDisabled ? (
          <span className="inline-flex items-center justify-center opacity-50 cursor-not-allowed">
            {content}
          </span>
        ) : (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        )}
      </Button>
    </div>
  );
};

const ProjectSection: React.FC<ProjectSectionProps> = ({
  id = "professional-projects",
}) => {
  const [expandedProjects, setExpandedProjects] = React.useState<Set<number>>(
    new Set()
  );

  const toggleFeatures = (projectIndex: number) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectIndex)) {
        newSet.delete(projectIndex);
      } else {
        newSet.add(projectIndex);
      }
      return newSet;
    });
  };

  return (
    <Section
      id={id}
      title="Professional Projects"
      subtitle="Recent work at Graham Media Group, building features for millions of daily users"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {professionalProjects.map((project, index) => (
          <Card key={project.name} className="flex flex-col h-full group">
            <div className="relative w-full mb-6 rounded-md overflow-hidden bg-zinc-700">
              <Image
                src={project.image}
                alt={project.alt}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-2 w-full h-auto rounded-md"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <h3 className="text-xl font-heading font-semibold mb-4 text-white">
              {project.name}
            </h3>

            <p className="mb-6 flex-grow text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>

            <ProjectFeatures
              features={project.features}
              isExpanded={expandedProjects.has(index)}
              onToggle={() => toggleFeatures(index)}
              projectName={project.name}
            />

            <ProjectActions liveUrls={project.liveUrls} demo={project.demo} />
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectSection;
