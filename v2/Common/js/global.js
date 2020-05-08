/* Define global variables, functions to be used on the JS side */
/* global $ */
(() => {
  window.DESKTOP_BREAKPOINT = 1024;
  window.TABLET_BREAKPOINT = 768;
  window.isDesktop = () => {
    return $(window).width() >= window.DESKTOP_BREAKPOINT;
  };
  window.isTablet = () => {
    const width = $(window).width();
    return (
      width >= window.TABLET_BREAKPOINT && width < window.DESKTOP_BREAKPOINT
    );
  };
  window.isTabletOrDesktop = () => {
    return window.isTablet() || window.isDesktop();
  };
})();
