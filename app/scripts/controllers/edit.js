'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the notesApp
 */
angular.module('notesApp')
  .controller('EditCtrl', function ($scope, $rootScope, NoteGateway) {
    
    var that = this;


  	this.loadNote = function(note) {
  		$scope.note = note;	
  	};

  	$rootScope.$on('LOAD_NOTE', function(event, data){
  		that.loadNote(data);
  	});

  	$scope.$watch('note', function(e, note){
  		NoteGateway.save(note);
  	}, true);
});
