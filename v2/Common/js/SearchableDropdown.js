/* global $, bodyScrollLock */
(() => {
  function initSearchableDropdown() {
    const searchableDropdown = $(this);
    if (searchableDropdown.attr('data-init')) return;
    searchableDropdown.attr('data-init', true);
    const input = searchableDropdown.find(
      '.mz-searchable-dropdown__input input'
    );
    const button = searchableDropdown.find('.mz-searchable-dropdown__button');
    const buttonText = searchableDropdown.find(
      '.mz-searchable-dropdown__button-text'
    );
    const radioOptions = searchableDropdown.find(
      '.mz-searchable-dropdown__option-input'
    );
    const menu = searchableDropdown.find('.mz-searchable-dropdown__menu');

    function placeMenu() {
      // In mobile, the dropdown acts like a modal
      // no need for positioning
      if (!window.isDesktop()) {
        menu.css('width', '100%');
        menu.css('max-width', '100%');
        menu.css('max-height', 'none');
        return;
      }

      $.placeDropdownMenu(input, menu);
    }

    function updateLabel() {
      const selectedOption = searchableDropdown.find(
        'input.mz-searchable-dropdown__option-input:checked'
      );

      const label = selectedOption.data('label');
      input.val(label);
      buttonText.text(label);
    }

    $(window).resize(placeMenu);

    document.addEventListener('scroll', () => {
      if (window.isDesktop() && searchableDropdown.hasClass('open')) {
        button.dropdown('toggle');
      }
    });

    searchableDropdown.on('shown.bs.dropdown', () => {
      updateLabel();
      placeMenu();
      input.get(0).focus();

      if (!window.isDesktop()) {
        bodyScrollLock.disableBodyScroll(menu.get(0));
      }
    });

    searchableDropdown.on('hidden.bs.dropdown', () => {
      input.get(0).blur();
      bodyScrollLock.enableBodyScroll(menu.get(0));
    });

    input.on('focus', function handleFocus() {
      if (window.isDesktop()) {
        $(this).select();
      } else {
        setTimeout(() => $(this).select(), 350);
      }
    });

    radioOptions.click(() => {
      updateLabel();
      button.addClass('--selected');

      const selectedOption = searchableDropdown.find(
        'input.mz-searchable-dropdown__option-input:checked'
      );
      searchableDropdown.trigger({
        type: 'selected.mz.searchableDropdown',
        value: selectedOption.val(),
        label: selectedOption.data('label')
      });
    });

    updateLabel();
  }

  $('.mz-searchable-dropdown').each(initSearchableDropdown);
})();
