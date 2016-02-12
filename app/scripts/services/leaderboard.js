'use strict';

/**
 * @ngdoc service
 * @name ciLeaderboardApp.leaderboard
 * @description
 * # leaderboard
 * Service in the ciLeaderboardApp.
 */
angular.module('ciLeaderboardApp')
  .service('leaderboard', function ($http, $q, cleanUrls) {
    // AngularJS will instantiate a singleton by calling "new" on this function

		this.getLeaderboards = function httpGetLeaderboards() {
			return $http.get('/data/leaderboards.json');
		};

		this.getLeaderboard = function httpGetLeaderboardBySlug(slug) {
			var leaderboardPath = '/data/leaderboards/' + slug + '.json';
			var deferred = $q.defer();
			$http
				.get(leaderboardPath)
				.then(function leaderboardDetailsResponseReceived(leaderboardDetailsResponse) {
					// Clean urls before resolving.
					cleanUrls.clean(leaderboardDetailsResponse.data.data);
					deferred.resolve(leaderboardDetailsResponse);
				})
				.catch(function leaderboardDetailsResponseErrored(leaderboardDetailsResponseError) {
					console.error(leaderboardDetailsResponseError);
					deferred.reject(leaderboardDetailsResponseError);
				})
			;
			
			return deferred.promise;
		};
  });
