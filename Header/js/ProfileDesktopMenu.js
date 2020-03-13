/* global $ */
(() => {
  const profileMenu = $('.oa-profile-menu');
  const profileMenuArrow = profileMenu.find('.oa-profile-menu__arrow');
  profileMenuArrow.on('click', () => {
    profileMenu.toggleClass('--active');
  });
})();
