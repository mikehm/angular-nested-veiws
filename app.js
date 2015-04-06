var app = angular.module("myApp", ['ui.router']); 

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partial-home.html'
		})


	.state('home.list', {
        url: '/list',
        templateUrl: 'partial-home-list.html',
        controller: function($scope) {
           $scope.cars = ['Honda', 'Toyota'];
        }
    })

		.state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })
		
		
})