// app.controller('FilterController', function ($scope, GoodsService, $http) {
//     $scope.filter = GoodsService.filter;
//     $scope.sizes;
//     $scope.brands;
//     $scope.seasons;
//     $scope.genders;
//     $scope.checkAll;
//     (function () {
//         $http.get(GoodsService.apiServer + '/data/sizes').success(function (res) {
//             $scope.sizes = res;
//         });
//         $http.get(GoodsService.apiServer + '/data/genders').success(function (res) {
//             $scope.genders = res;
//         });
//         $http.get(GoodsService.apiServer + '/data/brands').success(function (res) {
//             $scope.brands = res;
//         });
//         $http.get(GoodsService.apiServer + '/data/seasons').success(function (res) {
//             $scope.seasons = res;
//         });
//     })();
//     $scope.sendForm = function () {
//         console.log('form sended');
//     };
//     $scope.shouldChange = function () {
//         return true;
//     };
//     $scope.check = function (field) {
//         if ($scope.filter[field].length == $scope[field].length) {
//             // $scope.checkAll[field] = true;
//             console.log('check all');
//         } else {
//             // $scope.checkAll[field] = false;
//             console.log('uncheck all');
//         }
//     };
//     $scope.checkedAll = function (field) {
//         if ($scope.checkAll[field]) {
//             $scope.filter[field] = $scope[field].map(function (item) { return item.id; });
//         } else {
//             $scope.filter[field] = [];
//         }
//     };
// });

$('.filter input[type=checkbox][name]').change(function () {
    var parent = $(this).closest('p');
    var checkedInputsCount = parent.find('input[type=checkbox][name]:checked').length;
    var inputsCount = parent.find('input[type=checkbox][name]').length;
    if (checkedInputsCount == inputsCount) {
        parent.find('.filter__select-all input').prop('checked', true);
    } else {
        parent.find('.filter__select-all input').prop('checked', false);
    }
    sendFilterForm();
});

$('.filter__select-all input').change(function () {
    if ($(this).is(':checked')) {
        $(this).closest('p').find('input[type=checkbox][name]').prop('checked', true);
    } else {
        $(this).closest('p').find('input[type=checkbox][name]').prop('checked', false);
    }
    sendFilterForm();
});

function sendFilterForm() {
    var form = $('.filter form');
    $.ajax({
        url: form.attr('action'),
        data: form.serialize(),
        type: form.attr('method'),
        success: function (data) {
            $('.content__main-column').html($(data).find('.content__main-column').html());
            $('.filter__result').html($(data).find('.filter__result').html());
        },
        error: function (err, status) {
            console.log('error');
        }
    });
}
