'use strict';

var nutritionApp = angular.module('nutritionApp', []);

nutritionApp.controller('nutrition', ['$scope', '$http', function ($scope, $http) {
    $http.get('Scripts/data.js').success(function (data) {
        $scope.foods = data;
        
        angular.forEach($scope.foods, function (food) {
            food.weight = 100;
            food.selected = false;
            food.proteinPercent = function() {
                return ((food.Protein / (food.Fat + food.Carb + food.Protein)) * food.weight);
            };
            food.proteinTotal = function()
            {
                return food.Calories * (food.weight * .01);
            }
            food.fatPercent = function() {
                return ((food.Fat / (food.Fat + food.Carb + food.Protein)) * food.weight);
            };
            food.fatTotal = function()
            {
                return food.Fat * (food.weight * .01);
            }
            food.carbPercent = function() {
                return ((food.Carb / (food.Fat + food.Carb + food.Protein)) * food.weight);
            };
            food.carbTotal = function()
            {
                return food.Carb * (food.weight * .01);
            }
            food.caloriesTotal = function()
            {
                return food.Calories * (food.weight * .01);
            }
        });
    });
}]);

nutritionApp.controller('sort', ['$scope', function ($scope) {
    $scope.predicate = 'Name';
    $scope.reverse = false;
    $scope.order = function (predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    }
}]);

nutritionApp.filter('sumByKey', function() {
    return function(data, key) {
        if (typeof(data) === 'undefined' || typeof(key) === 'undefined') {
            return 0;
        }

        var sum = 0;
        for (var i = data.length - 1; i >= 0; i--) {
            sum += parseInt(data[i][key]);
        }

        return sum;
    };
});
nutritionApp.filter('sumByFunc', function() {
    return function(data, key) {
        if (typeof(data) === 'undefined' || typeof(key) === 'undefined') {
            return 0;
        }

        var sum = 0;
        for (var i = data.length - 1; i >= 0; i--) {
            sum += parseInt(data[i][key]());
        }

        return sum;
    };
});