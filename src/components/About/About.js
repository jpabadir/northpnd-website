import React from 'react';
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';
import flat from "../../assets/flat.webp";
import flat2 from "../../assets/flat2.webp";
import flat3 from "../../assets/flat3.webp";

function About() {
  return (
    <div className="pt-4">
      <Container fluid className="AboutContainer">
        <Row>
          <div className="Subtitle" style={{ marginBottom: '20px' }}>About Us</div>
          <Col md={4} className='AboutCol'>
            <img src={flat2} alt="JP Abadir" style={{ height: '150px', width: '100%', objectFit: 'cover', objectPosition: '0px -35px' }} />
            <div className='AboutSubtitle'>What we do</div>
            Since 2021, North P&D has been building high-quality custom software for our clients across a variety of industries and verticals such as healthcare, social media, tourism, wellness, and mining. We provide technical advisory, design, and software development services. We are proudly bilingual in English and French, and equally comfortable servicing clients in either language.
            We are physically located in Toronto, and we build all of our clients' software internally, without any outsourcing. Our office is at 1 Dundas St W, Suite 2500. Come visit us!
          </Col>
          <Col md={4} className='AboutCol'>
            <img src={flat} alt="JP Abadir" style={{ height: '150px', width: '100%', objectFit: 'cover', objectPosition: '0px -10px' }} />
            <div className='AboutSubtitle'>Who we work with</div>
            Since our launch, we have been guided by our core values of quality and communication. We believe that quality is the most important aspect of any software project, and we strive to deliver the highest quality software to our clients. We also believe that communication is key to the success of any project, and we work closely with our clients to ensure that we are always on the same page.
          </Col>
          <Col md={4} className='AboutCol'>
            <img src={flat3} alt="JP Abadir" style={{ height: '150px', width: '100%', objectFit: 'cover', objectPosition: '0px 0px' }} />
            <div className='AboutSubtitle'>Our process</div>
            <p>
              We work closely with our clients to understand their needs and objectives, and we tailor our process to each client. We are comfortable working with a variety of project management methodologies, including Agile, Waterfall, and Kanban. We offer two types of pricing models: fixed-price, and time and materials, depending on the client's needs.
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
