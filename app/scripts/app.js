'use strict';

/**
 * @ngdoc overview
 * @name appHuApp
 * @description
 * # ListaHuApp
 *
 * Main module of the application.
 */
angular
  .module('ListaHuApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  /*.constant('Config', {
    apiURL: 'http://listahu.org/api/v1'
  })*/
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
