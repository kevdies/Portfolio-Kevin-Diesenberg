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
  },
  {
    href: "https://www.linkedin.com/in/kevindiesenberg/",
    icon: faLinkedin,
  },
  {
    href: "https://github.com/kevdies/",
    icon: faGithub,
  },
  {
    href: "https://instagram.com/kevdies/",
    icon: faInstagram,
  },
  {
    href: "https://www.facebook.com/kevin.diesenberg/",
    icon: faFacebook,
  },
  {
    href: "https://kevindiesenberg.medium.com/",
    icon: faMedium,
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
        {contactLinks.map(({ href, icon }, index) => (
          <Button
            className="custom-button"
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} size="2x" />
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
}

export default ContactButtonGroup;
