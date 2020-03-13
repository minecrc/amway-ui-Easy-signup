/* global $ */
(() => {
  function initDropdown() {
    const GAP = 16;
    const dropdown = $(this);

    if (dropdown.attr('data-init')) return;
    dropdown.attr('data-init', true);

    const mainLayout = document.getElementById('oa-main-layout');

    const button = dropdown.find('.oa-dropdown__button');
    const buttonText = button.find('.oa-dropdown__button-text');
    const options = dropdown.find('li.oa-dropdown__option');
    const menu = dropdown.find('.oa-dropdown__menu');

    function place() {
      const { top, left } = dropdown.offset();
      const bottom = top + dropdown.height();
      const topRestrictHeight = $(
        "[data-dropdown-top-restrict='true']"
      ).height();
      const bottomRestrictHeight = $(
        "[data-dropdown-bottom-restrict='true']"
      ).height();

      const menuHeight = menu.outerHeight();

      const bottomArea = $(window).height() - bottom;

      menu.css('width', dropdown.outerWidth());
      menu.css('left', left);

      if (bottomArea > 240 + bottomRestrictHeight) {
        menu.css('top', bottom);
        menu.css('max-height', bottomArea - GAP - bottomRestrictHeight);
      } else {
        menu.css('top', top - menuHeight);
        menu.css('max-height', top - GAP - topRestrictHeight);
      }
    }

    dropdown.on('shown.bs.dropdown', () => {
      place();
    });

    $(window).resize(() => {
      place();
    });

    mainLayout.addEventListener('scroll', () => {
      dropdown.removeClass('open');
    });

    options.on('click', e => {
      e.preventDefault();

      buttonText.html($(e.target).html());

      const option = $(e.target);

      options.removeClass('--active');
      option.addClass('--active');
      option
        .parent()
        .siblings('button.oa-dropdown__button')
        .trigger('change', [option.text(), option.data('value')]);
    });
  }

  const dropdowns = $('.oa-dropdown');
  dropdowns.each(initDropdown);

  // Expose `initDropdown` to $ for reuses
  $.initDropdown = initDropdown;
})();
