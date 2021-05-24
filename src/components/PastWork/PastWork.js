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
        {/* <Col /> */}
        <Col style={{ padding: '0px 0px 0px 0px', margin: '10px 10px 10px 10px' }}>
          <a href="https://apps.apple.com/us/app/habit-one/id1564317049#?platform=iphone" target="_blank" rel="noreferrer">
            <Card className="WorkCard PastWorkFirst">
              <div className="CardTitle">Habit One</div>
            </Card>
            <div className="Overlay"></div>
          </a>
        </Col>
        <Col style={{ padding: '0px 0px 0px 0px', margin: '10px 10px 10px 10px' }}>
          <a href="https://apps.apple.com/us/app/habit-one/id1564317049#?platform=iphone" target="_blank" rel="noreferrer">
            <Card className="WorkCard PastWorkFirst">
              <div className="CardTitle">Habit One</div>
            </Card>
            <div className="Overlay"></div>
          </a>
        </Col>
        <Col style={{ padding: '0px 0px 0px 0px', margin: '10px 10px 10px 10px' }}>
          <a href="https://apps.apple.com/us/app/habit-one/id1564317049#?platform=iphone" target="_blank" rel="noreferrer">
            <Card className="WorkCard PastWorkFirst">
              <div className="CardTitle">Habit One</div>
            </Card>
            <div className="Overlay"></div>
          </a>
        </Col>
        {/* <Col /> */}
      </Row>
    </div>
  );
}

export default PastWork;
