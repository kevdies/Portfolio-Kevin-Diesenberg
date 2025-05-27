"use client";

import React from "react";
import Section from "../ui/Section";
import { Card, CardHeader, CardContent } from "../ui/Card";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { shareResume, RESUME_PATH } from "../../utils/share";
import { cn } from "../../utils/utils";

const socialLinks = [
  {
    name: "Email",
    icon: "email" as const,
    href: "mailto:kdiesenb@gmail.com",
    primary: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin" as const,
    href: "https://linkedin.com/in/kevindiesenberg",
    primary: true,
  },
  {
    name: "GitHub",
    icon: "github" as const,
    href: "https://github.com/kevdies",
    primary: false,
  },
  {
    name: "Medium",
    icon: "medium" as const,
    href: "https://medium.com/@kevdies",
    primary: false,
  },
];

export interface ConnectSectionProps {
  id?: string;
}

const ConnectSection: React.FC<ConnectSectionProps> = ({ id = "connect" }) => {
  return (
    <Section id={id} title="" spacing="lg">
      <div className="text-center mb-xl">
        <h2 className="text-h2 font-heading font-semibold gradient-text mb-md">
          {`Let's Connect`}
        </h2>
        <div className="section-separator" />
        <p className="text-xl text-textMuted max-w-2xl mx-auto leading-relaxed">
          {`Ready to build something amazing together? I'd love to hear about your next project.`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg max-w-4xl mx-auto">
        {/* Resume Card - Enhanced */}
        <Card className="group">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <Icon name="download" size="lg" className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-emphasis">{`Resume`}</h3>
                <p className="text-textMuted text-sm">
                  {`Complete professional background`}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-sm">
              <Button
                asChild
                className="text-base font-semibold focus-ring group-hover:shadow-glow"
              >
                <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
                  <Icon name="eye" className="mr-2" size="sm" />
                  {`View Resume`}
                </a>
              </Button>
              <Button asChild variant="secondary" className="focus-ring">
                <a href={RESUME_PATH} download>
                  <Icon name="download" className="mr-2" size="sm" />
                  {`Download PDF`}
                </a>
              </Button>
              <Button
                onClick={shareResume}
                variant="secondary"
                className="focus-ring"
              >
                <Icon name="share" className="mr-2" size="sm" />
                {`Share Resume`}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Card - Enhanced */}
        <Card className="group">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <Icon name="email" size="lg" className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-emphasis">{`Get In Touch`}</h3>
                <p className="text-textMuted text-sm">
                  {`Multiple ways to reach me`}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-sm">
              {/* Primary contact methods */}
              <div className="grid grid-cols-1 gap-sm">
                {socialLinks
                  .filter((link) => link.primary)
                  .map((link) => (
                    <Button
                      key={link.name}
                      asChild
                      variant="secondary"
                      className={cn(
                        "w-full justify-start text-left focus-ring",
                        "hover:bg-surface-hover hover:border-border-hover"
                      )}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Contact via ${link.name}`}
                        title={`Contact via ${link.name}`}
                      >
                        <Icon name={link.icon} size="lg" className="mr-3" />
                        <span className="text-textMuted group-hover:text-text transition-colors">
                          {link.name === "Email"
                            ? "kdiesenb@gmail.com"
                            : link.name}
                        </span>
                      </a>
                    </Button>
                  ))}
              </div>

              {/* Secondary social links */}
              <div className="pt-md border-t border-border/50">
                <p className="text-xs text-textDim mb-3">{`Also find me on:`}</p>
                <div className="grid grid-cols-2 gap-sm">
                  {socialLinks
                    .filter((link) => !link.primary)
                    .map((link) => (
                      <Button
                        key={link.name}
                        asChild
                        variant="ghost"
                        size="sm"
                        className="focus-ring justify-start"
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Find me on ${link.name}`}
                          title={`Find me on ${link.name}`}
                        >
                          <Icon name={link.icon} size="sm" className="mr-2" />
                          {link.name}
                        </a>
                      </Button>
                    ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call-to-action footer */}
      <div className="text-center mt-xl pt-xl border-t border-border/30">
        <p className="text-lg text-textMuted mb-md">
          {`Currently open to new opportunities`}
        </p>
        <div className="flex flex-col sm:flex-row gap-sm justify-center max-w-lg mx-auto">
          <Button
            asChild
            className="text-base font-semibold shadow-glow focus-ring flex-1 sm:flex-initial"
          >
            <a href="mailto:kdiesenb@gmail.com?subject=Let's%20work%20together!">
              <Icon name="email" className="mr-2" size="sm" />
              {`Start a Conversation`}
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="focus-ring flex-1 sm:flex-initial"
          >
            <a
              href="https://linkedin.com/in/kevindiesenberg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" className="mr-2" size="sm" />
              {`Connect on LinkedIn`}
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ConnectSection;
