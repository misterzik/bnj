(function() {

  var app = angular.module("gemSapp");

  var RestController = function($scope, $http) {


      $http.get('/bnj/js/data/characters.json').
      then(function(res) {
        $scope.todos = res.data;
      });


  };

  app.controller("RestController", RestController);

}());
