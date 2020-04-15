/* global $ */
(() => {
  const $window = $(window);
  let prevScrollY = $window.scrollTop();
  let prevScrollUp = false;

  const header = $('.mz-main-layout__header');
  const menuBar = $('.oa-menu-bar');

  document.addEventListener('scroll', function handleScroll() {
    const headerHeight = header.height();

    const scrollY = $window.scrollTop();
    const scrollUp =
      prevScrollY !== scrollY ? prevScrollY > scrollY : prevScrollUp;

    if (scrollUp || scrollY < headerHeight) {
      header.css('transform', 'none');
    } else {
      const menuBarOffset = window.isDesktop()
        ? menuBar.offset().top - header.offset().top
        : headerHeight;
      header.css('transform', `translateY(-${menuBarOffset}px)`);
    }

    prevScrollUp = scrollUp;
    prevScrollY = scrollY;
  });
})();
