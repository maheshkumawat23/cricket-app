app.controller('MapsController', function ($scope, NgMap, $state, $cordovaGeolocation) {
	NgMap.getMap().then(function (map) {
		console.log(map.getCenter());
		console.log('markers', map.markers);
		console.log('shapes', map.shapes);
	});


	var posOptions = { timeout: 10000, enableHighAccuracy: true };

	$cordovaGeolocation
		.getCurrentPosition(posOptions)
		.then(function (position) {
			$scope.lat = position.coords.latitude;
			$scope.long = position.coords.longitude;
			console.log($scope.lat,$scope.long);
		}, function (err) {
			console.log(err);
		});

	$scope.back = function () {
		$state.go('tabs.livescore');
	}

});