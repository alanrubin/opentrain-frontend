'use strict';

describe 'otDashboard:TripsModel', ->
	trip = undefined;

	beforeEach module 'openTrain'
	beforeEach module 'otDashboard'

	beforeEach inject ($injector) ->
		trip = $injector.get('Trip')

	describe 'all()', ->
		it 'should return test string', ->
			expect(trip.all()).toEqual('test123!')