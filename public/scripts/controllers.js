angular.module('foodtruckfinder.controllers', [])
.controller('mainController', function($scope, foodtruckfinderAPIservice) {
  $scope.truckList = [{'name':'bill'},{'name':'jack'}];

  // /api/trucks?lat=37.783722&long=-122.408552&distance=250
  foodtruckfinderAPIservice.getNearbyTrucks(37.783722, -122.408552, 250)
    .success(function(response) {
      $scope.truckList = response;
    })
    .error(function(data, status, headers, config) {
      console.log('ERROR', data, status, headers, config);
    })
});