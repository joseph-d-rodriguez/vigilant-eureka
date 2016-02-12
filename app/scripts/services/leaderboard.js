'use strict';

/**
 * @ngdoc service
 * @name ciLeaderboardApp.leaderboard
 * @description
 * # leaderboard
 * Service in the ciLeaderboardApp.
 */
angular.module('ciLeaderboardApp')
  .service('leaderboard', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

		this.getLeaderboards = function httpGetLeaderboards() {
			return $http.get('/data/leaderboards.json');
		};

		this.getLeaderboard = function httpGetLeaderboardBySlug(slug) {
			var leaderboardPath = '/data/leaderboards/' + slug + '.json';
			return $http.get(leaderboardPath);
		};
  });
