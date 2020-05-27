(function(){

  let noteList = new NoteList();
  let note = new Note();

  function noteListStartsWithEmptyArray(){
    if(noteList.list.length !== 0 || !Array.isArray(noteList.list)){
      throw new Error('Note List should start with empty array by default')
    }
  };

  function noteListAddsNoteToArray(){
    let message = 'Hello world'
    note.createNote(message);

    noteList.addNote(note);
    if(noteList.list.length !== 1){
      throw new Error('Note List array should equal 1')
    }

    if(noteList.list[0].text !== message){
      throw new Error('Unexpected note. Expected: ' + message + '. Got: ' + noteList.list[0].text)
    }
  }
  noteListStartsWithEmptyArray();
  noteListAddsNoteToArray();
})(this)
