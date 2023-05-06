import React from 'react';
import './Jpabadir.css';
import { Row, Col, Container } from 'react-bootstrap'
import JP from "../../assets/jp-headshot.jpg";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { SiLinkedin, } from "react-icons/si"
import { AiFillGithub } from "react-icons/ai"

function Jpabadir() {
  return (
    <div className="JpParent">
      <Container fluid className='p-0'>
        <Row className='px-0 py-5 d-flex justify-content-center' style={{ background: '#302E3A', color: 'white' }}>
          <Col style={{ maxWidth: '1700px', paddingTop: '60px' }}>
            <div className='ps-1'>
              <div className='PageTitle'>Jean-Philippe Abadir</div>
              <div className='PageSubtitle'>Founder and Technical Lead</div>
              <div className='mt-3'>
                <a href="https://linkedin.com/in/jpabadir" style={{ color: 'white' }} target="_blank" rel="noreferrer noopener"><SiLinkedin size={35} /></a>
                <a href="https://github.com/jpabadir" style={{ color: 'white' }} target="_blank" rel="noreferrer noopener" ><AiFillGithub size={35} className='ms-3' /></a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col style={{ maxWidth: '1700px' }}>
            <div className='d-flex'>
              <a href="/" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black', fontSize: '22px' }} className='my-3'><MdKeyboardArrowLeft color="red" className='me-4' />About us</a>
            </div>
          </Col>
          <hr style={{ color: 'lightgrey' }} className='p-0 m-0' />
        </Row>
        <div className='d-flex justify-content-center'>
          <Row style={{ maxWidth: '1700px', padding: '0px 12px' }} >
            <Col md={{ span: 8, order: 1 }} style={{ order: 2 }}>
              <br />
              Following my software engineering internships at RBC in Toronto and Amazon Web Services in Vancouver, I founded North P&D in May 2021 with the objective of providing exceptional software development and technology services. Since then, I have had the privilege of expanding our team and collaborating with clients from various industries, consistently delivering high-quality solutions to meet their diverse needs.
              <br />
              <br />
              I am passionate about building excellent software and committed to offering the best possible experience to our clients. I firmly believe in the power of technology to transform organizations, and excited to help our partners leverage it to achieve their goals.
              I am meticulous and communicative, and I strive to ensure that every project we work on is delivered to the highest level of satisfaction.
              <br />
              <br />
              I hold a Bachelor of Computer Science from the University of British Columbia.
              <br />
              <br />
              <a href="/expertise" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black' }} className='ExpertiseLink'><div>Learn about our team's expertise</div><MdKeyboardArrowRight color="red" className='ms-4' style={{ transform: 'translateY(3px)' }} size='35px' /></a>
            </Col>
            <Col md={{ span: 4, order: 2 }} className='d-flex justify-content-center align-items-center PictureColumn'><img src={JP} className='Headshot' /></Col>
          </Row>
        </div>
      </Container>
    </div >
  );
}

export default Jpabadir;
