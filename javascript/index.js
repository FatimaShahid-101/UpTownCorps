
/* For the sticky navigation */
$('document').ready(function(){

    $('.js-about').waypoint(function(direction){
        if(direction=='down'){
    $('nav').addClass('sticky');
        } else {
    $('nav').removeClass('sticky');
        }
    }, {
        offset: '20%'
    });

    /* For the button scrolling */
    $('.js--scroll-to-quote').click(function(){
        $('html, body').animate({scrollTop: $('.js-quote').offset('50%').top}, 2000);
    });

    /* For the about scrolling */
    $('.js-scroll-to-about').click(function(){
        $('html, body').animate({scrollTop: $('.js-about').offset().top}, 1000);
    });

     /* For the services scrolling */
     $('.js-scroll-to-services').click(function(){
        $('html, body').animate({scrollTop: $('.js-services').offset().top}, 1000);
    });

     /* For the quote scrolling */
     $('.js--scroll-to-quote').click(function(){
        $('html, body').animate({scrollTop: $('.js-quote').offset().top}, 1000);
    });

     /* For the contact scrolling */
     $('.js-scroll-to-contact').click(function(){
        $('html, body').animate({scrollTop: $('.js-contact').offset().top}, 1000);
    });

    /*For the animation scroll */
    $('.js-wp-1').waypoint(function (direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset:"40%"
    });

    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated fadeInUpBig');
    }, {
        offset:"40%"
    });

    $('.js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animated fadeIn');
    }, {
        offset:"40%"
    });

    $('.js-wp-4').waypoint(function (direction) {
        $('.js-wp-4').addClass('animated pulse');
    }, {
        offset:"40%"
    });
});
/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})*/