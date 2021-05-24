import React from 'react';
import './PastWork.css';
import { Card } from 'antd';
import { Form, Button, Row, Col } from 'react-bootstrap';
const Meta = { Card };

function PastWork() {
  return (
    <div className="PastWorkMain">
      <div className="Subtitle">Our Work</div>
      <Row>
        <Col />
        <Col>
          <Card className="WorkCard PastWorkFirst">
            <div className="CardTitle">Habit One</div>
          </Card>
          <div className="Overlay"></div>
        </Col>
        <Col />
      </Row>
    </div>
  );
}

export default PastWork;
