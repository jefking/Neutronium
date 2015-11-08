'use strict';

var nutritionApp = angular.module('nutritionApp', []);
var selected = [];


nutritionApp.controller('nutrition', ['$scope', '$http', function ($scope, $http) {
    $http.get('Scripts/data.js').success(function (data) {
        $scope.foods = data;
    });
}]);

nutritionApp.controller('picked', ['$scope', function ($scope) {
    //$scope.counter = 0;
    $scope.change = function() {
        //$scope.counter++;
        selected.push($scope.food);
        console.log(selected);
    };
}]);

nutritionApp.controller('sort', ['$scope', function($scope) {
    $scope.predicate = 'Name';
    $scope.reverse = false;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    }
}]);