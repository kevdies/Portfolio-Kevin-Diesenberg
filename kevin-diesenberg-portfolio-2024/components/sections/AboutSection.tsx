"use client";

import React from "react";
import Section from "../ui/Section";
import Image from "next/image";
import kevHenryArti from "../../assets/images/kev-henry-artichoke.webp";

export interface AboutSectionProps {
  id?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id = "about" }) => {
  return (
    <Section id={id} title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center max-w-5xl mx-auto">
        {/* Text Column */}
        <div className="space-y-md order-2 md:order-1">
          <h3 className="text-base font-semibold">
            {`Hi, I'm Kevin – a Web Dev from Michigan`}
          </h3>
          <p className="text-lg leading-relaxed font-sans">
            I build performant, accessible, and maintainable web applications
            using React, TypeScript, and modern tooling.
          </p>
          <p className="text-textMuted leading-relaxed">
            {`With a passion for continuous learning and problem-solving, I've
            successfully delivered features that serve millions of users daily,
            leveraging analytics, best practices in accessibility, and modern
            workflows.`}
          </p>
        </div>

        {/* Image Column */}
        <div className="order-1 md:order-2">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={kevHenryArti}
              alt="Kevin standing in a field of artichokes"
              placeholder="blur"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
