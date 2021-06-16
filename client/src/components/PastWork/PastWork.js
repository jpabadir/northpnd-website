import React from 'react';
import './PastWork.css';
import { Card } from 'antd';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
const Meta = { Card };

function PastWork() {
  return (
    <div className="MainElementPadding">
      <Container fluid>
        <div className="Subtitle">Our Work</div>
        <Row>
          <Col xl={4} />
          <Col xl={4} style={{ padding: '0px 0px 0px 0px', border: '10px solid transparent' }}>
            <a href="https://apps.apple.com/us/app/habit-one/id1564317049#?platform=iphone" target="_blank" rel="noreferrer">
              <Card className="WorkCard PastWorkFirst Interactable">
                <div className="CardTitle">Habit One</div>
              </Card>
              <div className="Overlay"></div>
            </a>
          </Col>
          <Col xl={4} />
        </Row>
      </Container>
    </div>
  );
}

export default PastWork;
