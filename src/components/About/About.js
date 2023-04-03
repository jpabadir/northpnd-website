import React from 'react';
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';
import AboutVideo from '../../assets/about-video.webm';

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
            <div style={{ fontSize: '20px' }}>
              <br />
              After completing software engineering internships at Amazon Web Services and RBC, I established North P&D in May 2021 with the objective of delivering exceptional software development and technology services to businesses. 
              <br />
              <br />
              Check out my <a href="https://github.com/jpabadir" target="_blank" rel="noreferrer">GitHub profile</a>, my <a href="https://www.linkedin.com/in/jean-philippe-abadir-2a931a157/" target="_blank" rel="noreferrer">LinkedIn profile</a>, and learn more about <a href="expertise" target="_blank" rel="noreferrer">our team's expertise</a>.
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-center AboutVideoParent">
            <video controls disablePictureInPicture controlslist="nodownload noremoteplayback noplaybackrate" className="AboutVideo">
              <source src={AboutVideo} type="video/webm"/>
            </video>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
