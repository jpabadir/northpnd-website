import React, { useState, useLayoutEffect} from 'react';
import './Jpabadir.css';
import { Row, Col, Container } from 'react-bootstrap'
import JP from "../../assets/jp-headshot.jpg";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { SiLinkedin, } from "react-icons/si"
import { AiFillGithub } from "react-icons/ai"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Jpabadir() {
  const { t } = useTranslation("jpabadir");
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    function updateIsMobile() {
      setIsMobile(document.documentElement.clientWidth < 992);
    }
    window.addEventListener('resize', updateIsMobile);
    updateIsMobile();
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return (
    <div className="JpParent">
      <Container fluid className='p-0'>
        <Row className='px-0 py-5 d-flex justify-content-center' style={{ background: '#302E3A', color: 'white' }}>
          <Col style={{ maxWidth: '1700px', paddingTop: '60px' }}>
            <div className='ps-1'>
              <div className='PageTitle'>Jean-Philippe Abadir</div>
              <div className='PageSubtitle'>{t("subtitle")}</div>
              <div className='mt-3'>
                <a href="https://linkedin.com/in/jpabadir" style={{ color: 'white' }} target="_blank" rel="noreferrer noopener"><SiLinkedin size={isMobile ? 27 : 35} /></a>
                <a href="https://github.com/jpabadir" style={{ color: 'white' }} target="_blank" rel="noreferrer noopener" ><AiFillGithub size={isMobile ? 31 : 40} className='ms-3' /></a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col style={{ maxWidth: '1700px' }}>
            <div className='d-flex'>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black', fontSize: '22px' }} className='my-3'><MdKeyboardArrowLeft color="red" className='me-4' />{t("about_us")}</Link>
            </div>
          </Col>
          <hr style={{ color: 'lightgrey' }} className='p-0 m-0' />
        </Row>
        <div className='d-flex justify-content-center'>
          <Row style={{ maxWidth: '1700px', padding: '0px 12px' }} >
            <Col md={{ span: 8, order: 1 }} style={{ order: 2 }}>
              <br />
              {t("description1")}
              <br />
              <br />
              {t("description2")}
              <br />
              <br />
              {t("description3")}
              <br />
              <br />
              <Link to="/expertise" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black' }} className='ExpertiseLink'><div>{t("expertise")}</div><MdKeyboardArrowRight color="red" className='ms-4' style={{ transform: 'translateY(3px)' }} size='35px' /></Link>
            </Col>
            <Col md={{ span: 4, order: 2 }} className='d-flex justify-content-center align-items-center PictureColumn'><img src={JP} className='Headshot' /></Col>
          </Row>
        </div>
      </Container>
    </div >
  );
}

export default Jpabadir;
