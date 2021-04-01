/* global $ */
(() => {
    const $window = $(window);
    let prevScrollY = $window.scrollTop();
    let prevScrollUp = false;

    const header = $('.amway-header');
    const contentDetail = $('.amway-detail .left');
    const righttDetail = $('.amway-detail .right');
    const accordionDetail = $('.amway-dt-accordion-area');
    var widthCheck = (window.innerWidth > 0) ? window.innerWidth : screen.width;



    document.addEventListener('scroll', function handleScroll() {
        const headerHeight = header.height();
        const topContent = $('.detail-sticky').offset().top;
        const sectionHeight = $('.right').height();
        const leftHeight = $('.left-child').height();
        const bottomContent = topContent + sectionHeight - leftHeight;

        const contentEnd = $('.detail-sticky').height();
        const scrollY = $window.scrollTop();
        const scrollUp =
            prevScrollY !== scrollY ? prevScrollY > scrollY : prevScrollUp;
        /* console.log(scrollY + 'end:' + bottomContent) */

        const float = scrollY >= headerHeight;
        if (scrollY >= bottomContent) {
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if (width < 1023) {
                contentDetail.css('top', '0px');
                contentDetail.css(
                    'transform', 'none'
                );
            } else {
                contentDetail.css(
                    'transform', `translate3d(0, ${bottomContent - 200}px, 0)`
                );
                contentDetail.css('position', 'relative');
            }

        } else {

            if (scrollUp || scrollY < headerHeight) {
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

                if (width < 1023) {
                    contentDetail.css('top', '0px');
                    contentDetail.css('position', 'relative');
                    contentDetail.css(
                        'transform', 'none'
                    );

                } else {
                    contentDetail.css('top', '7rem');
                    contentDetail.css('position', 'sticky');
                    contentDetail.css(
                        'transform', 'none'
                    );
                }


            } else {
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
                if (width < 1023) {
                    contentDetail.css('top', '0px');
                    contentDetail.css('position', 'relative');
                    contentDetail.css(
                        'transform', 'none'
                    );

                } else {
                    contentDetail.css('top', '7rem');
                    contentDetail.css('position', 'sticky');
                    contentDetail.css(
                        'transform', 'none'
                    );
                }
            }
        }




        prevScrollUp = scrollUp;
        prevScrollY = scrollY;
    });

})();