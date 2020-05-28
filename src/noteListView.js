class NoteListView {
  constructor(noteList) {
    this.view = noteList;
  }

  display() {
    let string = '<ul>';

    this.view.all().forEach((item, i) => {
      string += '<li><div>' + item.text.substring(0, 20) + '</div></li>';
    });

    return string + '</ul>';
  }
}
