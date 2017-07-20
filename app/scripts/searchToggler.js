$(window).load(function() {

  var DURATION = 300;

  var blogNav = $('.js-blog-nav');
  var categories = blogNav.find('.js-categories');
  var searchBar = blogNav.find('.js-search');
  var toggler = searchBar.find('.js-toggler');
  var input = searchBar.find('.js-input');

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

    searchBar[action]('js-active');
    updateWidth(categories, categoriesWidth);
    updateWidth(searchBar, searchWidth, activateSearch);

    isActive = !isActive;
  }
});
