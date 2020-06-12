/* global $ */
(() => {
  // Client can listen to method changes from the parent element
  const globalDeliveryMethods = $('.oa-global-delivery-methods');

  const toggleButton = $(
    '.oa-global-delivery-methods__delivery-methods-toggle-button'
  );

  const deliveryOption = $('.oa-global-delivery-methods__delivery-option');
  const pickupOption = $('.oa-global-delivery-methods__pickup-option');
  const pickupSelectedLabel = pickupOption.find(
    '[data-selected-pickup-address-label]'
  );
  const pickupAddressModal = $('.oa-pickup-address-modal');
  const pickupAddressDropdown = pickupAddressModal.find(
    '.oa-pickup-address-modal__dropdown'
  );

  function handleMethodChange() {
    const selectedMethod = $(this).val();
    if (selectedMethod === 'global-delivery') {
      pickupAddressModal.pickupAddressModal('reset');
      if (pickupOption.hasClass('--selected')) {
        pickupOption.removeClass('--selected');
        globalDeliveryMethods.trigger({
          type: 'selected.oa.globalDeliveryMethods',
          method: 'delivery'
        });
      }
    }
  }

  $('input[value="global-pickup"]').on('click', e => {
    e.stopPropagation();
    pickupAddressModal.pickupAddressModal('open', pickupOption);
  });

  $('input[name="global-delivery-method"]').on('input', handleMethodChange);

  pickupAddressDropdown.on(
    'selected.mz.searchableDropdown',
    ({ label, value }) => {
      pickupSelectedLabel.text(label);
      pickupOption.addClass('--selected');
      toggleButton.toggleButton('update:background');

      pickupAddressModal.pickupAddressModal('close');

      globalDeliveryMethods.trigger({
        type: 'selected.oa.globalDeliveryMethods',
        method: 'pickup',
        value
      });
    }
  );

  pickupAddressDropdown.on('hidden.bs.dropdown', () => {
    // Delayed `--selected` class checking
    setTimeout(() => {
      if (!pickupOption.hasClass('--selected')) {
        deliveryOption.click();
      }
    });
  });
})();
