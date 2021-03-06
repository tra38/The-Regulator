var app = angular.module('myApp', ['ngRoute', 'LocalStorageModule']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'myCtrl',
      templateUrl: 'views/home.html'
    })
    .when('/corporations/:id', {
          controller: 'CorporateController',
          templateUrl: 'views/corporation.html'
        })
    .otherwise({
      redirectTo: '/'
    });
});