import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const projects = [
  {
    title: "Aweful Skydiving",
    imgSrc: "/AWE logo.png",
    imgAlt: "Aweful Skydiving",
    description: (
      <>
        <h5>
          A skill-focused event platform for skydivers built with React, Ruby on
          Rails, and PostgreSQL.
        </h5>
        <ul>
          <li>
            Created with React, Ruby on Rails, Active Record, Active Storage,
            Reactstrap, Bootstrap, and PostgreSQL.
          </li>
          <li>
            Implemented user authentication and authorization using bcrypt.
          </li>
          <li>
            Utilized Active Record for efficient database queries and
            management.
          </li>
          <li>
            Developed a responsive User Interface using Bootstrap and
            Reactstrap.
          </li>
        </ul>
      </>
    ),
    demoLink: "https://youtu.be/7JUL1CPlHqg",
    githubLink: "https://github.com/kevdies/aweful",
  },
  {
    title: "Trail Share",
    imgSrc: "/TrailShareLogo.png",
    imgAlt: "Trail-Share",
    description: (
      <>
        <h5>
          A social networking platform for hikers to share and discover trail
          information, track miles hiked, and earn badges.
        </h5>
        <ul>
          <li>
            Created with React, Ruby on Rails, Active Record, Bootstrap, and
            PostgreSQL.
          </li>
          <li>
            Utilized RESTful API design principles to build efficient back-end
            services.
          </li>
          <li>
            Implemented user authentication and authorization using bcrypt.
          </li>
          <li>
            Developed a responsive User Interface with Bootstrap and CSS-styled
            components.
          </li>
        </ul>
      </>
    ),
    demoLink: "https://youtu.be/seImhfcp8X8",
    githubLink: "https://github.com/drclements/trail-share",
  },
  {
    title: "HSTRY",
    imgSrc: "/HSTRY-logo.png",
    imgAlt: "HSTRY",
    description: (
      <>
      <h5>
        A state controlled form designed to aid medical historians in
        efficiently compiling medical histories for QME evaluation applicants.
      </h5>
       <ul>
          <li>
            Created with React, Ruby on Rails, Active Record, Reactstrap, and
            PostgreSQL.
          </li>
          <li>
            Utilized RESTful API design principles to build efficient back-end
            services.
          </li>
          <li>
            Implemented user authentication and authorization using bcrypt.
          </li>
          <li>
            Developed a responsive User Interface with Reactstrap and CSS-styled
            components.
          </li>
        </ul>
        </>
    ),
    demoLink: "#",
    githubLink: "https://github.com/kevdies/HSTRY",
  },
];

function Projects() {
  return (
    <Container className="my-5">
      {/* <div className="mb-4 text-center">
        <img
          src="/kevinportfoliobanner.png"
          alt="Kevin Diesenberg"
          className="img-fluid"
        />
      </div> */}
      <Row>
        {projects.map((project) => (
          <Col xs="12" sm="6" md="4" key={project.title}>
            <Card className="mb-4">
              <CardImg top src={project.imgSrc} alt={project.imgAlt} />
              <CardBody>
                <CardTitle>{project.title}</CardTitle>
                <CardText>{project.description}</CardText>
                <div className="buttons-container">
                  <Button
                    className="custom-button"
                    href={project.demoLink}
                    target="_blank"
                  >
                    Demo
                  </Button>{" "}
                  <Button
                    className="custom-button"
                    href={project.githubLink}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


export default Projects;
