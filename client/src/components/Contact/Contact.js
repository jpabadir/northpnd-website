import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  return (
    <div className="MainElementPadding ContactMain">
      <Container fluid className="ContactContainer">
        <Row>
          <Col xl={6} className="ContactCol">
            <div className="Subtitle">Contact Us. We'll respond within 24 hours.</div>
            <br />
            <div style={{ fontSize: '25px' }}>North P&amp;D, Inc.</div>
            401 Bay St., 16th Floor
            <br />
            Toronto, ON
            <br />
            Canada
            <br />
            <br />
            hello@northpnd.com
            <br />
            +1 647-576-7112
          </Col>
          <Col xl={6}>
            <div className="FormParent StaticShadow">
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
                    style={{ resize: 'none' }}
                    className="MyFormControl"
                    type="text"
                    placeholder="How can we help you?"
                    name="message"
                    rows="3"
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
      </Container>
    </div>
  );
}

export default Contact;
