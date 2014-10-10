'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the notesApp
 */
angular.module('notesApp')
  .controller('CreateCtrl', function ($scope, $rootScope, NoteGateway) {

    $scope.createNote = function() {
      var newNote = NoteGateway.save({content: ''});
      $rootScope.$broadcast('NOTE_CREATED', newNote);
    };
});
