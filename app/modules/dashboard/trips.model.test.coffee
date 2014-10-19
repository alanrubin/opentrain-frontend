'use strict';

describe 'otDashboard:TripsModel', ->
	trip = undefined
	$httpBackend = undefined

	beforeEach module 'openTrain'
	beforeEach module 'otDashboard'

	beforeEach inject ($injector) ->
		trip = $injector.get('Trip')
		$httpBackend = $injector.get('$httpBackend')
		$httpBackend.expectGET('data/trips.current.json').respond {
			objects: [1, 2]
		}

	describe 'all()', ->
		it 'should return all records', ->
			# expect(true).toBeFalsy()
			trip.all().then (data) ->
				expect(data.length).toEqual(2)

			$httpBackend.flush();

	afterEach ->
		$httpBackend.verifyNoOutstandingExpectation()
		$httpBackend.verifyNoOutstandingRequest()