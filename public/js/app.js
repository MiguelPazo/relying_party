var app = angular.module("RelyingParty", ['ngStorage']);

app.config(function ($interpolateProvider, $httpProvider) {
    $interpolateProvider.startSymbol('[[').endSymbol(']]');

    $httpProvider.interceptors.push(function ($q, $location, $localStorage) {
        return {
            'request': function (request) {
                request.headers = request.headers || {};

                if ($localStorage.token) {
                    request.headers.Authorization = 'Bearer ' + $localStorage.token;
                }

                return request;
            },
            'responseError': function (response) {
                if (response.status === 401 || response.status === 403) {
                    $location.path('/');
                }

                return $q.reject(response);
            }
        };
    });
});


app.run(function ($window, $rootScope, $localStorage) {
    $rootScope.user;

    $window.addEventListener('message', function (e) {
        $localStorage.token = e.data;
        $rootScope.$broadcast('message', e.data);
    });
});