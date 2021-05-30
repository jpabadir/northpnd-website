import React, { useState, useLayoutEffect } from 'react';
import './About.css';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

function About() {
  const [videoHeight, setVideoHeight] = useState(300);

  useLayoutEffect(() => {
    function updateVideoHeight() {
      // if (window.screen.width >= 1200) setVideoHeight(280);
      // else setVideoHeight(document.getElementById('myVideo').offsetWidth / 1.78);
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
          <Col className="AboutFirstCol" xl={7}>
            <div className="Subtitle">Hi! I'm JP.</div>
            <div className="Subtitle" style={{ fontSize: '25px' }}>
              I am the founder of North P&amp;D.
            </div>
            <div style={{ fontSize: '20px' }}>North P&amp;D is a newly-established company, for which I do the entirety of the work.</div>
            <div style={{ fontSize: '20px' }}>
              <br />
              Before starting this company, I worked on a variety of web projects, I interned as a software engineer at Amazon Web Services
              and RBC, and I also launched an iOS app called Habit One, which you can download on the App Store if you feel like doing so.
            </div>
          </Col>
          <Col className="AboutSecondCol" xl={5}>
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
                style={{ boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.2)' }}
                // style={{ boxShadow: '0px 5px 20px 10px rgba(0, 0, 0, 0.2)' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
