import React, { useState, useMemo, useCallback } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
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
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const location = useLocation();

  const toggleNavbar = useCallback(() => setIsOpen((prev) => !prev), []);
  const toggleModal = useCallback(() => setModal((prev) => !prev), []);

  const pdfUrl = useMemo(
    () => `/Kevin_Diesenberg_Resume.pdf?${new Date().getTime()}`,
    []
  );

  const handleNavLinkClick = useCallback(
    (path) => {
      if (location.pathname !== path) {
        setIsOpen(false);
      }
    },
    [location.pathname]
  );

  const navLinks = useMemo(
    () => [
      { to: "/", label: "About" },
      { to: "/projects", label: "Projects" },
      { to: "/contact", label: "Contact" },
    ],
    []
  );

  return (
    <>
      <Navbar dark expand="md">
        <NavbarBrand tag={Link} to="/">
          <img
            src="/logo.png"
            alt="Logo"
            width="50"
            height="50"
            style={{
              borderRadius: "5px",
              marginRight: "10px",
            }}
          />
          Kevin Diesenberg
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navLinks.map((link, index) => (
              <NavItem key={index}>
                <NavLink
                  tag={Link}
                  to={link.to}
                  onClick={() => handleNavLinkClick(link.to)}
                >
                  {link.label}
                </NavLink>
              </NavItem>
            ))}
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

      <Modal
        isOpen={modal}
        toggle={toggleModal}
        size="lg"
        className="custom-modal"
      >
        <ModalHeader toggle={toggleModal} className="custom-modal-header">
          Resume
        </ModalHeader>
        <ModalBody className="custom-modal-body">
          <div className="responsive-iframe-container">
            <iframe
              src={pdfUrl}
              title="Kevin Diesenberg Resume"
              className="responsive-iframe"
              style={{ width: "100%", height: "100%", border: "none" }}
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default App;
