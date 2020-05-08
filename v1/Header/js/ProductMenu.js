/* global $ */
(() => {
  let timer;
  let windowWidth;

  const ID = 'product-menu';
  // NOTE: Keep this in sync with header's break point
  const BREAKPOINT = 1024;
  const ANIMATION_DURATION = 200;
  const LEVELS = {
    initial: 1,
    category: 2,
    'sub-category': 3
  };
  const numberOfLevels = 3;

  const dimLayer = $('#main-dim-layer');

  const menuBar = $('#oa-menu-bar');
  const menuItems = menuBar.find('.oa-menu-bar__item');

  const productMenu = $('#oa-product-menu');
  const arrow = $('#oa-product-menu-arrow');

  const title = productMenu.find('.oa-product-menu__title');
  const container = productMenu.find('.oa-product-menu__container');
  const categoryDetails = productMenu.find('.oa-product-menu__category-detail');
  const subCategoryDetails = productMenu.find(
    '.oa-product-menu__sub-category-detail'
  );

  function updateLevel(level = 1) {
    productMenu.attr('data-level', level);
    container.css(
      'transform',
      `translate(-${((level - 1) * 100) / numberOfLevels}%)`
    );
  }

  function getDetail(item) {
    return $(`#${item.attr('data-id')}-detail`);
  }

  function hideDetails(level = 1) {
    if (level === LEVELS.category) {
      categoryDetails.removeClass('--active');
    } else if (level === LEVELS['sub-category']) {
      subCategoryDetails.removeClass('--active');
    }
  }

  function open() {
    productMenu.addClass('--active --init');

    // TODO: Trigger dim-layer:push instead
    const openedMenu = (dimLayer.attr('data-opened-menu') || '').split(',');
    dimLayer.attr(
      'data-opened-menu',
      [...openedMenu.filter(menu => !!menu), ID].join(',')
    );
  }

  function close() {
    productMenu.removeClass('--active');
    // TODO: Trigger dim-layer:remove instead
    dimLayer.attr(
      'data-opened-menu',
      (dimLayer.attr('data-opened-menu') || '')
        .split(',')
        .filter(menu => menu !== ID)
        .join(',') || null
    );

    if (windowWidth <= BREAKPOINT) {
      setTimeout(() => updateLevel, ANIMATION_DURATION);
    }
  }

  function back() {
    const level = productMenu.attr('data-level');
    updateLevel(level - 1 || 1);
  }

  function handleMenuMouseEnter(e, { item = {}, detail = {} } = {}) {
    if (windowWidth <= BREAKPOINT) return;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    if (item.length && detail.length) {
      hideDetails(LEVELS.category);
      open();

      const { left, top } = menuItems.offset();

      productMenu.css(
        'top',
        `${top + menuBar.height() - $(window).scrollTop()}px`
      );
      productMenu.css('left', left);
      productMenu.css('right', left);
      container.css('height', detail.outerHeight());
      arrow.css('left', item.offset().left - left + item.width() / 2);
      detail.addClass('--active');
    }
  }

  function handleMenuMouseLeave() {
    if (windowWidth <= BREAKPOINT || timer) return;

    timer = setTimeout(close, 200);
  }

  function updateProductMenu() {
    windowWidth = $(window).width();

    if (windowWidth > BREAKPOINT) {
      productMenu.removeClass('--mobile --init');
      productMenu.addClass('--desktop');
      updateLevel();
    } else {
      productMenu.removeClass('--desktop --init');
      productMenu.addClass('--mobile');
      productMenu.css('top', '');
      productMenu.css('left', '');
      productMenu.css('right', '');
      container.css('height', '');
    }

    close();
  }

  function initProductMenu() {
    if (productMenu.attr('data-init')) return;

    productMenu.attr('data-init', true);

    $('#oa-hamburger').on('click', open);
    dimLayer.on('click', close);
    productMenu.find('.oa-product-menu__close-button').on('click', close);
    productMenu.find('.oa-product-menu__back-button').on('click', back);
    container.mouseenter(handleMenuMouseEnter);
    container.mouseleave(handleMenuMouseLeave);

    updateProductMenu();

    $(window).resize(updateProductMenu);
    document.addEventListener('scroll', updateProductMenu);
  }

  function initContentItem({ type }) {
    const item = $(this);

    if (item.attr('data-init')) return;

    item.attr('data-init', true);

    const itemTitle = item.attr('data-title');
    const detail = getDetail(item);

    item.on('click', e => {
      const level = LEVELS[type] || 1;

      if (item.length && detail.length && level > 1) {
        e.preventDefault();

        hideDetails(level);
        updateLevel(level);
        title.find(`[data-title-level=${level}]`).text(itemTitle);
        detail.addClass('--active');
      }
    });
  }

  initProductMenu();

  productMenu
    .find('.oa-product-menu__category')
    .each(function initCategory(_, item) {
      initContentItem.call(item, { type: 'category' });
    });
  productMenu
    .find('.oa-product-menu__sub-category')
    .each(function initSubCategory(_, item) {
      initContentItem.call(item, { type: 'sub-category' });
    });

  menuItems.each(function initMenuItem() {
    const item = $(this);

    if (item.attr('data-init')) return;

    item.attr('data-init', true);

    item.mouseenter(e => {
      handleMenuMouseEnter(e, { item, detail: getDetail(item) });
    });
    item.mouseleave(handleMenuMouseLeave);
  });
})();
