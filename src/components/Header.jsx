import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import logo from "../assets/icons/logo-header.png"; // Ensure your logo path is correct
import "../styles/header.css"; // Custom CSS for styling

const Header = () => {
  return (
    <Navbar expand="lg" bg="white" className=" py-3 custom-navbar">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/" className="ms-2 d-flex align-items-center">
          <img src={logo} alt="Cache Logic" height="29" />
        </Navbar.Brand>

        {/* Navbar Toggler for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible Menu */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">  {/* Ensures menu stays on the left */}
            <Nav.Link href="#home">Home</Nav.Link>

            {/* Services Dropdown */}
            <NavDropdown title="Services" id="services-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#service1">Web Development</NavDropdown.Item>
              <NavDropdown.Item href="#service2">App Development</NavDropdown.Item>
              <NavDropdown.Item href="#service3">UI/UX Design</NavDropdown.Item>
            </NavDropdown>

            {/* About Dropdown */}
            <NavDropdown title="About" id="about-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#about-us">Who We Are</NavDropdown.Item>
              <NavDropdown.Item href="#team">Meet Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Contact Button for Mobile */}
          <div className="d-lg-none text-center mt-3">
            <Button variant="primary" className="header-btn w-100">
              Contact Us
            </Button>
          </div>
        </Navbar.Collapse>

        {/* Contact Button for Desktop */}
        <div className="d-none d-lg-block">
          <Button variant="primary" className="ms-3 header-btn">
            Contact Us
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
