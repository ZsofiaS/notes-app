class SingleNoteView {
  constructor(note) {
    this.note = note;
  }

  display() {
    return '<div>' + this.note.text + '</div>'
  }
}
