import React from 'react';
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';
import flat2 from "../../assets/flat2.webp";
import workingpeople from "../../assets/working-people.webp";
import whoweworkwith from "../../assets/whoweworkwith.png";
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation("about");

  return (
    <div className="pt-4">
      <Container fluid className="AboutContainer">
        <Row>
          <div className="Subtitle" style={{ marginBottom: '20px' }}>{t("subtitle")}</div>
          <Col md={4} className='AboutCol'>
            <img src={flat2} alt="People at work" style={{ height: '160px', width: '100%', objectFit: 'cover' }} />
            <div className='AboutSubtitle'>{t("what_we_do")}</div>
            <p>
              {t("what_we_do_desc")}
            </p>
          </Col>
          <Col md={4} className='AboutCol'>
            <img src={whoweworkwith} alt="People chatting" style={{ height: '160px', width: '100%', objectFit: 'cover' }} />
            <div className='AboutSubtitle'>{t("who_we_work_with")}</div>
            <div>
              <p>
                {t("who_we_work_with_desc")}
              </p>
            </div>
          </Col>
          <Col md={4} className='AboutCol'>
            <img src={workingpeople} alt="People collaborating" style={{ height: '160px', width: '100%', objectFit: 'cover' }} />
            <div className='AboutSubtitle'>{t("our_process")}</div>
            <p>
              {t("our_process_desc")}
            </p>
          </Col>
          <br />
          <br />
        </Row>
      </Container >
    </div >
  );
}

export default About;
