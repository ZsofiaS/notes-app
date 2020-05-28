(function () {

  class NoteListViewDouble {
    constructor(string){
      this.view = string
    }

    display(){
      return '<ul><li><div>' + this.view + '</ul></li></div>'
    }
  }

  let noteListViewDouble = new NoteListViewDouble('we are here to have fun');
  let noteController = new NoteController(noteListViewDouble);
  console.log(noteController)

  function testNoteControllerCanBeInstantiated() {
    assert.isTrue(noteController.noteListView === noteListViewDouble);
  }

  testNoteControllerCanBeInstantiated();
})()
