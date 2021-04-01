window.onscroll = function() {
    shopDetailSticky()
};

const getOffsetTop = element => {
    let offsetTop = 0;
    while (element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
    }
    return offsetTop;
}

const navbar = document.getElementById('shop-list-select-bar');
const sticky = getOffsetTop(navbar);
const sticky2 = (sticky - 56);

function shopDetailSticky() {
    /* console.log(window.pageYOffset + " nav : " + sticky2) */
    if (window.pageYOffset >= sticky2) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}