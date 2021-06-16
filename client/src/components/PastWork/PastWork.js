import React from 'react';
import './PastWork.css';
import { Card } from 'antd';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
const Meta = { Card };

function PastWork() {
  return (
    <div className="MainElementPadding">
      <Container fluid>
        <div className="Subtitle">Past Work &amp; Testimonials</div>
        <Row>
          <Col className="PastWorkCol">
            <div style={{ maxWidth: '350px', maxHeight: '50px', width: '100%' }}>
              <a href="https://apps.apple.com/us/app/habit-one/id1564317049#?platform=iphone" target="_blank" rel="noreferrer">
                <Card className="WorkCard PastWorkFirst" />
                <div className="CardTitle">Habit One</div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PastWork;
