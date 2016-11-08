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

                if ($rootScope.idToken) {
                    request.headers.Authorization = 'Bearer ' + $rootScope.idToken;
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
    $rootScope.idToken;
    $rootScope.user;

    angular.element($window).on('gssloLoad', function (e) {
        $rootScope.$broadcast('gssloLoad');
    });

    angular.element($window).on('gssloLogued', function (e) {
        $rootScope.idToken = e.detail.idToken;
        $rootScope.user = e.detail.user;

        $rootScope.$broadcast('gssloLogued');
    });

    angular.element($window).on('gssloLogout', function (e) {
        $rootScope.idToken = null;
        $rootScope.user = null;

        location.href = BASE_URL;
    });
});
