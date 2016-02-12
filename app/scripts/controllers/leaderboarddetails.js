'use strict';

/**
 * @ngdoc function
 * @name ciLeaderboardApp.controller:LeaderboardDetailsCtrl
 * @description
 * # LeaderboardDetailsCtrl
 * Controller of the ciLeaderboardApp
 */
angular.module('ciLeaderboardApp')
  .controller('LeaderboardDetailsCtrl', function (leaderboard, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		var self = this;

		leaderboard
			.getLeaderboard($routeParams.slug)
			.then(function leaderboardDataReceivedHandler(leaderboardResponse) {
console.log('wtf');
console.log('response.data: ', leaderboardResponse.data);
				self.leaderboard = leaderboardResponse.data;
				self.leaderboard.columns = Object.keys(self.leaderboard.data[0]);
			})
			.catch(function leaderboardDataErroredHandler(leaderboardError) {
				console.error(leaderboardError);
			})
		;
  });
