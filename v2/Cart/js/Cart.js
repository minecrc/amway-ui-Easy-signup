/* global $ */
(() => {
  const cartForm = $('form#cart');
  cartForm.validate({
    rules: {
      'recipient-mobile': {
        phoneTH: true,
        required: true
      },
      'pickup-address': {
        required: true
      },
      'selected-downline': {
        required: true
      }
    },
    messages: {
      'recipient-mobile': {
        required: 'กรุณากรอกเบอร์โทรติดต่อ'
      },
      'pickup-address': 'กรุณาเลือกแอมเวย์ช็อปเพื่อรับสินค้า',
      'selected-downline': 'กรุณาเลือกดาวน์ไลน์'
    },
    highlight: (element, errorClass) => {
      const $element = $(element);
      const errorElement = $(
        `#${$element.attr('name') || $element.attr('id')}-error`
      );
      errorElement.parent('p.mz-message').css('display', 'block');

      if ($element.attr('type') === 'radio') {
        const parentDropdownButton = $element
          .closest('.mz-searchable-dropdown__modal')
          .prev('.mz-searchable-dropdown__button');

        parentDropdownButton.addClass(errorClass);
      } else {
        $element.addClass(errorClass);
      }
    },
    unhighlight: (element, errorClass) => {
      const $element = $(element);
      const errorElement = $(
        `#${$element.attr('name') || $element.attr('id')}-error`
      );
      errorElement.parent('p.mz-message').css('display', 'none');

      if ($element.attr('type') === 'radio') {
        const parentDropdownButton = $element
          .closest('.mz-searchable-dropdown__modal')
          .prev('.mz-searchable-dropdown__button');

        parentDropdownButton.removeClass(errorClass);
      } else {
        $element.removeClass(errorClass);
      }
    }
  });
})();
