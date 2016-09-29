app.controller('adminController', function ($scope, $http, $rootScope) {
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
        gsslo.logout();
        location.href = '/';
    }


    $rootScope.$on('gssloLogued', function (e) {
        $scope.load();
    });

    $rootScope.$on('gssloLogout', function (e) {
        location.href = '/';
    });
});