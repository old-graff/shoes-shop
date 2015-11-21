app.controller('BasketController', function ($scope, BasketService) {
    $scope.products = BasketService.getProducts();
    $scope.totalPrice = function () {
        var sum = 0;
        for (var i = 0; i < $scope.products.length; i++) {
            sum += $scope.products[i].price;
        }
        return sum;
    };
});
