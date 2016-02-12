'use strict';

describe('Controller: LeaderboardDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('ciLeaderboardApp'));

  var LeaderboarddetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeaderboardDetailsCtrl = $controller('LeaderboardDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LeaderboardDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
