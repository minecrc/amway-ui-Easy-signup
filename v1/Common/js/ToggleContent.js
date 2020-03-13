/* global $ */
(() => {
  function initToggleContent() {
    const toggleButton = $(this);

    const activeBackground = toggleButton.find(
      '.oa-toggle-content__active-background'
    );
    const buttons = toggleButton.find('.oa-toggle-content__button');
    const container = toggleButton.find('.oa-toggle-content__container');
    const contents = toggleButton.find('.oa-toggle-content__content');

    buttons.each((index, b) => {
      const button = $(b);

      button.on('click', () => {
        if (!button.hasClass('--ative')) {
          buttons.removeClass('--active');
          button.addClass('--active');
          activeBackground.css('transform', `translate3d(${index * 100}%,0,0)`);

          const activeContent = $(`#${button.attr('id')}-content`);

          contents.removeClass('--active');
          activeContent.addClass('--active');
          // using transform will broke dropdown position
          container.css('margin-left', `-${index * 100}%`);
        }
      });
    });
  }

  const toggleButtons = $('.oa-toggle-content');

  toggleButtons.each(initToggleContent);
})();
