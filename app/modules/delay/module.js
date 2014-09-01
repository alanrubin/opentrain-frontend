'use strict';

angular.module('otDelay', ['ui.router']).config(function($stateProvider) {
	$stateProvider
		.state('delay', {
			url: '/delay',
			templateUrl: 'modules/delay/template.html',
			controller: 'DelayController'
		});
});