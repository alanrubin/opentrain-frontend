'use strict';

angular.module('otDashboard').controller 'DashboardController', ($scope, $stateParams, $state, Trip) ->

	$scope.lines = [
		{ status: 'success' }
		{ status: 'danger' }
		{ status: 'warning' }
		{ status: 'success' }
	]

	# Set selected group by state params
	$scope.selectedGroup = $stateParams.groupBy

	$scope.groupBy = [
    	'אזור'
    	'עיר'
    	'תחנה'
    	'קו'
    ]

    # Select specific group
	$scope.selectGroup = (groupItem) ->
		$state.go 'dashboard', { groupBy: groupItem }

	# console.log Trip.all()
