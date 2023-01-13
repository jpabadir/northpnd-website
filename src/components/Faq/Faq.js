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
    </div >
  );
}

export default Faq;