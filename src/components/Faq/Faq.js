import React, { useState, useLayoutEffect } from 'react';
import './Faq.css';
import { Row, Col, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

function Faq() {
  return (
    <div className="MainElementPadding">
      <div>
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
      </div>
      {/* <Container fluid>
        <div className="TextBlock">
          <Row>
            <Col xl={6}>
              <div className="Subtitle-FAQ"></div>
              <Fade duration={1200}>
                <Col md={6}>
                  <div className='Questions'>Question</div>
                  <div className='Response'>Response</div>
                  <div className='Questions'>Question</div>
                  <div className='Response'>Response</div>
                  <div className='Questions'>Question</div>
                  <div className='Response'>Response</div>
                </Col>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container> */}
    </div >
  );
}

export default Faq;