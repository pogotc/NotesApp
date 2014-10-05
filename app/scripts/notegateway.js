angular.module('notesApp').service('NoteGateway',function($localStorage){
  
	var notes = null;

	function loadNotesFromStorage() {
		notes = $localStorage.notes;
		if (notes == null) {
			notes = [];
		}
	}

	this.getNotes = function() {
		if (notes == null) {
			loadNotesFromStorage();
		}
		return notes;
	}


});