'use strict';

angular.module('otDelay').controller 'DelayController', ($scope) ->

	$scope.lines = [
		{ status: 'success' }
		{ status: 'danger' }
		{ status: 'warning' }
		{ status: 'success' }
	]

	$scope.groupBy = [
    	'Area'
    	'City'
    	'Station'
    	'Line'
    ]
	
	$scope.selectedGroup = $scope.groupBy[0]

	$scope.selectGroup = (groupItem) ->
		$scope.open = false;
		$scope.selectedGroup = groupItem
		console.log('Dropdown is now: ', groupItem) ;
