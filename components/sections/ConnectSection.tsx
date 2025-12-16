"use client";

import React from "react";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RESUME_PATH } from "@/lib/constants";

export interface ConnectSectionProps {
  id?: string;
}

function ConnectSection({ id = "connect" }: ConnectSectionProps) {
  return (
    <Section id={id}>

      <div className="mx-auto max-w-lg text-center space-y-content-lg">
        <h2 className="font-heading text-xl font-semibold text-white xs:text-2xl leading-tight">
          Ready to build something great together?
        </h2>
        
        {/* Mobile-first button stack */}
        <div className="space-y-content">
          <Button asChild size="lg" className="w-full">
            <a
              href="mailto:kdiesenb@gmail.com"
              aria-label="Send email to Kevin Diesenberg"
            >
              <Icon name="email" className="mr-2" size="sm" />
              Email Me
            </a>
          </Button>
          
          <Button asChild variant="secondary" size="lg" className="w-full">
            <a
              href="https://linkedin.com/in/kevindiesenberg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
            >
              <Icon name="linkedin" className="mr-2" size="sm" />
              Connect on LinkedIn
            </a>
          </Button>
          
          <Button asChild variant="ghost" className="w-full">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Kevin Diesenberg's resume (opens in new tab)"
            >
              <Icon name="download" className="mr-2" size="sm" />
              View Resume
            </a>
          </Button>
        </div>

        <p className="text-xs text-hierarchy-muted">
          kdiesenb@gmail.com • Currently open to new opportunities
        </p>
      </div>
    </Section>
  );
}

export { ConnectSection };
