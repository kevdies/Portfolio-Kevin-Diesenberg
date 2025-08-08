"use client";

import React from "react";
import { Card } from "../ui/Card";
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
    <Section
      id={id}
      title="Technical Skills"
      subtitle="Core technologies and tools I work with"
    >
      <Card className="mx-auto max-w-4xl">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {technicalSkills.map((skill) => (
            <li
              key={skill}
              className="group flex items-center rounded-md border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              tabIndex={0}
            >
              <span className="mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 group-hover:scale-110" />
              <span className="text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                {skill}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-zinc-600/50 pt-6 text-center">
          <p className="text-sm text-gray-500">
            Always learning and exploring new technologies
          </p>
        </div>
      </Card>
    </Section>
  );
};

export default SkillsSection;
