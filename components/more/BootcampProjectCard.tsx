import React from "react";
import Image from "next/image";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import Icon from "../ui/Icon";
import type { Project } from "@/types";

export const BootcampProjectCard: React.FC<{ project: Project }> = ({
  project,
}) => (
  <Card className="group flex flex-col">
    {/* Image container with consistent height */}
    <div className="relative mb-6 w-full overflow-hidden rounded-md bg-zinc-700">
      {/* Fixed height container matching ProjectSection */}
      <div className="relative aspect-square w-full">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="rounded-md object-contain p-2"
          priority={false}
        />
      </div>
    </div>

    <h4 className="mb-4 font-['Poppins'] text-lg font-semibold text-white">
      {project.name}
    </h4>

    <p className="mb-4 flex-grow text-sm text-gray-400">
      {project.description}
    </p>

    <ul className="mb-6 space-y-2 text-sm text-gray-400">
      {project.features.map((f, i) => (
        <li key={i} className="group/item flex items-start">
          <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-200 group-hover/item:scale-110" />
          <span className="transition-colors duration-200 group-hover/item:text-gray-200">
            {f}
          </span>
        </li>
      ))}
    </ul>

    <div className="mt-auto flex gap-4">
      {project.demo && (
        <Button
          asChild
          variant="secondary"
          size="sm"
          className="flex-1 focus:outline-none focus:ring-purple-500"
        >
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
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
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Icon name="github" className="mr-1" size="sm" />
          Code
        </a>
      </Button>
    </div>
  </Card>
);
