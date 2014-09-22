'use strict';

angular.module('openTrain', ['otDelay', 'otAbout', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($urlRouterProvider) {
  	// Default is /delay
    $urlRouterProvider.otherwise('/delay');
  });
