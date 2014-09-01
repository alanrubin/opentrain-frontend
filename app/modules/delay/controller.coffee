'use strict';

angular.module('otDelay').controller 'DelayController', ($scope) ->

  $scope.lines = [{
      status: 'success'
    } , {
      status: 'danger'
    } , {
      status: 'warning'
    } , {
      status: 'success'
    } ]
