$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('.body').toggleClass('body_hidden')
   $('#navigation').toggleClass('open');
  });

$('.menu').click(function() {
   $('.body').removeClass('body_hidden')
   $( "#toggle" ).removeClass( "active" )
   $('#navigation').removeClass('open');
  });

// $(window).scroll(function(){
//     if  ($(window).scrollTop() >= 300){
//         $(".burger").hide();

//     }
//     else{
//         $(".burger").show();
//     }
// });

$(window).scroll(function() {

    if ($(this).scrollTop()>650)
     {
        $('.burger').fadeOut();
     }
    else
     {
      $('.burger').fadeIn();
     }
});

$(window).scroll(function() {

    if ($(this).scrollTop()<650)
     {
        $('ul3').fadeOut();
     }
    else
     {
      $('ul3').fadeIn();
     }
 });

$(function(){
    $(this).click(function(){$(this).toggleClass("active")})
})
