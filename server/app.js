require('dotenv').config();
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 8020;

// Main app
if (process.env.PORT) {
  const forceSsl = (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
  };

  app.use(forceSsl);
}

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`App is live on port ${port}!`));

// Google Maps Reviews
app.get('/get-reviews', function (req, res) {
  fetch(
    'https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyCR_L5JJ1fr7DOnCv-XUcWoAOnkJiBwK7A&place_id=ChIJHbxYLfU1K4gRemEVnxyALR8'
  )
    .then((googleResponse) => googleResponse.json())
    .then((jsonData) => res.send(jsonData['result']['reviews']));
});
