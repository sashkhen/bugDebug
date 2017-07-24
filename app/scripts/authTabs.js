$(document).ready(function() {

  var auth = $('.js-auth');
  var controls = auth.find('.js-tab');
  var contents = auth.find('.js-content');

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
