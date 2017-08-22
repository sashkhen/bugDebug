$(document).ready(function() {

  var COMMENT_SELECTOR = '.js-comment';

  var comments = $(COMMENT_SELECTOR);

  comments.on('keydown', handleKeyboardSubmit);

  function handleKeyboardSubmit(e) {
    var ENTER_KEY = e.keyCode === 10 || e.keyCode === 13;

    if (ENTER_KEY) handleSubmit(this);
  }

  function handleSubmit(el) {
    var text = el.value;
    alert(text);
    el.value = null; // add blur
  }
});
