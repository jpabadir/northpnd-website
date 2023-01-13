import React from 'react';
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import jpHeadshot from '../../assets/jp-headshot.png';

function About() {
  return (
    <div className="MainElementPadding">
      <Container fluid className="AboutContainer">
        <Row className="AboutRow">
          <Col l={8}>
            <div className="Subtitle">Hi! I'm JP.</div>
            <Fade duration={1200}>
              <div className="Subtitle" style={{ fontSize: '25px' }}>
                I am North P&amp;D's founder and main developer.
              </div>
              <div style={{ fontSize: '20px' }}>
                <br />
                After working at Amazon Web Services and RBC as a software engineer intern, I started North P&amp;D in May of 2021 with the goal of
                providing high-quality software development and technology services to both technical and non-technical businesses and
                individuals.
              </div>
            </Fade>
          </Col>
          <Col l={4} className="d-flex justify-content-center">
            <img src={jpHeadshot} alt="Headshot" className="JpHeadshot" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
