'use strict';

angular.module('otAbout', ['ui.router']).config(function($stateProvider) {
	$stateProvider
		.state('about', {
			url: '/about',
			templateUrl: 'modules/about/template.html'
		});
});