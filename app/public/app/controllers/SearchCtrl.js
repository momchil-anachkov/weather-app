(function() {
  'use strict';
  angular.module('app').controller('SearchCtrl', ['$scope', '$state', '$http', function ($scope, $state, $http) {
    $scope.errorMsg = '';
    $scope.search = function () {
      $http({
        method: 'GET',
        url: '/api/forecast/' + $scope.city,
      }).then(
        function(forecast) {
          $scope.model.forecast = forecast.data;
          $scope.errorMsg = '';
          $state.go('main.forecast.today');
        },
        function (error) {
          $scope.errorMsg = error.data;
        }
      );
    };
  }]);
}());