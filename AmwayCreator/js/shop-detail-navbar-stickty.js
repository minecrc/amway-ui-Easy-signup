window.onscroll = function() {
    shopDetailStickyNav()

};
const navbar = document.getElementById('shop-list-navbar');
shopDetailStickyNav()

function shopDetailStickyNav() {
    if (window.pageYOffset >= 56) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}