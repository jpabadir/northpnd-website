// import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.css';
import '../global.css';

function Contact() {
  return (
    <div className="ContactMain">
      <div className="Subtitle">Contact Us</div>
      <Form action="https://formspree.io/f/xwkalnaz" method="POST" className="">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="_replyto" />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" />
        </Form.Group>
        <Form.Group controlId="formBasicMessage" style={{ height: '200px' }}>
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" placeholder="Enter message" name="message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
