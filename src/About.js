import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons/faCircleArrowRight";

const sections = [
  {
    title: "About Me",
    imgSrc: "/kev-henry-artichoke.png",
    imgAlt: "Kevin and his dogs on Lake Huron",
    description: (
      <>
        <h5 className="common-heading">
          <strong>
            Full Stack Software Engineer at Graham Media Group with expertise in
            object-oriented programming, web development, and database
            management.
          </strong>
        </h5>
        <div className="common-paragraph">
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            JavaScript, TypeScript, Ruby, React, and Ruby on Rails
          </div>
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            SQL, MySQL, and PostgreSQL
          </div>
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            HTML, CSS, Bootstrap, and Reactstrap
          </div>
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            REST API
          </div>
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            User Authentication and Data Validation
          </div>
        </div>
      </>
    ),
  },
  {
    title: "My Journey",
    imgSrc: "/kevin-artichoke.jpg",
    imgAlt: "Kevin-Artichoke",
    description: (
      <>
        <h5 className="common-heading">
          <strong>
            I earned my Software Engineer certification from Flatiron School
            thanks to a combination of strengths including:
          </strong>
        </h5>
        <div className="common-paragraph">
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            Attention to detail in high-consequence environments
          </div>
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            Simplifying complex ideas
          </div>
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            Working with people from diverse backgrounds
          </div>
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            Commitment to continuous learning and growth
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Experience",
    imgSrc: "/kevin-henry-lake-huron.jpg",
    imgAlt: "Kevin on Lake Huron",
    description: (
      <>
        <h5 className="common-heading">
          <strong>Before becoming a Software Engineer, I worked as a:</strong>
        </h5>
        <div className="common-paragraph">
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            Skydiving Instructor at Midwest Freefall Skydiving
          </div>
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            Rigger and Stagehand for the International Alliance of Theatrical
            Stage Employees
          </div>
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            Backcountry Water Treatment Operator for the National Park Service
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Hobbies",
    imgSrc: "/kevin-deland.jpg",
    imgAlt: "Kevin-Deland",
    description: (
      <>
        <h5 className="common-heading">
          <strong>
            I have several hobbies that keep me active and energized:
          </strong>
        </h5>
        <div className="common-paragraph">
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            Skydiving
          </div>
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            Paramotoring
          </div>
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            Camping
          </div>
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            Hiking and Backpacking
          </div>
          <div className="list-item-text">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "var(--primary-color)", marginRight: "10px" }}
            />
            Road Biking and Mountain Biking
          </div>
        </div>
      </>
    ),
  },
];

function About() {
  return (
    <Container className="about-container">
      <Row>
        {sections.map((section) => (
          <Col xs="12" sm="6" md="6" key={section.title} className="mb-4">
            <Card style={{ height: "100%" }}>
              <CardImg top src={section.imgSrc} alt={section.imgAlt} />
              <CardBody>
                <CardText>{section.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;
