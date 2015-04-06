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
        template: 'I like Japanese cars'
	})
	.state('about', {
		url:'/about',
		views: {
			'':{templateUrl:'partial-about.html'},
			'columnOne@about':{template: 'Look I am a column'},
			'columnTwo@about':{
				templateUrl: 'table-data.html',
				controller:'MyCtrl' 
			}
	}
})

});

app.controller('MyCtrl', function($scope){	
	$scope.message = 'test';	
	$scope.autos = [
		{
			name:'Nissan',
			price: 17000
		},

		{
			name: 'Lexus',
			price: 50000
		},
		{
			name: 'Ferrari',
			price: 150000
		}
	];
});



















