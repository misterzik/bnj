(function() {

    var app = angular.module("bnjApp", ["ngRoute"]);

    // Global Controller
    var GlobalController = function($scope, $http, $routeParams, $sce, $rootScope) {
        // Navigation Models
        $scope.brandUrl = "http://localhost:8000";
        $scope.brandLabel = 'BNJ';
        $scope.urlNavHome = "/#/";
        $scope.login = "Sign Up";
        $scope.navObj = [{
                urlNavLink: "/#/",
                labelNavLink: "Home",
            },
            {
                urlNavLink: "/#/Products",
                labelNavLink: "Products",
            },
            {
                urlNavLink: "/#/Products/Category/Groceries",
                labelNavLink: "Deals By Category",
            }
        ];


    };
    app.controller("GlobalController", GlobalController);

    var MainController = function($scope) {

        // Tiles Models
        $scope.tilesObj = [{
                link: '/#/Products',
                name: 'Shop Deals by Category',
                icon: 'fa fa-shopping-basket pull-right',
                col: 'col-md-6'
            },
            {
                link: '/#/best-deals',
                name: 'Best Deals',
                icon: 'fa fa-archive pull-left',
                col: 'col-md-6'
            },
            {
                link: '/#/daily-deals',
                name: 'Daily Deals',
                icon: 'fa fa-tachometer pull-right',
                col: 'col-md-4'
            },
            {
                link: '/#/',
                name: 'Latest Blog Posts',
                icon: 'fa fa-comments pull-left',
                col: 'col-md-4'
            },
            {
                link: '/#/',
                name: 'Latest Deals & New Arrivals',
                icon: 'fa fa-comments pull-left',
                col: 'col-md-4'
            }

        ];


    };
    app.controller("MainController", MainController);

    app.config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when("/", {
                templateUrl: "templates/main.html",
            })
            .when("/Products", {
                templateUrl: "templates/Products.html",
                controller: "GetController"
            })
            .when("/Products/Categories", {
                templateUrl: "templates/Products.html",
                controller: "GetController"
            })
            .when("/Products/Category/Groceries", {
                templateUrl: "templates/by-category.html",
                controller: "GetController"
            })
            .when("/Products/Category/Groceries/:skuid", {
                templateUrl: "templates/display-products.html",
                controller: "ProductController"
            })
            // SEO Links mainly same as Products
            .when("/best-deals", {
                templateUrl: "templates/BestDeals.html",
                controller: "GetController"
            })
            .when("/daily-deals", {
                templateUrl: "templates/DailyDeals.html",
                controller: "GetController"
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(false);
    })

}());