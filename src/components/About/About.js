import React from 'react';
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import aboutVideo from '../../assets/about-video.mp4';

function About() {
  return (
    <div className="MainElementPadding">
      <Container fluid className="AboutContainer">
        <Row className="AboutRow">
          <Col l={8}>
            <div className="Subtitle">Hi! I'm JP.</div>
            <div className="Subtitle" style={{ fontSize: '25px' }}>
              I am North P&amp;D's founder and main developer.
            </div>
            <div style={{ fontSize: '20px' }}>
              <br />
              After working at Amazon Web Services and RBC as a software engineer intern, I started North P&amp;D in May of 2021 with the goal of
              providing high-quality software development and technology services to both technical and non-technical businesses and
              individuals.
            </div>
          </Col>
          <Col l={4} className="d-flex justify-content-center aboutVideoParent">
            <ReactPlayer url={aboutVideo} controls={true} onPlay={() => console.log('video is playing')} onPause={() => console.log('video is paused')} className="aboutVideo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
