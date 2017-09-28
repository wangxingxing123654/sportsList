angular.module("sportsStore")
.controller("cartSummaryController", function ($scope, carts) {

    $scope.cartData = carts.getProducts();

    $scope.total = function () {
        var total = 0;
        for (var i = 0; i < $scope.cartData.length; i++) {
            total += ($scope.cartData[i].price * $scope.cartData[i].count);
        }
        return total;
    }

    $scope.remove = function (id) {
        carts.removeProducts(id);
    }
});
