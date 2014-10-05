'use strict';

describe('Service: NoteGateway', function () {

  // load the controller's module
  beforeEach(module('notesApp'));

  var NoteGateway;
  var localStorage;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($localStorage, _NoteGateway_) {
    NoteGateway = _NoteGateway_;
    $localStorage.$reset();
    localStorage = $localStorage;
  }));

  it('can load a list of notes from local storage', function () {
    localStorage.notes = [
      {content: "Hello, this is a test"},
      {content: "Hola, este es una prueba"},
      {content: "Hallo, das ist ein Test"}
    ];
    expect(NoteGateway.getNotes().length).toBe(3);
  });

  it('returns an empty array when local storage is empty', function(){
    expect(NoteGateway.getNotes().length).toBe(0);
  });
});
