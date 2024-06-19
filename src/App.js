import React, { useState } from "react";
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
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleModal = () => setModal(!modal);

  const pdfUrl = `/Kevin_Diesenberg_Resume.pdf?${new Date().getTime()}`;

  return (
    <>
      <Navbar dark expand="md">
        <NavbarBrand tag={Link} to="/">
          <img src="/logo.png" alt="Logo" width="40" height="40" />{" "}
          <>Kevin Diesenberg</>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={toggleModal}>
                <FontAwesomeIcon icon={faEye} /> Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={pdfUrl} download>
                <FontAwesomeIcon icon={faDownload} /> Resume
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

      <Modal isOpen={modal} toggle={toggleModal} size="lg" className="custom-modal">
        <ModalHeader toggle={toggleModal} className="custom-modal-header">
          Resume
        </ModalHeader>
        <ModalBody className="custom-modal-body">
          <iframe
            src={pdfUrl}
            title="Kevin Diesenberg Resume"
            style={{ width: '100%', height: '500px', border: 'none' }}
          ></iframe>
        </ModalBody>
      </Modal>
    </>
  );
}

export default App;
