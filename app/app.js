'use strict';

angular.module('openTrain', ['otDashboard', 'otAbout', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($urlRouterProvider) {
  	// Default is /
    $urlRouterProvider.otherwise('/dashboard/area');
  });
