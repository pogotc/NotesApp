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

    $scope.currentNote = null;

    $scope.loadNote = function(note) {
    	$rootScope.$broadcast('LOAD_NOTE', note);
    	$scope.currentNote = note;
    };

    $scope.loadNote(NoteGateway.getNotes()[0]);
});
