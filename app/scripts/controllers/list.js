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
        NoteGateway.currentlyOpenNote = note;
    };

    this.openNote = function(id) {
    	var note = NoteGateway.loadById(id);
    	if (note) {
    		$scope.loadNote(note);
    	}
    };

    var that = this;
    $scope.$on('NOTE_CREATED', function(event, data){
  		that.openNote(data.id);
  	});

    if ($scope.notes.length > 1) {
        this.openNote($scope.notes[0].id);
    }
});
