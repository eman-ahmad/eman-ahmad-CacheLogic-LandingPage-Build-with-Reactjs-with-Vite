import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import arrowIcon from "../assets/icons/arrow-right.png";
import "../styles/ourservices.css";
import icon1 from "../assets/icons/iconone.png";
import icon2 from "../assets/icons/icontwo.png";
import icon3 from "../assets/icons/iconthree.png";
import icon4 from "../assets/icons/iconfour.png";
import icon5 from "../assets/icons/iconfive.png";
import icon6 from "../assets/icons/iconsix.png";

const services = [
  {
    logo: icon1,
    title: "Artificial Intelligence (AI/ML)",
    description:
      "Revolutionizing decisions through intelligent solutions. We use latest AI solutions to enhance and digitalize your operations.",
  },
  {
    logo: icon2,
    title: "Automation",
    description: "Streamlining processes for greater efficiency.",
  },
  {
    logo: icon3,
    title: "Cybersecurity",
    description: "Protecting your business from evolving threats.",
  },
  {
    logo: icon4,
    title: "Custom Solutions",
    description: "Tech built uniquely for your needs.",
  },
  {
    logo: icon5,
    title: "DevOps",
    description: "Optimizing development and deployment pipelines.",
  },
  {
    logo: icon6,
    title: "Web & Mobile Apps",
    description:
      "Building high-performance, user-friendly applications tailored to your business needs. From sleek mobile experiences to robust web platforms, we ensure seamless functionality and scalability.",
  },
];

const OurServices = () => {
  return (
    <div className="container text-center my-5 ourservices">
      {/* Button */}
      <button className="btn btn-light  rounded-pill px-3 mb-2" style={{color:'#414EC6',backgroundColor:'#F5F5FF',border:'1px solid #D7DEFE'}}>
        Our Services
      </button>

      {/* Heading */}
      <h2 className="fw-bold">Services We Offer</h2>

      {/* Paragraph */}
      <p className="text-muted mx-auto w-95">
        Powerful, self-serve product and growth analytics to help you convert,
        engage,
        <br />
        and retain more users.
      </p>

      {/* Grid of Services */}
      <Row className="g-4">
        {/* First Row */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={index === 0 || index === 5 ? 6 : 3} key={index}>
              {/* Apply "active" class only to the second card (index 1) */}
              <Card className={`service-card ${index === 1 ? "active" : ""} ${index === 3 || index ===5 ? "mobile-active" : ""}`}>
                <div className="card-logo">
                  <img src={service.logo} alt="logo" width="40" height="40" />
                </div>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button variant="link" className="view-service">
                    View Service
                    <img
                      src={arrowIcon}
                      alt="Contact Icon"
                      className="icon-class"
                      height="18"
                    />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </div>
  );
};

export default OurServices;
