/* global $ */
(() => {
  let windowWidth;

  const ID = 'user-menu';
  // NOTE: Keep this in sync with header's break point
  const BREAKPOINT = 1024;

  const dimLayer = $('#main-dim-layer');

  const user = $('#oa-user');
  const idBadge = user.find('.oa-id-badge');

  const userMenu = $('#oa-user-menu');
  const arrow = userMenu.find('#oa-user-menu-arrow');

  function open() {
    userMenu.addClass('--active --init');

    // TODO: Trigger dim-layer:push instead
    const openedMenu = (dimLayer.attr('data-opened-menu') || '').split(',');
    dimLayer.attr(
      'data-opened-menu',
      [...openedMenu.filter(menu => !!menu), ID].join(',')
    );
  }

  function close() {
    userMenu.removeClass('--active');
    // TODO: Trigger dim-layer:remove instead
    dimLayer.attr(
      'data-opened-menu',
      (dimLayer.attr('data-opened-menu') || '')
        .split(',')
        .filter(menu => menu !== ID)
        .join(',') || null
    );
  }

  function updateUserMenu() {
    windowWidth = $(window).width();

    if (windowWidth > BREAKPOINT) {
      userMenu.removeClass('--mobile --init');
      userMenu.addClass('--desktop');
    } else {
      userMenu.removeClass('--desktop --init');
      userMenu.addClass('--mobile');
      userMenu.css('top', '');
      userMenu.css('right', '');
    }

    close();
  }

  function initUserMenu() {
    if (userMenu.attr('data-init')) return;

    userMenu.attr('data-init', true);

    $('#oa-user').on('click', () => {
      if (userMenu.hasClass('--active')) {
        close();
      } else if (windowWidth <= BREAKPOINT) {
        open();
      } else if (user.attr('data-logged-in')) {
        open();

        const userWidth = user.outerWidth();
        const { left, top } = user.offset();

        const right = $(window).width() - left - userWidth;

        userMenu.css('top', top + user.height());
        userMenu.css('right', right);
        arrow.css(
          'left',
          idBadge.offset().left -
            left +
            userMenu.outerWidth() -
            userWidth +
            idBadge.outerWidth() / 2
        );
      }
    });

    dimLayer.on('click', close);
    userMenu.find('.oa-user-menu__close-button').on('click', close);

    updateUserMenu();

    $(window).resize(updateUserMenu);
    document.addEventListener('scroll', updateUserMenu);
  }

  initUserMenu();
})();
