// Dependencies
var expect = require('chai').expect;
var sfgov = require('../lib/sfgov.js');

// Tests
describe('sfgov lib', function() {
  it('should have a getTrucks function', function(done) {
    expect(sfgov.getTrucks).to.exist();
    done();
  });
  it('should return an array of food trucks', function(done) {
    var latitude = 37.783722;
    var longitude = -122.408552; 
    var distance = 250;

    sfgov.getTrucks(latitude, longitude, distance, function(data) {
      expect(data).to.be.an.instanceof(Array);
      done();
    });
  });
});