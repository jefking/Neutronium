'use strict';

var nutritionApp = angular.module('nutritionApp', []);
var selected = [];


nutritionApp.controller('nutrition', ['$scope', '$http', function ($scope, $http) {
    $http.get('Scripts/data.js').success(function (data) {
        $scope.foods = data;
    });
}]);

nutritionApp.controller('picked', ['$scope', function ($scope) {
    $scope.change = function() {
        if ($scope.confirmed){
            selected.push($scope.food);
        }
        else {
            $.each(selected, function(i) {
                if (selected[i].Name === $scope.food.Name) {
                    selected.splice(i,1);
                    return false;
                }
            });
        }
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

nutritionApp.controller('displaySelected', ['$scope', function ($scope) {
    $scope.selected = selected;
    
    $scope.$watchCollection("selected", function( newValue, oldValue ) {
        $scope.FatPercentageTotal = 0;
        $scope.ProtienPercentageTotal = 0;
        $scope.CarbPercentageTotal = 0;
        $scope.GramsTotal = 0;
        $scope.CaloriesTotal = 0;
        var totals = 0;
    
        $.each(selected, function(i) {
            selected[i].weight = 100;
            totals += selected[i].Fat + selected[i].Protien + selected[i].Carb;
            $scope.FatPercentageTotal += selected[i].Fat;
            $scope.ProtienPercentageTotal += selected[i].Protien;
            $scope.CarbPercentageTotal += selected[i].Carb;
            $scope.CaloriesTotal += selected[i].CalPerHundred;
            $scope.GramsTotal += selected[i].weight;
        });
        
        if (totals > 0)
        {
            $scope.FatPercentageTotal = $scope.FatPercentageTotal / totals * 100;
            $scope.ProtienPercentageTotal = $scope.ProtienPercentageTotal / totals * 100;
            $scope.CarbPercentageTotal = $scope.CarbPercentageTotal / totals * 100;
        }
    });
}]);