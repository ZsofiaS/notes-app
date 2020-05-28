class NoteController {
  constructor(noteListView){
    this.noteListView = noteListView;
  }
}


// class NoteController {
//   constructor(noteList) {
//     let text = 'Favourite drink: seltzer';
//     let note = new Note();
//     note.createNote(text);
//     noteList.addNote(note);
//     this.noteListView = new NoteListView(noteList);
//   }
//
//   insertHTML() {
//     let element = document.getElementById('app');
//     element.innerHTML = this.noteListView.display();
//   }
// }
//
// // let text = 'We are here';
// // let note = new Note(text);
// let noteList = new NoteList();
// let noteController = new NoteController(noteList);
// noteController.insertHTML();
