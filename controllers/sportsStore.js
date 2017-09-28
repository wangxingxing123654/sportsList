angular.module("sportsStore")
    .constant('dataUrl','http://127.0.0.1:8080/angularjs/todo.json')
    .controller("sportsStoreCtrl", function($scope,$http,dataUrl) {

        $http.get(dataUrl).then(function (data) {
            $scope.data=data.data.results;
            console.log(data.data.results);
        },function () {
            console.log('error');
        })

    });