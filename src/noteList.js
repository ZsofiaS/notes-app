class NoteList{
  constructor(){
    this.list = [];
  }

  addNote(note){
    this.list.push(note);
    note.id = this.list.indexOf(note);
  }

  all(){
    return this.list;
  }
}
