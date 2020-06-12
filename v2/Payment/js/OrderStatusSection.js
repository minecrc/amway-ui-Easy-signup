/* global $ */
(() => {
  const sectionHeader = $('.mz-order-status-section__header');
  const sectionContent = $(
    '.mz-order-status-section__content, .mz-order-status-section__children'
  );

  sectionHeader.on('click', e => {
    if (window.isDesktop()) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  $(window).resize(() => {
    if (window.isDesktop()) {
      sectionContent.each(function showContent() {
        $(this).collapse('show');
      });
    }
  });
})();
