import React, { useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons/faCircleArrowRight";
import ContactButtonGroup from "./ContactButtonGroup";

const sections = [
  {
    title: "Full Stack Software Engineer",
    imgSrc: "/kev-henry-artichoke.png",
    imgAlt: "Kevin and his dogs on Lake Huron",
    description: [
      "Full Stack Software Engineer at Graham Media Group with expertise in object-oriented programming, web development, and database management.",
      "JavaScript, TypeScript, Ruby, React, and Ruby on Rails",
      "SQL, MySQL, and PostgreSQL",
      "HTML, CSS, Bootstrap, and Reactstrap",
      "REST API",
      "User Authentication and Data Validation",
    ],
  },
  {
    title:
      "I earned my Software Engineer certification from Flatiron School thanks to a combination of strengths including:",
    imgSrc: "/kevin-artichoke.jpg",
    imgAlt: "Kevin-Artichoke",
    description: [
      "Attention to detail in high-consequence environments",
      "Simplifying complex ideas",
      "Working with people from diverse backgrounds",
      "Commitment to continuous learning and growth",
    ],
  },
  {
    title: "Before becoming a Software Engineer, I worked as a:",
    imgSrc: "/kevin-henry-lake-huron.jpg",
    imgAlt: "Kevin on Lake Huron",
    description: [
      "Rigger and Stagehand for the International Alliance of Theatrical Stage Employees",
      "Backcountry Water Treatment Operator for the National Park Service",
    ],
  },
  {
    title: "I have several hobbies that keep me active and energized:",
    imgSrc: "/kevin-deland.jpg",
    imgAlt: "Kevin-Deland",
    description: [
      "Skydiving",
      "Paramotoring",
      "Camping",
      "Hiking and Backpacking",
      "Road Biking and Mountain Biking",
    ],
  },
];

function About() {
  return (
    <Container className="about-container">
      <Row>
        {sections.map((section) => (
          <Col xs="12" sm="6" md="6" className="mb-4" key={section.title}>
            <Card style={{ height: "100%" }}>
              <CardImg top src={section.imgSrc} alt={section.imgAlt} />
              <CardBody>
                <CardTitle tag="h5" fontSize="1.25rem" fontWeight="700">
                  {section.title}
                </CardTitle>
                <ListGroup>
                  {section.description.map((desc, index) => (
                    <ListGroupItem key={index}>
                      <FontAwesomeIcon
                        icon={faCircleArrowRight}
                        style={{
                          color: "var(--primary-color)",
                          marginRight: "10px",
                        }}
                      />
                      {desc}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Card>
        <CardBody>
          <ContactButtonGroup />
        </CardBody>
      </Card>
    </Container>
  );
}

export default About;
