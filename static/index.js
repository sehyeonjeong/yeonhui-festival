$('.gnb-button img').click(function() {
    $('.m-menu-wrap').toggle();
});

$('.pass-box .cta-button a').click(function(event){
    event.preventDefault();
    $('.pass-modal').show();
    $('.gnb-button').css('z-index','1');
    $('.menu-wrap').css('z-index','1');
});

$('.pass-modal .pass-button').click(function(){
    $('.pass-modal').hide();
    $('.gnb-button').css('z-index','3');
    $('.menu-wrap').css('z-index','2');
});

$('.special-box .cta-button a').click(function(event){
    event.preventDefault();
    $('.special-modal').show();
    $('.gnb-button').css('z-index','1');
    $('.menu-wrap').css('z-index','1');
});

$('.special-modal .special-button').click(function(){
    $('.special-modal').hide();
    $('.gnb-button').css('z-index','3');
    $('.menu-wrap').css('z-index','2');
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('section').animate({
        scrollTop: $($.attr(this, 'href')).position().top
    }, 500);
});