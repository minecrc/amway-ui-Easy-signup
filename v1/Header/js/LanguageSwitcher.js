/* global $ */
(() => {
  const LANGUAGES = {
    th: {
      text: 'ภาษาไทย',
      image: '/static/images/flag-thai.svg',
      targetKey: 'en'
    },
    en: {
      text: 'English',
      image: '/static/images/flag-english.svg',
      targetKey: 'th'
    }
  };

  const DEFAULT_LANGUAGE = LANGUAGES.en;

  function initLanguageSwitcher() {
    const languageSwitcher = $(this);

    if (languageSwitcher.attr('data-init')) return;

    languageSwitcher.attr('data-init', true);

    function update(key) {
      const { targetKey } = LANGUAGES[key] || DEFAULT_LANGUAGE;
      const language = LANGUAGES[targetKey];

      languageSwitcher.empty();
      languageSwitcher.append(
        $('<img />', { src: language.image, alt: language.text })
      );
      languageSwitcher.append($('<small />', { text: language.text }));
    }

    const initialKey = languageSwitcher.attr('data-language-key');

    update(initialKey);

    languageSwitcher.on('click', function handleClick() {
      const currentKey = languageSwitcher.attr('data-language-key');
      const { targetKey } = LANGUAGES[currentKey] || DEFAULT_LANGUAGE;

      languageSwitcher.attr('data-language-key', targetKey);

      update(targetKey);
    });
  }

  const languageSwitchers = $('.oa-language-switcher');
  languageSwitchers.each(initLanguageSwitcher);
})();
