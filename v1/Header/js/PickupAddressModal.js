/* global $ */
(() => {
  const pickupAddressModal = $('.oa-pickup-address-modal');
  const dropdown = $('.oa-pickup-address-modal__dropdown');
  const dropdownSearchInput = $('input#global-pickup-address');
  const dropdownButton = dropdown.find('.mz-searchable-dropdown__button');
  const dropdownCloseButton = dropdown.find(
    '.mz-searchable-dropdown__close-button'
  );
  const dropdownInput = $('input[name="global-pickup-address"]');

  function placeModal(parent) {
    if (!parent) {
      return;
    }

    const parentRect = parent.get(0).getBoundingClientRect();
    pickupAddressModal.css({
      top: parentRect.bottom,
      left: parentRect.left
    });
  }

  function closeModal() {
    // Wait for dropdown animation in mobile
    setTimeout(
      () => pickupAddressModal.removeClass('--active'),
      window.isDesktop() ? 0 : 200
    );
  }

  dropdown.on({
    'hidden.bs.dropdown': () => {
      closeModal();
    }
  });

  $.fn.pickupAddressModal = function handlePickupAddressModal(method, parent) {
    if (!this.hasClass('oa-pickup-address-modal')) {
      return;
    }

    switch (method) {
      case 'open': {
        placeModal(parent);
        pickupAddressModal.addClass('--active');
        if (!dropdown.hasClass('open')) {
          dropdownButton.dropdown('toggle');
        }
        setTimeout(() => dropdownSearchInput.get(0).focus());
        break;
      }
      case 'close': {
        if (dropdown.hasClass('open')) {
          dropdownButton.dropdown('toggle');
        }
        break;
      }
      case 'reset': {
        if (dropdown.hasClass('open')) {
          dropdownButton.dropdown('toggle');
        }
        dropdownInput.prop('checked', false);
        break;
      }
      default:
    }
  };
})();
