"use client";

import React from "react";
import Image from "next/image";
import Section from "../ui/Section";
import { Card } from "../ui/Card";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { cn } from "../../utils/utils";
import type { Project } from "../../types";

import awefulLogo from "@/assets/images/aweful-logo.png";
import trailShareLogo from "@/assets/images/trail-share-logo.png";
import HSTRYLogo from "@/assets/images/HSTRY-logo.png";

export interface MoreSectionProps {
  id?: string;
}

interface ProjectWithDemo extends Project {
  demo?: string;
  github: string;
}

const bootcampProjects: ProjectWithDemo[] = [
  {
    name: "Aweful Skydiving",
    image: awefulLogo,
    alt: "Aweful Skydiving logo",
    description:
      "Event signup platform for skydivers (React, Rails, PostgreSQL).",
    features: [
      "User auth via bcrypt",
      "Responsive UI with Bootstrap",
      "Active Record models",
    ],
    demo: "https://youtu.be/7JUL1CPlHqg",
    github: "https://github.com/kevdies/aweful",
  },
  {
    name: "Trail Share",
    image: trailShareLogo,
    alt: "Trail Share logo",
    description: "Social network for hikers (React, Rails, PostgreSQL).",
    features: ["RESTful API design", "Auth via bcrypt", "Bootstrap styling"],
    demo: "https://youtu.be/seImhfcp8X8",
    github: "https://github.com/drclements/trail-share",
  },
  {
    name: "HSTRY",
    image: HSTRYLogo,
    alt: "HSTRY logo",
    description: "Medical history form aid (React, Rails, PostgreSQL).",
    features: ["Controlled forms", "Accessible markup", "Reactstrap UI"],
    demo: "https://youtu.be/dWumb-_XHhA",
    github: "https://github.com/kevdies/HSTRY",
  },
];

const hobbies = [
  "Skydiving",
  "Paramotoring",
  "Camping",
  "Hiking",
  "Road Biking",
  "Mountain Biking",
];

const MoreSection: React.FC<MoreSectionProps> = ({ id = "more" }) => {
  return (
    <Section id={id} title="More Projects & Hobbies">
      <div className="space-y-xl">
        {/* Bootcamp Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-lg">
            Bootcamp Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {bootcampProjects.map((proj, idx) => (
              <Card key={idx} className="flex flex-col">
                <div className="relative w-full h-40 mb-md rounded-md overflow-hidden bg-surface border border-border">
                  <Image
                    src={proj.image}
                    alt={proj.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-1"
                  />
                </div>

                <h4 className="text-lg font-semibold mb-sm">{proj.name}</h4>

                <p className="mb-sm text-textMuted text-sm flex-grow">
                  {proj.description}
                </p>

                <ul className="mb-md space-y-xs text-textMuted text-sm">
                  {proj.features.map((f, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-primary mr-2 mt-1.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-sm mt-auto">
                  {proj.demo && (
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      className="flex-1"
                    >
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="play" className="mr-1" size="sm" />
                        Demo
                      </a>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                  >
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="github" className="mr-1" size="sm" />
                      Code
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <Card className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-lg">Hobbies</h3>
          <div className="flex flex-wrap justify-center gap-sm">
            {hobbies.map((hobby, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex items-center space-x-2 rounded-full",
                  "bg-surface border border-border",
                  "px-md py-xs",
                  "transition-all duration-200",
                  "hover:border-border-hover hover:bg-surface-hover"
                )}
              >
                <span className="w-2 h-2 rounded-full bg-gradient-primary" />
                <span className="text-textMuted">{hobby}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default MoreSection;
