'use strict';

angular.module('otDashboard').factory 'Trip', ($http) ->

	{
		all: ->
			$http.get('data/trips.current.json').then (results) ->
				results.data.objects
	}
