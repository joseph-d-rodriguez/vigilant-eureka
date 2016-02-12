'use strict';

describe('Service: cleanUrls', function () {

  // load the service's module
  beforeEach(module('ciLeaderboardApp'));

  // instantiate service
  var cleanUrls;
  beforeEach(inject(function (_cleanUrls_) {
    cleanUrls = _cleanUrls_;
  }));

  it('should do something', function () {
    expect(!!cleanUrls).toBe(true);
  });

});
