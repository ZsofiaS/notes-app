class NoteList{
  constructor(){
    this.list = [];
  }

  addNote(note){
    this.list.push(note);
  }

  all(){
    return this.list;
  }
}
