(function () {
  let note = new Note();

  function testNoteDefaultState() {
    if (note.message !== '') {
      throw new Error('Note should be an empty string by default');
    }
  }

  testNoteDefaultState();
})(this);
