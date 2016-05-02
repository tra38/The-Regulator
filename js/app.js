var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
  var site_prefix = '/The-Regulator'
  $routeProvider
    .when(site_prefix + '/', {
      controller: 'myCtrl',
      templateUrl: 'views/home.html'
    })
    .when(site_prefix + '/corporations/:id', {
          controller: 'CorporateController',
          templateUrl: 'views/corporation.html'
        })
    .otherwise({
      redirectTo: site_prefix + '/'
    });
});
