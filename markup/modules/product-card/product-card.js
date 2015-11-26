app.controller('GoodsController', function ($scope, localStorageService) {
    $scope.addInBasket = function (goodID, sizeID) {
        console.log(goodID);
    };
});
//
// $('html').on('click', '.product-card__size-list a', function () {
//     Basket.add($(this).attr('data-good-id'), $(this).attr('data-size-id'));
//     return false;
// });
