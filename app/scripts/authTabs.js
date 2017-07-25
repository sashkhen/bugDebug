$(document).ready(function() {

  var tabs = $('.js-tabs');
  var controls = tabs.find('.js-tab');
  var contents = tabs.find('.js-content');

  controls.click(handleClick);

  function clearClasses(elems) {
    elems.each(function(index, el) {
      $(el).removeClass('active');
    });
  };

  function updateActiveState(elems, activeIndex) {
    clearClasses(elems);

    var active = elems[activeIndex];
    $(active).addClass('active');
  };

  function handleClick() {
    var activeIndex = $(this).context.dataset.id - 1;

    updateActiveState(controls, activeIndex);
    updateActiveState(contents, activeIndex);
  };
});
