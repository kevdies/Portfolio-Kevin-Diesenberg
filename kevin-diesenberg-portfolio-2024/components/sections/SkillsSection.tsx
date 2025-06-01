"use client";

import React from "react";
import { Card } from "../ui/Card";
import { cn } from "../../utils/utils";
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
    <Section id={id} title="">
      <div className="text-center mb-12">
        <h2 className="text-h2 font-heading font-semibold bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent mb-6">
          Technical Skills
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-primary-start to-primary-end mx-auto mb-8 opacity-60 rounded-full" />
      </div>

      <Card className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {technicalSkills.map((skill, idx) => (
            <div
              key={idx}
              className={cn(
                "flex items-center",
                "bg-surface border border-border rounded-md",
                "px-4 py-2 text-sm",
                "transition-all duration-300",
                "hover:border-border-hover hover:bg-surface-hover",
                "hover:-translate-y-1 hover:shadow-sm",
                "focus:outline-none focus:ring-2 focus:ring-primary",
                "group"
              )}
              tabIndex={0}
            >
              <span
                className={cn(
                  "w-2 h-2 rounded-full bg-gradient-to-r from-primary-start to-primary-end mr-2 flex-shrink-0",
                  "transition-all duration-300",
                  "group-hover:scale-110 group-hover:shadow-sm"
                )}
              />
              <span
                className={cn(
                  "text-text-muted transition-colors duration-300",
                  "group-hover:text-text"
                )}
              >
                {skill}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-text-dim text-sm">
            Always learning and exploring new technologies
          </p>
        </div>
      </Card>
    </Section>
  );
};

export default SkillsSection;
