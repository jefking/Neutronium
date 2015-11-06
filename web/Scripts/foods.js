'use strict';

var nutritionApp = angular.module('nutritionApp', []);

nutritionApp.controller('nutrition', ['$scope', '$http', function ($scope, $http) {
    $http.get('/Scripts/foodData.json').success(function (data) {
        $scope.foods = data;
    });
}]);