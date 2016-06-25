'use strict';

angular.module('bookish')
    .controller('BookishCtrl', function ($scope, $http, $routeParams) {

        $scope.page = $routeParams.page || 0;
        var size = $routeParams.size || 12;

        $scope.previous = parseInt($scope.page) - 1 < 1 ? 1 : parseInt($scope.page) - 1;

        $http.get('/bookish/api/books?page=' + (parseInt($scope.page) - 1 ) + '&size=' + parseInt(size)).success(function (result) {
            $scope.result = result;
            $scope.books = result.content;
            $scope.totalPages = _.range(1, result.totalPages + 1);
            $scope.next = parseInt($scope.page) + 1 > result.totalPages ? result.totalPages : parseInt($scope.page) + 1;
        });

        var id = $routeParams.id || 0;
        $http.get('/bookish/api/books/' + id).success(function (book) {
            $scope.book = book;
        })
    });
