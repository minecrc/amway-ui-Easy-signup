/* global $ */
(() => {
  const dropdown = $('.mz-dropdown');

  dropdown.on('change', (e, label, value) => {
    const targetId = e.target.id;
    const input = $(e.target)
      .parent()
      .siblings(`#${targetId.replace('-dropdown', '')}`);

    input.attr('value', value);
  });
})();
