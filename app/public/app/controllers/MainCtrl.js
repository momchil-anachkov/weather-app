(function() {
  'use strict';
  angular.module('app').controller('MainCtrl', ['$scope', function ($scope) {
    /**
     * Define the model, which will hold the forecast for the applicaiton.
     * This allows the child $scope-s to access the forecast in order to display it.
     */
    $scope.model = {};
  }]);
}());