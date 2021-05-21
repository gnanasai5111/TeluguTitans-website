$(document).ready(function() {

  // hide #back-top first
  $(".scrolling-to-top").hide();

  // fade in #back-top
  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.scrolling-to-top').fadeIn();
      } else {
        $('.scrolling-to-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('.scrolling-to-top').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

});
