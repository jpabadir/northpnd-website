import React from 'react';
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';
import JP_Team from "../../assets/jp-headshot.jpg";

function About() {
  return (
    <div className="MainElementPadding">
      <Container fluid className="AboutContainer">
        <Row>
          <div className="Subtitle">About Us</div>
          <Col>
            <div style={{ fontSize: '22px', fontWeight: 'bold' }}>What we do</div>
            Since 2021, North P&D has been building high-quality custom software for our clients across a variety of industries and verticals such as healthcare, social media, tourism, wellness, and mining. We provide technical advisory, design, and software development services. We are proudly bilingual in English and French, and equally comfortable servicing clients in either language.
            <br />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ fontSize: '22px', fontWeight: 'bold' }}>Our values</div>
            Since our launch, we have been guided by our core values of quality and communication. We believe that quality is the most important aspect of any software project, and we strive to deliver the highest quality software to our clients. We also believe that communication is key to the success of any project, and we work closely with our clients to ensure that we are always on the same page.
            <br />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ fontSize: '22px', fontWeight: 'bold' }}>Who we work with</div>
            We service technical teams, to whom we provide specialized technical expertise and additional development capacity. We also service non-technical teams, to whom we provide end-to-end technology services: from idea to design to development, deployment, and me. We are comfortable working with teams of all sizes, from startups to large enterprises.
            <br />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ fontSize: '22px', fontWeight: 'bold' }}>Our process</div>
            We work closely with our clients to understand their needs and objectives, and we tailor our process to each client. We are comfortable working with a variety of project management methodologies, including Agile, Waterfall, and Kanban. We offer two types of pricing models: fixed-price, and time and materials, depending on the client's needs.
            <br />
            <br />
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col lg={8}>
            <div style={{ fontSize: '22px', fontWeight: 'bold' }}>About Jean-Philippe Abadir, Founder and Techical Lead</div>
            <div style={{ fontSize: '20px' }}>
              Having grown up in France and lived in Canada since 2017, I completed my Bachelor of Science in Computer Science from the University of British Columbia. After completing software engineering internships at Amazon Web Services and RBC, I established North P&D in May 2021 with the objective of delivering exceptional software development and technology services to businesses. If you'd like to learn more about me, you can visit my <a href="https://github.com/jpabadir" target="_blank" rel="noreferrer">GitHub profile</a> or my <a href="https://www.linkedin.com/in/jpabadir/" target="_blank" rel="noreferrer">LinkedIn profile</a>.
            </div>
          </Col>
          <Col lg={4} className='d-flex justify-content-center'>
            <img src={JP_Team} alt="JP Abadir" className="TeamHeadshots" />
          </Col>
        </Row >
      </Container >
    </div >
  );
}

export default About;
