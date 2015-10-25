$(function () {
    $('.about').css('opacity', 0);
    $('.about').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
                $('.about').stop().animate({opacity: 1}, 500);
        }else {
            $('.about').stop().animate({opacity: 0}, 500);
        }
    });
    $('.contentsWrapper').css('opacity', 0);
    $('.contentsWrapper').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().animate({opacity: 1}, 500);
        }
        else {
            $(this).stop().animate({opacity: 0}, 500);
        }
    });
    $('.leap').css('opacity', 0);
    $('.leap').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().animate({opacity: 1}, 900);
        }
        else {
            $(this).stop().animate({opacity: 0}, 900);
        }
    });
    $('.inoue').css('opacity', 0);
    $('.inoue').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().animate({opacity: 1}, 900);
        }
        else {
            $(this).stop().animate({opacity: 0}, 900);
        }
    });
    $('.yamada').css('opacity', 0);
    $('.yamada').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().animate({opacity: 1}, 900);
        }
        else {
            $(this).stop().animate({opacity: 0}, 900);
        }
    });
});