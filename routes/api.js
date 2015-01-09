// Dependencies 
var express = require('express');
var router = express.Router();
var sfgov = require('../lib/sfgov.js');

// Routes
router.get('/trucks', function(req, res) {
  var latitude = req.query.lat;
  var longitude = req.query.long; 
  var distance = req.query.distance;
  
  sfgov.getTrucks(latitude, longitude, distance, function(data) {
    res.send(data);
  });
});

// Return router
module.exports = router;