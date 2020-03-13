/* global $ */
(() => {
  const GAP = 24;
  const MAX_MENU_HEIGHT = 300;

  function calculateMenuPosition(anchor, menu, { forceBottom } = {}) {
    const topRestrictHeight = $("[data-dropdown-top-restrict='true']").height();
    const bottomRestrictHeight =
      $("[data-dropdown-bottom-restrict='true']").height() || 0;

    const top = anchor.offset().top - $(window).scrollTop();
    const bottom = top + anchor.outerHeight();
    const windowHeight = window.innerHeight;
    const bottomArea = windowHeight - bottom;

    if (bottomArea > 240 + bottomRestrictHeight || forceBottom) {
      return {
        top: bottom,
        bottom: 'auto',
        maxHeight: bottomArea - GAP - bottomRestrictHeight
      };
    }

    return {
      top: 'auto',
      bottom: windowHeight - top,
      maxHeight: top - GAP - topRestrictHeight
    };
  }

  function placeMenu(anchor, menu) {
    menu.css('width', anchor.outerWidth());
    menu.css('max-width', anchor.outerWidth());
    menu.css('left', anchor.offset().left);

    const { top, bottom, maxHeight } = calculateMenuPosition(anchor, menu);

    menu.css('top', top);
    menu.css('bottom', bottom);
    menu.css('max-height', Math.min(maxHeight, MAX_MENU_HEIGHT));
  }

  function initDropdown() {
    const dropdown = $(this);

    if (dropdown.attr('data-init')) return;
    dropdown.attr('data-init', true);

    const button = dropdown.find('.oa-dropdown__button');
    const buttonText = button.find('.oa-dropdown__button-text');
    const options = dropdown.find('li.oa-dropdown__option');
    const dropdownMenu = dropdown.find('.oa-dropdown__menu');

    dropdown.on('shown.bs.dropdown', () => {
      placeMenu(button, dropdownMenu);
    });

    $(window).resize(() => {
      placeMenu(button, dropdownMenu);
    });

    document.addEventListener('scroll', () => {
      dropdown.removeClass('open');
    });

    options.on('click', e => {
      e.preventDefault();

      buttonText.html($(e.target).html());
      buttonText.addClass('--selected');

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
  $.calculateMenuPosition = calculateMenuPosition;
})();
