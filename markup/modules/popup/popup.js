app.controller('AuthController', function ($scope, $rootScope) {
    $scope.state = 'reg';
    $scope.checkState = function (checkedState) {
        return $scope.state == checkedState;
    };
    $scope.setState = function (newState) {
        $scope.state = newState;
    };
});
