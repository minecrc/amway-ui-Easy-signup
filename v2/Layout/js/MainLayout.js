/* global $ */
(() => {
  const BREAKPOINT = 992;
  const $window = $(window);
  let prevScrollY = $window.scrollTop();
  let prevScrollUp = false;

  const header = $('.mz-main-layout__header');
  const menuBar = $('.oa-menu-bar');

  document.addEventListener('scroll', function handleScroll() {
    const headerHeight = header.height();
    const menuBarHeight = $window.width() >= BREAKPOINT ? menuBar.height() : 0;

    const scrollY = $window.scrollTop();
    const scrollUp =
      prevScrollY !== scrollY ? prevScrollY > scrollY : prevScrollUp;

    if (scrollUp || scrollY < headerHeight) {
      header.css('transform', 'none');
    } else {
      header.css('transform', `translateY(-${headerHeight - menuBarHeight}px)`);
    }

    prevScrollUp = scrollUp;
    prevScrollY = scrollY;
  });
})();
