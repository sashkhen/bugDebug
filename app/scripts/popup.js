$(window).load(function() {

  var popup = $('.js-popup');
  var toggler = $('.js-auth');
  var isVisible = false;

  toggler.click(showPopup);
  popup.click(handleClickOutside);

  function showPopup() {
    popup.show();
    isVisible = !isVisible;
  };

  function handleClickOutside(e) {
    if (e.target == this) {
      $(this).hide();
      isVisible = !isVisible;
    }
  }
});
