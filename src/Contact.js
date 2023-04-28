import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
  faMedium,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const contactLinks = [
  {
    href: "mailto:kdiesenb@gmail.com",
    icon: faEnvelope,
  },
  {
    href: "https://www.linkedin.com/in/kevindiesenberg",
    icon: faLinkedin,
  },
  {
    href: "https://github.com/kevdies",
    icon: faGithub,
  },
  {
    href: "https://instagram.com/kevdies?igshid=YmMyMTA2M2Y=",
    icon: faInstagram,
  },
  {
    href: "https://www.facebook.com/kevin.diesenberg?mibextid=LQQJ4d",
    icon: faFacebook,
  },
  {
    href: "https://kevindiesenberg.medium.com/",
    icon: faMedium,
  },
  {
    href: "https://twitter.com/KevinDiesenberg",
    icon: faTwitter,
  },
];

function Contact() {
  return (
    <Container className="text-center my-5 contact-container">
      <h2 className="header">Let's Connect</h2>
      <h4 className="subheader mb-4" >Find me on these platforms</h4>

      <Row className="justify-content-center buttons-container">
        {contactLinks.map(({ href, icon }, index) => (
          <Col key={index} xs="6" sm="4" md="4" lg="2" className="mb-4">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link d-inline-block"
            >
              <FontAwesomeIcon
                icon={icon}
                size="3x"
                className="mx-3 contact-icon"
              />
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Contact;

// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
//   faTwitter,
//   faLinkedin,
//   faGithub,
//   faInstagram,
//   faMedium,
//   faFacebook,
// } from "@fortawesome/free-brands-svg-icons";

// const contactLinks = [
//   {
//     href: "mailto:kdiesenb@gmail.com",
//     icon: faEnvelope,
//   },
//   {
//     href: "https://www.linkedin.com/in/kevindiesenberg",
//     icon: faLinkedin,
//   },
//   {
//     href: "https://github.com/kevdies",
//     icon: faGithub,
//   },
//   {
//     href: "https://instagram.com/kevdies?igshid=YmMyMTA2M2Y=",
//     icon: faInstagram,
//   },
//   {
//     href: "https://www.facebook.com/kevin.diesenberg?mibextid=LQQJ4d",
//     icon: faFacebook,
//   },
//   {
//     href: "https://kevindiesenberg.medium.com/",
//     icon: faMedium,
//   },
//   {
//     href: "https://twitter.com/KevinDiesenberg",
//     icon: faTwitter,
//   },
// ];

// function Contact() {
//   return (
//     <Container className="text-center my-5">
//       <h2 className="header">Lets Connect</h2>
//       <h4 className="subheader">Find me on these platforms</h4>

//       <Row className="justify-content-center">
//         {contactLinks.map(({ href, icon }, index) => (
//           <Col key={index} xs="6" sm="4" md="4" lg="2" className="mb-4">
//             <a
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="contact-link d-inline-block"
//             >
//               <FontAwesomeIcon
//                 icon={icon}
//                 size="3x"
//                 className="mx-3 contact-icon"
//               />
//             </a>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Contact;

