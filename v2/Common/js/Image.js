/* eslint-disable @typescript-eslint/no-this-alias, no-param-reassign */
/* global $ */
(() => {
  function loadImage(image) {
    const src = image.getAttribute('data-src');
    const srcSet = image.getAttribute('data-src-set');
    const bgSrc = image.getAttribute('data-background-src');

    if (src) {
      image.src = src;
      image.removeAttribute('data-src');
    }
    if (srcSet) {
      image.srcset = srcSet;
      image.removeAttribute('data-src-set');
    }
    if (bgSrc) {
      image.style.backgroundImage = `url(${bgSrc})`;
      image.removeAttribute('data-background-src');
    }
  }

  function LazyLoad(images) {
    this.loaded = false;
    this.images = images;
    this.observer = null;
    this.init();
  }

  LazyLoad.prototype = {
    init() {
      if (!window.IntersectionObserver) {
        this.loadImages();
        return;
      }

      const self = this;
      const observerConfig = {
        root: null,
        rootMargin: '0px',
        threshold: [0]
      };

      this.observer = new IntersectionObserver(function loadEntries(entries) {
        Array.prototype.forEach.call(entries, function loadEntry(entry) {
          if (entry.isIntersecting) {
            self.observer.unobserve(entry.target);
            loadImage(entry.target);
          }
        });
      }, observerConfig);

      Array.prototype.forEach.call(this.images, function observe(image) {
        self.observer.observe(image);
      });
    },

    loadAndDestroy() {
      if (this.loaded) return;

      this.loadImages();
      this.destroy();
    },

    loadImages() {
      if (this.loaded) return;

      Array.prototype.forEach.call(this.images, loadImage);
    },

    destroy() {
      if (this.loaded) return;

      this.observer.disconnect();
      this.loaded = true;
    }
  };

  function lazyload(images) {
    return new LazyLoad(images);
  }

  const images = document.querySelectorAll(
    'section.mz-image, div.mz-image, img.mz-image, .mz-image > *'
  );

  lazyload(images);

  $.loadImage = loadImage;
})();
