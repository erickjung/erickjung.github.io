$(document).ready(function () {
    $(window).load(function () {
        $('#big-video-wrap').show().animate({
            opacity: 1
        });
    });

    // Text slider on homepage turn on rotation
    $(".demo1 .rotate1").textrotator({
        animation: "fade",
        speed: 1000
    });
    $(".demo1 .rotate2").textrotator({
        animation: "fade",
        speed: 2000
    });

    $('body').vide({
        mp4: 'video/background-video.mp4',
        ogv: 'video/background-video.ogv',
        poster: 'img/background.jpg'
    }, {
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,
        position: '50% 50%',
        posterType: 'jpg',
        resizing: true, 
        bgColor: 'transparent',
        className: 'bg-video-container'
    });
});