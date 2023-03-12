import React from 'react';
import './PastWork.css';
import { Card } from 'antd';
import { Row, Col, Container } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';
import { Link } from "react-router-dom";

function WorkCard(props) {
  return (
<<<<<<< HEAD
    <Col className="PastWorkCol" md={4}>
      <div style={{ maxWidth: '350px', width: '100%' }}>
        <Link to={props.link}>
=======
    <Col className="PastWorkCol" md={3}>
      <div style={{ maxWidth: '250px', width: '100%' }}>
        <a href={props.link} target="_blank" rel="noreferrer">
>>>>>>> master
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
<<<<<<< HEAD
            link="proximy"
=======
            link="https://proximy.ca/"
>>>>>>> master
            title="Proximy"
            subtitle="We helped Proximy build their cross-platform mobile app using Flutter, Cloud Firestore, and Google Cloud Functions."
          />
          <WorkCard
<<<<<<< HEAD
            link="midstride"
=======
            link="https://midstride.com"
>>>>>>> master
            title="Midstride Technologies"
            subtitle="We work closely with Midstride's team by communicating directly with its clients and getting a thorough understanding of their requirements before building out full-stack features on their products."
          />
          <WorkCard
<<<<<<< HEAD
            link="tension"
            title="tension consulting"
            subtitle="Stay tuned for more info on our work with tension!"
          />
=======
            link="https://wearetension.com"
            title="Tension Consulting"
            subtitle="We help Tension build and deliver outstanding websites."
          />
          <WorkCard 
            link="https://www.minebright.com/" 
            title="Minebright" 
            subtitle="We provide Minebright with flexbile, on demand, premium Quality Assurance services in support of their software development efforts.">
          </WorkCard>
>>>>>>> master
        </Row>
        <Reviews />
      </Container>
    </div>
  );
}

export default OurClients;
