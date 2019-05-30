$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(500).fadeOut("slow");
});


$(document).ready(function() {
  window.onresize = function (event){
    $('.menu_little').hide ();
  }
  $(".menu-button").click(function() {
    $(".sandwich").toggleClass("active");
  });

  $(".menu_little ul a").click(function() {
    $(".menu_little").fadeOut(600);
    // $(".body").removeClass("overflow: hidden;");
    // $(".body").addClass("overflow: hidden;");
  })

  $(".menu-button").click(function() {
      if ($(".menu_little").is(":visible")) {
    $(".menu_little").fadeOut(600);
	$("body").removeClass("body");
   } else {
     $(".menu_little").fadeIn(300);
	 $("body").addClass("body");
   };
  });

  jQuery(document).ready(function(){
  jQuery('.spoiler-head').click(function(){
    $(this).parents('.spoiler-wrap').toggleClass("active").find('.spoiler-body').slideToggle();
  })
})
});

$(document).ready(function() {

	var header = $(".header"); // Меню
	var scrollPrev = 0

	$(window).scroll(function() {
		var scrolled = $(window).scrollTop();
		var firstScrollUp = false;
		var firstScrollDown = false;

		if ( scrolled > 0 ) {
			if ( scrolled > scrollPrev ) {
				firstScrollUp = false;
				if ( scrolled < header.height() + header.offset().top ) {
					if ( firstScrollDown === false ) {
						var topPosition = header.offset().top;
						header.css({
						});
						firstScrollDown = true;
					}
					header.css({
						"position": "absolute"
					});
				}
			} else {
				firstScrollDown = false;
				if ( scrolled > header.offset().top ) {
					// Если только начали скроллить вверх
					if ( firstScrollUp === false ) {
						var topPosition = header.offset().top;
						header.css({
						});
						firstScrollUp = true;
					}
					header.css({
						"position": "fixed"
					});
				}
			}
			scrollPrev = scrolled;
		}
	});
});
