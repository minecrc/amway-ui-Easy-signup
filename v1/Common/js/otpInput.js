/* global $ */
(() => {
  function initOtpInput() {
    const hiddenInput = $(this).find('input[type="hidden"]');
    const inputs = $(this).find('.oa-otp-input__input-box input');

    let currentIndex = 0;
    function setIndex(index) {
      currentIndex = index;
      if (currentIndex < 0) {
        currentIndex = 0;
      } else if (currentIndex >= inputs.length) {
        currentIndex = inputs.length - 1;
      }
      $(inputs.get(currentIndex)).focus();
    }

    inputs.on('focus', e => {
      const lastInput = inputs.get(currentIndex);
      if (e.target === lastInput) {
        return;
      }

      e.preventDefault();
      $(lastInput).focus();
    });

    inputs.keypress(e => {
      e.preventDefault();
    });

    inputs.keydown(e => {
      const currentInput = $(inputs.get(currentIndex));
      if (e.ctrlKey) {
        return;
      }

      if (e.key === 'Backspace' || e.key === 'Delete') {
        currentInput.val('');
        setIndex(currentIndex - 1);
      } else if (/\d/.test(e.key)) {
        currentInput.val(e.key);
        setIndex(currentIndex + 1);
      }

      let newValue = '';
      inputs.each((index, input) => {
        newValue += $(input).val();
      });
      hiddenInput.val(newValue);
    });

    inputs.on('paste', e => {
      e.preventDefault();
      const data = e.originalEvent.clipboardData.getData('text');
      if (/[^\d]+/.test(data)) {
        return;
      }

      const length = Math.min(inputs.length, data.length);
      const parsedInput = data.slice(0, length);
      inputs.each((i, input) => {
        if (typeof parsedInput[i] !== 'undefined') {
          $(input).val(parsedInput[i]);
          return;
        }

        $(input).val('');
      });

      setIndex(length);
    });
  }

  const otpWrapper = $('.oa-otp-input');
  otpWrapper.each(initOtpInput);
})();
