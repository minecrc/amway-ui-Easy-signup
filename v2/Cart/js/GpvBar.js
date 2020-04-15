/* global $ */
(() => {
  const gpvBar = $('.mz-gpv-bar');
  const innerBar = gpvBar.find('.mz-gpv-bar__inner-bar');

  function initGpvBar() {
    if (gpvBar.attr('data-init')) return;

    gpvBar.attr('data-init', true);

    const lowerBound = innerBar.attr('data-lower-bound');
    const upperBound = innerBar.attr('data-upper-bound');
    const currentGpv = innerBar.attr('data-current-gpv');

    innerBar.css(
      'width',
      `${((currentGpv - lowerBound) / (upperBound - lowerBound)) * 100}%`
    );
  }

  initGpvBar();
})();
