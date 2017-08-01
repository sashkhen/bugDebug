$(window).load(function() {

  var DURATION = 300;
  var TABLET_WIDTH = 768;

  var blogNav = $('.js-blog-nav');
  var categories = blogNav.find('.js-categories');
  var searchBar = blogNav.find('.js-search');
  var toggler = searchBar.find('.js-toggler');
  var input = searchBar.find('.js-input');

  var categoriesInitialWidth = categories.outerWidth();
  var togglerWidth = searchBar.width();
  var isActive = false;

  toggler.click(toggleSearch);

  $(window).resize(updateOnResize);

  function activateSearch() {
    input.focus();
  }

  function updateWidth(elem, width, cb) {
    elem.animate({ width }, DURATION, cb);
  }

  function toggleSearch() {

    var isMobile = window.innerWidth < TABLET_WIDTH;
    if (isMobile) return false;

    const action = isActive ? 'removeClass' : 'addClass';
    const categoriesWidth = isActive ? categoriesInitialWidth : 0;
    const searchWidth = isActive ? togglerWidth : '100%';

    searchBar[action]('js-active');
    updateWidth(categories, categoriesWidth);
    updateWidth(searchBar, searchWidth, activateSearch);

    isActive = !isActive;
  }

  function updateOnResize() {
    var isMobile = window.innerWidth < TABLET_WIDTH;

    if (isMobile && isActive) {
      categories.removeAttr('style');
      searchBar.removeAttr('style');
      searchBar.removeClass('js-active');

      isActive = !isActive;
    };
  }
});
