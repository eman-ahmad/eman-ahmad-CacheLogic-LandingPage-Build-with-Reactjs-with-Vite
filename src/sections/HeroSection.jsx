import React from "react";
import { Button, Container } from "react-bootstrap";
import phoneIcon from "../assets/icons/icon.png";
import "../styles/herosection.css";

const HeroSection = () => {
  return (
    <Container fluid className="hero-wrapper">
  {/* New Container Behind Hero Section */}
  <div className="new-container"></div>

  {/* Main Hero Container */}
  <Container
    fluid
    className="d-flex align-items-center justify-content-start text-white hero-container"
  >
    <div className="hero-content">
      <h1 className="hero-heading">
        Fast-Tracking Your AI <span className="new-line">Evolution</span>
      </h1>
      <p className="hero-text">
        Empowering businesses with cutting-edge technology <br /> and tailored
        solutions.
      </p>
      <div className="hero-buttons">
        <Button variant="primary" className="me-2 herobtn-1">
          Discover Our Services
        </Button>
        <Button variant="outline-light contact-btn">
          <img src={phoneIcon} alt="Contact Icon" className="icon-class" />
          Contact Us
        </Button>
      </div>
    </div>
  </Container>
</Container>

  );
};

export default HeroSection;
