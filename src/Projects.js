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
} from "reactstrap";

const projects = [
  {
    title: "Aweful Skydiving",
    imgSrc: "/AWE logo.png",
    imgAlt: "Aweful Skydiving",
    description: (
      <>
        <h5 className="common-heading">
          A skill-focused event platform for skydivers built with React, Ruby on
          Rails, and PostgreSQL.
        </h5>
        <ul className="common-paragraph">
          <li className="list-item-text">
            Created with React, Ruby on Rails, Active Record, Active Storage,
            Reactstrap, Bootstrap, and PostgreSQL.
          </li>
          <li className="list-item-text">
            Implemented user authentication and authorization using bcrypt.
          </li>
          <li className="list-item-text">
            Utilized Active Record for efficient database queries and
            management.
          </li>
          <li className="list-item-text">
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
        <h5 className="common-heading">
          A social networking platform for hikers to share and discover trail
          information, track miles hiked, and earn badges.
        </h5>
        <ul className="common-paragraph">
          <li className="list-item-text">
            Created with React, Ruby on Rails, Active Record, Bootstrap, and
            PostgreSQL.
          </li>
          <li className="list-item-text">
            Utilized RESTful API design principles to build efficient back-end
            services.
          </li>
          <li className="list-item-text">
            Implemented user authentication and authorization using bcrypt.
          </li>
          <li className="list-item-text">
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
        <h5 className="common-heading">
          A state controlled form designed to aid medical historians in
          efficiently compiling medical histories for QME evaluation applicants.
        </h5>
        <ul className="common-paragraph">
          <li className="list-item-text">
            Created with React, Ruby on Rails, Active Record, Reactstrap, and
            PostgreSQL.
          </li>
          <li className="list-item-text">
            Utilized RESTful API design principles to build efficient back-end
            services.
          </li>
          <li className="list-item-text">
            Implemented user authentication and authorization using bcrypt.
          </li>
          <li className="list-item-text">
            Developed a responsive User Interface with Reactstrap and CSS-styled
            components.
          </li>
        </ul>
      </>
    ),
    demoLink: "https://youtu.be/dWumb-_XHhA",
    githubLink: "https://github.com/kevdies/HSTRY",
  },
];

function Projects() {
  return (
    <Container
      className="project-container"
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
        {projects.map((project) => (
          <Col xs="12" sm="6" md="4" key={project.title}>
            <Card className="mb-4">
              <CardImg top src={project.imgSrc} alt={project.imgAlt} />
              <CardBody>
                <CardTitle>{project.title}</CardTitle>
                <CardText>{project.description}</CardText>
                <div className="buttons-container">
                  <a
                    className="custom-button btn"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>{" "}
                  <a
                    className="custom-button btn"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
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
