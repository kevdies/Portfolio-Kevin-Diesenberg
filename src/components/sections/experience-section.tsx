import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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

export function ExperienceSection({ id = "experience" }: { id?: string }) {
  return (
    <Section id={id}>
      <div className="mx-auto max-w-5xl space-y-6">
        {experiences.map((exp, idx) => (
          <Card
            key={idx}
            className={cn(
              "transition-colors hover:border-brand-primary/20",
              exp.current && "ring-2 ring-brand-primary/20 shadow-lg"
            )}
          >
            <CardContent className="p-6 md:p-8">
              <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="mb-1 flex items-start gap-2">
                    <h3 className="text-lg font-semibold text-foreground md:text-xl">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="rounded-full bg-brand-primary px-2 py-1 text-xs font-medium text-white">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="font-medium text-muted-foreground">
                    {exp.company}
                  </p>
                  {exp.impact && (
                    <p className="mt-1 text-sm font-medium text-brand-primary sm:text-base">
                      {exp.impact}
                    </p>
                  )}
                </div>
                <span className="mt-2 text-sm font-medium text-muted-foreground md:mt-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.details.map((detail, i) => (
                  <li key={i} className="group flex items-start">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                    <span className="text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>

              {exp.current && exp.metrics && (
                <div className="mt-6 border-t border-border/50 pt-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {exp.metrics.map((metric, i) => (
                      <div key={i} className="rounded bg-muted/50 px-2 py-3">
                        <div className="text-base font-semibold text-foreground sm:text-lg">
                          {metric.value}
                        </div>
                        <div className="text-xs leading-tight text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
