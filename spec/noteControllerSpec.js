(function () {

  class NoteListViewDouble {
    constructor(string){
      this.view = string
    }

    display(){
      return '<ul><li><div>' + this.view + '</div></li></ul>'
    }
  }

  let noteListViewDouble = new NoteListViewDouble('we are here to have fun');
  let noteController = new NoteController(noteListViewDouble);
  console.log(noteController)

  function testNoteControllerCanBeInstantiated() {
    assert.isTrue(noteController.noteListView === noteListViewDouble);
  }

  function testNoteControllerChangesInnerHTML() {
    noteController.insertHTML();

    let element = document.getElementById('app');
    assert.isTrue(element.innerHTML === '<ul><li><div>we are here to have fun</div></li></ul>')
  }

  testNoteControllerCanBeInstantiated();
  testNoteControllerChangesInnerHTML();
})()
