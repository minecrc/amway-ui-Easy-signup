/* global $ */
(() => {
  const $window = $(window);
  let prevScrollY = $window.scrollTop();
  let prevScrollUp = false;

  const header = $('.mz-main-layout__header');
  const topmostBar = $('.oa-topmost-bar');
  const navContainer = $('.mz-main-layout__nav-container');
  const navigationBar = $('.oa-navigation-bar');
  const menuBar = $('.oa-menu-bar');
  const notisContainer = $('.mz-main-layout__messages-container');
  const content = $('.mz-main-layout__content');

  function reserveTopArea() {
    header.removeClass('--initial');
    content.css('padding-top', navContainer.height());
  }

  document.addEventListener('scroll', function handleScroll() {
    const headerHeight = header.height();

    const scrollY = $window.scrollTop();
    const scrollUp =
      prevScrollY !== scrollY ? prevScrollY > scrollY : prevScrollUp;

    if (scrollUp || scrollY < headerHeight) {
      header.css('transform', 'none');
      topmostBar.removeClass('--scrolled');
      notisContainer.css('transform', 'none');
    } else {
      const menuBarOffset =
        menuBar.length && window.isDesktop()
          ? menuBar.offset().top - header.offset().top
          : navigationBar.position().top;

      header.css('transform', `translate3d(0, -${menuBarOffset}px, 0)`);
      if (!window.isDesktop()) {
        topmostBar.addClass('--scrolled');
        notisContainer.css(
          'transform',
          `translate3d(0, -${topmostBar.height()}px, 0)`
        );
      }
    }

    prevScrollUp = scrollUp;
    prevScrollY = scrollY;
  });

  reserveTopArea();

  window.addEventListener('resize', reserveTopArea);
})();
