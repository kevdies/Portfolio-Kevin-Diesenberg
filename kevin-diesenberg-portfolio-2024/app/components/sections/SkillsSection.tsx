"use client";

import React from "react";
import { Card } from "../ui/Card";
import { cn } from "../../../lib/utils";
import Section from "../ui/Section";

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

const SkillsSection: React.FC<SkillsSectionProps> = ({ id = "skills" }) => {
  return (
    <Section id={id} title="Skills">
      <Card className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-md text-center">
          Technical Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-sm">
          {technicalSkills.map((skill, idx) => (
            <div
              key={idx}
              className={cn(
                "flex items-center justify-center",
                "bg-surface border border-border rounded-md",
                "px-sm py-xs text-sm",
                "transition-all duration-200",
                "hover:border-border-hover hover:bg-surface-hover",
                "hover:-translate-y-0.5 hover:shadow-sm"
              )}
            >
              <span className="w-2 h-2 rounded-full bg-gradient-primary mr-2 flex-shrink-0" />
              <span className="text-textMuted">{skill}</span>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
};

export default SkillsSection;
