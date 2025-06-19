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
      <div className="text-center mb-12">
        <h2 className="text-h2 font-heading font-semibold bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent mb-6">
          {`Let's Connect`}
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-primary-start to-primary-end mx-auto mb-8 opacity-60 rounded-full" />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          maxWidth: "56rem",
          margin: "0 auto",
        }}
      >
        {/* Resume Card */}
        <Card
          className="group"
          style={{
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            transition: "box-shadow 300ms",
            height: "100%",
          }}
        >
          <CardHeader>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(to right, var(--primary-start), var(--primary-end))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  color: "white",
                }}
              >
                <Icon name="download" size="lg" />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    color: "var(--text-emphasis)",
                  }}
                >
                  {`Resume`}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                  {`Complete professional background`}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Button
                asChild
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 200ms",
                }}
              >
                <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
                  <Icon name="eye" className="mr-2" size="sm" />
                  {`View Resume`}
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                style={{
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 200ms",
                }}
              >
                <a href={RESUME_PATH} download>
                  <Icon name="download" className="mr-2" size="sm" />
                  {`Download PDF`}
                </a>
              </Button>
              <Button
                onClick={shareResume}
                variant="secondary"
                style={{
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 200ms",
                }}
              >
                <Icon name="share" className="mr-2" size="sm" />
                {`Share Resume`}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Card */}
        <Card
          className="group"
          style={{
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            transition: "box-shadow 300ms",
            height: "100%",
          }}
        >
          <CardHeader>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(to right, var(--primary-start), var(--primary-end))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  color: "white",
                }}
              >
                <Icon name="email" size="lg" />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    color: "var(--text-emphasis)",
                  }}
                >
                  {`Get in Touch`}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                  {`Currently open to new opportunities`}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {socialLinks.map((link, index) => (
                <Button
                  key={link.name}
                  asChild
                  variant={index === 0 ? "default" : "secondary"}
                  className={cn("justify-start text-left")}
                  style={{
                    boxShadow:
                      index === 0
                        ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                        : "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                    transition: "all 200ms",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    fontSize: "0.875rem",
                  }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contact via ${link.name}`}
                  >
                    <Icon name={link.icon} size="sm" className="mr-2" />
                    <span
                      style={{
                        color: index === 0 ? "inherit" : "var(--text-muted)",
                      }}
                    >
                      {link.label}
                    </span>
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
