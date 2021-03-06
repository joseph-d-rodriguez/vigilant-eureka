'use strict';

/**
 * @ngdoc overview
 * @name ciLeaderboardApp
 * @description
 * # ciLeaderboardApp
 *
 * Main module of the application.
 */
angular
  .module('ciLeaderboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/leaderboard', {
        templateUrl: 'views/leaderboard.html',
        controller: 'LeaderboardCtrl',
        controllerAs: 'leaderboard'
      })
			.when('/leaderboards/:slug', {
				templateUrl: 'views/leaderboard-details.html',
				controller: 'LeaderboardDetailsCtrl',
				controllerAs: 'leaderboarddetails'
			})
      .otherwise({
        redirectTo: '/'
      });
  });
