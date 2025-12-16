"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Image from "next/image";
import kevHenryArti from "@/images/kev-henry-artichoke.webp";

export interface AboutSectionProps {
  id?: string;
}

function AboutSection({ id = "about" }: AboutSectionProps) {
  return (
    <Section id={id}>
      <div className="mx-auto max-w-4xl text-center space-y-content-lg">
        {/* Mobile-first hero content */}
        <div className="space-y-content">
          <h1 className="font-heading text-xl font-semibold text-white xs:text-2xl sm:text-3xl md:text-4xl leading-tight">
            Built features serving 6 local news stations across 4 states
          </h1>

          <p className="font-sans text-base text-hierarchy-secondary xs:text-lg sm:text-xl leading-tight">
            Graham Media Group • NBC, CBS, ABC Affiliates • Video Analytics APIs
          </p>
        </div>

        {/* Video Analytics Integration */}
        <div className="space-y-content">
          <p className="text-xs text-hierarchy-muted font-medium">Video Player & Analytics Integration:</p>
          <div className="flex flex-wrap justify-center gap-2 text-xs max-w-md mx-auto">
            <span className="bg-surface-secondary px-2 py-1 rounded text-hierarchy-muted">Anyclip Player</span>
            <span className="bg-surface-secondary px-2 py-1 rounded text-hierarchy-muted">Bitmovin Player</span>
            <span className="bg-surface-secondary px-2 py-1 rounded text-hierarchy-muted">Nielsen DCR</span>
            <span className="bg-surface-secondary px-2 py-1 rounded text-hierarchy-muted">Chartbeat</span>
            <span className="bg-surface-secondary px-2 py-1 rounded text-hierarchy-muted">Braze</span>
            <span className="bg-surface-secondary px-2 py-1 rounded text-hierarchy-muted">Sentry</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-xs max-w-md mx-auto">
            <span className="bg-surface-tertiary/50 px-2 py-1 rounded text-hierarchy-muted">React</span>
            <span className="bg-surface-tertiary/50 px-2 py-1 rounded text-hierarchy-muted">TypeScript</span>
            <span className="bg-surface-tertiary/50 px-2 py-1 rounded text-hierarchy-muted">Node.js</span>
            <span className="bg-surface-tertiary/50 px-2 py-1 rounded text-hierarchy-muted">AWS</span>
            <span className="bg-surface-tertiary/50 px-2 py-1 rounded text-hierarchy-muted">ArcXP CMS</span>
          </div>
        </div>

        {/* Professional hero image */}
        <div className="mx-auto max-w-xs sm:max-w-sm">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-surface-secondary">
            <Image
              src={kevHenryArti}
              alt="Kevin Diesenberg with his dogs enjoying a sunny day by Lake Huron"
              placeholder="blur"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, 384px"
              priority
              quality={85}
            />
          </div>
        </div>

        <p className="text-sm text-hierarchy-tertiary xs:text-base max-w-lg mx-auto">
          Proven track record shipping production features to 6 NBC, CBS, and ABC affiliate news stations across Texas, Michigan, Florida, and Virginia markets.
        </p>
      </div>
    </Section>
  );
}

export { AboutSection };
