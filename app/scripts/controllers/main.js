'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
    .controller('MainCtrl', function ($scope, $http) {
        var i = 0;
        $http.get("data/guitardata.json")
            .success(function (resp) {
                $scope.products = resp.allProducts;
                $scope.myImg = $scope.products[i].image;
                $scope.descp = $scope.products[i].product_discription;
                $scope.review = $scope.products[i].custmer_reviews;
                $scope.price = $scope.products[i].price;

            })

        $scope.next = function () {
            i++;
            if (i == $scope.products.length) {
                i = 0;
            }
            $scope.myImg = $scope.products[i].image;
            $scope.descp = $scope.products[i].product_discription;
            $scope.review = $scope.products[i].custmer_reviews;
            $scope.price = $scope.products[i].price;

        }

        $scope.prev = function () {
            i--
            if (i < 0) {
                i = $scope.products.length - 1;
            }
            $scope.myImg = $scope.products[i].image;
            $scope.descp = $scope.products[i].product_discription;
            $scope.review = $scope.products[i].custmer_reviews;
            $scope.price = $scope.products[i].price;
        }
        $scope.submit = function () {
            $scope.info2 = $scope.info1

          /*  if($scope.info1.length !== 0){  //This loop is giving troubles
                $scope.info1= " "
            }*/
        }


    })
    .directive("add", function () {
        return {
            restrict: 'E',
            template:'',
            link: function($scope, element, attrs, MainCtrl) {
                $scope.more= function() {
                    if($scope.info1.length !== 0) {
                        $scope.man = 'Thank you for your time. Your question will be answered soon' //without loop above its working on click
                    }
                        else if($scope.info1.length == 0){
                        $scope.man = "Need information ";
                    }
                }
            }
        }
    })
    .directive("lo", function(){
        return {
            restrict: 'E',
            template: '',
            link: function ($scope, element, attrs, MainCtrl) {
                $scope.man1 = 'Awaiting for your question(Under process)'
                $scope.more1 = function () {
                    if($scope.info1.length == 0) {
                        $scope.man1 = 'Please ask something in question box'
                    }
                    else if($scope.info1.length !== 0){
                       $scope.man1 = 'Its Done'
                        }
                    }
                }
            }
    })
