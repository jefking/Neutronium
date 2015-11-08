'use strict';

var nutritionApp = angular.module('nutritionApp', []);
var Foods;

nutritionApp.controller('nutrition', ['$scope', '$http', function ($scope, $http) {
    $http.get('Scripts/data.js').success(function (data) {
        $scope.foods = data;
        Foods = data;
    });
}]);

nutritionApp.controller('picked', ['$scope', function ($scope) {
    //$scope.counter = 0;
    $scope.change = function() {
        //$scope.counter++;
    };
}]);

nutritionApp.controller('sort', ['$scope', function($scope) {
    $scope.foods = Foods;
    $scope.predicate = 'Name';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    }
}]);