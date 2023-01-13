import React, { useState, useLayoutEffect } from 'react';
import './Faq.css';
import { Row, Col, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

function Faq() {
  return (
    <div className="MainElementPadding">
      <div>
          <Row className='FAQ-Margin'>
            <Col>
              <Row className="Subtitle">Frequently Asked Questions</Row>
              <Row className='Questions'>Question 1</Row>
              <Row className='Response'>Response 1</Row>
              <Row className='Questions'>Question 2</Row>
              <Row className='Response'>Response 2</Row>
              <Row className='Questions'>Question 3</Row>
              <Row className='Response'>Response 3</Row>
            </Col>
          </Row>
      </div>


      {/* <div>
        <div class="row justify-content-between row mb-4">
          <div class="col-3" className='Subtitle'>
            Frequantly asked Questions
          </div>
          <div class="col-3">
            Question 1
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-3">
            Question 2
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-3">
            Question 3
          </div>
        </div>
      </div> */}
      {/* <Container fluid>
        <div className="TextBlock">
          <Row>
            <Row xl={6}>
              <div className="Subtitle-FAQ"></div>
              <Fade duration={1200}>
                <Row>
                  <div className='Questions'>Question</div>
                  <div className='Response'>Response</div>
                  <div className='Questions'>Question</div>
                  <div className='Response'>Response</div>
                  <div className='Questions'>Question</div>
                  <div className='Response'>Response</div>
                </Row>
              </Fade>
            </Row>
          </Row>
        </div>
      </Container> */}
    </div >
  );
}

export default Faq;