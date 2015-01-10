angular.module('foodtruckfinder.services', [])
.factory('foodtruckfinderAPIservice', function($http) {
  var foodtruckfinderAPI = {};
  foodtruckfinderAPI.url = window.location.origin + '/api/trucks';

  foodtruckfinderAPI.getAll = function() {
    var url = this.url;
    return $http({
      method: 'GET',
      url: url
    });
  };

  // /api/trucks?lat=37.783722&long=-122.408552&distance=250
  foodtruckfinderAPI.getNearbyTrucks = function(lat, long, distance) {
    var url = this.url + "?lat=" + lat + "&long=" + long + "&distance=" + distance;
    console.log('getting trucks via', url);
    return $http({
      method: 'GET',
      url: url
    })
  }

  return foodtruckfinderAPI;
});