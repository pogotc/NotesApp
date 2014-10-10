'use strict';



angular.module('notesFilters', []).filter('title', function() {
	return function(input, length) {
		function firstLine(input) {
			return input.match(/(.*)\n?/)[1];
		}

		var line = firstLine(input);
		var div = document.createElement('div');
		div.innerHTML = line;
		line = div.innerText;
		
		var result = line.length > length ? line.substr(0, length) + '...' : line;

		if (result.length === 0) {
			return 'New Note';
		} else {
			return result;
		}
	};
});