angular.module('myApp.ctrl2', [])
    .controller('ctrl2', function($scope, $stateParams) {
        console.log($stateParams);
        $scope.name = 'vas';
    })