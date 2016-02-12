'use strict';

/**
 * @ngdoc function
 * @name ciLeaderboardApp.controller:LeaderboardDetailsCtrl
 * @description
 * # LeaderboardDetailsCtrl
 * Controller of the ciLeaderboardApp
 */
angular.module('ciLeaderboardApp')
  .controller('LeaderboardDetailsCtrl', function (leaderboard, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	
		this.slug = $location.path().split('/')[$location.path().split('/').length-1];
		var self = this;

		leaderboard
			.getLeaderboard(this.slug)
			.then(function leaderboardDataReceivedHandler(leaderboardResponse) {
				self.leaderboard = leaderboardResponse.data;
				self.leaderboard.columns = Object.keys(self.leaderboard.data[0]);
			})
			.catch(function leaderboardDataErroredHandler(leaderboardError) {
				console.error(leaderboardError);
			})
		;
  });
