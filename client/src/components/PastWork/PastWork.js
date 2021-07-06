import React, { useState, useEffect } from 'react';
import './PastWork.css';
import { Card } from 'antd';
import { Row, Col, Container } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

function WorkCard(props) {
  return (
    <Col className="PastWorkCol" md={6}>
      <div style={{ maxWidth: '350px', width: '100%' }}>
        <a href={props.link} target="_blank" rel="noreferrer">
          <Card className={`WorkCard ${props.title.replace(/\s/g, '')}`} />
          <div className="CardTitle">{props.title}</div>
        </a>
        <div>{props.subtitle}</div>
      </div>
    </Col>
  );
}

function PastWork() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://www.northpnd.com/get-reviews')
      .then((reviews) => reviews.json())
      .then((jsonData) => setReviews(jsonData));
  }, []);

  const StyledRating = withStyles({
    iconFilled: {
      color: 'rgb(252, 186, 3)',
    },
  })(Rating);

  return (
    <div className="MainElementPadding">
      <Container fluid>
        <div className="Subtitle">Our Work</div>
        <Fade duration="1200">
          <Row>
            <WorkCard
              link="https://apps.apple.com/us/app/habit-one/id1564317049#?platform=iphone"
              title="Habit One"
              subtitle="Habit One is the simplest habit tracker, built using React Native."
            />
            <WorkCard
              link="https://proximy.ca/"
              title="Proximy"
              subtitle="We built Proximy's mobile app's friend request feature, using Flutter and Cloud Firestore."
            />
          </Row>
        </Fade>
        <Fade duration="1200">
          <Row className="Reviews">
            {reviews.map((review) => {
              return (
                <Col className="Review">
                  <StyledRating value={review.rating} readOnly size="large" />
                  <div className="ReviewText">"{review.text}"</div>
                  <div>{review.author_name}</div>
                </Col>
              );
            })}
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

export default PastWork;
