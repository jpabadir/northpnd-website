import React, { useState, useEffect } from 'react';
import './Reviews.css';
import { withStyles } from '@material-ui/core/styles';
import { Row, Col } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      author_name: 'Brandon Caiza',
      author_url: 'https://www.google.com/maps/contrib/116340316200654309946/reviews',
      language: 'en',
      profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GidOs29yxXMP-GgJhh5nRZGt-7AqZTBYg8zGfIFRA=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: '2 months ago',
      text: 'Fantastic service and great final product. Highly recommended because of attention to detail, strong aptitude for programming, and overall great at system design.',
      time: 1623802829,
    },
  ]);

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
          <Col className="Review" key={review.text}>
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
