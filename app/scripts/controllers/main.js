'use strict';

/**
 * @ngdoc function
 * @name ecomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecomApp
 */
// angular.module('ecomApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });
// var ecomApp = angular.module('ecomApp',[]);
// ecomApp.controller('MainCtrl',function($scope){
// 	$scope.items={
// 		"app1": "pic1",
// 		"app2": "pic3",
// 		"app3": "pic3"
// 	}
// })

var ecomApp = angular.module('ecomApp', []);

// ecomApp.controller('MainCtrl', function ($scope) {
//   $scope.phones = [
//     {'name': 'Nexus S',
//      'snippet': 'Fast just got faster with Nexus S.',
//      'age': 1},
//     {'name': 'Motorola XOOM™ with Wi-Fi',
//      'snippet': 'The Next, Next Generation tablet.',
//      'age': 2},
//     {'name': 'MOTOROLA XOOM™',
//      'snippet': 'The Next, Next Generation tablet.',
//      'age': 3}
//   ];

//   $scope.orderProp = 'age';
// });


ecomApp.controller('MainCtrl', function ($scope, $http) {
  $http.get('phonejson/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
});