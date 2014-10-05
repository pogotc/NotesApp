'use strict';

angular.module('mock.notesApp', [])
  .service('MockNoteGateway', function(){
    this.getNotes = function(){
      return [
        {id: 1, content: 'Hello, this is a test'},
        {id: 2, content: 'Hola, este es una prueba'},
        {id: 3, content: 'Hallo, das ist ein Test'}
      ];
    };
  });

describe('Controller: ListCtrl', function () {

  // load the controller's module
  beforeEach(module('notesApp'));
  beforeEach(module('mock.notesApp'));

  var ListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _MockNoteGateway_) {
    scope = $rootScope.$new();
    
    ListCtrl = $controller('ListCtrl', {
      $scope: scope,
      NoteGateway: _MockNoteGateway_
    });
  }));

  it('should attach a list of notes to the scope', function () {
    expect(scope.notes.length).toBe(3);
  });
  
});
