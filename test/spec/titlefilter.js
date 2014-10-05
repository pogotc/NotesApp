'use strict';

describe('Filter: TitleFilter', function () {

  // load the controller's module
  beforeEach(module('notesFilters'));

  var _titleFilter;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (titleFilter) {
    _titleFilter = titleFilter;
  }));

  it('will restrict a title to a specified number of characters', function () {
    expect(_titleFilter('testing', 4)).toBe('test...');
  });

  it('will only show the first line of a note', function() {
    var input = ['testing', 'input'].join('\n');
    expect(_titleFilter(input, 100)).toBe('testing');
  });
});
