'use strict';

angular.module('openTrain', ['otDelay', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('delay', {
        url: "/delay",
        templateUrl: 'modules/delay/template.html',
        controller: 'DelayController'
      });

    $urlRouterProvider.otherwise("/delay");
  })
;
