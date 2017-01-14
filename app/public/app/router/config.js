/**
 * Here we configure our ui-router with the state/controller/template combinations,
 * which we will later use to navigate through our application.
 */
(function (){
  'use strict';
  angular.module('app').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state({
      name: 'main',
      url: '/',
      abstract: true,
      controller: 'MainCtrl',
      templateUrl: './app/router/views/main.html'
    });
    
    $stateProvider.state({
      name: 'main.search',
      url: '',
      parent: 'main',
      controller: 'SearchCtrl',
      templateUrl: './app/router/views/search.html'
    });

    $stateProvider.state({
      name: 'main.forecast',
      url: 'forecast',
      parent: 'main',
      controller: 'ForecastCtrl',
      templateUrl: './app/router/views/forecast.html'
    });
    
    $stateProvider.state({
      name: 'main.forecast.today',
      url: '/today',
      parent: 'main.forecast',
      templateUrl: './app/router/views/forecast-today.html',
    });
    
    $stateProvider.state({
      name: 'main.forecast.future',
      url: '/future',
      parent: 'main.forecast',
      templateUrl: './app/router/views/forecast-future.html',
    });    
  });
}());