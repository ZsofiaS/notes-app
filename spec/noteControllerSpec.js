(function () {

  class NoteListViewDouble {
    constructor(string){
      this.view = string
    }

    display(){
      return '<ul><li><a id="0" href="#notes/0"><div>' + this.view + '</div></a></li></ul>'
    }
  }

  let previousURL = window.location.href
  let noteListViewDouble = new NoteListViewDouble('we are here to have fun');
  let noteController = new NoteController(noteListViewDouble);
  console.log(noteController)

  function testNoteControllerCanBeInstantiated() {
    assert.isTrue(noteController.noteListView === noteListViewDouble);
  }

  function testNoteControllerChangesInnerHTML() {
    noteController.insertHTML();

    let element = document.getElementById('app');
    assert.isTrue(element.innerHTML === '<ul><li><a id="0" href="#notes/0"><div>we are here to have fun</div></a></li></ul>')
  }

  function testNoteControllerShowsSingleNote(){
    // noteController.noteListView.display();
    document.getElementById('0').click();
    assert.isTrue(previousURL !== window.location.href)
  }

  testNoteControllerCanBeInstantiated();
  testNoteControllerChangesInnerHTML();
  testNoteControllerShowsSingleNote();
})()
