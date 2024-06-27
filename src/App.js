import React, { useState, useMemo, useCallback, useRef } from "react";
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
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import About from "./About";
import Projects from "./Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [shake, setShake] = useState(false);
  const location = useLocation();
  const contactRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = useCallback(() => setIsOpen((prev) => !prev), []);
  const toggleModal = useCallback(() => {
    setModal((prev) => !prev);
    setTimeout(() => setIsOpen(false), 1000);
  }, []);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

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

  const handleDownloadClick = useCallback(() => {
    setTimeout(() => setIsOpen(false), 1000);
  }, []);

  const navLinks = useMemo(
    () => [
      { to: "/", label: "About" },
      { to: "/projects", label: "Projects" },
    ],
    []
  );

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
      setShake(true);
      setIsOpen(false);
    }
  };

  return (
    <Container fluid style={{ padding: "0px" }}>
      <Navbar dark expand="md" fixed="top" className="navbar">
        <NavbarBrand tag={Link} to="/">
          <img
            src="/logo.png"
            alt="Logo"
            width="50"
            height="50"
            style={{ marginRight: "16px" }}
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
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                Resume
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#" onClick={toggleModal}>
                  <FontAwesomeIcon icon={faEye} /> View Resume
                </DropdownItem>
                <DropdownItem
                  href={pdfUrl}
                  download
                  onClick={handleDownloadClick}
                >
                  <FontAwesomeIcon icon={faDownload} /> Download Resume
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink href="#" onClick={scrollToContact}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container fluid>
        <Routes>
          <Route
            path="/"
            element={
              <About
                contactRef={contactRef}
                shake={shake}
                setShake={setShake}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects
                contactRef={contactRef}
                shake={shake}
                setShake={setShake}
              />
            }
          />
        </Routes>
      </Container>
      <Modal
        isOpen={modal}
        toggle={toggleModal}
        size="lg"
        className="custom-modal"
      >
        <ModalHeader toggle={toggleModal} className="custom-modal-header">
          Resume: Kevin Diesenberg
        </ModalHeader>
        <ModalBody className="custom-modal-body">
          <div className="responsive-iframe-container">
            <iframe
              src={pdfUrl}
              title="Kevin Diesenberg Resume"
              className="responsive-iframe"
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
    </Container>
  );
}

export default App;
