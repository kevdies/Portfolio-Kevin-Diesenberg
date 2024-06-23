import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
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

function Contact() {
  return (
    <Container
      className="text-center contact-container"
      style={{
        marginTop: "1rem",
        marginBottom: "1rem",
        padding: "2rem",
        borderRadius: "15px",
        border: "5px solid",
        borderImage:
          "linear-gradient(to right, var(--primary-color), var(--accent-color)) 1",
        boxShadow: "0 4px 8px var(--box-shadow-color)",
        background: "var(--light-color)",
      }}
    >
      <Row>
        {contactLinks.map(({ href, icon }, index) => (
          <Col key={index} xs="6" sm="4" md="4" lg="2" className="mb-2">
            <Button
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-button contact-link"
            >
              <FontAwesomeIcon
                icon={icon}
                size="3x"
                className="mx-3 contact-icon"
              />
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Contact;
