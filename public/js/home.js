app.controller('homeController', function ($scope, $rootScope) {
    $rootScope.$on('message', function (o, user) {
        location.href = '/admin';
    });
});