import React, { useState, useEffect } from 'react';
import './Reviews.css';
import { withStyles } from '@material-ui/core/styles';
import { Row, Col } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCR_L5JJ1fr7DOnCv-XUcWoAOn kJiBwK7A&libraries=places';
    googleMapsScript.async = true;
    window.document.body.appendChild(googleMapsScript);
    googleMapsScript.addEventListener('load', () => {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      service.getDetails({ placeId: 'ChIJHbxYLfU1K4gRemEVnxyALR8', fields: ['reviews'] }, (place) => {
        setReviews(place.reviews);
      });
    });
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
