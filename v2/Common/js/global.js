/* Define global variables, functions to be used on the JS side */
/* global $ */
(() => {
  window.DESKTOP_BREAKPOINT = 1024;
  window.isDesktop = () => {
    return $(window).width() >= window.DESKTOP_BREAKPOINT;
  };
})();
