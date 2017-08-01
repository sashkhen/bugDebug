$(document).ready(function() {

  var header = $('.js-header');
  var toggler = header.find('.js-menu');
  var isOpened = false;

  toggler.click(toggleMenu);

  function toggleMenu() {
    const action = isOpened ? 'removeClass' : 'addClass';
    header[action]('js-opened');

    isOpened = !isOpened;
  };
});
