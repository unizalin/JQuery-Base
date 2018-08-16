$(document).ready(function() {
  $('.button').click(function(event) {
    $('.text').fadeToggle(1000);
    // fadeIn 預設隱藏的東西給打開
    // fadeOut 預設開啟的東西給關閉
  });

   $(window).on('load', function(){  
    $('#slider').nivoSlider(); 
  });
 // lightbox 效果
  //lightbox.option({
    //    'resizeDuration': 2000,
      //  'wrapAround': true
      
 $('.up a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 1000);
 });
   $('.dropmenu-open').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    $(this).parent().find('ul').slideToggle();
   
  });
   
  });

   
