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
      <div className="text-center mb-xl">
        <h2 className="text-h2 font-heading font-semibold gradient-text mb-md">
          Work Experience
        </h2>
        <div className="section-separator" />
        <p className="text-lg text-textMuted max-w-2xl mx-auto">
          A diverse background spanning tech, entertainment, and public service
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-lg relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-primary opacity-30" />

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background shadow-glow" />

            <Card
              className={cn(
                "md:ml-16 transition-all duration-300",
                exp.current && "ring-2 ring-primary/20 shadow-glow" // Highlight current role
              )}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-sm">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-heading font-semibold text-emphasis">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="px-2 py-1 text-xs font-medium bg-gradient-primary text-white rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-textMuted font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-textDim mt-2 md:mt-0 font-medium">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-xs">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex items-start group">
                    <span
                      className={cn(
                        "w-1.5 h-1.5 rounded-full bg-gradient-primary",
                        "mr-3 mt-2 flex-shrink-0",
                        "transition-all duration-200",
                        "group-hover:scale-125"
                      )}
                    />
                    <span className="text-textMuted text-sm leading-relaxed group-hover:text-text transition-colors duration-200">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Optional: Add skills used for current role */}
              {exp.current && (
                <div className="mt-md pt-md border-t border-border/50">
                  <p className="text-xs text-textDim mb-2">Key Technologies:</p>
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
                        className="px-2 py-1 text-xs bg-surface border border-border rounded text-textMuted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
