'use strict';

/**
 * @ngdoc overview
 * @name learningResourceWebAppApp
 * @description
 * # learningResourceWebAppApp
 *
 * Main module of the application.
 */
angular
  .module('learningResourceWebAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
