'use strict';

angular.module('otDashboard', ['ui.router']).config(function($stateProvider) {
	$stateProvider
		.state('dashboard', {
			url: '/dashboard/:groupBy',
			templateUrl: 'modules/dashboard/template.html',
			controller: 'DashboardController'
		})
		.state('dashboard.schedule', {
			url: '/schedule',
			templateUrl: 'modules/dashboard/schedule.template.html'
		});
});