'use strict';

var nutritionApp = angular.module('nutritionApp', []);

nutritionApp.controller('nutrition', ['$scope', '$http', function ($scope, $http) {
    $http.get('Scripts/data.js').success(function (data) {
        $scope.foods = data;
        angular.forEach($scope.foods, function (food) {
            food.weight = 100;
            food.selected = false;
            food.protienPercent = ((food.Protien / (food.Fat + food.Carb + food.Protien)) * 100);
            food.fatPercent = ((food.Fat / (food.Fat + food.Carb + food.Protien)) * 100);
            food.carbPercent = ((food.Carb / (food.Fat + food.Carb + food.Protien)) * 100);
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

nutritionApp.controller('displaySelected', ['$scope', function ($scope) {

    $scope.$watchCollection("foods", function (newValue, oldValue) {
        $scope.FatPercentageTotal = 0;
        $scope.ProtienPercentageTotal = 0;
        $scope.CarbPercentageTotal = 0;
        $scope.GramsTotal = 0;
        $scope.CaloriesTotal = 0;
        var totals = 0;

        angular.forEach($scope.foods, function (s) {
            if (s.selected) {
                totals += s.Fat + s.Protien + s.Carb;
                $scope.FatPercentageTotal += s.Fat;
                $scope.ProtienPercentageTotal += s.Protien;
                $scope.CarbPercentageTotal += s.Carb;
                $scope.CaloriesTotal += s.CalPerHundred;
                $scope.GramsTotal += s.weight;
            }
        });

        if (totals > 0) {
            $scope.FatPercentageTotal = $scope.FatPercentageTotal / totals * 100;
            $scope.ProtienPercentageTotal = $scope.ProtienPercentageTotal / totals * 100;
            $scope.CarbPercentageTotal = $scope.CarbPercentageTotal / totals * 100;
        }
    });
}]);