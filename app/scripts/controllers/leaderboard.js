'use strict';

/**
 * @ngdoc function
 * @name ciLeaderboardApp.controller:LeaderboardCtrl
 * @description
 * # LeaderboardCtrl
 * Controller of the ciLeaderboardApp
 */
angular.module('ciLeaderboardApp')
  .controller('LeaderboardCtrl', function (leaderboard) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	this.leaderboards = null;
	var self = this;
	leaderboard
      .getLeaderboards()
      .then(function leaderboardsDataReceivedHandler(leaderboardsResponse) {
        console.log('leaderboardsDataReceivedHandler!');
				console.log(JSON.stringify(leaderboardsResponse));
				self.leaderboards = leaderboardsResponse.data;
      })
      .catch(function leaderboardsDataErroredHandler(leaderboardsError) {
        console.log('leaderboardsDataErroredHandler :(');
      })
    ;
  });
