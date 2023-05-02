import React, { useState, useLayoutEffect } from 'react';
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
              After completing software engineering internships at Amazon Web Services and RBC, I established North P&D in May 2021 with the objective of delivering exceptional software development and technology services to businesses.
              Since then, North P&D has grown and we are now a team of two passionate and dedicated developers.
              To learn more, you can visit my <a href="github.com/jpabadir" target='_blank' rel="noopener noreferrer">GitHub profile</a>, my <a href="linkedin.com/in/jpabadir" target='_blank' rel="noopener noreferrer">LinkedIn profile</a>, or read about our <a href="/expertise">team's expertise</a>.
              <br />
              <br />
              After completing software engineering internships at Amazon Web Services and RBC, I established North P&D in May 2021 with the objective of delivering exceptional software development and technology services to businesses.
              Since then, North P&D has grown and we are now a team of two passionate and dedicated developers.
              To learn more, you can visit my.
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
