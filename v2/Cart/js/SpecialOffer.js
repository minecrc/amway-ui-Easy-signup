/* global $ */
(() => {
  const tabs = $('.mz-special-offer__tab');
  const contents = $('.mz-special-offer__tab-content');

  tabs.on('click', function handleTabClick() {
    const tab = $(this);
    const content = $(`#${tab.attr('id')}-content`);

    tabs.removeClass('--active');
    contents.removeClass('--active');
    tab.addClass('--active');
    content.addClass('--active');
  });

  function initTab() {
    const tab = $(this);
    const content = $(`#${tab.attr('id')}-content`);

    const inputs = content.find('.mz-integer-input__input');

    const dataCount = tab.find('[data-count]');
    const dataMax = tab.find('[data-max]');
    const max = Number(dataMax.text());

    function updateCount() {
      let count = 0;

      inputs.each(function sum() {
        count += Number($(this).val());
      });

      inputs.each(function updateMax() {
        const input = $(this);

        input.attr('max', max - count + Number(input.val()));
        input.trigger('update:max');
      });

      dataCount.text(count);
    }

    inputs.on('change', updateCount);

    updateCount();
  }

  tabs.each(initTab);
})();
