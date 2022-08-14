$(document).ready(function() {
    $('.slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        touchThreshold:10,
        touchmove:true,
        waitForAnimate:false,
        infinite:true,
    });
    $('.head__burger').click(function(event) {
        $('.head__burger,.head__row, body').toggleClass('active');
    });
});