(function() {

  let note = new Note();
  let text = 'We are here to have fun';
  note.createNote(text);
  let singleNoteView = new SingleNoteView(note);


  function testInstantiatesWithNote() {
    assert.isTrue(singleNoteView.note === note);
  }

  testInstantiatesWithNote();
})()
