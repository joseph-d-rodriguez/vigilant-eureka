'use strict';

/**
 * @ngdoc service
 * @name ciLeaderboardApp.cleanUrls
 * @description
 * # cleanUrls
 * Service in the ciLeaderboardApp.
 */
angular.module('ciLeaderboardApp')
  .service('cleanUrls', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

		function ensureUrlString(s) {
			if (s.startsWith("http://") || s.startsWith("https://")) {
				return s;
			} else {
				return "http://" + s;
			}
		};

		/**
		 * Ensures url strings start with http:// or https://
		 *
		 */
		this.clean = function cleanOneOrManyUrlStrings(input) {
			if (typeof(input) === "string") {
				return ensureUrlString(input);
			} else if (Array.isArray(input)) {
				for (var i=0; i < input.length; i++) {
					if (typeof(input[i]) === "string") {
						input[i] = ensureUrlString(input[i]);
					} else if (typeof(input[i] === "object")) {
						// Attempt to find and clean 'url' property.
						if (input[i].url) {
							input[i].url = ensureUrlString(input[i].url);
						}
					}
				}
			} else {
				console.error('Cannot clean url when input is not string or array of strings.');
				return null;
			}
		};
  });
