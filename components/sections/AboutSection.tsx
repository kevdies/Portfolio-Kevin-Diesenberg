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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
        {/* Text Column */}
        <div className="space-y-6 md:space-y-8 order-2 md:order-1">
          <h3 className="text-2xl md:text-h3 font-heading font-semibold text-text-emphasis">
            {`Hi, I'm Kevin – a Web Dev from Michigan`}
          </h3>

          {/* Enhanced main statement - responsive sizing */}
          <p className="text-lg md:text-xl leading-relaxed font-sans text-text-emphasis">
            I build performant, accessible, and maintainable web applications
            using React, TypeScript, and modern tooling.
          </p>

          {/* Supporting details */}
          <p className="text-base md:text-lg leading-relaxed text-text-muted">
            {`With a passion for continuous learning and problem-solving, I've
            successfully delivered features that serve millions of users daily,
            leveraging analytics, best practices in accessibility, and modern`}
            workflows.
          </p>

          {/* Call-to-action hint - hidden on mobile for cleaner look */}
          <div className="pt-6 hidden md:block">
            <p className="text-text-dim text-sm">
              {`Scroll down to explore my work and experience →`}
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div
            className="relative rounded-lg overflow-hidden 
                          aspect-[4/3]      /* mobile ratio */
 
                          w-full"
          >
            <Image
              src={kevHenryArti}
              alt="Kevin and his dogs on Lake Huron"
              placeholder="blur"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
