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
          <h3 className="text-2xl md:text-3xl font-['Poppins'] font-semibold text-white">
            {`Hi, I'm Kevin – a Web Dev from Michigan`}
          </h3>

          <p className="text-lg md:text-xl leading-relaxed font-sans text-white">
            I build performant, accessible, and maintainable web applications
            using React, TypeScript, and modern tooling.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-400">
            {`With a passion for continuous learning and problem-solving, I've
            successfully delivered features that serve millions of users daily,
            leveraging analytics, best practices in accessibility, and modern workflows.`}
          </p>

          <div className="pt-6 hidden md:block">
            <p className="text-gray-500 text-sm">
              {`Scroll down to explore my work and experience →`}
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="order-1 md:order-2">
          <div className="relative rounded-lg overflow-hidden aspect-[4/3] w-full bg-zinc-800">
            <Image
              src={kevHenryArti}
              alt="Kevin Diesenberg with his dogs enjoying a sunny day by Lake Huron"
              placeholder="blur"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 45vw, 40vw"
              priority
              quality={85}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
