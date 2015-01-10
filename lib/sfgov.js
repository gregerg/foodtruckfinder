// Dependencies
var https = require('https');

// URL for food trucks w/status of Approved
var sfgovAPI = 'https://data.sfgov.org/resource/rqzj-sfat.json?Status=APPROVED';

// Accepts a lat/long coordinates, and radius in meters
// Also accepts callback which is called after all data is received from https get, and parsed
var getTrucks = function(latitude, longitude, radius, callback) {
  // Select within radius of specified lat/long coordinates
  var url = sfgovAPI;
  var within_circle = "$where=within_circle(location, "
      + latitude + ", " + longitude + ", " + radius + ")";
  url += "&" + within_circle;

  https.get(url, function(sfgovResponse) {
    var body = '';
    sfgovResponse.on('data', function(chunk) {
      body += chunk;
    });

    // Send data to callback at end of response
    sfgovResponse.on('end', function() {
      callback(JSON.parse(body));
    });
  });
};

// Return approved trucks function
module.exports = {
  getTrucks: getTrucks
};