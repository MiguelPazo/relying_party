app.controller('homeController', function ($scope, $rootScope) {
    $rootScope.$on('gssloLogued', function (e) {
        location.href = BASE_URL + 'admin';
    });
});