"use client";

import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { professionalProjects } from "@/lib/data";
import { ProjectActions } from "@/components/project/ProjectActions";

export interface ProjectSectionProps {
  id?: string;
}

function ProjectSection({ id = "professional-projects" }: ProjectSectionProps) {

  return (
    <Section id={id}>
      <div className="mx-auto max-w-5xl space-y-content-xl sm:grid sm:grid-cols-2 sm:gap-content-lg sm:space-y-0 lg:grid-cols-3">
        {professionalProjects.map((project, index) => (
          <Card 
            key={project.name} 
            className="group flex flex-col border-subtle hover:border-accent mobile-hover"
          >
            {/* Mobile-optimized image */}
            <div className="relative mb-content w-full overflow-hidden rounded-md bg-surface-tertiary">
              <Image
                src={project.image}
                alt={project.alt}
                placeholder="blur"
                sizes="(max-width: 375px) 100vw, (max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-contain p-2"
                priority={index === 0}
              />
            </div>

            {/* Mobile-scannable content */}
            <div className="space-y-content flex-grow">
              <h3 className="font-heading text-lg font-semibold text-white leading-tight">
                {project.name}
              </h3>

              <p className="text-xs font-medium text-brand-primary">
                {project.businessImpact}
              </p>

              <p className="text-sm text-hierarchy-tertiary leading-relaxed">
                {project.description}
              </p>

              {/* Results as compact chips */}
              <div className="flex flex-wrap gap-1">
                {project.results?.slice(0, 4).map((result, i) => (
                  <span key={i} className="bg-surface-tertiary/50 text-xs text-hierarchy-tertiary px-2 py-1 rounded">
                    {result}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-content">
              <ProjectActions liveUrls={project.liveUrls} demo={project.demo} />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export { ProjectSection };
