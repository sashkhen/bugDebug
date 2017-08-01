$(document).ready(function() {

  var DURATION = 300;
  var MIN_SCROLL = 10;
  var OFFSET_PROP = 'marginTop';
  var TABLET_WIDTH = 768;

  var header = $('.js-header');
  var primary = header.children().first();
  var secondary = header.children().last();
  var content = header.next();

  var headerHeight = header.outerHeight();
  var secondaryHeight = secondary.outerHeight();

  var hidden = false;
  var inProgress = false;

  setUpLayout();
  $(window).scroll(handleScroll);


  function setUpLayout() {
    var styles = {
      position: 'fixed',
      right: 0,
      left: 0,
    };

    header.css(styles);
    content.css(OFFSET_PROP, headerHeight);
  }

  function updateVisibilityTo(newVisibility) {
    inProgress = true;

    var animation = newVisibility ? 'slideDown' : 'slideUp';
    var newOffset = newVisibility ? headerHeight : (secondaryHeight + MIN_SCROLL);
    var action = newVisibility? 'removeClass' : 'addClass';

    primary[animation](DURATION, function() {
      hidden = !newVisibility;
      inProgress = false;
    });

    header[action]('closed');

    content.animate({
      [OFFSET_PROP]: newOffset,
    }, DURATION);
  }

  function handleScroll() {

    var isMobile = window.innerWidth < TABLET_WIDTH;

    if (isMobile) {
      if (hidden) {
        updateVisibilityTo(true);
      } else {
        return false;
      }
    }

    if (inProgress) return false;

    var scrollPos = $(window).scrollTop();
    var atPageTop = scrollPos <= MIN_SCROLL;
    var needsUpdate = hidden === atPageTop;

    if (needsUpdate) updateVisibilityTo(atPageTop);
  };
});
