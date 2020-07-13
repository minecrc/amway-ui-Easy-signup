/* global $ */
(() => {
  const searchButton = $('#oa-search-button');
  const searchModal = $('#oa-search-modal');
  const searchInputs = $('.oa-search-input input');
  const navigationBar = $('.oa-navigation-bar');

  function placeModal() {
    const top = window.isDesktop()
      ? navigationBar.offset().top + navigationBar.height()
      : 0;
    searchModal.css('top', top);
  }

  function focus() {
    const searchInput = $('.oa-search-input:visible input');

    if (!window.isDesktop()) {
      // Prevent tabbing on mobile
      $('input').not(searchInput).attr('tabindex', -1);
    }

    searchInput.focus();
  }

  function open() {
    placeModal();
    searchModal.addClass('--active');

    if (!window.isDesktop()) {
      $('body').addClass('modal-open');
    }
  }

  function close() {
    searchModal.removeClass('--active');
    $('body').removeClass('modal-open');
    const searchInput = $('.oa-search-input:visible input');
    if (searchInput.length) {
      searchInput.get(0).blur();
    }

    // Reset tabbing for other inputs
    $('input[tabindex="-1"]').not(searchInput).attr('tabindex', null);
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
      if (window.isDesktop()) {
        e.preventDefault();
      }
    });

    const closeButton = searchModal.find('.oa-search-modal__close-button');
    closeButton.on('click', close);

    document.addEventListener('scroll', () => {
      if (window.isDesktop()) {
        close();
      }
    });
  }

  function initSearchInput() {
    const input = $(this);

    if (input.attr('data-init')) return;

    input.attr('data-init', true);
    input.on('focus', () => {
      if (input.is(':visible')) open();
    });

    input.on('blur', () => {
      if (window.isDesktop() && input.is(':visible')) close();
    });
  }

  initSearchButton();
  initSearchModal();
  searchInputs.each(initSearchInput);
})();
