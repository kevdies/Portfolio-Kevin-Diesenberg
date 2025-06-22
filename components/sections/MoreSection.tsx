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
  imageOrientation?: "landscape" | "portrait" | "square";
}

const bootcampProjects: ProjectWithDemo[] = [
  {
    name: "Aweful Skydiving",
    image: awefulLogo,
    imageOrientation: "landscape",
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
    imageOrientation: "landscape",
    alt: "Trail Share logo",
    description: "Social network for hikers (React, Rails, PostgreSQL).",
    features: ["RESTful API design", "Auth via bcrypt", "Bootstrap styling"],
    demo: "https://youtu.be/seImhfcp8X8",
    github: "https://github.com/drclements/trail-share",
  },
  {
    name: "HSTRY",
    image: HSTRYLogo,
    imageOrientation: "landscape",
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
    <Section id={id} title="">
      <div className="space-y-12">
        {/* Bootcamp Projects */}
        <div>
          <h3 className="text-2xl font-['Poppins'] font-semibold text-white text-center mb-8">
            Bootcamp Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bootcampProjects.map((proj, idx) => (
              <Card key={idx} className="flex flex-col group">
                {/* Image container with consistent height */}
                <div className="relative w-full mb-6 rounded-md overflow-hidden bg-zinc-700">
                  {/* Fixed height container matching ProjectSection */}
                  <div className="relative w-full aspect-square">
                    <Image
                      src={proj.image}
                      alt={proj.alt}
                      fill
                      placeholder="blur"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-2 rounded-md"
                      priority={false}
                    />
                  </div>
                </div>

                <h4 className="text-lg font-['Poppins'] font-semibold text-white mb-4">
                  {proj.name}
                </h4>

                <p className="mb-4 text-gray-400 text-sm flex-grow">
                  {proj.description}
                </p>

                <ul className="mb-6 space-y-2 text-gray-400 text-sm">
                  {proj.features.map((f, i) => (
                    <li key={i} className="flex items-start group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mr-2 mt-1.5 flex-shrink-0 transition-all duration-200 group-hover/item:scale-110" />
                      <span className="group-hover/item:text-gray-200 transition-colors duration-200">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-auto">
                  {proj.demo && (
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      className="flex-1 focus:outline-none focus:ring-purple-500"
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
                    className="flex-1 focus:outline-none focus:ring-purple-500"
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
          <h3 className="text-2xl font-['Poppins'] font-semibold text-white text-center mb-8">
            Hobbies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {hobbies.map((hobby, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex items-center space-x-2 rounded-full",
                  "bg-zinc-800 border border-zinc-600",
                  "px-6 py-2",
                  "transition-all duration-200",
                  "hover:bg-zinc-700 hover:border-zinc-500 group"
                )}
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-transform duration-200 group-hover:scale-110" />
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-200">
                  {hobby}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default MoreSection;
