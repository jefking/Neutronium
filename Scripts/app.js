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

nutritionApp.controller('totals', ['$scope', function ($scope) {

    $scope.total = 
    {
        ProteinPercentageTotal: 0,
        CarbPercentageTotal: 0,
        FatPercentageTotal: 0,
        CaloriesTotal: 0,
        GramsTotal: 0,
    };
    
    $scope.$watchCollection("foods", function (newValue, oldValue) {
        $scope.FatPercentageTotal = 0;
        $scope.ProteinPercentageTotal = 0;
        $scope.CarbPercentageTotal = 0;
        $scope.GramsTotal = 0;
        $scope.CaloriesTotal = 0;
        var totals = 0;

        angular.forEach($scope.foods, function (food) {
            if (food.selected) {
                totals += food.Fat + food.Protein + food.Carb;
                $scope.FatPercentageTotal += food.Fat;
                $scope.ProteinPercentageTotal += food.Protein;
                $scope.CarbPercentageTotal += food.Carb;
                $scope.CaloriesTotal += food.CalPerHundred;
                $scope.GramsTotal += food.weight;
            }
        });

        if (totals > 0) {
            $scope.FatPercentageTotal = $scope.FatPercentageTotal / totals * 100;
            $scope.ProteinPercentageTotal = $scope.ProteinPercentageTotal / totals * 100;
            $scope.CarbPercentageTotal = $scope.CarbPercentageTotal / totals * 100;
        }
    });
}]);