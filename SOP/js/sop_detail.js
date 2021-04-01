/* sticky scroll*/
$(window).scroll(reOrder)
$(window).resize(reOrder)

function reOrder() {
    var mq = window.matchMedia("(min-width: 992px)");
    if (mq.matches) {
        $('.left-child').addClass('customm');
        var scroll = $(window).scrollTop(),
            topContent = $('.detail-sticky').offset().top - 25,
            sectionHeight = $('.right').height(),
            leftHeight = $('.left-child').height(),
            bottomContent = topContent + sectionHeight - leftHeight - 45;

        if (scroll > topContent && scroll < bottomContent) {
            $('.customm').removeClass('posAbs').addClass('posFix');

        } else if (scroll > bottomContent) {
            $('.customm').removeClass('posFix').addClass('posAbs');

        } else if (scroll < topContent) {
            $('.customm').removeClass('posFix');
        }
    } else {
        $('.left-child').removeClass('customm posAbs posFix');

    }
}
/* datepicker */
var date = $('.sop-dt-datepicker');
var date_data = $('.sop-dt-datepicker-data');
var box_date = $('.sop-dt-datepicker-box');
moment.locale('th');

$('.datepicker').datepicker();

function dateNow() {

    date_data.val(moment().add(543, 'year').format('L'));
    date.val(moment().add(543, 'year').format('LL'));
}
box_date.hasClass('disable') ? dateNow() : ''

date_data.on('change', () => {
    if (box_data.hasClass('disable')) {
        dateNow()
    } else {
        date.val(moment(date_data.val(), "DD MM YYYY").format('LL'));
    }

});


/* checkbox for choose list */
var chx01 = $('#sop-dt-chx01');
var chx02 = $('#sop-dt-chx02');
chx01.on('change', function() {
    chx02.not(this).prop('checked', false);
});

chx02.on('change', function() {
    chx01.not(this).prop('checked', false);
});
/* checkbox for payment */
var chxCredit = $('#sop-dt-credit-chx');
var chxContinuePay = $('#sop-dt-continue-buying-chx');
chxContinuePay.prop('checked', true);
chxCredit.on('change', function() {
    chxContinuePay.not(this).prop('checked', false);
});

chxContinuePay.on('change', function() {
    chxCredit.not(this).prop('checked', false);
});
/* slide image product */
var sync1 = $(".sop-detail-img");
var sync2 = $(".sop-detail-img-list");

var thumbnailItemClass = '.owl-item';

var slides = sync1.owlCarousel({
    video: true,
    startPosition: 12,
    items: 1,
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    nav: false,
    dots: false
}).on('changed.owl.carousel', syncPosition);

function syncPosition(el) {
    $owl_slider = $(this).data('owl.carousel');
    var loop = $owl_slider.options.loop;

    if (loop) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
    } else {
        var current = el.item.index;
    }

    var owl_thumbnail = sync2.data('owl.carousel');
    var itemClass = "." + owl_thumbnail.options.itemClass;


    var thumbnailCurrentItem = sync2
        .find(itemClass)
        .removeClass("synced")
        .eq(current);

    thumbnailCurrentItem.addClass('synced');

    if (!thumbnailCurrentItem.hasClass('active')) {
        var duration = 300;
        sync2.trigger('to.owl.carousel', [current, duration, true]);
    }
}
var thumbs = sync2.owlCarousel({
        startPosition: 12,
        items: 4,
        loop: false,
        margin: 10,
        autoplay: false,
        nav: false,
        dots: false,
        onInitialized: function(e) {
            var thumbnailCurrentItem = $(e.target).find(thumbnailItemClass).eq(this._current);
            thumbnailCurrentItem.addClass('synced');
        },
    })
    .on('click', thumbnailItemClass, function(e) {
        e.preventDefault();
        var duration = 300;
        var itemIndex = $(e.target).parent(thumbnailItemClass).index();
        sync1.trigger('to.owl.carousel', [itemIndex, duration, true]);
    }).on("changed.owl.carousel", function(el) {
        var number = el.item.index;
        $owl_slider = sync1.data('owl.carousel');
        $owl_slider.to(number, 100, true);
    });
var modelInfo = $(".sop-dt-info-box");
var bgInfo = $('.bg-info');


function toggleInfo() {
    modelInfo.toggleClass('active');
    bgInfo.toggleClass('active');
    $('body').toggleClass('open-modal-mb');
}