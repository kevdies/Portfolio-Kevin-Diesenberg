"use client";

import React from "react";
import Section from "../ui/Section";
import Image from "next/image";
import kevHenryArti from "@/assets/images/kev-henry-artichoke.webp";

export interface AboutSectionProps {
  id?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id = "about" }) => {
  return (
    <Section id={id} title="">
      {/* Subtle section separator */}
      {/* <div className="section-separator" /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center max-w-5xl mx-auto">
        {/* Text Column */}
        <div className="space-y-lg order-2 md:order-1">
          <h3 className="text-h3 font-heading font-semibold text-emphasis">
            {`Hi, I'm Kevin – a Web Dev from Michigan`}
          </h3>

          {/* Enhanced main statement - larger and more prominent */}
          <p className="text-xl leading-relaxed font-sans text-emphasis">
            I build performant, accessible, and maintainable web applications
            using React, TypeScript, and modern tooling.
          </p>

          {/* Supporting details - slightly muted but still readable */}
          <p className="text-lg leading-relaxed text-textMuted">
            {`With a passion for continuous learning and problem-solving, I've
            successfully delivered features that serve millions of users daily,
            leveraging analytics, best practices in accessibility, and modern
            workflows.`}
          </p>

          {/* Optional: Add a subtle call-to-action hint */}
          <div className="pt-md">
            <p className="text-subtle">
              Scroll down to explore my work and experience →
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="order-1 md:order-2">
          <div className="relative rounded-lg overflow-hidden shadow-lg card-hover">
            <Image
              src={kevHenryArti}
              alt="Kevin and his dogs on Lake Huron"
              placeholder="blur"
              className="w-full h-auto object-cover"
              priority // Since this is above the fold
            />
            {/* Optional: subtle overlay on hover for interactive feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
