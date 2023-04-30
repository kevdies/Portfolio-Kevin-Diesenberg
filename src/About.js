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
      style={{ color: "var(--primary-color)", marginRight: "10px" }}
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
                Full Stack Software Engineer with expertise in object-oriented
                programming, web development, and database management.
              </strong>
            </h5>
            <List>
              <ListItem>JavaScript, Ruby, React, and Ruby on Rails</ListItem>
              <ListItem>SQL, MySQL, and PostgreSQL</ListItem>
              <ListItem>HTML, CSS, Bootstrap, and Reactstrap</ListItem>
              <ListItem>REST API</ListItem>
              <ListItem>User Authentication and Data Validation</ListItem>
            </List>
          </Paragraph>

          <ImageComponent src="/kevin-artichoke.png" alt="Kevin-Artichoke" />
          <Paragraph>
            <h5>
              <strong>
                I earned my Software Engineer certification from Flatiron School
                thanks to a combination of strengths including:
              </strong>
            </h5>
            <List>
              <ListItem>
                Attention to detail in high-consequence environments
              </ListItem>
              <ListItem>Simplifying complex ideas</ListItem>
              <ListItem>Working with people from diverse backgrounds</ListItem>
              <ListItem>Commitment to continuous learning and growth</ListItem>
            </List>
          </Paragraph>
        </Col>
        <Col xs="12" sm="6" md="6">
          <ImageComponent src="/portfolio-picture.png" alt="Lake-Huron" />
          <Paragraph>
            <h5>
              <strong>
                I have always worked in what I love. Before becoming a Software
                Engineer, I worked as a
              </strong>
            </h5>
            <List>
              <ListItem>
                Skydiving Instructor at Midwest Freefall Parachute Center
              </ListItem>
              <ListItem>
                Rigger and Stagehand for the International Alliance of
                Theatrical Stage Employees
              </ListItem>
              <ListItem>
                Backcountry Water Treatment Operator for the National Park
                Service
              </ListItem>
              <ListItem>Restaurant Manager for a vegan restaurant</ListItem>
            </List>
          </Paragraph>
          <Paragraph>
            <h5>
              <strong>
                Aside from my passion for Software Engineering, I have several
                hobbies that keep me active and energized.
              </strong>
            </h5>
            <List>
              <ListItem>Skydiving</ListItem>
              <ListItem>Paramotoring</ListItem>
              <ListItem>Camping</ListItem>
              <ListItem>Hiking and Backpacking</ListItem>
              <ListItem>
                Road Biking, Mountain Biking, and Bike packing
              </ListItem>
            </List>
          </Paragraph>

          <ImageComponent src="/kevin-deland.png" alt="Kevin-Deland" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
