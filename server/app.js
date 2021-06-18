require('dotenv').config()
const express = require('express');
const path = require('path');
const https = require('https');

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
app.get('/get-reviews', function (mainReq, mainRes) {
  const options = {
    hostname: 'maps.googleapis.com',
    path: `/maps/api/place/details/json?key=${process.env.API_KEY}&place_id=ChIJHbxYLfU1K4gRemEVnxyALR8`,
    method: 'GET',
  };

  const req = https.request(options, (res) => {
    res.on('data', (data) => {
      mainRes.write(data);
      
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.end();
});
