'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the notesApp
 */
angular.module('notesApp')
  .controller('ListCtrl', function ($scope, $rootScope, NoteGateway) {
    $scope.notes = NoteGateway.getNotes();

    $scope.loadNote = function(note) {
    	$rootScope.$broadcast('LOAD_NOTE', note);
    };
});
