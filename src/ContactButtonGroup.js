import React from "react";
import { Button, ButtonGroup, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faMedium } from "@fortawesome/free-brands-svg-icons/faMedium";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";

const contactLinks = [
  {
    href: "mailto:kdiesenb@gmail.com",
    icon: faEnvelope,
    label: "Email Kevin Diesenberg",
  },
  {
    href: "https://www.linkedin.com/in/kevindiesenberg/",
    icon: faLinkedin,
    label: "Kevin Diesenberg on LinkedIn",
  },
  {
    href: "https://github.com/kevdies/",
    icon: faGithub,
    label: "Kevin Diesenberg on GitHub",
  },
  {
    href: "https://instagram.com/kevdies/",
    icon: faInstagram,
    label: "Kevin Diesenberg on Instagram",
  },
  {
    href: "https://www.facebook.com/kevin.diesenberg/",
    icon: faFacebook,
    label: "Kevin Diesenberg on Facebook",
  },
  {
    href: "https://kevindiesenberg.medium.com/",
    icon: faMedium,
    label: "Kevin Diesenberg on Medium",
  },
];

function ContactButtonGroup({ shake }) {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "0px",
      }}
    >
      <ButtonGroup
        className={shake ? "shake" : ""}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {contactLinks.map(({ href, icon, label }, index) => (
          <Button
            className="custom-button"
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <FontAwesomeIcon icon={icon} size="2x" />
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
}

export default ContactButtonGroup;
