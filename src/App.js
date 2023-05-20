import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar dark expand="md">
        <NavbarBrand tag={Link} to="/">
          <img src="/logo.png" alt="Logo" width="40" height="40" />{" "}
          <>Kevin Diesenberg</>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" onClick={toggle}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/projects" onClick={toggle}>
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact" onClick={toggle}>
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="Kevin_Diesenberg_Resume.pdf" download>
                Resume <FontAwesomeIcon icon={faDownload} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Container fluid>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
