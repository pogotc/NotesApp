'use strict';



angular.module('notesFilters', []).filter('title', function() {
	return function(input, length) {
		function firstLine(input) {
			return input.match(/(.*)\n?/)[1];
		}

		var line = firstLine(input);
		return line.length > length ? line.substr(0, length) + '...' : line;
	};
});