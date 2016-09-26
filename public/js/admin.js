app.controller('adminController', function ($scope, $http, $rootScope, $localStorage) {
    $scope.data;

    $scope.load = function () {
        $http({
            url: 'admin/data',
            method: 'GET'
        }).success(function (response) {
            $scope.data = response.data;
        });
    };

    $scope.load();
});