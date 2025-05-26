"use client";

import React from "react";
import Section from "../ui/Section";
import { Card, CardHeader, CardContent } from "../ui/Card";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { shareResume, RESUME_PATH } from "../../utils/share";

const socialLinks = [
  {
    name: "Email",
    icon: "email" as const,
    href: "mailto:kdiesenb@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: "linkedin" as const,
    href: "https://linkedin.com/in/kevindiesenberg",
  },
  {
    name: "GitHub",
    icon: "github" as const,
    href: "https://github.com/kevdies",
  },
  {
    name: "Medium",
    icon: "medium" as const,
    href: "https://medium.com/@kevdies",
  },
];

export interface ConnectSectionProps {
  id?: string;
}

const ConnectSection: React.FC<ConnectSectionProps> = ({ id = "connect" }) => {
  return (
    <Section id={id} title="Connect">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg max-w-2xl mx-auto">
        {/* Resume Card */}
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Resume</h3>
            <p className="text-textMuted">
              Download or share my professional resume
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-sm">
              <Button asChild>
                <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={RESUME_PATH} download>
                  Download PDF
                </a>
              </Button>
              <Button onClick={shareResume} variant="secondary">
                Share
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Card */}
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="text-textMuted">
              {`Let's connect and discuss opportunities`}
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-sm">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  asChild
                  variant="secondary"
                  size="icon-lg"
                  className="w-full"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contact via ${link.name}`}
                    title={`Contact via ${link.name}`}
                  >
                    <Icon name={link.icon} size="lg" />
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
