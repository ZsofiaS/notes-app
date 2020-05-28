class NoteListView {
  constructor(noteList) {
    this.view = noteList;
  }

  display() {
    let string = '<ul>';

    this.view.all().forEach((item, i) => {
      string += '<li><div>' + item.text + '</div></li>';
      console.log('Item.text: ' + item.text);
      console.log('Inside view: ' + string);
    });

    console.log('Final string: ' + string + '</ul>');
    return string + '</ul>';
  }
}
