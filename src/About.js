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
    <FontAwesomeIcon icon={faCircleArrowRight} /> {children}
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
              <ListItem>
                JavaScript, Ruby, React, and Ruby on Rails
              </ListItem>
              <ListItem>
                 SQL, MySQL, and PostgreSQL
              </ListItem>
              <ListItem>
                 HTML, CSS, Bootstrap, and
                Reactstrap
              </ListItem>
              <ListItem>
               Render, Git, Agile
                Methodologies, Test Driven Development, MVC Architecture, API
                Integration, REST API
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
                Aside from my passion for Full Stack Software Engineering, I
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
              <strong>Before becoming a Full Stack Software Engineer</strong>
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
                I obtained my Full Stack Software Engineer certification from
                Flatiron School, in February of 2023.
              </strong>
            </h5>
            <List>
              <ListItem>I studied Ruby on Rails and JavaScript.</ListItem>
            </List>{" "}
            My hobbies allow me to maintain a healthy work-life balance, stay
            active, and connect with nature. I believe that a well-rounded
            lifestyle is essential to being a successful Full Stack Software
            Engineer, and my hobbies provide me with the energy and inspiration
            to excel in my work.
          </Paragraph>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

// import React from "react";
// import { Container, Row, Col } from "reactstrap";

// const ImageComponent = ({ src, alt }) => (
//   <Col xs="12" sm="6" md="4" className="mb-4">
//     <img src={src} alt={alt} className="img-fluid rounded" />
//   </Col>
// );

// const Paragraph = ({ children }) => (
//   <p className="lead paragraph">{children}</p>
// );

// function About() {
//   return (
//     <Container className="my-5">
//       <Row>
//         <Col className="text-center">
//           <Paragraph>
//             I am a versatile Full Stack Software Engineer with expertise in
//             object-oriented programming, web development, and database
//             management. My proficiency includes JavaScript, Ruby, React, and
//             Ruby on Rails, and I am skilled in SQL, PostgreSQL, HTML, CSS,
//             Bootstrap, Reactstrap, Render, Git, Agile Methodologies, Test Driven
//             Development, MVC Architecture, API Integration, REST API, User
//             Authentication, and Data Validation.
//           </Paragraph>
//           <Paragraph>
//             Aside from my passion for Full Stack Software Engineering, I have
//             several hobbies that keep me active and energized. I love spending
//             time outdoors and engaging in activities such as skydiving, road
//             biking, mountain biking, hiking, backpacking, bikepacking, and
//             camping. My experience in the entertainment, outdoor, and skydiving
//             industries has given me exceptional leadership and organizational
//             skills.
//           </Paragraph>
//           <Paragraph>
//             Before becoming a Full Stack Software Engineer, I worked as a
//             Skydiving Instructor at the Midwest Freefall Parachute Center in
//             Romeo, Michigan, a Rigger and Stagehand for the International
//             Allegiance of Theatrical Stage Employees in Washington D.C., and as
//             a Backcountry Water Treatment Operator for the National Park Service
//             in Yosemite, Glacier and Yellowstone. I also worked as a Restaurant
//             Manager for Panda Veg in Richmond, Virginia.
//           </Paragraph>
//           <Paragraph>
//             I obtained my Full Stack Software Engineer certification from
//             Flatiron School, February of 2023, where I studied Ruby on Rails and
//             JavaScript. My hobbies allow me to maintain a healthy work-life
//             balance, stay active, and connect with nature. I believe that a
//             well-rounded lifestyle is essential to being a successful Full Stack
//             Software Engineer, and my hobbies provide me with the energy and
//             inspiration to excel in my work.
//           </Paragraph>
//         </Col>
//       </Row>
//       <Row className="mb-4 text-center">
//         {/* <ImageComponent src="/kevin-artichoke.png" alt="Kevin-Artichoke" /> */}
//         <ImageComponent src="/portfolio-picture.png" alt="Lake-Huron" />
//         {/* <ImageComponent src="/kevin-pink-shirt.png" alt="Kevin-Emily" /> */}
//       </Row>
//     </Container>
//   );
// }

// export default About;
