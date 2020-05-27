(function(){
  function noteListStartsWithEmptyArray(){
    let noteList = new NoteList();
    if(noteList.list.length !== 0 || !Array.isArray(noteList.list)){
      throw new Error('Note List should start with empty array by default')
    }
  };
  noteListStartsWithEmptyArray();
})(this)
