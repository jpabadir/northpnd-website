import React from 'react';
import './Jpabadir.css';
import { Row, Col, Container } from 'react-bootstrap'
import JP from "../../assets/jp-headshot.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

function Jpabadir() {
  return (
    <div className="JpParent">
      <Container fluid className='p-0'>
        <Row className='px-0 py-5 d-flex justify-content-center' style={{ background: '#302E3A', color: 'white' }}>
          <Col style={{ maxWidth: '1700px', paddingTop: '60px' }}>
            <div >
              <div className='PageTitle'>Jean-Philippe Abadir</div>
              <div className='PageSubtitle'>Founder and Technical Lead</div>
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
          <Row style={{ maxWidth: '1700px' }} >
            <Col md={{ span: 8, order: 1 }} style={{ order: 2 }}>
              <br />
              Following my software engineering internships at Amazon Web Services in Vancouver and RBC in Toronto, I founded North P&D in May 2021 with the mission to provide exceptional software development and technology services to businesses. Since then, I have been privileged to expand our team and collaborate with clients from various industries, consistently delivering high-quality solutions to meet their diverse needs.
              <br />
              <br />
              I am passionate about building great software and committed to providing the best possible experience to our clients. I am a strong believer in the power of technology to transform businesses and excited to help our clients leverage it to achieve their goals. I am meticulous and communicative, and I strive to ensure that our clients are always satisfied with our work.
              <br />
              <br />
              <a href="/expertise" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black', marginTop: '10px' }} className='ExpertiseLink'><div>Learn about our team's expertise</div><MdKeyboardArrowRight color="red" className='ms-4' style={{ transform: 'translateY(3px)' }} size='35px' /></a>
            </Col>
            <Col md={{ span: 4, order: 2 }} className='d-flex justify-content-center align-items-center PictureColumn'><img src={JP} className='Headshot' /></Col>
          </Row>
        </div>
      </Container>
    </div >
  );
}

export default Jpabadir;
