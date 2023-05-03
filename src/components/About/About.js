import React from 'react';
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';
import flat2 from "../../assets/flat2.webp";
import workingpeople from "../../assets/working-people.webp";
import whoweworkwith from "../../assets/whoweworkwith.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function About() {
  return (
    <div className="pt-4">
      <Container fluid className="AboutContainer">
        <Row>
          <div className="Subtitle" style={{ marginBottom: '20px' }}>About Us</div>
          <Col md={4} className='AboutCol'>
            <img src={flat2} alt="People at work" style={{ height: '160px', width: '100%', objectFit: 'cover' }} />
            <div className='AboutSubtitle'>What we do</div>
            <p>
              Since 2021, we've delivered custom software solutions to clients from a diverse range of industries, including healthcare, social media, tourism, wellness, and mining. Our services include technical advisory, design, and development, and we're proud to be a bilingual team fluent in English and French. We build all of our clients' software at our Toronto office at 1 Dundas St W. Feel free to drop by!
            </p>
          </Col>
          <Col md={4} className='AboutCol'>
            <img src={whoweworkwith} alt="People chatting" style={{ height: '160px', width: '100%', objectFit: 'cover' }} />
            <div className='AboutSubtitle'>Who we work with</div>
            <div>
              <p>
                We pride ourselves on being able to serve a diverse range of clients, including both non-technical and technical teams. We understand that each client has unique needs and we strive to provide tailored solutions to help them achieve their goals. We welcome working with companies of all sizes, from startups to large enterprises. 
              </p>
            </div>
          </Col>
          <Col md={4} className='AboutCol'>
            <img src={workingpeople} alt="People collaborating" style={{ height: '160px', width: '100%', objectFit: 'cover' }} />
            <div className='AboutSubtitle'>Our process</div>
            <p>
              We work closely with our clients to understand their needs and objectives, and we tailor our process to each one. If you are a technical client, we adapt our process to your team's workflow for seamless integration. If you are a non-technical client, we will guide you through the process of building software from start to finish, and we will ensure that you are comfortable with each step along the way.
            </p>
          </Col>
          <br />
          <br />
        </Row>
      </Container >
    </div >
  );
}

export default About;
