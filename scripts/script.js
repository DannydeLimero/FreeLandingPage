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
        $('.head__burger,.head__row,.head__language').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.RU').click(function(event) {
        $('.ENG').removeClass('active-lang');
    });
    $('.RU').click(function(event) {
        $('.RU').toggleClass('active-lang');
    });
    $('.ENG').click(function(event) {
        $('.RU').removeClass('active-lang');
    });
    $('.ENG').click(function(event) {
        $('.ENG').toggleClass('active-lang');
    });
});