'use strict';


describe('Controller: CreateCtrl', function () {

  // load the controller's module
  beforeEach(module('notesApp'));

  var CreateCtrl,
    scope,
    _NoteGateway;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _NoteGateway_) {
    _NoteGateway = _NoteGateway_;
    scope = $rootScope.$new();
    CreateCtrl = $controller('CreateCtrl', {
      NoteGateway: _NoteGateway_,
      $scope: scope
    });
  }));

  it('can trigger the creation of a new note', function () {
    
    expect(_NoteGateway.getNotes().length).toBe(0);
    scope.createNote();
    expect(_NoteGateway.getNotes().length).toBe(1);
  });

  it('will trigger the opening of a newly added note', function(){
    scope.createNote();
    
  });
});
 