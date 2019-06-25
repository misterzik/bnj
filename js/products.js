(function() {

    var app = angular.module("bnjApp");

    var ProductController = function($scope, $routeParams, $http) {

        $http.get('js/data/products-info.json').success(function(data) {
            angular.forEach(data, function(item) {
                if (item.sku == $routeParams.skuid)
                    $scope.info = item;
            });
        });

    };

    app.controller("ProductController", ProductController);

}());