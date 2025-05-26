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
  },
  {
    role: "Rigger & Stagehand",
    company: "IATSE (Theatrical Stage Employees)",
    period: "2008 – 2021",
    details: [
      "Rigged lighting & sound for live productions",
      "Ensured safety compliance on set",
    ],
  },
  {
    role: "Backcountry Water Treatment Operator",
    company: "National Park Service",
    period: "2009 – 2019",
    details: [
      "Managed water treatment systems in remote environments",
      "Developed problem-solving skills under challenging conditions",
    ],
  },
];

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  id = "experience",
}) => {
  return (
    <Section id={id} title="Work Experience">
      <div className="max-w-4xl mx-auto space-y-md">
        {experiences.map((exp, idx) => (
          <Card key={idx}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-sm">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-textMuted text-sm">{exp.company}</p>
              </div>
              <span className="text-sm text-textDim mt-2 md:mt-0">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-xs">
              {exp.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full bg-gradient-primary",
                      "mr-3 mt-2 flex-shrink-0"
                    )}
                  />
                  <span className="text-textMuted text-sm leading-relaxed">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
