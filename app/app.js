'use strict';

angular.module('openTrain', ['otDashboard', 'otAbout', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'pascalprecht.translate'])
	.config(function($urlRouterProvider, $translateProvider) {
		// Default is /
		$urlRouterProvider.otherwise('/dashboard/area');

		// Translation configuration
		$translateProvider
			.translations('he', {
				HEADER: {
					TITLE: 'רכבת פתוחה',
					ABOUT_US: 'עלינו',
					HASADNA: 'הסדנא',
					NAVIGATION: 'לאפשר ניווט'
				},
				ABOUT: {
					TITLE: 'רכבת פתוחה',
					DESCRIPTION: 'רכבת פתוחה, הוא חשמביר שמטרתו לעודד את רכבת ישראל לשחרר מידע זמן אמת על הגעה ויציאה של רכבות מהתחנות',
					MORE: 'רוצה לדעת עוד'
				},
				SUMMARY: {
					GROUP_BY: 'לקבץ ב',
					SEARCH_FOR: 'לחפש את',
					NAME: 'שם',
					STATUS: 'מצב',
					LOCATION: 'מיקום',
					INFORMATION: 'מידע'
				},
				SCHEDULE: {
					TITLE: 'מידע על לוח זמנים',
					DELAY: 'ד׳ עיכוב',
					STATION: 'תחנה',
					PLANNED_TIME: 'זמן מתוחנן',
					ACTUAL_TIME: 'זמן אמת',
					DELAY_TIME: 'עיכוב (ד׳)'
				}
			})
			.preferredLanguage('he');
	})
	.controller('LanguageController', function($scope, $translate) {
		$scope.changeLanguage = function(languageCode) {
			$translate.use(languageCode);

			$scope.currentLanguage = languageCode;
		};

		$scope.currentLanguage = $translate.use();
	});