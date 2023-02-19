import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './Contact.css';
import { FaArrowRight } from "react-icons/fa";

function Contact() {
  return (
    <div className="MainElementPadding ContactMain">
      <Container fluid className="ContactContainer">
        <div className="Subtitle">Contact Us</div>
        <Row className='ContactRow'>
          <Col xl={6} className="ContactCol ButtonCol">
            <a href='https://calendly.com/jpabadir/north-p-n-d-initial-consultation' target="_blank" rel="noopener noreferrer">
              <button className='ConsultationButton'>
                Book a free consultation &nbsp;
                <FaArrowRight style={{ transform: 'translateY(-1px)' }} />
              </button>
            </a>
          </Col>
          <Col xl={6} className="ContactCol">
            <div className='ContactInfo'>
              hello@northpnd.com
              <br />
              +1 647-576-7112
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Contact;
