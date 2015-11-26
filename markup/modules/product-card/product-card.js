app.controller('GoodsController', function ($scope, localStorageService) {
    $scope.addInBasket = function (goodID, sizeID, goodName, goodUrl, goodImg, goodPrice, sizeName) {
        var goods = JSON.parse(localStorageService.get('basket'));
        if (!goods) {
            goods = [];
        }
        for (var i = 0; i < goods.length; i++) {
            if (goods[i]['goodID'] == goodID && goods[i]['sizeID'] == sizeID) {
                goods[i]['count']++;
                localStorageService.set('basket', JSON.stringify(goods));
                return true;
            }
        }
        goods.push({
            goodID: goodID,
            sizeID: sizeID,
            name: goodName,
            url: goodUrl,
            img: goodImg,
            price: goodPrice,
            count: 1,
            sizeName: sizeName
        });
        localStorageService.set('basket', JSON.stringify(goods));
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
