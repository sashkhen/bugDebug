$(document).ready(function() {
  var SELECTOR = '.js-loader';
  var ACTIVE_CLASS = 'active';

  var loader = $(SELECTOR);
  var isActive = false;
  var hasNextPage = true; // mocked for example

  loader.click(handleLoad);

  function handleLoad() {
    var action = isActive ? 'removeClass' : 'addClass';
    loader[action](ACTIVE_CLASS);
    isActive = !isActive;

    // to remove loader when there's nothing to load
    if (!hasNextPage) {
      loader.css('display', 'none');
    }
  }
});
