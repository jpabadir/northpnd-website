import React, { useState, useEffect } from 'react';
import './PastWork.css';
import { Card } from 'antd';
import { Row, Col, Container } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';

function PastWork() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://www.northpnd.com/get-reviews').then((reviews) => {
      setReviews(reviews);
    });
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
        <Row>
          <Col className="PastWorkCol">
            <div style={{ maxWidth: '350px', width: '100%' }}>
              <a href="https://apps.apple.com/us/app/habit-one/id1564317049#?platform=iphone" target="_blank" rel="noreferrer">
                <Card className="WorkCard PastWorkFirst" />
                <div className="CardTitle">Habit One</div>
              </a>
            </div>
          </Col>
        </Row>
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
      </Container>
    </div>
  );
}

export default PastWork;
