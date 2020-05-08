/* global $, bodyScrollLock */
(() => {
  /**
   * Allow assigning custom update handler for updating appearance of the dropdown.
   * Example:
   * $('.mz-dropdown-modal').dropdownModal({
   *  onUpdate: function update(e) {
   *    const dropdownButton = this.find('.mz-dropdown-modal__button');
   *    const dropdownText = dropdownButton.find(
   *      '.mz-dropdown-modal__button-text'
   *    );
   *     // Close the dropdown only when the clicked target is a button
   *     if ($(e.target).is('button')) {
   *      dropdownText.html($(e.target).html());
   *      dropdownButton.dropdown('toggle');
   *    }
   *  }
    });
  */
  $.fn.dropdownModal = function dropdownModal(params) {
    if (!this.hasClass('mz-dropdown-modal')) return;

    const button = this.find('.mz-dropdown-modal__button');
    const menu = this.find('.mz-dropdown-modal__menu');

    function close() {
      if (menu.is(':visible')) {
        button.dropdown('toggle');
      }
    }

    if (params === 'close') {
      if (window.isTabletOrDesktop()) {
        close();
      } else {
        setTimeout(close, 250);
      }
    } else if (
      typeof params === 'object' &&
      typeof params.onUpdate === 'function'
    ) {
      this.off('update');
      this.on('update', params.onUpdate.bind(this));
    }
  };

  function initDropdownModal() {
    const dropdownModal = $(this);
    if (dropdownModal.attr('data-init')) return;
    dropdownModal.attr('data-init', true);

    const button = dropdownModal.find('.mz-dropdown-modal__button');
    const buttonText = button.find('.mz-dropdown-modal__button-text');
    const options = dropdownModal.find('li.mz-dropdown-modal__option');
    const menu = dropdownModal.find('.mz-dropdown-modal__menu');
    const list = menu.find('.mz-dropdown-modal__list');
    const closeButton = menu.find('.mz-dropdown-modal__close-button');

    function close() {
      if (menu.is(':visible')) {
        button.dropdown('toggle');
      }
    }

    function defaultHandleUpdate(e) {
      buttonText.html($(e.target).html());
      if (window.isTabletOrDesktop()) {
        close();
      } else {
        setTimeout(close, 250);
      }
    }

    function placeMenu() {
      // In mobile, the dropdown acts like a modal
      // no need for positioning
      if (!window.isTabletOrDesktop()) {
        menu.css('width', '100%');
        menu.css('max-width', '100%');
        menu.css('max-height', 'none');
        menu.css('top', 0);
        menu.css('bottom', 0);
        menu.css('left', 0);
        return;
      }

      $.placeDropdownMenu(button, menu);
    }

    menu.on('click', e => {
      e.stopPropagation();
    });

    closeButton.on('click', close);

    options.on('click', e => {
      dropdownModal.trigger({ type: 'update', target: e.target });
    });

    dropdownModal.on('update', defaultHandleUpdate);
    dropdownModal.on('shown.bs.dropdown', () => {
      placeMenu();
      if (!window.isTabletOrDesktop()) {
        bodyScrollLock.disableBodyScroll(list.get(0));
      }
    });
    dropdownModal.on('hidden.bs.dropdown', () => {
      bodyScrollLock.enableBodyScroll(list.get(0));
    });

    $(window).resize(placeMenu);

    document.addEventListener('scroll', () => {
      if (window.isTabletOrDesktop()) {
        close();
      }
    });
  }

  $('.mz-dropdown-modal').each(initDropdownModal);
})();
