import React from 'react';
import './OurClients.css';
import { Row, Col, Container } from 'react-bootstrap';

function WorkCard(props) {
  return (
    <Col className="PastWorkCol" xs={24} md={6} style={{ display: 'flex', alignItems: 'center' }}>
      <div className="CardFlex" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%'
      }}>
        <div style={{ maxWidth: '250px', width: '100%', marginRight: '20px' }}>
          <a href={`https://${props.link}`} target="_blank" rel="noreferrer">
            <div className={`WorkCard ${props.title.replace(/\s/g, '')}`} />
          </a>
        </div>
        <div style={{ flex: '1', minWidth: '200px' }}>
          <div className="CardTitle">{props.title}</div>
          <div dangerouslySetInnerHTML={{ __html: props.subtitle }} />
        </div>
      </div>
    </Col>
  );
}

function OurClients() {
  return (
    <div className="pt-4">
      <Container fluid>
        <div className="Subtitle mt-4">Our Clients</div>
        <Row className="justify-content-center">
          <WorkCard
            link="technucom.com"
            title="TechNuCom"
            subtitle="We help TechNuCom manage, maintain and secure their backend infrastructure.">
          </WorkCard>
          <WorkCard
            link="technucom.com"
            title="TechNuCom"
            subtitle="We help TechNuCom manage, maintain and secure their backend infrastructure.">
          </WorkCard>
          <WorkCard
            link="proximy.ca"
            title="Proximy"
            subtitle="We assisted Proximy in developing their cross-platform mobile application in Flutter, Cloud Firestore, and Google Cloud Functions."
          />
          <WorkCard
            link="midstride.com"
            title="Midstride Technologies"
            subtitle="We collaborate closely with Midstride's team by engaging directly with their clients to gain a comprehensive understanding of their requirements, prior to constructing full-stack features in their products."
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
            subtitle="We helped Digital Rise build an interactive high-fidelity prototype for their software project.">
          </WorkCard>
        </Row>
      </Container>
    </div>
  );
}

export default OurClients;