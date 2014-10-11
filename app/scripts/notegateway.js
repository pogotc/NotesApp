'use strict';

angular.module('notesServices', ['ngStorage']).service('NoteGateway',function($localStorage){
  
	var notes = $localStorage.notes;
	if (notes === undefined) {
		notes = [];
	}

	this.currentlyOpenNote = null;

	function getNextId() {
		if (!$localStorage.nextId) {
			$localStorage.nextId = 1;
		}
		return $localStorage.nextId++;
	}

	this.getNotes = function() {
		if (!$localStorage.notes) {
			$localStorage.notes = [];
		}
		notes = $localStorage.notes;
		return notes;
	};

	this.save = function(note) {
		if (!$localStorage.notes) {
			$localStorage.notes = [];
		}

		if (note === undefined) {
			return;
		}

		if (!note.id) {
			note.id = getNextId();
		}

		if (!this.loadById(note.id)) {
			notes.push(note);
		}
		$localStorage.notes = notes;

		return note;
	};

	this.loadById = function(id) {
		var elem = this.getNotes().filter(function(element){
			return element.id === id;
		});
		return elem.length ? elem[0] : null;
	};
});