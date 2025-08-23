"use client";

import React from "react";
import Section from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { bootcampProjects, hobbies } from "@/lib/data";
import { BootcampProjectCard } from "@/components/more/BootcampProjectCard";
import { HobbyList } from "@/components/more/HobbyList";

export interface MoreSectionProps {
  id?: string;
}

function MoreSection({ id = "more" }: MoreSectionProps) {
  return (
    <Section id={id}>
      <div className="space-y-section">
        {/* Bootcamp Projects */}
        <div>
          <h3 className="mb-content-xl text-center font-heading text-2xl font-semibold text-hierarchy-primary">
            Bootcamp Projects
          </h3>
          <div className="grid grid-cols-1 gap-content-lg xs:gap-content-xl sm:grid-cols-2 md:grid-cols-3">
            {bootcampProjects.map((proj, idx) => (
              <BootcampProjectCard key={idx} project={proj} />
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <Card className="mx-auto max-w-4xl">
          <h3 className="mb-content-xl text-center font-heading text-2xl font-semibold text-hierarchy-primary">
            Hobbies
          </h3>
          <HobbyList hobbies={hobbies} />
        </Card>
      </div>
    </Section>
  );
}

export { MoreSection };
