/* global $ */
(() => {
  const uploadSections = $('.oa-sign-up-upload-section');

  uploadSections.each((_, section) => {
    const $section = $(section);
    const image = $section.find('.oa-sign-up-upload-section__image img');
    const input = $section.find('input');
    input.on('change', e => {
      const [file] = [...e.target.files];
      image.attr('src', URL.createObjectURL(file));
    });

    const button = $section.find('button');
    button.on('click', () => {
      input.click();
    });
  });
})();
