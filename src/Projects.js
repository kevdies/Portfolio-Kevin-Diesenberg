import React, { useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import ContactButtonGroup from "./ContactButtonGroup";

const projects = [
  {
    title: "A platform where skydivers can sign up for skill-focused events.",
    imgSrc: "/AWE logo.png",
    imgAlt: "Aweful Skydiving",
    description: [
      "Created with React, Ruby on Rails, Active Record, Active Storage, Reactstrap, Bootstrap, and PostgreSQL.",
      "Implemented user authentication and authorization using bcrypt.",
      "Utilized Active Record for efficient database queries and management.",
      "Developed a responsive User Interface using Bootstrap and Reactstrap.",
    ],
    demoLink: "https://youtu.be/7JUL1CPlHqg",
    githubLink: "https://github.com/kevdies/aweful",
  },
  {
    title:
      "A social networking platform for hikers to share and discover trail information, track miles hiked, and earn badges.",
    imgSrc: "/TrailShareLogo.png",
    imgAlt: "Trail-Share",
    description: [
      "Created with React, Ruby on Rails, Active Record, Bootstrap, and PostgreSQL.",
      "Utilized RESTful API design principles to build efficient back-end services.",
      "Implemented user authentication and authorization using bcrypt.",
      "Developed a responsive User Interface with Bootstrap and CSS-styled components.",
    ],
    demoLink: "https://youtu.be/seImhfcp8X8",
    githubLink: "https://github.com/drclements/trail-share",
  },
  {
    title:
      "A state controlled form designed to aid medical historians in efficiently compiling medical histories for QME evaluation applicants.",
    imgSrc: "/HSTRY-logo.png",
    imgAlt: "HSTRY",
    description: [
      "Created with React, Ruby on Rails, Active Record, Reactstrap, and PostgreSQL.",
      "Utilized RESTful API design principles to build efficient back-end services.",
      "Implemented user authentication and authorization using bcrypt.",
      "Developed a responsive User Interface with Reactstrap and CSS-styled components.",
    ],
    demoLink: "https://youtu.be/dWumb-_XHhA",
    githubLink: "https://github.com/kevdies/HSTRY",
  },
];

function Projects() {
  return (
    <Container className="project-container">
      <Row>
        {projects.map((project) => (
          <Col xs="12" sm="6" md="4" className="mb-4" key={project.title}>
            <Card style={{ height: "100%" }}>
              <CardImg top src={project.imgSrc} alt={project.imgAlt} />
              <CardBody style={{ paddingBottom: "8px" }}>
                <CardTitle tag="h5" fontSize="1.25rem" fontWeight="700">
                  {project.title}
                </CardTitle>
                <ListGroup>
                  {project.description.map((desc, index) => (
                    <ListGroupItem key={index}>{desc}</ListGroupItem>
                  ))}
                </ListGroup>
                <Container className="buttons-container">
                  <Button
                    className="custom-button"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </Button>
                  <Button
                    className="custom-button"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                </Container>
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

export default Projects;
