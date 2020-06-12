/* global $ */
(() => {
  const items = $('.mz-coupon-slider__items');
  const backArrow = $('.mz-coupon-slider__arrow.--back');
  const nextArrow = $('.mz-coupon-slider__arrow.--next');

  let timer;
  let prevScrollLeft = 0;

  function getLeftPosition(direction) {
    const scrollLeft = items.scrollLeft();
    const firstItem = $(items.children()[0]);

    const leftMap = [];
    const lastIndex = items.children().length - 1;

    const directionType =
      direction ||
      (scrollLeft > prevScrollLeft ? 'stayOrForward' : 'stayOrBackward');

    const initialIndexes = {
      stayOrForward: lastIndex,
      forward: lastIndex,
      stayOrBackward: 0,
      backward: 0
    };

    let index = initialIndexes[directionType];

    items.children().each(function mapItem(i) {
      leftMap[i] = $(this).offset().left - firstItem.offset().left;

      const conditions = {
        stayOrForward: i > 0 && scrollLeft > leftMap[i - 1],
        forward: i > 0 && scrollLeft >= leftMap[i - 1],
        stayOrBackward: scrollLeft >= leftMap[i],
        backward: scrollLeft > leftMap[i]
      };

      if (conditions[directionType]) {
        index = i;
      }
    });

    if (scrollLeft !== prevScrollLeft) {
      prevScrollLeft = scrollLeft;
    }

    return leftMap[index];
  }

  function updateArrows() {
    backArrow.attr('disabled', items.scrollLeft() === 0);
    nextArrow.attr(
      'disabled',
      items.scrollLeft() === items[0].scrollWidth - items[0].offsetWidth
    );
  }

  updateArrows();

  items.on('scroll', function handleScroll() {
    updateArrows();
    clearTimeout(timer);

    timer = setTimeout(function snap() {
      if (items.queue().length > 0) return;

      items.stop(true).animate({ scrollLeft: getLeftPosition() }, 500);
    }, 100);
  });

  backArrow.on('click', () => {
    items.stop(true).animate({ scrollLeft: getLeftPosition('backward') }, 500);
  });

  nextArrow.on('click', () => {
    items.stop(true).animate({ scrollLeft: getLeftPosition('forward') }, 500);
  });
})();
