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
    <Section id={id} title="">
      <div className="text-center mb-12">
        <h2 className="text-h2 font-heading font-semibold bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent mb-6">
          {`Let's Connect`}
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-primary-start to-primary-end mx-auto mb-8 opacity-60 rounded-full" />
        <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
          {`Ready to build something amazing together? I'd love to hear about your next project.`}
        </p>
      </div>

      {/* Resume Card - Moved to top, centered */}
      <div className="max-w-md mx-auto mb-16">
        <Card className="group shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-start to-primary-end flex items-center justify-center shadow-md">
                <Icon name="download" size="lg" className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-text-emphasis">
                  Resume
                </h3>
                <p className="text-text-muted text-sm">
                  Complete professional background
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Button
                asChild
                className="text-base font-semibold focus:outline-none focus:ring-2 focus:ring-primary shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
                  <Icon name="eye" className="mr-2" size="sm" />
                  View Resume
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="focus:outline-none focus:ring-2 focus:ring-primary shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <a href={RESUME_PATH} download>
                  <Icon name="download" className="mr-2" size="sm" />
                  Download PDF
                </a>
              </Button>
              <Button
                onClick={shareResume}
                variant="secondary"
                className="focus:outline-none focus:ring-2 focus:ring-primary shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <Icon name="share" className="mr-2" size="sm" />
                Share Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mb-16">
        <p className="text-lg text-text-muted mb-8">
          Currently open to new opportunities
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <Button
            asChild
            className="text-base font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary flex-1 sm:flex-initial transition-shadow duration-200"
          >
            <a href="mailto:kdiesenb@gmail.com?subject=Let's%20work%20together!">
              <Icon name="email" className="mr-2" size="sm" />
              Start a Conversation
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="focus:outline-none focus:ring-2 focus:ring-primary flex-1 sm:flex-initial shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <a
              href="https://linkedin.com/in/kevindiesenberg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" className="mr-2" size="sm" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <h3 className="text-center text-lg font-heading font-semibold text-text-emphasis mb-8">
          Multiple Ways to Reach Me
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {socialLinks
            .filter((link) => link.primary)
            .map((link) => (
              <Button
                key={link.name}
                asChild
                variant="secondary"
                className={cn(
                  "justify-start text-left focus:outline-none focus:ring-2 focus:ring-primary",
                  "hover:bg-surface-hover hover:border-border-hover",
                  "shadow-sm hover:shadow-md transition-all duration-200"
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
                  <span className="text-text-muted group-hover:text-text transition-colors">
                    {link.name === "Email" ? "kdiesenb@gmail.com" : link.name}
                  </span>
                </a>
              </Button>
            ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-text-dim mb-4">Also find me on:</p>
          <div className="flex justify-center gap-6">
            {socialLinks
              .filter((link) => !link.primary)
              .map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Find me on ${link.name}`}
                  className={cn(
                    "flex items-center gap-2 text-text-muted hover:text-text",
                    "transition-colors duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
                  )}
                >
                  <Icon name={link.icon} size="sm" />
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ConnectSection;
