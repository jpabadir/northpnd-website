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
          <Col xl={4} style={{ padding: '0px 0px 0px 0px', border: 'solid transparent', borderWidth: '10px 40px', justifyContent: 'center' }}>
            <a href="https://apps.apple.com/us/app/habit-one/id1564317049#?platform=iphone" target="_blank" rel="noreferrer">
              <Card className="WorkCard PastWorkFirst"/>
              <div className="CardTitle">Habit One</div>
            </a>
          </Col>
          <Col xl={4} style={{ padding: '0px 0px 0px 0px', border: 'solid transparent', borderWidth: '10px 40px' }}>
            <a href="https://apps.apple.com/us/app/habit-one/id1564317049#?platform=iphone" target="_blank" rel="noreferrer">
              <Card className="WorkCard PastWorkFirst"/>
              <div className="CardTitle">Habit One</div>
            </a>
          </Col>
          <Col xl={4} style={{ padding: '0px 0px 0px 0px', border: 'solid transparent', borderWidth: '10px 40px' }}>
            <a href="https://apps.apple.com/us/app/habit-one/id1564317049#?platform=iphone" target="_blank" rel="noreferrer">
              <Card className="WorkCard PastWorkFirst"/>
              <div className="CardTitle">Habit One</div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PastWork;
