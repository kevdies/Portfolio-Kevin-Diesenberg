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
      <div className="mb-12 text-center">
        <h2 className="mb-6 bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text font-['Poppins'] text-3xl font-semibold text-transparent">
          Work Experience
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          A diverse background spanning tech, entertainment, and public service
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-8">
        {experiences.map((exp, idx) => (
          <Card
            key={idx}
            className={cn(
              "transition-all duration-300",
              exp.current && "shadow-xl ring-2 ring-purple-500/20",
            )}
          >
            <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="mb-1 flex items-start gap-2">
                  <h3 className="font-['Poppins'] text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span className="rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-2 py-1 text-xs font-medium text-white">
                      Current
                    </span>
                  )}
                </div>
                <p className="font-medium text-gray-400">{exp.company}</p>
              </div>
              <span className="mt-2 text-sm font-medium text-gray-500 md:mt-0">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i} className="group flex items-start">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600",
                      "mr-3 mt-2 flex-shrink-0",
                      "transition-all duration-200",
                      "group-hover:scale-125",
                    )}
                  />
                  <span className="text-sm leading-relaxed text-gray-400 transition-colors duration-200 group-hover:text-gray-200">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>

            {exp.current && (
              <div className="mt-6 border-t border-zinc-600/50 pt-6">
                <p className="mb-2 text-xs text-gray-500">Key Technologies:</p>
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
                      className="rounded border border-zinc-600 bg-zinc-800 px-2 py-1 text-xs text-gray-400"
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
