'use strict';

angular.module('otDashboard').controller 'DashboardController', ($scope, $stateParams, $state) ->

	$scope.lines = [
		{ status: 'success' }
		{ status: 'danger' }
		{ status: 'warning' }
		{ status: 'success' }
	]

	# Set selected group by state params
	$scope.selectedGroup = $stateParams.groupBy

	$scope.groupBy = [
    	'area'
    	'city'
    	'station'
    	'line'
    ]

    # Select specific group
	$scope.selectGroup = (groupItem) ->
		$state.go 'dashboard', { groupBy: groupItem }
