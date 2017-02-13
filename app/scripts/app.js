'use strict';

/**
 * @ngdoc overview
 * @name learningResourceWebApp
 * @description
 * # learningResourceWebApp
 *
 * Main module of the application.
 */
angular
  .module('learningResourceWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ResourceCtrl',
        controllerAs: 'resourceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
