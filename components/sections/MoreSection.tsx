"use client";

import React from "react";
import Section from "../ui/Section";
import { Card } from "../ui/Card";
import { bootcampProjects, hobbies } from "@/lib/data";
import { BootcampProjectCard } from "../more/BootcampProjectCard";
import { HobbyList } from "../more/HobbyList";

export interface MoreSectionProps {
  id?: string;
}

const MoreSection: React.FC<MoreSectionProps> = ({ id = "more" }) => {
  return (
    <Section id={id} title="">
      <div className="space-y-12">
        {/* Bootcamp Projects */}
        <div>
          <h3 className="mb-8 text-center font-['Poppins'] text-2xl font-semibold text-white">
            Bootcamp Projects
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {bootcampProjects.map((proj, idx) => (
              <BootcampProjectCard key={idx} project={proj} />
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <Card className="mx-auto max-w-3xl">
          <h3 className="mb-8 text-center font-['Poppins'] text-2xl font-semibold text-white">
            Hobbies
          </h3>
          <HobbyList hobbies={hobbies} />
        </Card>
      </div>
    </Section>
  );
};

export { MoreSection };
