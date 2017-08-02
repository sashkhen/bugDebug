$(window).load(function() {

  var layout = $('body');
  var popup = $('.js-popup');
  var toggler = $('.js-auth');
  var isVisible = false;

  toggler.click(showPopup);
  popup.click(handleClickOutside);

  function showPopup() {
    popup.show();
    layout.addClass('lock');
    isVisible = !isVisible;
  };

  function handleClickOutside(e) {
    if (e.target == this) {
      $(this).hide();
      layout.removeClass('lock');
      isVisible = !isVisible;
    }
  }
});
