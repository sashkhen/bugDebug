$(window).load(function() {

  var POPUP_SELECTOR = '.js-popup';

  var layout = $('body');
  var popup = $(POPUP_SELECTOR);
  var toggler = $('.js-auth');
  var isVisible = false;

  createMobileClone();

  toggler.click(togglePopup);
  popup.click(handleClickOutside);

  function togglePopup() {
    var action = isVisible ? 'removeClass' : 'addClass';
    layout[action]('lock');

    isVisible = !isVisible;
  };

  function handleClickOutside(e) {
    if (e.target == this) {
      layout.removeClass('lock');
      isVisible = !isVisible;
    }
  }

  function createMobileClone() {
    var popup = document.querySelector(POPUP_SELECTOR),
        mobilePopup = popup.cloneNode(true),
        content = document.querySelector('.content');

    content.after(mobilePopup);
  }
});
