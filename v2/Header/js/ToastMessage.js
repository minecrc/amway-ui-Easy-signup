/* global $ */
(() => {
  const toastMessage = $('.mz-toast-message');
  const duration = toastMessage.data('duration') || 5000;

  setTimeout(() => {
    toastMessage.addClass('--exit');

    setTimeout(() => {
      toastMessage.remove();
    }, 250);
  }, duration);
})();
