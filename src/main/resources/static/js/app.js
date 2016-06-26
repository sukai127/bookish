'use strict';

angular
    .module('bookish', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/books', {
                templateUrl: 'view/books.html',
                controller: 'BookishCtrl'
            })
            .when('/books/:id', {
                templateUrl: 'view/bookDetails.html',
                controller: 'BookishCtrl'
            })
            .otherwise({
                redirectTo: '/books'
            });
    });
