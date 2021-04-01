$(document).scroll(function() {
    function getYPosition() {
        var top = window.pageYOffset || document.documentElement.scrollTop
        return top;
    }

    function summaryCartBoxFunc() {
        var summaryCartBox = $("#summaryCartBox").offset().top - $("#summaryCartBox").height() - 200 - $("#afterSummaryCartBox").height();
        return summaryCartBox;
    }
    if (getYPosition() >= summaryCartBoxFunc()) {
        $('#summaryBarArea').hide();
    } else {
        $('#summaryBarArea').show();
    }

});