import React from 'react';
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';
import JP_Team from "../../assets/JP_Team.jpg";

function About() {
  return (
    <div className="MainElementPadding">
      <Container fluid className="AboutContainer">
        <Row className="AboutRow">
          <Col>
            <div className="Subtitle">Hi! I'm JP Abadir.</div>
            <div className="Subtitle" style={{ fontSize: '25px' }}>
              I am North P&amp;D's founder and technical lead.
            </div>
            <div style={{ fontSize: '20px' }}>
              <br />
              After completing software engineering internships at Amazon Web Services and RBC, I established North P&D in May 2021 with the objective of delivering exceptional software development and technology services to businesses.
              <br />
              <br />
              Since then, North P&D has grown and we are now a small team of two passionate and dedicated developers. We are physically located in Toronto and, as part of our committment to quality and IP protection, we build all of our clients' software locally, without any offshore outsourcing. We are located at 1 Dundas St W, Suite 2500. Come visit us!
              <br />
              <br />
              Click <a href="https://github.com/jpabadir" target="_blank" rel="noreferrer">here</a> to view my GitHub profile, <a href="https://www.linkedin.com/in/jean-philippe-abadir-2a931a157/" target="_blank" rel="noreferrer">here</a> to view my LinkedIn profile, and <a href="expertise" target="_blank" rel="noreferrer">here</a> to learn more about our team's expertise.
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default About;
