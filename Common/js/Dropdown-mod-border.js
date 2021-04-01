/* global $ */
(() => {

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const GAP = 24;
    const MAX_MENU_HEIGHT = 300;

    function calculateMenuPosition(anchor, menu, { forceBottom } = {}) {
        const topRestrictHeight = $("[data-dropdown-top-restrict='true']").height();
        const bottomRestrictHeight =
            $("[data-dropdown-bottom-restrict='true']").height() || 0;

        const top = anchor.offset().top - $(window).scrollTop();
        const bottom = top + anchor.outerHeight();
        const windowHeight = window.innerHeight;
        const bottomArea = windowHeight - bottom;
        if (bottomArea > 240 + bottomRestrictHeight || forceBottom) {
            console.log(bottomArea - GAP - bottomRestrictHeight)
            return {
                top: bottom + 8,
                bottom: 'auto',
                maxHeight: bottomArea - GAP - bottomRestrictHeight
            };
        }

        return {

            top: 'auto',
            bottom: windowHeight - top + 8,
            maxHeight: top - GAP - topRestrictHeight
        };
    }

    function placeDropdownMenu(anchor, menu, menuList) {
        menu.css('width', anchor.outerWidth());
        menu.css('max-width', anchor.outerWidth());
        menu.css('left', anchor.offset().left);

        const { top, bottom, maxHeight } = calculateMenuPosition(anchor, menu);


        menu.css('top', top);
        menu.css('bottom', bottom);
        menu.css('max-height', Math.min(maxHeight, MAX_MENU_HEIGHT));
        menuList.css('max-height', Math.min(maxHeight, MAX_MENU_HEIGHT) - 16)
    }

    function placeDropdownMenuModal(anchor, menu, menuList) {
        menu.css('width', anchor.outerWidth());
        menu.css('max-width', anchor.outerWidth());


        const { top, bottom, maxHeight } = calculateMenuPosition(anchor, menu);

        menu.css('max-height', Math.min(maxHeight, MAX_MENU_HEIGHT));
        menuList.css('max-height', '100%');
        menu.css('position', 'absolute');
        menu.css('top', 'calc(100% + 8px)');
    }

    function initDropdown() {
        const dropdown = $(this);

        if (dropdown.attr('data-init')) return;
        dropdown.attr('data-init', true);

        const button = dropdown.find('.mz-dropdown__button');
        const buttonText = button.find('.mz-dropdown__button-text');
        const iconOnBtn = button.find('.mz-icon');
        const options = dropdown.find('li.mz-dropdown__option');
        const dropdownMenu = dropdown.find('.mz-dropdown__menu');
        const menuList = dropdown.find('.mod_mz-dropdown__menu');
        const itFilter = dropdown.hasClass('filter-in') ? 1 : 0;
        const onModal = dropdown.hasClass('on-modal') ? 1 : 0;

        function checkFilter(onfX) {
            width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if ((itFilter == 0 && width < 1023) || (width > 1023)) {

                if (onfX == 1 && (onModal == 0) || (onModal == 1 && width < 1024)) {
                    dropdownMenu.attr("style", "");
                    placeDropdownMenu(button, dropdownMenu, menuList);
                } else if (onModal == 1 && width > 1023) {
                    dropdownMenu.attr("style", "");
                    placeDropdownMenuModal(button, dropdownMenu, menuList);
                }
                buttonText.show();
                iconOnBtn.show();

            } else {
                buttonText.hide();
                iconOnBtn.hide();
                dropdownMenu.attr("style", "");

            }
        }
        checkFilter(0)

        dropdown.on('shown.bs.dropdown', () => {
            checkFilter(1)
            dropdown.append('<div class="dropdown-backdrop"></div>');
        });
        dropdown.on('hidden.bs.dropdown', () => {
            dropdown.find('.dropdown-backdrop').remove();
        })
        dropdown.on('hidde.bs.dropdown', () => {
            dropdown.find('.dropdown-backdrop').remove();
        })
        $(window).resize(() => {
            checkFilter(1)
        });

        document.addEventListener('scroll', () => {
            dropdown.removeClass('open');
            dropdown.find('.dropdown-backdrop').remove();
        });

        options.on('click', e => {
            e.preventDefault();

            const target = $(e.target);
            const option = target.hasClass('mz-dropdown__option') ?
                target :
                target.closest('.mz-dropdown__option');

            buttonText.html(option.html());
            buttonText.addClass('--selected');

            options.removeClass('--active');
            option.addClass('--active');
            option
                .parents('.mz-dropdown__menu')
                .siblings('button.mz-dropdown__button')
                .trigger('change', [option.text(), option.data('value')]);
            const idDD = option
                .parents('.mz-dropdown__menu').siblings('button.mz-dropdown__button').attr('id');

            const inputDD = $(`#${idDD.replace('-dropdown', '')}`);
            inputDD.attr('value', option.data('value'));
        });
    }

    const dropdowns = $('.mz-dropdown');
    dropdowns.each(initDropdown);

    // Expose `initDropdown` to $ for reuses
    $.placeDropdownMenu = placeDropdownMenu;
})();