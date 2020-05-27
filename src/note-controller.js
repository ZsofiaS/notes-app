(function(exports) {
  function changeName() {
    var app = document.getElementById('app');
    console.log("hello")
    return app.innerHTML = 'howdy';
  }

  // exports.changeName = changeName;
  changeName();
})(this)
