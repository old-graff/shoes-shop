// app.controller('GoodsController', function ($scope, BasketService, $rootScope) {
//     $scope.addInBasket = function (goodID, sizeID, goodName, goodUrl, goodImg, goodPrice, sizeName, brandName) {
//         if ($rootScope.isGuest) {
//             $rootScope.openPopup();
//             return;
//         }
//         var row = {
//             goodID: goodID,
//             sizeID: sizeID,
//             name: goodName,
//             url: goodUrl,
//             img: goodImg,
//             price: goodPrice,
//             count: 1,
//             sizeName: sizeName,
//             brandName: brandName
//         };
//         BasketService.add(row);
//     };
// });
