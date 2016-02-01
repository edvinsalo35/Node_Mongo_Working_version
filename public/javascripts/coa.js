var app = angular.module('Coa', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);