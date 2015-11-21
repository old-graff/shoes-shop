app.controller('BasketController', function ($scope, BasketService) {
    $scope.products = BasketService.getProducts();
    $scope.totalPrice = function () {
        return 32131;
    };
});
