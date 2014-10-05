'use strict';

angular.module('notesApp')
	.directive('contenteditable', function() {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, elm, attrs, ctrl) {
				elm.bind('blur keyup change', function(){
					scope.$apply(function(){
						ctrl.$setViewValue(elm.html());
					});
				});

				ctrl.$render = function(){
					elm.html(ctrl.$viewValue);
				};
			}
		};
	});