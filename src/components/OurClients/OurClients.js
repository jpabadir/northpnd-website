import React from 'react';
import './PastWork.css';
import { Card } from 'antd';
import { Row, Col, Container } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';
import { Link } from "react-router-dom";

function WorkCard(props) {
  return (
    <Col className="PastWorkCol" md={4}>
      <div style={{ maxWidth: '350px', width: '100%' }}>
        <Link to={props.link}>
          <Card className={`WorkCard ${props.title.replace(/\s/g, '')}`} />
          <div className="CardTitle">{props.title}</div>
        </Link>
        <div>{props.subtitle}</div>
      </div>
    </Col>
  );
}

function OurClients() {
  return (
    <div className="MainElementPadding">
      <Container fluid>
        <div className="Subtitle">Our Clients</div>
        <Row>
          <WorkCard
            link="proximy"
            title="Proximy"
            subtitle="We helped Proximy build their cross-platform mobile app using Flutter, Cloud Firestore, and Google Cloud Functions."
          />
          <WorkCard
            link="midstride"
            title="Midstride Technologies"
            subtitle="We work closely with Midstride's team by communicating directly with its clients and getting a thorough understanding of their requirements before building out full-stack features on their products."
          />
          <WorkCard
            link="tension"
            title="tension consulting"
            subtitle="Stay tuned for more info on our work with tension!"
          />
        </Row>
        <Reviews />
      </Container>
    </div>
  );
}

export default OurClients;
