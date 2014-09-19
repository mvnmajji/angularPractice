'use strict';

/**
 * @ngdoc function
 * @name ecomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecomApp
 */
angular.module('ecomApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
