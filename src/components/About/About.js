import React from 'react';
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';
import jpHeadshot from '../../assets/jp-headshot.png';

function About() {
  return (
    <div className="MainElementPadding">
      <Container fluid className="AboutContainer">
        <Row className="AboutRow">
          <Col l={8}>
            <div className="Subtitle">Hi! I'm JP.</div>
            <div className="Subtitle" style={{ fontSize: '25px' }}>
              I am North P&amp;D's founder and technical lead.
            </div>
            <div style={{ fontSize: '20px' }}>
              <br />
              After completing software engineering internships at Amazon Web Services and RBC, I established North P&D in May 2021 with the objective of delivering exceptional software development and technology services to businesses. 
              <br />
              <br />
              Click <a href="https://github.com/jpabadir" target="_blank" rel="noreferrer">here</a> to view my GitHub profile, <a href="https://www.linkedin.com/in/jean-philippe-abadir-2a931a157/" target="_blank" rel="noreferrer">here</a> to view my LinkedIn profile, and <a href="expertise" target="_blank" rel="noreferrer">here</a> to learn more about our team's expertise.
            </div>
          </Col>
          <Col l={4} className="d-flex justify-content-center JpHeadshotParent">
            <img src={jpHeadshot} className="JpHeadshot" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
