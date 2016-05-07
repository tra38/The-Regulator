app.controller('myCtrl', function($scope, corporations) {
  $scope.apps = corporations.information();
  $scope.selectedFactions = shuffle($scope.apps).slice(0,3)
  $scope.growthFaction = prepareInitialStats($scope.selectedFactions[0], 1)
  $scope.valueFaction = prepareInitialStats($scope.selectedFactions[1], 2)
  $scope.stableFaction = prepareInitialStats($scope.selectedFactions[2], 3)
});

app.controller('CorporateController', ['$scope', '$routeParams', 'corporations', function($scope, $routeParams, corporations) {
  $scope.faction = corporations.information()[$routeParams.id - 1];
}]);

app.controller('PlayerController', ['$scope', 'localStorageService', function($scope, localStorageService) {
  $scope.name = localStorageService.get("name");
  $scope.changeName = function(name) {
    localStorageService.set("name", name);
    $scope.name = name;
  }
}]);