// app.controller('BasketController', function ($scope, BasketService) {
//     $scope.goods = BasketService.goods;
//
//     $scope.getTotalPrice = function () {
//         return BasketService.totalPrice;
//     };
//
//     $scope.updateCount = function (good) {
//         if (good.count < 1) {
//             good.count = 1;
//         }
//         // good.count = parseInt(good.count);
//         good.count = String(good.count).replace(/\D/, '');
//         BasketService.updateCount(good.goodID, good.sizeID, good.count);
//     };
//
//     $scope.delete = function (goodID, sizeID) {
//         BasketService.delete(goodID, sizeID);
//     };
//
//     $scope.decrement = function (good) {
//         good.count--;
//         $scope.updateCount(good);
//     };
//
//     $scope.increment = function (good) {
//         good.count++;
//         $scope.updateCount(good);
//     };
//
//     $scope.getTotalCount = function () {
//         var count = 0;
//         if (!$scope.goods){
//             return count;
//         }
//         for (var i = 0; i < $scope.goods.length; i++) {
//             count += +$scope.goods[i]['count'];
//         }
//         return count;
//     };
//
// });
//
// // var Basket = {
// //     block: false,
// //     add: function (goodID, sizeID) {
// //         $.ajax({
// //             url: this.getAddUrl(),
// //             data: { goodID: goodID, sizeID: sizeID },
// //             dataType: 'json',
// //             success: function (data) {
// //                 if (data) {
// //                     this.render(data);
// //                 }
// //             }.bind(this)
// //         });
// //         console.log('add in basket');
// //     },
// //     delete: function (id) {
// //         console.log('delete from basket');
// //         $.ajax({
// //             url: this.getDeleteUrl(),
// //             data: { id: id },
// //             dataType: 'json'
// //         });
// //     },
// //     updateCount: function (id, count) {
// //         console.log('set count');
// //         $.ajax({
// //             url: this.getUpdateUrl(),
// //             data: { id: id, count: count },
// //             dataType: 'json',
// //             success: function (data) {
// //                 this.render(data);
// //             }.bind(this)
// //         });
// //         return false;
// //     },
// //     render: function (el) {
// //         console.log('render');
// //         $('.basket').html($(el).html());
// //
// //     },
// //     check: function (goodID, sizeID) {
// //         console.log('check');
// //         return false;
// //     },
// //     getElement: function (id) {
// //         return $('.product-card-micro[data-basket-id=' + id + ']');
// //     },
// //     getAddUrl: function () {
// //         return $('.basket').attr('data-add-url');
// //     },
// //     getDeleteUrl: function () {
// //         return $('.basket').attr('data-delete-url');
// //     },
// //     getUpdateUrl: function () {
// //         return $('.basket').attr('data-update-url');
// //     }
// // };
