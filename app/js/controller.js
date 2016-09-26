'use strict';

var app = angular.module('app',['ngRoute', 'angular.filter']);


// configure our routes
app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : '/index.html',
            controller  : 'mainController'
        })

        // route for the sklad page
        .when('/stock', {
            templateUrl : 'templates/stock.html',
            controller  : 'stockController'
        })

        // route for the sales page
        .when('/sales', {
            templateUrl : 'templates/sales.html',
            controller  : 'salesController'
        })

        // route for the report page
        .when('/report', {
            templateUrl : 'templates/report.html',
            controller  : 'reportController'
        });

});


app.factory('webtest', function($timeout, $http) {
    var Webtest = {
        fetch: function() {
            return $timeout(function() {
                return $http.get('/app-sklad/app/json/data.json').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    }

    return Webtest;
});

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('salesController', function($scope) {
    $scope.message = 'Look! I am an sales page.';
});


app.controller('stockController', function($scope, webtest) {
    console.log("sklad");

    webtest.fetch().then(function(data) {
        $scope.data = data;
    });


});

app.controller('reportController', function($scope) {

});


console.log("controller");