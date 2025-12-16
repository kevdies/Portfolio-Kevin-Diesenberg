"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import Section from "@/components/ui/Section";

export interface SkillsSectionProps {
  id?: string;
}

const technicalSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Ruby",
  "Ruby on Rails",
  "PostgreSQL",
  "MySQL",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "GitHub",
];

function SkillsSection({ id = "skills" }: SkillsSectionProps) {
  return (
    <Section id={id}>
      <Card className="mx-auto max-w-5xl">
        <ul className="grid grid-cols-1 gap-content xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {technicalSkills.map((skill) => (
            <li
              key={skill}
              className="group flex items-center justify-center rounded-md border border-subtle bg-surface-secondary px-3 py-3 text-sm hover:border-accent hover:bg-surface-tertiary hover:shadow-sm touch-target min-w-0"
            >
              <span className="mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-primary" />
              <span className="text-hierarchy-tertiary transition-colors duration-300 group-hover:text-hierarchy-secondary truncate">
                {skill}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-content-xl border-t border-surface-border/50 pt-content-lg text-center">
          <p className="text-sm text-hierarchy-muted">
            Always learning and exploring new technologies
          </p>
        </div>
      </Card>
    </Section>
  );
}

export { SkillsSection };
