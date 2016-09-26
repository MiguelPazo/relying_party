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
                    var receiver = document.getElementById('receiver').contentWindow;
                    receiver.postMessage($localStorage.token, '*');
                    $localStorage.$reset();

                    location.href = '/';
                }

                return $q.reject(response);
            }
        };
    });
});


app.run(function ($window, $rootScope, $localStorage) {
    $window.addEventListener('message', function (e) {
        if (e.data) {
            $localStorage.token = e.data;
            $rootScope.$broadcast('message', e.data);
        }
    });
});