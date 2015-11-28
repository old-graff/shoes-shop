app.controller('GoodViewController', function ($scope, BasketService) {
    $scope.getCount = function (goodID, sizeID) {
        console.log('get count', sizeID);
    };
    $scope.setCount = function (goodID, sizeID, count) {
        console.log('set count');
    };
    $scope.size = [];
});
