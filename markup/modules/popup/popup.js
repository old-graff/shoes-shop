app.controller('AuthController', function ($scope, $rootScope) {
    $scope.state = 'reg';
    $scope.open = $rootScope.showPopup;
    $scope.checkState = function (checkedState) {
        return $scope.state == checkedState;
    };
    $scope.setState = function (newState) {
        $scope.state = newState;
    };
    $scope.closePopup = function () {
        $scope.open = false;
    };
});