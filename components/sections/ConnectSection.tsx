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
      <div className="text-center mb-16">
        <h2 className="text-3xl font-['Poppins'] font-semibold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent mb-6">
          {`Let's Connect`}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Resume Card */}
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
                <Icon name="download" size="lg" className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-['Poppins'] font-semibold text-white">
                  Resume
                </h3>
                <p className="text-gray-400 text-sm">
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
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
                <Icon name="email" size="lg" className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-['Poppins'] font-semibold text-white">
                  Get in Touch
                </h3>
                <p className="text-gray-400 text-sm">
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

export default ConnectSection;
