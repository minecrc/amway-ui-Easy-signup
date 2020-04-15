/* global $ */
(() => {
  function initIntegerInput() {
    const integerInput = $(this);

    const input = integerInput.find('input');
    const inputId = input.attr('id');

    const quantity = integerInput.find('.mz-integer-input__quantity');
    const addButton = integerInput.find('.mz-integer-input__add-button');

    const incrementButton = integerInput.find('[data-increment]');
    const decrementButton = integerInput.find('[data-decrement]');

    function setValue(id, value) {
      let val = Number(value);

      const min = Number(input.attr('min'));
      const max = Number(input.attr('max'));

      if (Number.isNaN(val)) return;

      if (val > max) val = max;
      if (val < min) val = min;

      if (Number(input.val()) === val) return;

      input.val(Number(val));
      input.trigger('change', [id, val]);
    }

    function increment() {
      setValue(inputId, Number(input.val()) + 1);
    }

    function decrement() {
      setValue(inputId, Number(input.val()) - 1);
    }

    input.keypress(e => {
      if (Number.isNaN(Number(e.key))) {
        e.preventDefault();
      }
    });

    input.keydown(e => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        decrement();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        increment();
      }
    });

    input.keyup(() => {
      setValue(inputId, input.val());
    });

    input.blur(() => {
      setValue(inputId, input.val());
    });

    input.on('paste', e => {
      const value = Number(e.originalEvent.clipboardData.getData('text'));

      if (Number.isNaN(value)) {
        e.preventDefault();
      }

      setValue(inputId, input.val());
    });

    addButton.click(increment);
    incrementButton.click(increment);
    decrementButton.click(decrement);

    function updateMax(value) {
      const incrementDisabled = incrementButton.attr('disabled');
      const max = Number(input.attr('max'));

      if (value >= max && !incrementDisabled) {
        addButton.attr('disabled', true);
        incrementButton.attr('disabled', true);
      } else if (value < max && incrementDisabled) {
        addButton.attr('disabled', false);
        incrementButton.attr('disabled', false);
      }
    }

    function updateMin(value) {
      const decrementDisabled = decrementButton.attr('disabled');
      const min = Number(input.attr('min'));

      if (value <= min && !decrementDisabled) {
        decrementButton.attr('disabled', true);
      } else if (value > min && decrementDisabled) {
        decrementButton.attr('disabled', false);
      }
    }

    input.on('change', (e, id, value) => {
      if (value <= 0) {
        quantity.removeClass('--active');
        addButton.addClass('--active');
      } else {
        quantity.addClass('--active');
        addButton.removeClass('--active');
      }

      updateMin(value);
      updateMax(value);
    });

    input.on('update:max', () => {
      updateMax(Number(input.val()));
    });
  }

  $('.mz-integer-input').each(initIntegerInput);
})();
