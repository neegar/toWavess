(function ($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function () { $('.carousel').carousel('next'); return false; });
    $('.prev').click(function () { $('.carousel').carousel('prev'); return false; });

})(jQuery);
$('#bs4-multi-slide-carousel').carousel({
    interval: 1500
})

// $("#main-card").animate({left: '250px'}, 6000);
$(document).ready(function(){
    $("#main-card").mouseover(function(){
      $(".card-add").css("display", "block");
      $("#joined-text").html("Joined")
    });
  });
  $(document).ready(function(){
    $("#main-card").mouseleave(function(){
      $(".card-add").css("display", "none");
      $("#joined-text").html("member")
    });
  });
// $(document).ready(function(){
//     $("#main-card").mouseover(function(){
//       $(".card-add").toggle();
//     });
//   });
var count = 0;
$(".join").click(function(){
  count++;
  $(".joined-count").text(count);
});

  