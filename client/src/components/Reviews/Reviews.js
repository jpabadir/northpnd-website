import React, { useState, useEffect } from 'react';
import './Reviews.css';
import { withStyles } from '@material-ui/core/styles';
import { Row, Col } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';

function Reviews() {
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
    <Row className="Reviews">
      {reviews.map((review) => {
        return (
          <Col className="Review">
            <StyledRating value={review.rating} readOnly size="large" />
            <div className="ReviewText">"{review.text}"</div>
            <div>{review.author_name}, Proximy</div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Reviews;
