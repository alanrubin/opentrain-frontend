/* global it, describe, beforeEach, inject, expect */
'use strict';

describe('controllers', function() {
	var scope;

	beforeEach(module('openTrain'));
	beforeEach(module('otDashboard'));

	beforeEach(inject(function($rootScope) {
		scope = $rootScope.$new();
	}));

	it('should define 4 lines', inject(function($controller) {
		expect(scope.lines).toBeUndefined();

		$controller('DashboardController', {
			$scope: scope
		});

		expect(angular.isArray(scope.lines)).toBeTruthy();
		expect(scope.lines.length).toEqual(4);
	}));
});