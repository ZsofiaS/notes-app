(function () {

  let note = new Note();
  let noteList = new NoteList();
  let noteListView = new NoteListView(noteList);
  let text = "Favourite food: pesto, pizza, pancake";

  note.createNote(text);
  noteList.addNote(note);

  function testNoteListViewIsNotEmpty() {
    if (noteListView.view !== noteList) {
      throw new Error('List view should not be empty');
    }
  }

  function testNoteDisplayedIs20Chars() {
    let shortText = text.substring(0, 20);
    assert.isTrue(noteListView.display() ===  '<ul><li><div>' + shortText + '</div></li></ul>');
  }

  testNoteDisplayedIs20Chars();
  testNoteListViewIsNotEmpty();
})()
