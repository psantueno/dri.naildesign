$(".navbar-toggler ").on('click', function() {
  $navMenuCont = $($(this).data('target'));
  $navMenuCont.animate({
      'width': 'toggle'
  }, 350);
  $(".menu-overlay").fadeIn(500);
});
$(".menu-overlay").click(function(event) {
  $(".navbar-toggler").trigger("click");
  $(".menu-overlay").fadeOut(500);
});
$("#crossButton").click(function(event) {
  $(".navbar-toggler").trigger("click");
  $(".menu-overlay").fadeOut(500);
});

$('.nav-item .nav-link').click(function(){
$(this).siblings('.dropdown-menu').slideToggle();
$(this).parent().siblings('li').children('.dropdown-menu').hide();
});