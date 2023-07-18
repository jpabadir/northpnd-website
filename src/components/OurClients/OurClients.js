import React from 'react';
import './OurClients.css';
import { Card } from 'antd';
import { Row, Col, Container } from 'react-bootstrap';

function WorkCard(props) {
  return (
    <Col className="PastWorkCol" md={4}>
      <div style={{ maxWidth: '250px', width: '100%' }}>
        <a href={`https://${props.link}`} target="_blank" rel="noreferrer">
          <Card className={`WorkCard ${props.title.replace(/\s/g, '')}`} />
          <div className="CardTitle">{props.title}</div>
        </a>
        <div dangerouslySetInnerHTML={{ __html: props.subtitle }} />
      </div>
    </Col>
  );
}

function OurClients() {
  return (
    <div className="pt-4">
      <Container fluid>
        <Row className="justify-content-center">
          <div className="Subtitle">Our Clients</div>
          <WorkCard
            link="chick-fil-a.ca"
          />
          <WorkCard
            link="technucom.com"
          />
          <WorkCard
            link="proximy.ca"
          />
          <WorkCard
            link="midstride.com"
          />
          <WorkCard
            link="minebright.com"
          />
          <WorkCard
            link="digitalrise.be"
          />
        </Row>
      </Container>
    </div>
  );
}

export default OurClients;
