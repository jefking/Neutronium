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
    
    $scope.FatPercentageTotal = 0;
    $scope.ProtienPercentageTotal = 0;
    $scope.CarbPercentageTotal = 0;
    
    $scope.$watchCollection("selected", function( newValue, oldValue ) {
        $.each(selected, function(i) {
            $scope.FatPercentageTotal += selected[i].Fat;
            $scope.ProtienPercentageTotal += selected[i].Protien;
            $scope.CarbPercentageTotal += selected[i].Carb;
        });
    });
}]);