$(document).ready(function() {

  var DURATION = 300;
  var MIN_SCROLL = 10;
  var OFFSET_PROP = 'marginTop';

  var header = $('.header');
  var primary = header.find('.primary');
  var secondary = header.find('.secondary');
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

    primary[animation](DURATION, function() {
      hidden = !newVisibility;
      inProgress = false;
    });

    content.animate({
      [OFFSET_PROP]: newOffset,
    }, DURATION);
  }

  function handleScroll() {
    if (inProgress) return false;

    var scrollPos = $(window).scrollTop();
    var atPageTop = scrollPos <= MIN_SCROLL;
    var needsUpdate = hidden === atPageTop;

    if (needsUpdate) updateVisibilityTo(atPageTop);
  };
});
