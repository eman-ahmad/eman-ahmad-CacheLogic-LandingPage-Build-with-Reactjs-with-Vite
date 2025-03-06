import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import arrowIcon from "../assets/icons/whyus-icon.png"; // Arrow icon for button
import sampleImage from "../assets/images/whyus-img.png"; // Replace with your image
import icon1 from "../assets/icons/Icon1.png";
import icon2 from "../assets/icons/Icon2.png";
import icon3 from "../assets/icons/Icon3.png";
import "../styles/whyus.css";

const WhyUs = () => {
  return (
    <Container className="text-center my-5">
      {/* Button in Middle */}
      <button className="btn btn-light  rounded-pill px-3 mb-2" style={{color:'#414EC6',backgroundColor:'#F5F5FF',border:'1px solid #D7DEFE'}}>
       Why Us
      </button>

      {/* Heading */}

      <h2 className="fw-bold" style={{marginTop:'1rem'}}>How does Cache Logic stand out?</h2>

      {/* Paragraph */}
      <p className="text-muted mx-auto w-95 whyus-para" style={{marginTop:'1rem'}}>
        At Cache Logic, we are a passionate team of tech experts dedicated to
        powering your IT evolution. Founded by industry leaders with diverse
        expertise, we focus on delivering innovative, reliable, and scalable
        tech solutions—from AI and automation to cybersecurity and app
        development. Our mission is simple: help your business stay ahead in a
        digital world.
      </p>

      {/* Image Container */}
      <div className="d-flex justify-content-center" style={{marginTop:'1rem'}}>
        <img
          src={sampleImage}
          alt="Why Us"
          className="img-fluid shadow-lg whyus-img"
          style={{
            width: "100%",
            maxWidth: "1069px",
            height: "450px",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(58, 110, 179, 0.6)",
          }}
        />
      </div>

      {/* Space Before Cards */}
      <div className="my-5"></div>

      {/* Three Cards in One Row */}
      <Row className="g-4">
        {[
          {
            icon: icon1,
            title: "Global reach with localized expertise.",
            text: "We bring world-class IT solutions to businesses across the globe while ensuring tailored, region-specific support that aligns with your unique market needs",
          },
          {
            icon: icon2,
            title: "Dedicated support to drive your success.",
            text: "Our expert team is always available to provide hands-on assistance, ensuring smooth implementation and ongoing optimization of your IT solutions.",
          },
          {
            icon: icon3,
            title: "Tailored solutions for every industry.",
            text: "Whether you're in finance, healthcare, or e-commerce, we create customized technology solutions designed to meet your industry's challenges and goals.",
          },
        ].map((item, index) => (
          <Col md={4} key={index}>
            <Card className="text-center p-4 border-0 shadow-sm whyus-card">
              <div className="mb-3">
                <img src={item.icon} alt="icon" width="30" height="30" />
              </div>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
              <Button
                variant="link"
                className="d-flex align-items-center justify-content-center learn-more-btn"
              >
                Learn More
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className="ms-2"
                  width="12"
                  height="12"
                />
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyUs;
