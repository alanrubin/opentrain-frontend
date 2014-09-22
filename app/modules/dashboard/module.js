'use strict';

angular.module('otDashboard', ['ui.router']).config(function($stateProvider) {
	$stateProvider
		.state('dashboard', {
			url: '/',
			templateUrl: 'modules/dashboard/template.html',
			controller: 'DashboardController'
		});
});