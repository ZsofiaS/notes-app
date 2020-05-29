(function () {
  let note = new Note();

  function testNoteDefaultState() {
    assert.isTrue(note.text === '');
    assert.isTrue(note.id === 0);
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
