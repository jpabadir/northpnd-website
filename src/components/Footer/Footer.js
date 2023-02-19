import './Footer.css';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

function Footer() {
  return (
    <div className="FooterMain">
      <div className="FooterCompanyName">North P&amp;D, Inc.</div>
      <hr className="FooterHr" />
      <Container style={{ paddingBottom: '20px' }}>
        <Row>
          <Col xl={6} style={{ textAlign: 'left' }}>
            <br />
            1 Dundas St. W, 25th Floor
            <br />
            M5G 1Z3
            <br />
            Toronto, ON
            <br />
            Canada
            <br />
            <br />
          </Col>
          <Col xl={6} style={{ display: 'flex' }}>
            <div className='FooterLinks'>
              <Row style={{ padding: '3px 0px' }}>
                <Col xs={6} style={{ paddingLeft: '0px' }}>
                  <a href="https://www.facebook.com/northpnd" target="_blank" rel="noreferrer" className="FooterLink">
                    Facebook
                  </a>
                </Col>
                <Col xs={6} style={{ paddingLeft: '0px' }}>
                  <a href="https://www.linkedin.com/company/northpnd" target="_blank" rel="noreferrer" className="FooterLink">
                    LinkedIn
                  </a>
                </Col>
              </Row>
              <Row style={{ padding: '3px 0px' }}>
                <Col xs={6} style={{ paddingLeft: '0px' }}>
                  <a href="https://twitter.com/northpndinc" target="_blank" rel="noreferrer" className="FooterLink">
                    Twitter
                  </a>
                </Col>
                <Col xs={6} style={{ paddingLeft: '0px' }}>
                  <a href="https://goo.gl/maps/QnvFWXVoY7wKMg88A" target="_blank" rel="noreferrer" className="FooterLink">
                    Google
                  </a>
                </Col>
              </Row>
              <Row style={{ padding: '3px 0px' }}>
                <Col xs={6} style={{ paddingLeft: '0px' }}>
                  <a href="https://www.northpnd.com/privacy" target="_blank" rel="noreferrer" className="FooterLink">
                    Privacy
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Footer;
