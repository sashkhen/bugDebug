$(window).load(function() {

  // wait for all of the auth components to be initiated
  setTimeout(initTabs, 1000);
});

function initTabs() {
  var tabs = $('.js-tabs'),
      controls = tabs.find('.js-tab'),
      contents = tabs.find('.js-content');

  controls.click(handleClick);

  function clearClasses(elems) {
    elems.each(function(index, el) {
      $(el).removeClass('active');
    });
  };

  function updateActiveState(elems, activeIndex) {
    clearClasses(elems);

    // sync both auth tabs pairs
    var activeMobile = elems[activeIndex],
        activeDesktop = elems[activeIndex + 2],
        actives = [activeMobile, activeDesktop];

    $(actives).addClass('active');
  };

  function handleClick() {
    var activeIndex = $(this).context.dataset.id - 1;

    updateActiveState(controls, activeIndex);
    updateActiveState(contents, activeIndex);
  };
}
