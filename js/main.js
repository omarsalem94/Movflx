

$(document).ready(function(){
    $('#preloader').fadeOut(1200 , function() {
         $('body').css( 'overflow' , 'auto' )
    });
});


$(Window).scroll(function()  {
    let scroll_top = $(window).scrollTop()

    if (scroll_top > 50 )
    {
        $('#myBtn_up').fadeIn(500)    
    }
    else
    {
        $('#myBtn_up').fadeOut(500)
    };

});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


new WOW().init();