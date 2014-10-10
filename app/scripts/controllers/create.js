'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the notesApp
 */
angular.module('notesApp')
  .controller('CreateCtrl', function ($scope, NoteGateway) {

    $scope.createNote = function() {
      NoteGateway.save({content: ''});
      
    };
});
