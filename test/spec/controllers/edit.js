'use strict';

// angular.module('mock.notesApp', [])
//   .service('MockNoteGateway', function(){
    
//   });


describe('Controller: EditCtrl', function () {

  // load the controller's module
  beforeEach(module('notesApp'));

  var EditCtrl,
    scope,
    rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    rootScope = $rootScope;
    EditCtrl = $controller('EditCtrl', {
      $scope: scope,
      $rootScope: rootScope
    });
  }));

  it('should load a note into the content area', function () {
    var note = {id: 1, content: 'hello'};
    EditCtrl.loadNote(note);

    expect(scope.note).toBe(note);
  });
  

  it('it will load a note in response to a LOAD_NOTE event', function(){
    var note = {content: 'test'};
    rootScope.$broadcast('LOAD_NOTE', note);

    expect(scope.note).toBe(note);
  });  
});
