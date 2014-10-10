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
      {content: 'Hello, this is a test'},
      {content: 'Hola, este es una prueba'},
      {content: 'Hallo, das ist ein Test'}
    ];
    expect(NoteGateway.getNotes().length).toBe(3);
  });

  it('returns an empty array when local storage is empty', function(){
    expect(NoteGateway.getNotes().length).toBe(0);
  });

  it('can save notes to local storage', function(){
    var note = {content: 'my new note'};
    var savedNode = NoteGateway.save(note);
    expect(NoteGateway.getNotes().length).toBe(1);
    expect(savedNode.id).toBe(1);
  });

  it('can assign incrementing ids', function(){
      NoteGateway.save({content: 'test one'});
      NoteGateway.save({content: 'test two'});
      NoteGateway.save({content: 'test three'});

      expect(NoteGateway.getNotes()[0].id).toBe(1);
      expect(NoteGateway.getNotes()[1].id).toBe(2);
      expect(NoteGateway.getNotes()[2].id).toBe(3);
  });

  it('can load a note by id', function(){
    localStorage.notes = [
      {id: 1, content: 'Hello, this is a test'},
      {id: 2, content: 'Hola, este es una prueba'},
      {id: 3, content: 'Hallo, das ist ein Test'}
    ];

    var note = NoteGateway.loadById(1);
    expect(note.content).toBe('Hello, this is a test');
  });

  it('returns null when trying to load by a non-existant id', function(){
    expect(NoteGateway.loadById(-1)).toBe(null);
  });


  it('will update an existing note', function(){
    NoteGateway.save({id: 1, content: 'original'});
    expect(NoteGateway.getNotes().length).toBe(1);

    NoteGateway.save({id: 1, content: 'updated'});
    expect(NoteGateway.getNotes().length).toBe(1);
  });
});
