import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

const currentExperience = {
  role: "Software Engineer",
  company: "Graham Media Group",
  period: "March 2024 – Present",
  impact: "Features serving 6 local news stations across 4 states",
  details: [
    "Built features for NBC/CBS/ABC affiliates: KPRC-Houston, WDIV-Detroit, KSAT-San Antonio, WKMG-Orlando, WJXT-Jacksonville, WSLS-Roanoke",
    "Integrated Nielsen DCR and Chartbeat analytics into Anyclip and Bitmovin video players",
    "Deployed dual video player architecture serving local news viewers across 4 states",
    "Built custom ArcXP CMS templates and pages using Content API for editors, publishers, and writers",
    "Implemented Sentry monitoring, migrated user base to Braze from Blueconic, and AWS infrastructure",
  ],
};

export function ExperienceSection({ id = "experience" }: { id?: string }) {
  return (
    <Section id={id}>
      <div className="mx-auto max-w-4xl">
        <Card className="ring-brand-primary/20 shadow-lg ring-2">
          <CardContent className="p-6">
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-foreground text-lg font-semibold">
                    {currentExperience.role}
                  </h3>
                  <span className="bg-brand-primary rounded-full px-2 py-0.5 text-xs font-medium text-white">
                    Current
                  </span>
                </div>
                <p className="text-muted-foreground font-medium">
                  {currentExperience.company}
                </p>
                <p className="text-brand-primary mt-1 text-sm font-medium">
                  {currentExperience.impact}
                </p>
              </div>
              <span className="text-muted-foreground text-sm font-medium">
                {currentExperience.period}
              </span>
            </div>

            <ul className="space-y-2">
              {currentExperience.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <span className="bg-brand-primary mt-2 mr-3 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <span className="text-muted-foreground text-sm">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
