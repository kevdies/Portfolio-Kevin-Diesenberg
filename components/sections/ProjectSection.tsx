"use client";

import React from "react";
import Image from "next/image";
import Section from "../ui/Section";
import { Card } from "../ui/Card";
import { professionalProjects } from "@/lib/data";
import type { Project, ProjectLink } from "@/types";
import { ProjectFeatures } from "../project/ProjectFeatures";
import { ProjectActions } from "../project/ProjectActions";

export interface ProjectSectionProps {
  id?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  id = "professional-projects",
}) => {
  const [expandedProjects, setExpandedProjects] = React.useState<Set<number>>(
    new Set(),
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {professionalProjects.map((project, index) => (
          <Card key={project.name} className="group flex h-full flex-col">
            <div className="relative mb-6 w-full overflow-hidden rounded-md bg-zinc-700">
              <Image
                src={project.image}
                alt={project.alt}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full rounded-md object-contain p-2"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <h3 className="mb-4 font-heading text-xl font-semibold text-white">
              {project.name}
            </h3>

            <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-400">
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

export { ProjectSection };
