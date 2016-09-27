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

    $scope.logout = function () {
        $http({
            url: 'logout',
            method: 'GET'
        }).success(function (response) {
            var receiver = document.getElementById('receiver').contentWindow;
            receiver.postMessage($localStorage.token, '*');
            $localStorage.$reset();

            location.href = response.url;
        });
    }

    $scope.load();
});