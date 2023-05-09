import React from 'react';
import './OurClients.css';
import { Card } from 'antd';
import { Row, Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation("our_clients");

  return (
    <div className="pt-4">
      <Container fluid>
        <Row className="justify-content-center">
          <div className="Subtitle">{t("subtitle")}</div>
          <WorkCard
            link="technucom.com"
            title="TechNuCom"
            subtitle={t("technucom")}>
          </WorkCard>
          <WorkCard
            link="proximy.ca"
            title="Proximy"
            subtitle={t("proximy")}
          />
          <WorkCard
            link="midstride.com"
            title="Midstride Technologies"
            subtitle={t("midstride")}
          />
          <WorkCard
            link="wearetension.com"
            title="Tension Consulting"
            subtitle={t("tension")}
          />
          <WorkCard
            link="minebright.com"
            title="Minebright"
            subtitle={t("minebright")}>
          </WorkCard>
          <WorkCard
            link="digitalrise.be"
            title="Digital Rise"
            subtitle={t("digital_rise")}>
          </WorkCard>
        </Row>
      </Container>
    </div>
  );
}

export default OurClients;
