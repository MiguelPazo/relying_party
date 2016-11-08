var app = angular.module('RelyingParty', ['ngStorage']);

app.config(function ($interpolateProvider, $httpProvider, $localStorageProvider) {
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
    $localStorageProvider.setKeyPrefix('');

    var mySerializer = function (value) {
        return value;
    };

    var myDeserializer = function (value) {
        return value;
    };
    $localStorageProvider.setSerializer(mySerializer);
    $localStorageProvider.setDeserializer(myDeserializer);

    $httpProvider.interceptors.push(function ($q, $location, $rootScope) {
        return {
            'request': function (request) {
                request.headers = request.headers || {};

                if ($rootScope.jwt) {
                    request.headers.Authorization = 'Bearer ' + $rootScope.jwt;
                }

                return request;
            },
            'responseError': function (response) {
                if (response.status === 401 || response.status === 403) {
                    location.href = BASE_URL;
                }

                return $q.reject(response);
            }
        };
    });
});


app.run(function ($rootScope, $localStorage, $window) {
    $rootScope.jwt;
    $rootScope.user;

    angular.element($window).on('gssloLoad', function (e) {
        $rootScope.$broadcast('gssloLoad');
    });

    angular.element($window).on('gssloLogued', function (e) {
        $rootScope.jwt = e.detail.jwt;
        $rootScope.user = e.detail.user;

        $rootScope.$broadcast('gssloLogued');
    });

    angular.element($window).on('gssloLogout', function (e) {
        $rootScope.jwt = null;
        $rootScope.user = null;
        $rootScope.$broadcast('gssloLogout');
    });
});
