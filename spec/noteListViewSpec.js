(function () {

  let note = new Note();
  let noteList = new NoteList();
  let noteListView = new NoteListView(noteList);
  let text = "Favourite food: pesto";

  note.createNote(text);
  noteList.addNote(note);

  function testNoteListViewIsNotEmpty() {
    if (noteListView.view !== noteList) {
      throw new Error('List view should not be empty');
    }
  }

  function testNoteDisplayed() {
    assert.isTrue(noteListView.display() ===  '<ul><li><div>' + text + '</div></li></ul>');
  }

  testNoteDisplayed();
  testNoteListViewIsNotEmpty();
})()
