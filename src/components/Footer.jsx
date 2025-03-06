import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/icons/footerlogo.png";
import fb from "../assets/icons/facebookIcon.png";
import twitter from "../assets/icons/twitterIcon.png";
import git from "../assets/icons/githubIcon.png";
import linkedin from "../assets/icons/linkedinIcon.png";
import phoneIcon from "../assets/icons/icon.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <Container fluid className="section-container">
        <Row className="align-items-center first-section d-flex justify-content-between">
          <Col md={5}>
            <h2 className="section-title">Innovating IT solutions for the modern world.</h2>
            <p className="section-text">
              Empowering businesses with cutting-edge technology and tailored solutions.
            </p>
          </Col>
          <Col md={5} className="d-flex justify-content-end align-items-center btn-container">
            <Button className="primary-btn footer-btn-1">Discover Our Services</Button>
            <Button className="secondary-btn footer-btn-2">
              <img src={phoneIcon} alt="Contact Icon" className="icon-class" height="18" />
              Contact Us
            </Button>
          </Col>
        </Row>

        {/* Second Section */}
        <Row className="second-section d-flex ">
          <Col md={4}>
            <img src={logo} alt="Cache Logic" height="26" />
            <p className="company-description">
              Cache Logic is a global IT services firm committed to powering your business with innovative tech solutions.
            </p>

          </Col>
          <Col xs={6} md={4} className="footer-menu col-6">
            <h5 className="company-heading">Company</h5>
            <p className="company-links">About us</p>
            <p className="company-links">Careers</p>
            <p className="company-links">News</p>
            <p className="company-links">Contact</p>
          </Col>
          <Col xs={6} md={4} className="social-icons-container mobile-show col-6">
            <div className="social-icons">
              <img src={twitter} alt="Twitter" className="social-icon" />
              <img src={linkedin} alt="LinkedIn" className="social-icon" />
              <img src={fb} alt="Facebook" className="social-icon" />
              <img src={git} alt="GitHub" className="social-icon" />
            </div>
          </Col>

        </Row>
        <Row className="second-section d-flex justify-content-between align-items-center">
          <Col md={6} className="copyright-container">
            <p className="copyright">© 2077 Cache Logic. All rights reserved.</p>
          </Col>
          <Col md={6} className="social-icons-container mobile-hide">
            <div className="social-icons">
              <img src={twitter} alt="Twitter" className="social-icon" />
              <img src={linkedin} alt="LinkedIn" className="social-icon" />
              <img src={fb} alt="Facebook" className="social-icon" />
              <img src={git} alt="GitHub" className="social-icon" />
            </div>
          </Col>
        </Row>


        {/* Third Section */}
        <div className="third-section">
          <h1 className="footer-text">cache logic</h1>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
