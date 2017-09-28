angular.module('sports')
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller('listCtrl', function($scope, $filter) {
        var selectCategory = null;
        $scope.selectCategory = function(newCategory) {
            selectCategory = newCategory;
        };
        $scope.categoryFilterFn = function(product) {
            return selectCategory == null || product.category == selectCategory
        }
    })