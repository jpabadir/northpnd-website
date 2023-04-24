import React from 'react';
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';
import JP_Team from "../../assets/jp-headshot.jpg";

function About() {
  return (
    <div className="MainElementPadding">
      <Container fluid className="AboutContainer">
        <Row className="AboutRow">
          <Col>
            <div className="Subtitle">About Us</div>
            <div style={{ fontSize: '25px' }}>
              Our Company
            </div>
            <div style={{ fontSize: '20px' }}>
              Since 2021, we've helped clients build and maintain high-quality software products across a variety of industries.
              <br />
              <br />
              We work with non-technical and technical clients.
              <br />
              <br />
              Our whole team is based in Toronto, and we build all of our clients' software internally, without any outsourcing. Our office is at 1 Dundas St W, Suite 2500. Come visit us!
            </div>
          </Col>
        </Row>
        <Row className="AboutRow">
          <Col>
            <div style={{ fontSize: '25px' }} className='pt-5'>
              Our Founder
            </div>
            <Row className='d-flex align-items-center'>
              <Col lg={8} className='p-0'>
                <div style={{ fontSize: '20px' }}>
                  <br />
                  After completing software engineering internships at Amazon Web Services and RBC, I established North P&D in May 2021 with the objective of delivering exceptional software development and technology services to businesses.
                  <br />

                  <br />
                  To learn more, you can visit my <a href="https://github.com/jpabadir" target="_blank" rel="noreferrer">GitHub profile</a>, my <a href="https://www.linkedin.com/in/jpabadir/" target="_blank" rel="noreferrer">LinkedIn profile</a>, or read about <a href="expertise" target="_blank" rel="noreferrer">our team's expertise</a>.
                </div>
              </Col>
              <Col lg={4} className='p-0'>
                <img src={JP_Team} alt="Headshot of JP" className="TeamHeadshots" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default About;
