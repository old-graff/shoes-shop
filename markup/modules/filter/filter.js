app.controller('FilterController', function ($scope) {
    $scope.url = '/main/test.html';
    $scope.filterForm = {
        brands: [],
        sizes: [],
        seasons: []
    };
    $scope.brands = [
        { id: 1, text: 'guest' },
        { id: 2, text: 'user' },
        { id: 3, text: 'customer' },
        { id: 4, text: 'admin' }
    ];
    $scope.sizes = [
        { id: 1, text: '20' },
        { id: 2, text: '22' },
        { id: 3, text: '24' },
        { id: 4, text: '26' }
    ];
    $scope.seasons = [
        { id: 1, text: 'Весна-Осень' },
        { id: 2, text: 'Зима' },
        { id: 3, text: 'Лето' }
    ];
    $scope.all = {};
    $scope.checkAll = function (field) {
        if ($scope.all[field]) {
            $scope.filterForm[field] = $scope[field].map(function (item) {
                return item.id;
            });
        } else {
            $scope.filterForm[field] = [];
        }
    };
    $scope.sendForm = function () {
        $.ajax({
            url:  $scope.url,
            type: 'GET',
            data: $scope.filterForm,
            success: function (response) {
                $('.content__main-column').html($(response));
            }
        });
    };
});