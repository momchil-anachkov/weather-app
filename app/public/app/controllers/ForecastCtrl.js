(function() {
  'use strict';
  angular.module('app').controller('ForecastCtrl', ['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {
    /**
     * If no forecast model is present redirect to the main search page.
     * This is in case someone goes directly to the forecast view, without searching.
     */
    if(!$scope.model.forecast){
      $state.go('main.search');
    }
    
    $scope.viewType = (($state.current.name === 'main.forecast.today') ? 'today' : 'future');
    
    /**
     * Transforms the data to a format suitable for ng-repeat:
     */
    $scope.forecast = (function(data) {
      var result = [];
      var days = data.forecast.forecastday;
      var dateTime;
      var item;
      var i, j;
      
      for (i = 0; i < days.length; i++) {
        for(j = 0; j < days[i].hour.length; j++) {
          item = days[i].hour[j];
          dateTime = item.time.split(' ');
          result.push({
            date: dateTime[0],
            time: dateTime[1],
            temp: item.temp_c,
            iconUrl: item.condition.icon,
            condition: item.condition.text
          });
        }
      }
      
      return result;
    }($scope.model.forecast));
  }]);
}());