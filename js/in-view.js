$(function () {
    $('.about').css('opacity', 0);
    $('.about').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
                $('.about').stop().animate({opacity: 1}, 1000);
        }else {
    $('.about').css('opacity', 0);
        }
    });
    $('.contentsWrapper').css('opacity', 0);
    $('.contentsWrapper').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().animate({opacity: 1}, 900);
        }
        else {
            $(this).stop().animate({opacity: 0}, 900);
        }
    });
});