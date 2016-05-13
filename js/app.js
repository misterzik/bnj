(function() {

  var app = angular.module("gemSapp", ["ngRoute"]);

  var GlobalController = function($scope, $http, $routeParams, $sce) {
    // Global Usage Links
    $scope.urlHomePage = "http://";
    $scope.localHost = "http://localhost/";
    // Nav - Homepage
    $scope.urlNavHome = "/#/";
    // Nav
    $scope.urlNavLink2 = "/#/support/";
    $scope.urlNavLink3 = "/#/labs";
    $scope.urlNavLink4 = "/#/contact";
    // Extras
    $scope.urlNavLink5 = "/#/blog";
  };

  app.controller("GlobalController", GlobalController);

  app.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when("/", {
      templateUrl: "templates/main.html",
      })
      .when("/Products", {
        templateUrl: "templates/Products.html",
        controller: "RestController"
      })
      .when("/Products/Category/Jewelry", {
        templateUrl: "templates/JewelryCat.html",
        controller: "RestController"
      })
      .when("/Products/Category/Jewelry/:skuid", {
        templateUrl: "templates/display.html",
        controller: "DisplayController"
      })
      // SEO Links mainly same as Products
      .when("/best-deals", {
        templateUrl: "templates/BestDeals.html",
        controller: "RestController"
      })
      .when("/daily-deals", {
        templateUrl: "templates/DailyDeals.html",
        controller: "RestController"
      });
    // use the HTML5 History API
    $locationProvider.html5Mode(false);
  })

}());
