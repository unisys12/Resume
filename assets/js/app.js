'use strict';

angular.module('ResumeApp', []).
	config(function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		$routeProvider.
		when('/Resume', { templateUrl: 'resume/templates/home.html', controller: 'resumeController' }).
		otherwise({redirectTo: '/Resume'});
	});

function resumeController($scope){

}
