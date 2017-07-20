$(window).load(function() {

  var DURATION = 300;

  var blogNav = $('.header .secondary');
  var categories = blogNav.find('.categories');
  var searchBar = blogNav.find('.searchBar');
  var toggler = searchBar.find('.toggler');
  var input = searchBar.find('.input');

  var categoriesInitialWidth = categories.outerWidth();
  var togglerWidth = searchBar.width();
  var isActive = false;

  toggler.click(toggleSearch);

  function activateSearch() {
    input.focus();
  }

  function updateWidth(elem, width, cb) {
    elem.animate({ width }, DURATION, cb);
  }

  function toggleSearch() {
    const action = isActive ? 'removeClass' : 'addClass';
    const categoriesWidth = isActive ? categoriesInitialWidth : 0;
    const searchWidth = isActive ? togglerWidth : '100%';

    searchBar[action]('active');
    updateWidth(categories, categoriesWidth);
    updateWidth(searchBar, searchWidth, activateSearch);

    isActive = !isActive;
  }
});
