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
      <div className="text-center mb-xl">
        <h2 className="text-h2 font-heading font-semibold gradient-text mb-md">
          Technical Skills
        </h2>
        <div className="section-separator" />
      </div>

      <Card className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-sm">
          {technicalSkills.map((skill, idx) => (
            <div
              key={idx}
              className={cn(
                "flex items-center",
                "bg-surface border border-border rounded-md",
                "px-sm py-xs text-sm",
                "transition-all duration-300", // Slightly longer transition
                "hover:border-border-hover hover:bg-surface-hover",
                "hover:-translate-y-1 hover:shadow-sm", // Slightly more lift
                "focus-ring", // Better focus handling
                "group" // For group hover effects
              )}
              tabIndex={0} // Make focusable for accessibility
            >
              <span
                className={cn(
                  "w-2 h-2 rounded-full bg-gradient-primary mr-2 flex-shrink-0",
                  "transition-all duration-300",
                  "group-hover:scale-110 group-hover:shadow-sm" // Subtle dot animation
                )}
              />
              <span
                className={cn(
                  "text-textMuted transition-colors duration-300",
                  "group-hover:text-text" // Slightly brighter on hover
                )}
              >
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Optional: Add a subtle footer note */}
        <div className="mt-lg pt-md border-t border-border/50 text-center">
          <p className="text-subtle">
            Always learning and exploring new technologies
          </p>
        </div>
      </Card>
    </Section>
  );
};

export default SkillsSection;
