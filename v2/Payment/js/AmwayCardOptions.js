/* global $ */
(() => {
  function initAmwayCardOption() {
    const amwayCardOptions = $(this);

    amwayCardOptions.on('hidden.bs.collapse', () => {
      const inputs = amwayCardOptions.find('input[type="radio"]');

      inputs.each(function resetAmwayOptionInput() {
        const input = $(this);
        input.prop('checked', input.attr('data-default-checked'));

        const content = $(`#${input.attr('id')}-content`);
        content.collapse('hide');
      });

      const cvvInput = amwayCardOptions.find(
        '.mz-amway-card-options__cvv-input input'
      );

      cvvInput.val('');
    });
  }

  $('.mz-amway-card-options').each(initAmwayCardOption);
})();
