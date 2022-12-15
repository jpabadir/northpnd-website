import React, { useState, useLayoutEffect } from 'react';
import './Faq.css';
import { Row, Col, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

function Faq() {
  return (
    <div className="MainElementPadding">
      <Container fluid>
        <div className="TextBlock">
          <div className="Subtitle">FAQ</div>
          <Fade duration={1200}>
            <div style={{ fontSize: '25px', paddingLeft: '50px' }}>Question</div>
            <div style={{ paddingLeft: '50px' }}>Response</div>
            <div style={{ fontSize: '25px', paddingLeft: '50px' }}>Question</div>
            <div style={{ paddingLeft: '50px' }}>Response</div>
            <div style={{ fontSize: '25px', paddingLeft: '50px' }}>Question</div>
            <div style={{ paddingLeft: '50px'}}>Response</div>
          </Fade>
        </div>
      </Container>
    </div>
  );
}

export default Faq;