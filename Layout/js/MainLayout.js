/* global $ */
(() => {
  const mainLayout = document.getElementById('oa-main-layout');

  let prevScrollY = mainLayout.scrollTop;
  let prevScrollUp = false;

  const header = $('.oa-main-layout__header');
  const menuBar = $('.oa-menu-bar');

  mainLayout.addEventListener('scroll', function handleScroll() {
    const headerHeight = header.height();
    const menuBarHeight = menuBar.height();

    const scrollY = mainLayout.scrollTop;
    const scrollUp =
      prevScrollY !== scrollY ? prevScrollY > scrollY : prevScrollUp;

    if (scrollUp || scrollY < menuBarHeight) {
      header.css('transform', 'none');
    } else {
      header.css('transform', `translateY(-${headerHeight - menuBarHeight}px)`);
    }

    prevScrollUp = scrollUp;
    prevScrollY = scrollY;
  });
})();
