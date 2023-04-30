import React, { useState } from 'react';
import './Reviews.css';
import { withStyles } from '@material-ui/core/styles';
import { Row, Col } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import { MdKeyboardArrowRight } from "react-icons/md";

function Reviews() {
  const reviews = [
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
    },
    {
      "author_name": "Jeremy Goldyn",
      "rating": 5,
      "text": "We work with North P&D for a Webflow project. \
      It was challenging in terms of timeline but the work has been done in only 1 week 🔥 \
      The guys are very efficient, professional and very friendly. \
      Very recommended 👍",
    },
  ];
  const companies = ["Proximy", "Midstride Technologies", "Khody Miller Enterprises", "Digital Rise"]

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
      color: '#FBBC06',
    },
  })(Rating);

  return (
    <div>
      <Row className="Reviews">
        {reviews.map((review, index) => {
          return (
            <Col className="Review" key={review.text}>
              <StyledRating value={5} readOnly size="large" />
              <div className="ReviewText">"{review.text}"</div>
              <div>{review.author_name}{Boolean(companies[index]) && (`, ${companies[index]}`)}</div>
            </Col>
          );
        })}
      </Row>
      <div className='ReadOnGoogle pt-4'>
        <a href='https://www.google.com/maps/place/North+P%26D,+Inc./@43.6558696,-79.3841034,17z/data=!3m1!4b1!4m5!3m4!1s0x882b35f52d58bc1d:0x1f2d801c9f15617a!8m2!3d43.6558657!4d-79.3819147/reviews' target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', fontWeight: 'bold', fontSize: '17px' }}>
          <div>Read these reviews on Google&nbsp;</div>
          <MdKeyboardArrowRight color="red" />
        </a>
      </div>
    </div>
  );
}

export default Reviews;
