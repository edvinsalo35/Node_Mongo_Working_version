var app = angular.module('Coa', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

app.controller('HomeCtrl', ['$scope', '$resource', 
	function($scope, $resource) {
		var Videos = $resource('/videos');
		Videos.query(function(videos) {
			$scope.videos = videos;
		});
	}
]);