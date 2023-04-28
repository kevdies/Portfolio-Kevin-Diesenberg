import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const ImageComponent = ({ src, alt }) => (
  <Container className="text-center mb-4">
    <img src={src} alt={alt} className="img-fluid rounded" />
  </Container>
);

const Paragraph = ({ children }) => (
  <p className="lead paragraph">{children}</p>
);

const ListItem = ({ children }) => (
  <li style={{ listStyle: "none", paddingLeft: 0 }}>
    <FontAwesomeIcon
      icon={faCircleArrowRight}
      style={{ color: "var(--primary-color)" }}
    />{" "}
    {children}
  </li>
);

const List = ({ children }) => <ul>{children}</ul>;

function About() {
  return (
    <Container className="my-5">
      <Row>
        <Col xs="12" sm="6" md="6">
          <Paragraph>
            <h5>
              <strong>
                I am a versatile Full Stack Software Engineer with expertise in
                object-oriented programming, web development, and database
                management. My skills include:
              </strong>
            </h5>
            <List>
              <ListItem>JavaScript, Ruby, React, and Ruby on Rails</ListItem>
              <ListItem>SQL, MySQL, and PostgreSQL</ListItem>
              <ListItem>HTML, CSS, Bootstrap, and Reactstrap</ListItem>
              <ListItem>
                Render, Git, Agile Methodologies, Test Driven Development, MVC
                Architecture, API Integration, REST API
              </ListItem>
              <ListItem>
                <strong>Security and Validation:</strong> User Authentication,
                and Data Validation
              </ListItem>
            </List>
          </Paragraph>

          <ImageComponent src="/kevin-artichoke.png" alt="Kevin-Artichoke" />
          <Paragraph>
            <h5>
              <strong>
                Aside from my passion for Software Engineering, I
                have several hobbies that keep me active and energized.
              </strong>
            </h5>
            <List>
              <ListItem>Skydiving</ListItem>
              <ListItem>Paramotoring</ListItem>
              <ListItem>Camping</ListItem>
              <ListItem>Hiking, Backpacking</ListItem>
              <ListItem>Road Biking, Mountain Biking, Bike packing</ListItem>
            </List>
          </Paragraph>
        </Col>
        <Col xs="12" sm="6" md="6">
          <ImageComponent src="/portfolio-picture.png" alt="Lake-Huron" />
          <Paragraph>
            <h5>
              <strong>Before becoming a Software Engineer</strong>
            </h5>
            <List>
              <ListItem>
                I worked as a Skydiving Instructor at the Midwest Freefall
                Parachute Center in Romeo, Michigan.
              </ListItem>
              <ListItem>
                I worked as a Rigger and Stagehand for the International
                Alliance of Theatrical Stage Employees in Washington D.C.
              </ListItem>
              <ListItem>
                I worked as a Backcountry Water Treatment Operator for the
                National Park Service in Yosemite, Glacier, and Yellowstone.
              </ListItem>
              <ListItem>
                I worked as a Restaurant Manager for Panda Veg in Richmond,
                Virginia.
              </ListItem>
            </List>
          </Paragraph>

          <ImageComponent src="/kevin-deland.png" alt="Kevin-Emily" />
          <Paragraph>
            <h5>
              <strong>
                I successfully earned my Software Engineer
                certification from Flatiron School in February of 2023, thanks
                to a combination of strengths such as:
              </strong>
            </h5>
            <List>
              <ListItem>
                Strong problem-solving skills and analytical thinking
              </ListItem>
              <ListItem>
                Effective time management and ability to meet deadlines
              </ListItem>
              <ListItem>
                Excellent communication and collaboration skills
              </ListItem>
              <ListItem>
                Highly adaptable and quick to learn new technologies
              </ListItem>
              <ListItem>Commitment to continuous learning and growth</ListItem>
            </List>
          </Paragraph>
        </Col>
      </Row>
    </Container>
  );
}

export default About;


