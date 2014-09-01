'use strict';

angular.module('otDelay')
  .controller('DelayController', function ($scope) {
    $scope.lines = [{
      status: 'success'
    }, {
      status: 'danger'
    }, {
      status: 'warning'
    }, {
      status: 'success'
    }];
  });
