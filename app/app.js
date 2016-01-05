'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
        // Système de routage
        $routeProvider
        .when('/home', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
