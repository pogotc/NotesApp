angular.module('notesApp').service('NoteGateway',function($localStorage){
  
	var notes = null;

	function loadNotesFromStorage() {
		notes = $localStorage.notes;
		if (notes == null) {
			notes = [];
		}
	} 

	function getNextId() {
		if (!$localStorage.nextId) {
			$localStorage.nextId = 1;
		}
		return $localStorage.nextId++;
	}

	this.getNotes = function() {
		if (notes == null) {
			loadNotesFromStorage();
		}
		return notes;
	}

	this.save = function(note) {
		if (!$localStorage.notes) {
			$localStorage.notes = [];
		}

		if (!note.id) {
			note.id = getNextId();
		}
		$localStorage.notes.push(note);
	}

	this.loadById = function(id) {
		var elem = this.getNotes().filter(function(element){
			return element.id == id;
		});
		return elem.length ? elem[0] : null;
	}
});