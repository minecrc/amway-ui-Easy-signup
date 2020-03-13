/* global $ */
(() => {
  const searchButton = $('#oa-search-button');
  const searchModal = $('#oa-search-modal');
  const searchInputs = $('.oa-search-input input');

  function focus() {
    $('.oa-search-input:visible input').focus();
  }

  function open() {
    searchModal.addClass('--active');
  }

  function close() {
    searchModal.removeClass('--active');
  }

  function initSearchButton() {
    if (searchButton.attr('data-init')) return;

    searchButton.attr('data-init', true);
    searchButton.on('click', () => {
      open();
      focus();
    });
  }

  function initSearchModal() {
    if (searchModal.attr('data-init')) return;

    searchModal.attr('data-init', true);
    searchModal.mousedown(e => {
      e.preventDefault();

      focus();
    });

    const closeButton = searchModal.find('.oa-search-modal__close-button');
    closeButton.on('click', close);

    document.addEventListener('scroll', close);
  }

  function initSearchInput() {
    const input = $(this);

    if (input.attr('data-init')) return;

    input.attr('data-init', true);
    input.on('focus', () => {
      if (input.is(':visible')) open();
    });
    input.on('blur', () => {
      if (input.is(':visible')) close();
    });
  }

  initSearchButton();
  initSearchModal();
  searchInputs.each(initSearchInput);
})();
