import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";

const previousExperience = [
  {
    id: "iatse",
    role: "Rigger & Stagehand",
    company: "IATSE",
    period: "2008 – 2021",
    summary:
      "Rigged lighting & sound for 1000+ shows including 3 presidential inaugurations",
  },
  {
    id: "nps",
    role: "Water Treatment Operator",
    company: "National Park Service",
    period: "2009 – 2019",
    summary: "Operated backcountry water systems serving 50,000+ park visitors",
  },
];

export function PreviousExperienceSection({
  id = "previous-experience",
}: {
  id?: string;
}) {
  return (
    <Section id={id}>
      <div className="mx-auto max-w-4xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="previous" className="border-none">
            <AccordionTrigger className="text-muted-foreground hover:text-foreground py-2 text-sm hover:cursor-pointer hover:no-underline">
              Previous experience
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                {previousExperience.map((exp) => (
                  <div key={exp.id} className="bg-muted/50 rounded-lg px-4 py-3">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-foreground text-sm font-medium">
                          {exp.role}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-muted-foreground text-xs">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm">
                      {exp.summary}
                    </p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}
