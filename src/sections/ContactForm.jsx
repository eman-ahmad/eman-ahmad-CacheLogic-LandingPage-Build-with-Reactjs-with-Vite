import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../styles/contactform.css";
import mail from "../assets/icons/mail-01.png"
import phone from "../assets/icons/phone.png"
import marker from "../assets/icons/marker-pin-02.png";

const ContactForm = () => {
  return (
    <Container className="contact-container py-5">
      {/* Contact Us Button */}
      <div className="text-left mb-3">
      <button className="btn btn-light  rounded-pill px-3 mb-2" style={{color:'#414EC6',backgroundColor:'#F5F5FF',border:'1px solid #D7DEFE'}}>
        Contact Us
      </button>
      </div>

      {/* Heading and Paragraph */}
      <h2 className="fw-bold">Let's Build the Next Product Together</h2>
      <p className="text-muted mx-auto w-95">
      We'd love to hear from you. Please fill out this form or shoot us an email.
      </p>

      {/* Main Section */}
      <Row className="mt-4 contact-row">
        {/* Left Section - Contact Details */}
        <Col md={6}>
          <Row>
            <Col md={6} className="mb-3">
              <Card className="contact-card p-3">
                <img src={mail} alt="email" />
                <h5 className="mt-2 contactus-heading">Email</h5>
                <p>Our friendly team is here to help.</p>
                <a href="mailto:hi@cachelogic.tech">hi@cachelogic.tech</a>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="contact-card p-3">
                <img src={phone} alt="phone" />
                <h5 className="mt-2 contactus-heading">Phone</h5>
                <p>Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+15550000000" >+1 (555) 000-0000</a>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="contact-card p-3">
                <img src={marker} alt="office" />
                <h5 className="mt-2  contactus-heading">Office</h5>
                <p className="contact-para">Come say hello at our office HQ.</p>
                <a href="#">Building X, Street Y, Baltimore MD</a>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Right Section - Contact Form */}
        <Col md={6}>
          <Card className="contact-form-card">
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label  className="custom-label">First name</Form.Label>
                    <Form.Control type="text" placeholder="First name" className="contact-input" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="custom-label">Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" className="contact-input" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label className="custom-label">Email</Form.Label>
                <Form.Control type="email" placeholder="you@company.com" className="contact-input" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="custom-label">Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Leave us a message..." className="contact-input" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check className="privacy" type="checkbox" label="You agree to our friendly privacy policy." />
              </Form.Group>
              <Button variant="primary" className="contact-submit-btn w-100">
                Send message
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
