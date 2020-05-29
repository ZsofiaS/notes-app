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
    console.log("outside: " + window.location.href);
    window.addEventListener('hashchange', function() {
      console.log("inside: " + window.location.href);
      let id = window.location.hash.split('#notes/')[1]
      console.log(id)

      console.log(self.noteListView.view.list)

      let note = self.noteListView.view.list[id]
      let singleNoteView = new SingleNoteView(note);

      document.getElementById("single-note").innerHTML = singleNoteView.display();
    }, false);
  }



  submitNote() {

    //let list = this.noteListView.view.list;
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
