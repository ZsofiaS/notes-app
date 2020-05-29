class NoteListView {
  constructor(noteList) {
    this.view = noteList;
  }

  display() {
    let string = '<ul>';

    this.view.all().forEach((item, i) => {
      string += '<li><a id="' + item.id + '" href="#notes/' + item.id + '"><div>' + item.text.substring(0, 20) + '</div></a></li>';
    });
    return string + '</ul>';
  }
}
