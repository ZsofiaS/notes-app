class NoteController {
  constructor(noteListView){
    this.noteListView = noteListView;
  }

  insertHTML(){
    let element = document.getElementById('app')
    element.innerHTML = this.noteListView.display();
  }
}
