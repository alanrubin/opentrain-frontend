'use strict';

describe 'otDashboard:DashboardController', ->
	scope = undefined
	
	beforeEach module 'openTrain'
	beforeEach module 'otDashboard'

	beforeEach inject ($rootScope) ->
		scope = $rootScope.$new()

	it 'should define 4 lines', inject ($controller) ->
		expect(scope.lines).toBeUndefined()
		
		$controller 'DashboardController', {
			$scope: scope
		}

		expect(angular.isArray(scope.lines)).toBeTruthy()
		expect(scope.lines.length).toEqual(4)