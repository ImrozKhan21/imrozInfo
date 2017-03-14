'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
angular
  .module('myAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .when('/band', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/guitars', {
        templateUrl: 'Template-Gallery/index.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/purchase', {
        templateUrl: 'views/Purchase.html',
        controller: 'MainCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
