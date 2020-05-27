(function(){

  let noteList = new NoteList();
  let note = new Note();
  let note2 = new Note();
  let message = 'Hello world'
  let message2 = 'Hello world again'

  function noteListStartsWithEmptyArray(){
    if(noteList.list.length !== 0 || !Array.isArray(noteList.list)){
      throw new Error('Note List should start with empty array by default')
    }
  };

  function noteListAddsNoteToArray(){
    note.createNote(message);

    noteList.addNote(note);
    if(noteList.list.length !== 1){
      throw new Error('Note List array should equal 1')
    }

    if(noteList.list[0].text !== message){
      throw new Error('Unexpected note. Expected: ' + message + '. Got: ' + noteList.list[0].text)
    }
  }

  function noteListDisplaysNotes(){
    note2.createNote(message2);
    noteList.addNote(note2);

    if(noteList.all()[0] !== note){
      throw new Error('Expected: ' + note)
    }

    if(noteList.all()[1] !== note2){
      throw new Error('Expected: ' + note2)
    }
  }
  noteListStartsWithEmptyArray();
  noteListAddsNoteToArray();
  noteListDisplaysNotes();
})(this)
