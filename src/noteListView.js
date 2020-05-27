class NoteListView {
  constructor(noteList) {
    this.view = noteList;
  }
  display() {
    let string = "";

    this.view.all().forEach((item, i) => {
      string += '<ul><li><div>' + item.text + '</div></li></ul>'
    });
    return string;
  }
}
