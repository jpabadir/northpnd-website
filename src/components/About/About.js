import React from 'react';
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';
import flat2 from "../../assets/flat2.webp";
import workingpeople from "../../assets/working-people.webp";
import whoweworkwith from "../../assets/whoweworkwith.png";

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
              Since 2021, we've delivered custom software solutions to clients from diverse industries, including healthcare, social media, tourism, wellness, and mining. Our services include technical advisory, staff augmentation, design, and development. We build all our clients' software from our Toronto office at 1 Dundas St W. Feel free to drop by!            </p>
          </Col>
          <Col md={4} className='AboutCol'>
            <img src={whoweworkwith} alt="People chatting" style={{ height: '160px', width: '100%', objectFit: 'cover' }} />
            <div className='AboutSubtitle'>Who we work with</div>
            <div>
              <p>
                We pride ourselves on serving diverse clients, including non-technical and technical teams. We welcome working with businesses of all sizes, from startups to large enterprises, as well as non-profit organizations and government agencies. We are proud to be a bilingual team fluent in English and French and equally comfortable serving clients in either language.              </p>
            </div>
          </Col>
          <Col md={4} className='AboutCol'>
            <img src={workingpeople} alt="People collaborating" style={{ height: '160px', width: '100%', objectFit: 'cover' }} />
            <div className='AboutSubtitle'>Our process</div>
            <p>
              By closely partnering with our clients, we comprehensively understand their goals and tailor our process to suit their needs best. If you are a technical client, we will adapt our process to your workflows and tech stack. If you are a non-technical client, we will guide you through building software from start to finish, ensuring you are satisfied with each step.            </p>
          </Col>
          <br />
          <br />
        </Row>
      </Container >
    </div >
  );
}

export default About;
