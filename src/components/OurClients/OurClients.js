import React from 'react';
import './PastWork.css';
import { Card } from 'antd';
import { Row, Col, Container } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';

function WorkCard(props) {
  return (
    <Col className="PastWorkCol" md={3}>
      <div style={{ maxWidth: '250px', width: '100%' }}>
        <a href={props.link} target="_blank" rel="noreferrer">
          <Card className={`WorkCard ${props.title.replace(/\s/g, '')}`} />
          <div className="CardTitle">{props.title}</div>
        </a>
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
            link="https://proximy.ca/"
            title="Proximy"
            subtitle="We helped Proximy build their cross-platform mobile app using Flutter, Cloud Firestore, and Google Cloud Functions."
          />
          <WorkCard
            link="https://midstride.com"
            title="Midstride Technologies"
            subtitle="We work closely with Midstride's team by communicating directly with its clients and getting a thorough understanding of their requirements before building out full-stack features on their products."
          />
          <WorkCard
            link="https://wearetension.com"
            title="tension consulting"
            subtitle="Stay tuned for more info on our work with tension!"
          />
          <WorkCard 
            link="https://www.minebright.com/" 
            title="Minebright" 
            subtitle="We provide Minebright with flexbile, on demand, Quality Assurance services in support of their software development efforts.">
          </WorkCard>
        </Row>
        <Reviews />
      </Container>
    </div>
  );
}

export default OurClients;
