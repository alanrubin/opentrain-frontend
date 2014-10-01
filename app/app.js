'use strict';

angular.module('openTrain', ['otDashboard', 'otAbout', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'pascalprecht.translate'])
	.config(function($urlRouterProvider, $translateProvider) {
		// Default is /
		$urlRouterProvider.otherwise('/dashboard/area');

		// Translation configuration
		$translateProvider
			.translations('en', {
				HEADER: {
					TITLE: 'OpenTrain',
					ABOUT_US: 'About us',
					HASADNA: 'Hasadna',
					NAVIGATION: 'Toggle navigation'
				}
			})
			.translations('he', {
				HEADER: {
					TITLE: 'רכבת פתוחה',
					ABOUT_US: 'עלינו',
					HASADNA: 'הסדנא',
					NAVIGATION: 'לאפשר ניווט'
				}
			})
			.preferredLanguage('he');
	});