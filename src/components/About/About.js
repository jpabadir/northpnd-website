import React from 'react';
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';
import JP_Team from "../../assets/JP_Team.jpg";

function About() {
  return (
    <div className="MainElementPadding">
      <Container fluid className="AboutContainer">
        <Row className="AboutRow">
          <Col lg={6}>
            <div className="Subtitle">Hi! I'm JP.</div>
            <div className="Subtitle" style={{ fontSize: '25px' }}>
              I am North P&amp;D's founder and technical lead.
            </div>
            <div className='d-flex justify-content-center pt-4 JPHeadshotMobileParent'>
              <img src={JP_Team} className='JPHeadshot' />
            </div>
            <div style={{ fontSize: '20px' }}>
              <br />
              After completing software engineering internships at Amazon Web Services and RBC, I established North P&D in May 2021 with the objective of delivering exceptional software development and technology services to businesses.
              <br />
              <br />
              {/* Since then, North P&D has grown and we're now a small team. Our entire team is physically located in Toronto. We're a team of passionate, hard-working, and dedicated individuals who are committed to delivering high-quality software solutions to our clients. Our office is located in the heart of downtown Toronto, come visit us! 
              <br />
              <br /> */}
              Click <a href="https://github.com/jpabadir" target="_blank" rel="noreferrer">here</a> to view my GitHub profile, <a href="https://www.linkedin.com/in/jean-philippe-abadir-2a931a157/" target="_blank" rel="noreferrer">here</a> to view my LinkedIn profile, and <a href="expertise" target="_blank" rel="noreferrer">here</a> to learn more about our team's expertise.
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-center AboutVideoParent JPHeadshotDesktopParent">
            <img src={JP_Team} className='JPHeadshot' />
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default About;
