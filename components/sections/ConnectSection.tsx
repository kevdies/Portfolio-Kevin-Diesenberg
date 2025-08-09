"use client";

import React from "react";
import Section from "../ui/Section";
import { Card, CardHeader, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { shareResume, RESUME_PATH } from "../../utils/share";

const socialLinks = [
  {
    name: "Email",
    icon: "email" as const,
    href: "mailto:kdiesenb@gmail.com",
    label: "kdiesenb@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: "linkedin" as const,
    href: "https://linkedin.com/in/kevindiesenberg",
    label: "LinkedIn",
  },
  {
    name: "GitHub",
    icon: "github" as const,
    href: "https://github.com/kevdies",
    label: "GitHub",
  },
  {
    name: "Medium",
    icon: "medium" as const,
    href: "https://medium.com/@kevdies",
    label: "Medium",
  },
];

export interface ConnectSectionProps {
  id?: string;
}

const ConnectSection: React.FC<ConnectSectionProps> = ({ id = "connect" }) => {
  return (
    <Section id={id} title="">
      <div className="mb-16 text-center">
        <h2 className="mb-6 bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text font-['Poppins'] text-3xl font-semibold text-transparent">
          {`Let's Connect`}
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Resume Card */}
        <Card className="h-full">
          <CardHeader>
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-md">
                <Icon name="download" size="lg" className="text-white" />
              </div>
              <div>
                <h3 className="font-['Poppins'] text-xl font-semibold text-white">
                  Resume
                </h3>
                <p className="text-sm text-gray-400">
                  Complete professional background
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <Button asChild className="w-full">
                <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
                  <Icon name="eye" className="mr-2" size="sm" />
                  View Resume
                </a>
              </Button>
              <Button asChild variant="secondary" className="w-full">
                <a href={RESUME_PATH} download>
                  <Icon name="download" className="mr-2" size="sm" />
                  Download PDF
                </a>
              </Button>
              <Button
                onClick={shareResume}
                variant="secondary"
                className="w-full"
              >
                <Icon name="share" className="mr-2" size="sm" />
                Share Resume
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Card */}
        <Card className="h-full">
          <CardHeader>
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-md">
                <Icon name="email" size="lg" className="text-white" />
              </div>
              <div>
                <h3 className="font-['Poppins'] text-xl font-semibold text-white">
                  Get in Touch
                </h3>
                <p className="text-sm text-gray-400">
                  Currently open to new opportunities
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={link.name}
                  asChild
                  variant={index === 0 ? "default" : "secondary"}
                  className="w-full justify-start"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contact via ${link.name}`}
                  >
                    <Icon name={link.icon} size="sm" className="mr-2" />
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export { ConnectSection };
