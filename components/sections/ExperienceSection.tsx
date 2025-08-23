"use client";

import React from "react";
import Section from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { cn } from "@/utils/utils";

export interface ExperienceSectionProps {
  id?: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  impact?: string;
  metrics?: { label: string; value: string }[];
  details: string[];
  current: boolean;
}

const experiences: Experience[] = [
  {
    role: "Web Developer | Software Engineer",
    company: "Graham Media Group",
    period: "March 2024 – Present",
    impact: "Features serving 6 local news stations across 4 states",
    metrics: [
      { label: "TV Stations", value: "6" },
      { label: "States Covered", value: "4" },
      { label: "Network Affiliates", value: "NBC CBS ABC" },
      { label: "Video Players", value: "Anyclip & Bitmovin" },
    ],
    details: [
      "Built features for NBC/CBS/ABC affiliates: KPRC-Houston, WDIV-Detroit, KSAT-San Antonio, WKMG-Orlando, WJXT-Jacksonville, WSLS-Roanoke",
      "Integrated Nielsen DCR and Chartbeat analytics into Anyclip and Bitmovin video players",
      "Deployed dual video player architecture serving local news viewers across 4 states",
      "Built custom ArcXP CMS templates and pages using Content API for editors, publishers, and writers",
      "Implemented Sentry monitoring, migrated user base to Braze from Blueconic, and AWS infrastructure",
    ],
    current: true,
  },
  {
    role: "Rigger & Stagehand",
    company: "IATSE (Theatrical Stage Employees)",
    period: "2008 – 2021",
    details: [
      "Rigged lighting & sound for 1000+ shows, events, political rallies, and theatrical productions",
      "Spotlight operator for President Obama speech and worked 3 presidential inaugurations",
      "Maintained safety standards across complex live productions",
    ],
    current: false,
  },
  {
    role: "Backcountry Water Treatment Operator",
    company: "National Park Service",
    period: "2009 – 2019",
    details: [
      "Operated water treatment systems serving 50,000+ park visitors",
      "Maintained 99.9% system uptime in remote backcountry locations",
    ],
    current: false,
  },
];

function ExperienceSection({ id = "experience" }: ExperienceSectionProps) {
  return (
    <Section id={id}>
      <div className="space-y-content-lg mx-auto max-w-5xl">
        {experiences.map((exp, idx) => (
          <Card
            key={idx}
            className={cn(
              "mobile-hover border-subtle hover:border-accent",
              exp.current &&
                "ring-brand-primary/20 border-accent shadow-xl ring-2",
            )}
          >
            <div className="mb-content flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="mb-1 flex items-start gap-2">
                  <h3 className="text-hierarchy-primary font-heading text-xl font-semibold">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span className="from-brand-primary to-brand-primary-dark rounded-full bg-gradient-to-r px-2 py-1 text-xs font-medium text-white">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-hierarchy-secondary font-medium">
                  {exp.company}
                </p>
                {exp.impact && (
                  <p className="text-brand-primary xs:text-base mt-1 text-sm font-medium">
                    {exp.impact}
                  </p>
                )}
              </div>
              <span className="text-hierarchy-muted mt-2 text-sm font-medium md:mt-0">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-content-sm">
              {exp.details.map((detail, i) => (
                <li key={i} className="group flex items-start">
                  <span className="bg-brand-primary mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                  <span className="text-hierarchy-tertiary group-hover:text-hierarchy-secondary text-sm transition-colors duration-200">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>

            {exp.current && exp.metrics && (
              <div className="mt-content-lg border-surface-border/50 pt-content-lg border-t">
                <div className="gap-content grid grid-cols-2 text-center">
                  {exp.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="bg-surface-tertiary/30 rounded px-2 py-3"
                    >
                      <div className="xs:text-lg text-base font-semibold text-white">
                        {metric.value}
                      </div>
                      <div className="text-hierarchy-tertiary text-xs leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}

export { ExperienceSection };
