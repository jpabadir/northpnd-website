import React, { useState, useEffect } from 'react';
import './Reviews.css';
import { withStyles } from '@material-ui/core/styles';
import { Row, Col } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      "author_name": "Brandon Caiza",
      "author_url": "https://www.google.com/maps/contrib/116340316200654309946/reviews",
      "language": "en",
      "profile_photo_url": "https://lh3.googleusercontent.com/a-/AD5-WCkHLRjS2mVv6rxBVSpob4_c4jpIapdMUonxXBSDcQ=s128-c0x00000000-cc-rp-mo",
      "rating": 5,
      "relative_time_description": "a year ago",
      "text": "Fantastic service and great final product. Highly recommended because of attention to detail, strong aptitude for programming, and overall great at system design.",
      "time": 1623802829
    },
    {
      "author_name": "Andre Liem",
      "author_url": "https://www.google.com/maps/contrib/101035291913459025693/reviews",
      "language": "en",
      "profile_photo_url": "https://lh3.googleusercontent.com/a/AEdFTp6lsfDq0k6YBRBfatRKorBipQ_4HFF8stJ6qXJE=s128-c0x00000000-cc-rp-mo",
      "rating": 5,
      "relative_time_description": "2 months ago",
      "text": "We partnered with North P&D to add capacity to our software development team and have been very pleased. Very thorough, detailed oriented and excellent communication skills. Delivers results on time and continues to be a valuable partner in our operations.",
      "time": 1663282781
    },
    {
      "author_name": "Khody Miller",
      "rating": 5,
      "text": "JP truly cares for properly serving his customers. After our initial consultation, JP went the extra mile and gave me a comprehensive email of valuable recommendations on considerations for my business.",
    }
  ]);
  const companies = ["Proximy", "Midstride Technologies", "Khody Miller Enterprises"]

  // useEffect(() => {
  //   const googleMapsScript = document.createElement('script');
  //   googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCR_L5JJ1fr7DOnCv-XUcWoAOn kJiBwK7A&libraries=places';
  //   googleMapsScript.async = true;
  //   window.document.body.appendChild(googleMapsScript);
  //   googleMapsScript.addEventListener('load', () => {
  //     const service = new window.google.maps.places.PlacesService(document.createElement('div'));
  //     service.getDetails({ placeId: 'ChIJHbxYLfU1K4gRemEVnxyALR8', fields: ['reviews'] }, (place) => {
  //       setReviews(place.reviews.sort((a, b) => a.time - b.time));
  //     });
  //   });
  // }, []);

  const StyledRating = withStyles({
    iconFilled: {
      color: 'rgb(252, 186, 3)',
    },
  })(Rating);

  return (
    <Row className="Reviews">
      {reviews.map((review, index) => {
        return (
          <Col className="Review" key={review.text}>
            <StyledRating value={review.rating} readOnly size="large" />
            <div className="ReviewText">"{review.text}"</div>
            <div>{review.author_name}{Boolean(companies[index]) && (`, ${companies[index]}`)}</div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Reviews;
