app.controller('GoodsController', function ($scope, BasketService) {
    $scope.addInBasket = function (goodID, sizeID, goodName, goodUrl, goodImg, goodPrice, sizeName, brandName) {
        var row = {
            goodID: goodID,
            sizeID: sizeID,
            name: goodName,
            url: goodUrl,
            img: goodImg,
            price: goodPrice,
            count: 1,
            sizeName: sizeName,
            brandName: brandName
        };
        BasketService.add(row);
    };
});
//
// $('html').on('click', '.product-card__size-list a', function () {
//     var obj = {
//         goodID: $(this).attr('data-good-id'),
//         sizeID: $(this).attr('data-size-id'),
//         good: {
//             name: '',
//             url: '',
//             img: '',
//             price: '312'
//         },
//         size: {
//             name: '21'
//         }
//     };
//     Basket.add(obj);
//     return false;
// });
