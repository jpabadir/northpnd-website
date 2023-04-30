import React from 'react';
import './PastWork.css';
import { Card } from 'antd';
import { Row, Col, Container } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';

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
            link="proximy.ca"
            title="Proximy"
            subtitle="We assisted Proximy in developing their cross-platform mobile application by utilizing a combination of Flutter, Cloud Firestore, and     Google Cloud Functions."
          />
          <WorkCard
            link="midstride.com"
            title="Midstride Technologies"
            subtitle="We collaborate closely with Midstride's team by engaging directly with their clients to gain a comprehensive understanding of their requirements, prior to constructing full-stack features for their products."
          />
          <WorkCard
            link="wearetension.com"
            title="Tension Consulting"
            subtitle="We are currently assisting Tension in constructing a high-quality digital product in accordance with their design specifications."
          />
          <WorkCard
            link="minebright.com"
            title="Minebright"
            subtitle="We provide Minebright with adaptable and premium quality assurance services on an as-needed basis to complement their software development endeavors.">
          </WorkCard>
          <WorkCard
            link="digitalrise.be"
            title="Digital Rise"
            subtitle="We assisted Digital Rise in constructing an interactive prototype for their ongoing digital project. Due to their impending user testing requirements, Digital Rise sought expedited development, and our collaboration enabled them to obtain a functional prototype within a week.">
          </WorkCard>
        </Row>
      </Container>
    </div>
  );
}

export default OurClients;
