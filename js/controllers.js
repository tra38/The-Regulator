app.controller('myCtrl', ['$scope', 'corporations', 'localStorageService', function($scope, corporations, localStorageService) {
  $scope.apps = corporations.information();
  $scope.selectedFactions = function()
  {
    var data = localStorageService.get("corporations")
    if (data == undefined ) {
      var data = shuffle($scope.apps).slice(0,3)
      localStorageService.set("corporations", data)
      return data
    }
    else
    {
      return data
    }
  }();

  $scope.growthFaction = prepareInitialStats($scope.selectedFactions[0], 1)
  $scope.valueFaction = prepareInitialStats($scope.selectedFactions[1], 2)
  $scope.stableFaction = prepareInitialStats($scope.selectedFactions[2], 3)

  $scope.attackTarget = function(faction) {
    console.log("You pressed a button!")
  }
}]);

app.controller('CorporateController', ['$scope', '$routeParams', 'corporations', function($scope, $routeParams, corporations) {
  $scope.faction = corporations.information()[$routeParams.id - 1];
}]);

app.controller('PlayerController', ['$scope', 'localStorageService', function($scope, localStorageService) {
  $scope.name = localStorageService.get("name");
  $scope.changeName = function(name) {
    localStorageService.set("name", name);
    $scope.name = name;
  }
  $scope.attackTarget = function(faction) {
    console.log("You pressed a button!")
  }
}]);