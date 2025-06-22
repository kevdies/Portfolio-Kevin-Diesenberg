"use client";

import React from "react";
import Section from "../ui/Section";
import { Card } from "../ui/Card";
import { cn } from "../../utils/utils";

export interface ExperienceSectionProps {
  id?: string;
}

const experiences = [
  {
    role: "Web Developer | Software Engineer",
    company: "Graham Media Group",
    period: "March 2024 – Present",
    details: [
      "Built and maintained high-performance news sites with React & TypeScript",
      "Collaborated on cross-functional teams to ship features serving millions daily",
      "Implemented Nielsen DCR analytics tracking for VoD & livestream players",
    ],
    current: true,
  },
  {
    role: "Rigger & Stagehand",
    company: "IATSE (Theatrical Stage Employees)",
    period: "2008 – 2021",
    details: [
      "Rigged lighting & sound for live productions",
      "Ensured safety compliance on set",
    ],
    current: false,
  },
  {
    role: "Backcountry Water Treatment Operator",
    company: "National Park Service",
    period: "2009 – 2019",
    details: [
      "Managed water treatment systems in remote environments",
      "Developed problem-solving skills under challenging conditions",
    ],
    current: false,
  },
];

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  id = "experience",
}) => {
  return (
    <Section id={id} title="">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-['Poppins'] font-semibold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent mb-6">
          Work Experience
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A diverse background spanning tech, entertainment, and public service
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <Card
            key={idx}
            className={cn(
              "transition-all duration-300",
              exp.current && "ring-2 ring-purple-500/20 shadow-xl"
            )}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-start gap-2 mb-1">
                  <h3 className="text-xl font-['Poppins'] font-semibold text-white">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-gray-400 font-medium">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500 mt-2 md:mt-0 font-medium">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i} className="flex items-start group">
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600",
                      "mr-3 mt-2 flex-shrink-0",
                      "transition-all duration-200",
                      "group-hover:scale-125"
                    )}
                  />
                  <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-200">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>

            {exp.current && (
              <div className="mt-6 pt-6 border-t border-zinc-600/50">
                <p className="text-xs text-gray-500 mb-2">Key Technologies:</p>
                <div className="flex flex-wrap gap-1">
                  {[
                    "React",
                    "TypeScript",
                    "Styled Components",
                    "Analytics",
                    "Accessibility",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-zinc-800 border border-zinc-600 rounded text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
