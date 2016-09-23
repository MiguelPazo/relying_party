app.controller('homeController', function ($scope, $http, $rootScope, $localStorage) {
    $rootScope.$on('message', function (o, user) {
        $rootScope.user = user;


    });
});