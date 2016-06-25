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

            // .when('/list', {
            //   templateUrl: 'views/list.html',
            //   controller: 'ListCtrl'
            // })
            // .when('/categoryManage', {
            //   templateUrl: 'views/categoryManage.html',
            //   controller: 'CategoryManageCtrl'
            // })
            // .when('/productManage', {
            //   templateUrl: 'views/productManage.html',
            //   controller: 'ProductManageCtrl'
            // })
            // .when('/updateCategory/:id', {
            //   templateUrl: 'views/updateCategory.html',
            //   controller: 'CategoryManageCtrl'
            // })
            // .when('/updateProduct/:id', {
            //   templateUrl: 'views/updateProduct.html',
            //   controller: 'ProductManageCtrl'
            // })
            // .when('/result', {
            //   templateUrl: 'views/result.html',
            //   controller: 'ResultCtrl'
            // })
            // .when('/cart', {
            //   templateUrl: 'views/cart.html',
            //   controller: 'CartCtrl'
            //})
            .otherwise({
                redirectTo: '/books'
            });
    });
