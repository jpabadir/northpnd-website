import React, { useState, useLayoutEffect } from 'react';
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

function About() {
  const [videoHeight, setVideoHeight] = useState(300);

  useLayoutEffect(() => {
    function updateVideoHeight() {
      setVideoHeight(document.getElementById('myVideo').offsetWidth / 1.78);
    }
    window.addEventListener('resize', updateVideoHeight);
    updateVideoHeight();
    return () => window.removeEventListener('resize', updateVideoHeight);
  }, []);

  return (
    <div className="MainElementPadding">
      <Container fluid className="AboutContainer">
        <Row className="AboutRow">
          <Col xl={7}>
            <div className="Subtitle">Hi! I'm JP.</div>
            <Fade duration="1200">
              <div className="Subtitle" style={{ fontSize: '25px' }}>
                I am the founder of North P&amp;D.
              </div>
              <div style={{ fontSize: '20px' }}>
                <br />
                In May of 2021, I established this company with the goal of providing high-quality software development and technology
                services to both technical and non-technical businesses and individuals.
              </div>
            </Fade>
          </Col>
          <Col xl={5}>
            <div className="VideoParent">
              <iframe
                width="100%"
                height={videoHeight}
                src="https://www.youtube-nocookie.com/embed/9Si2XNaDs48?controls=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                id="myVideo"
                className="StaticShadow"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
