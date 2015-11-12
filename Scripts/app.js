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
            var i = 0;
            angular.forEach(selected, function (s) {
                if (s.Name === $scope.food.Name) {
                    selected.splice(i,1);
                    return false;
                }
                i++;
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
    
        angular.forEach(selected, function (s) {
            s.weight = 100;
            totals += s.Fat + s.Protien + s.Carb;
            $scope.FatPercentageTotal += s.Fat;
            $scope.ProtienPercentageTotal += s.Protien;
            $scope.CarbPercentageTotal += s.Carb;
            $scope.CaloriesTotal += s.CalPerHundred;
            $scope.GramsTotal += s.weight;
        });
        
        if (totals > 0)
        {
            $scope.FatPercentageTotal = $scope.FatPercentageTotal / totals * 100;
            $scope.ProtienPercentageTotal = $scope.ProtienPercentageTotal / totals * 100;
            $scope.CarbPercentageTotal = $scope.CarbPercentageTotal / totals * 100;
        }
    });
    
    
    $scope.ClearClick = function() {
        angular.forEach($scope.foods, function (food) {
            food.selected = false;
        });

        $scope.selected = selected = [];
    }
}]);