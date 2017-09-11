$(document).ready(function() {

  var SLIDER_SELECTOR = '.slider';

  var CONTROL_PREV = 'slick-prev';
  var CONTROL_NEXT = 'slick-next';

  var COUNTER_CLASSNAME = 'counter';
  var SLICK_CONTROLS_SELECTOR = '.js-slider-nav';
  var CONTROLS_CLASSNAME = 'slider-nav';
  var CONTAINER_SELECTOR = '.article__wrapper';
  var DESCRIPTION_SELECTOR = '.carousel .description';
  var DESCRIPTION_CLASSNAME = 'description';

  var slider = document.querySelector(SLIDER_SELECTOR);
  if (!slider) return false;

  // add slick controls
  addSlickControls();
  addDescription();
  setControlsPosition();

  // initialize slick slider
  $(SLIDER_SELECTOR).slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 2000,
    appendArrows: $('.js-slider-nav'),
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',
  });

  initTotalCount();

  // update slick counter every time slide changes
  $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    updateCurrentCount(currentSlide);
  });


  // helpers

  function updateCurrentCount(currentSlide) {
    var count = currentSlide || getCurrentCount();
    updateCount(count + 1, 'firstChild');
  }

  function initTotalCount() {
    var count = $(SLIDER_SELECTOR).slick('getSlick').$slides.length;
    updateCount(count, 'lastChild');
  }

  function updateCount(count, childIndex) {
    var selector = '.' + COUNTER_CLASSNAME,
        counters = $(selector);

    // update one or more counter
    if (counters.length) {
      counters.each(function(index, counter) {
        updateCounter(counter);
      });
    }

    // helper
    function updateCounter(counter) {
      var indicator = counter[childIndex];
      indicator.innerText = count;
    }
  }

  function addSlickControls() {
    var controlsElement = document.querySelector(SLICK_CONTROLS_SELECTOR),
        countersWrapper = document.createElement('div');

    countersWrapper.className = CONTROLS_CLASSNAME;
    countersWrapper.appendChild(createControl(CONTROL_PREV));
    countersWrapper.appendChild(createCounter());
    countersWrapper.appendChild(createControl(CONTROL_NEXT));
    controlsElement.appendChild(countersWrapper);

    // create copy for mobile layout
    var mobileControls = controlsElement.cloneNode(true),
        slider = document.querySelector(SLIDER_SELECTOR);

    slider.after(mobileControls);
  }

  function createControl(classname) {
    var control = document.createElement('button');
    control.type = 'button';
    control.className = classname;

    return control;
  }

  function createCounter() {
    var container = document.createElement('div');
    container.className = COUNTER_CLASSNAME;

    container.appendChild(createCounterItem());
    container.appendChild(createCounterItem('/'));
    container.appendChild(createCounterItem());

    return container;
  }

  function getCurrentCount() {
    return $(SLIDER_SELECTOR).slick('slickCurrentSlide') + 1;
  }

  function createCounterItem(text) {
    var item = document.createElement('span');
    item.innerText = text || 1;

    return item;
  }

  // positioning

  function setControlsPosition() {
    var controls = $(SLICK_CONTROLS_SELECTOR);

    // update one or more control
    if (controls.length) {
      controls.each(function(index, control) {
        control.style.top = getPosition(SLIDER_SELECTOR) + 'px';
      });
    }
  }

  function getPosition(elemSelector) {
    var container = document.querySelector(CONTAINER_SELECTOR),
        elem = document.querySelector(elemSelector),
        containerRect = container.getBoundingClientRect(),
        elemRect = elem.getBoundingClientRect(),
        offset = elemRect.top - containerRect.top;

    return offset;
  }

  // description

  function addDescription() {
    var description = document.querySelector(DESCRIPTION_SELECTOR);

    if (description) {
      var text = description.innerText;
      var containers = $(SLICK_CONTROLS_SELECTOR);

      // add description to all controls
      if (containers.length) {
        containers.each(function(index, container) {
          container.appendChild(createDiscription(text));
        });
      }

    }
  }

  function createDiscription(text) {
    var container = document.createElement('div');
    container.className = DESCRIPTION_CLASSNAME;
    container.innerText = text;

    return container;
  }
});
