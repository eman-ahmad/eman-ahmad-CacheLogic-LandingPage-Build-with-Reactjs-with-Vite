import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/brandsection.css"; 
import logo1 from "../assets/icons/firstlogo.png";
import logo2 from "../assets/icons/secondlogo.png";
import logo3 from "../assets/icons/thirdlogo.png";
import logo4 from "../assets/icons/forthlogo.png";
import logo5 from "../assets/icons/fifthlogo.png";
import logo6 from "../assets/icons/sixthlogo.png";




const BrandSection = () => {
  return (
    <section className="brand-section py-5">
      <Container>
        {/* Line and Text */}
        <div className="text-center mb-4">
          <p className="tagline">
            Join 400+ companies that trust our innovative IT solutions to drive growth and success.
          </p>
        </div>

        {/* Row of Brand Logos */}
        <Row className="d-flex justify-content-center brands-mobile">
          <Col xs={6} sm={4} md={2} className="text-center brand">
            <div className="brand-content">
              <img
                src={logo1}
                alt="Brand 1"
                className="brand-logo"
              />
              <p className="brand-name">Bolshift</p>
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center brand">
            <div className="brand-content">
              <img
                src={logo2}
                alt="Brand 2"
                className="brand-logo"
              />
              <p className="brand-name">Lightbox</p>
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center brand">
            <div className="brand-content">
              <img
                src={logo3}
                alt="Brand 3"
                className="brand-logo"
              />
              <p className="brand-name">Featherdev</p>
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center brand">
            <div className="brand-content">
              <img
                src={logo4}
                alt="Brand 4"
                className="brand-logo"
              />
              <p className="brand-name">Spherule</p>
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center brand">
            <div className="brand-content">
              <img
                src={logo5}
                alt="Brand 5"
                className="brand-logo"
              />
              <p className="brand-name">GlobalBank</p>
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center brand">
            <div className="brand-content">
              <img
                src={logo6}
                alt="Brand 6"
                className="brand-logo"
              />
              <p className="brand-name">Nietschze</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrandSection;
