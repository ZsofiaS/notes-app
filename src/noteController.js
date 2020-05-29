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
    console.log("outside: " + window.location);
    window.addEventListener('hashchange', function() {
      console.log("inside: " + window.location);
      let id = window.location.hash.split('#notes/')[1]

      let note = self.noteListView.view.list[id]
      let singleNoteView = new SingleNoteView(note);

      document.getElementById("single-note").innerHTML = singleNoteView.display();
    }, false);
  }

}
