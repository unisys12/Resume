'use strict';

angular.module('ResumeApp', []).
	config(function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		$routeProvider.
		when('/Resume', { templateUrl: 'resume/templates/home.html', controller: 'resumeController' }).
		when('/Resume/About/', { templateUrl: 'resume/templates/about.html', controller: 'aboutController' }).
		when('/Resume/Projects/', { templateUrl: 'resume/templates/projects.html', controller: 'projectsController' }).
		otherwise({redirectTo: '/Resume'});
	});

function resumeController($scope){
	$scope.libs =
	[
		{
			name : 'Angularjs',
			url  : 'http://angularjs.org/',
			ver  : '1.0.7'
		},
		{
			name : 'jQuery',
			url  : 'api.jquery.com',
			ver  : '1.10.2'
		},
		{
			name : 'Normalize',
			url  : 'http://necolas.github.io/normalize.css/',
			ver  : '2.1.2'
		}
	];

	$scope.tools =
	[
		{
			name : 'Sublime Text 2',
			url  : 'www.sublimetext.com',
			ver  : '2.0.2'
		},
		{
			name : 'Git',
			url  : 'http://git-scm.com/',
			ver  : '1.8.3'
		}
	];

}

function aboutController($scope){

}

function projectsController($scope){

}
