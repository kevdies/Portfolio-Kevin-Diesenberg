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
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Text Column */}
        <div className="order-2 space-y-6 md:order-1 md:space-y-8">
          <h3 className="font-['Poppins'] text-2xl font-semibold text-white md:text-3xl">
            {`Hi, I'm Kevin – a Web Dev from Michigan`}
          </h3>

          <p className="font-sans text-lg leading-relaxed text-white md:text-xl">
            I build performant, accessible, and maintainable web applications
            using React, TypeScript, and modern tooling.
          </p>

          <p className="text-base leading-relaxed text-gray-400 md:text-lg">
            {`With a passion for continuous learning and problem-solving, I've
            successfully delivered features that serve millions of users daily,
            leveraging analytics, best practices in accessibility, and modern workflows.`}
          </p>

          <div className="hidden pt-6 md:block">
            <p className="text-sm text-gray-500">
              {`Scroll down to explore my work and experience →`}
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-800">
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

export { AboutSection };
