/* global $ */
(() => {
  const GAP = 24;
  const MAX_MENU_HEIGHT = 300;

  function calculateMenuPosition(anchor, { forceBottom } = {}) {
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

  function placeDropdownMenu(anchor, container) {
    container.css('width', anchor.outerWidth());
    container.css('max-width', anchor.outerWidth());
    container.css('left', anchor.offset().left);

    const { top, bottom, maxHeight } = calculateMenuPosition(anchor);

    container.css('top', top);
    container.css('bottom', bottom);
    container.css('max-height', Math.min(maxHeight, MAX_MENU_HEIGHT));
  }

  function initDropdown() {
    const dropdown = $(this);

    const button = dropdown.find('.mz-dropdown-button');
    const buttonText = button.find('.mz-dropdown-button__text');

    const modal = $(button.attr('data-target'));
    const menu = modal.find('.mz-dropdown-2__menu');
    const closeButton = menu.find('button[data-dismiss="modal"]');
    const inputs = menu.find('.mz-dropdown-2__option-input');

    let prevIsTabletOrDesktop = window.isTabletOrDesktop();

    function closeMenu() {
      modal.modal('hide');

      // hide dropdown manually
      button.attr('aria-expanded', false);
      modal.removeClass('open');
    }

    function resetModal() {
      closeMenu();

      if (window.isTabletOrDesktop()) {
        modal.attr('data-backdrop', false);
        $('.modal-backdrop').remove();
        button.attr('data-toggle', 'dropdown');
      } else {
        modal.removeAttr('style');
        modal.attr('data-backdrop', 'static');
        button.attr('data-toggle', 'modal');
      }
    }

    resetModal();

    modal.on('show.bs.dropdown', () => {
      // remove display none set by modal
      modal.css('display', '');
      placeDropdownMenu(button, modal);
    });

    $(window).resize(function handleResize() {
      const isTabletOrDesktop = window.isTabletOrDesktop();

      if (prevIsTabletOrDesktop !== isTabletOrDesktop) {
        resetModal();
        prevIsTabletOrDesktop = isTabletOrDesktop;
      }
    });

    document.addEventListener('scroll', closeMenu);

    closeButton.on('click', closeMenu);

    inputs.on('change', e => {
      const input = $(e.target);
      const label = input.siblings(`label[for="${input.attr('id')}"]`);

      if (!input.attr('name')) {
        inputs.not(input).prop('checked', false);
      }

      const optionLabelText = label.find('.mz-dropdown-2__option-label-text');
      const optionButtonText = label.find('.mz-dropdown-2__option-button-text');

      buttonText.empty();
      buttonText.append(
        optionButtonText.length !== 0
          ? optionButtonText
              .clone()
              .removeClass('mz-dropdown-2__option-button-text')
          : optionLabelText
              .clone()
              .removeClass('mz-dropdown-2__option-label-text')
      );

      Array.prototype.forEach.call(buttonText.find('img'), $.loadImage);

      closeMenu();
    });

    button.on('reset', () => {
      function resetInput() {
        $(this).prop('checked', !!$(this).attr('data-default-checked'));
      }

      inputs.each(resetInput);
      buttonText.empty();
      buttonText.append(button.attr('data-placeholder'));
    });
  }

  const dropdowns = $('.mz-dropdown-2');
  dropdowns.each(initDropdown);

  $.placeDropdownMenu = placeDropdownMenu;
})();
