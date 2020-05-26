(function () {
  let note = new Note();

  function testNoteDefaultState() {
    if (note.text !== '') {
      throw new Error('Note should be an empty string by default');
    }
  }

  function testCreateNote() {
    let text = 'Hello World!';

    note.createNote(text);

    if (note.text !== text) {
      throw new Error('Expected message not to equal  empty string but got an empty string');
    }
  }

  testNoteDefaultState();
  testCreateNote();
})(this);
