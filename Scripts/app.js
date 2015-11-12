'use strict';

var nutritionApp = angular.module('nutritionApp', []);

nutritionApp.controller('nutrition', ['$scope', '$http', function ($scope, $http) {
    $http.get('Scripts/data.js').success(function (data) {
        $scope.foods = data;
        
        angular.forEach($scope.foods, function (food) {
            food.weight = 100;
            food.selected = false;
            food.proteinPercent = ((food.Protein / (food.Fat + food.Carb + food.Protein)) * food.weight);
            food.fatPercent = ((food.Fat / (food.Fat + food.Carb + food.Protein)) * food.weight);
            food.carbPercent = ((food.Carb / (food.Fat + food.Carb + food.Protein)) * food.weight);
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