class NoteController {
  constructor(noteListView){
    this.noteListView = noteListView;
  }

  insertHTML(){
    let element = document.getElementById('app')
    element.innerHTML = this.noteListView.display();
  }

  showSingleNote(){
    let self = this;
    window.addEventListener('hashchange', function() {
      let id = window.location.hash.split('#notes/')[1]

      let note = self.noteListView.view.list[id]
      let singleNoteView = new SingleNoteView(note);

      document.getElementById("single-note").innerHTML = singleNoteView.display();
    }, false);
  }



  submitNote() {

    let list = this.noteListView.view.list;
    console.log(list.)
    let submitForm = document.getElementById("text");
    submitForm.addEventListener('submit', function(event) {
      event.preventDefault();
      let text = event.path[0][0].value;
      let note = new Note();
      note.createNote(text);

      //console.log(list)
      return note;
    })
  }
}
