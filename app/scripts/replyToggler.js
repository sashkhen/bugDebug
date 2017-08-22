$(document).ready(function() {

  var TOGGLER_SELECTOR = '.js-reply-toggler';
  var COMMENT_SELECTOR = '.comments__item';
  var REPLY_SELECTOR = '.comments__reply';

  var togglers = $(TOGGLER_SELECTOR);

  togglers.on('click', function(e) {
    var parent = $(this).closest(COMMENT_SELECTOR),
        replyInput = parent.find(REPLY_SELECTOR)[0],
        replyVisibility = replyInput.style.display,
        replyVisibile = replyVisibility === 'block',
        replyNewVisibility = replyVisibile ? 'none' : 'block';

    replyInput.style.display = replyNewVisibility;
  });
});
