import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './Contact.css';
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';

function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    document.body.appendChild(script);

    function updateIsMobile() {
      setIsMobile(document.documentElement.clientWidth < 992);
    }
    window.addEventListener('resize', updateIsMobile);
    updateIsMobile();

    return () => {
      window.removeEventListener('resize', updateIsMobile);
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="MainElementPadding ContactMain">
      <Container fluid className="ContactContainer">
        <div className="Subtitle">Contact Us</div>
        <Row className='ContactRow'>
          <Col xl={6} className="ContactCol">
            <div style={{ fontSize: '18px' }}>
              We're delighted you're interested in working with us! To get in touch, you
              can either book a free consultation using the form {isMobile ? 'below' : 'on the right'}, email us at <a href="mailto:hello@northpnd.com">hello@northpnd.com</a>, or give us a call at <a href='tel:6475767112'>647-576-7112</a>.
            </div>
            <br />
            <div style={{ fontSize: '18px' }}>
              We look forward to hearing from you!
            </div>
          </Col>
          <Col xl={6} className="FormParent">
            <div class="calendly-inline-widget ConsultationForm" data-url="https://calendly.com/jpabadir/north-p-n-d-initial-consultation?hide_event_type_details=1&hide_gdpr_banner=1&background_color=212329&text_color=ffffff"></div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Contact;
