(function() {

  var app = angular.module("gemSapp");

  var DisplayController = function($scope, $routeParams, $http) {

    $http.get('js/data/characters-info.json').success(function(data){
   angular.forEach(data, function(item) {
     if (item.name == $routeParams.skuid)
       $scope.info = item;
   });
});

};

  app.controller("DisplayController", DisplayController);

}());
