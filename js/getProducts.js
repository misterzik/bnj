(function() {
    var app = angular.module("bnjApp");
    var GetController = function($scope, $http) {
        $http.get('/js/data/product-list.json').
        then(function(res) {
            $scope.todos = res.data;
        });
    };
    app.controller("GetController", GetController);
}());