/* global $ */
(() => {
  const subDistrict = $('#sub-district');
  const district = $('#district');
  const province = $('#province');
  const zipcode = $('#zipcode');

  $.Thailand({
    database: '/static/js/jquery.Thailand.js/database/db.json',
    $district: subDistrict,
    $amphoe: district,
    $province: province,
    $zipcode: zipcode,
    templates: {
      suggestion(data) {
        return `<div>${data.district} ${data.amphoe} ${data.province}${
          data.zipcode ? ` ${data.zipcode}` : ''
        }</div>`;
      }
    },
    // eslint-disable-next-line @typescript-eslint/camelcase
    autocomplete_size: 20
  });

  function initInput() {
    const input = $(this);

    if (input.attr('data-init')) return;
    input.attr('data-init', true);

    const parent = input.closest('.oa-address-form-content__input');

    parent.on('change keyup', () => {
      const menu = input.siblings('.tt-menu');
      const { maxHeight } = $.calculateMenuPosition(input, menu, {
        forceBottom: true
      });

      menu.css('maxHeight', maxHeight);
    });
  }

  initInput.call(subDistrict);
  initInput.call(district);
  initInput.call(province);
  initInput.call(zipcode);
})();
