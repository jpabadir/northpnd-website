// import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Contact.css';
import '../global.css';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <div className="ContactMain">
      <Row className="ContactRow">
        <Col xl={6} className="ContactCol">
          <div className="Subtitle">Contact Us. We'll respond within 24 hours.</div>
          <br />
          <div style={{ fontSize: '25px' }}>North P&amp;D, Inc.</div>
          {/* <br /> */}
          401 Bay Steet, 16th Floor
          <br />
          Toronto, ON
          <br />
          Canada
          <br />
          <br />
          hello@northpnd.com
        </Col>
        <Col xl={6}>
          <div className="FormParent">
            <Form action="https://formspree.io/f/xwkalnaz" method="POST" className="Form">
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="MyFormControl" type="text" placeholder="Nice to meet you!" name="name" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control className="MyFormControl" type="email" placeholder="Where can we reach you?" name="_replyto" required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formBasicMessage" className="form-floating">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  className="MyFormControl"
                  type="text"
                  placeholder="How can we help you?"
                  name="message"
                  rows="2"
                  as="textarea"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      {/* <Footer /> */}
    </div>
  );
}

export default Contact;
