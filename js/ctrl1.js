angular.module('myApp.ctrl1', [])
    .controller('ctrl1', function($scope) {
        console.log(1);
        $scope.age = 20;
    })