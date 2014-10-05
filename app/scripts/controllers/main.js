'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notesApp
 */
angular.module('notesApp')
  .controller('MainCtrl', function ($scope, $localStorage) {
    $scope.name = $localStorage.name;
    $localStorage.name = 'Bobb';
  });
